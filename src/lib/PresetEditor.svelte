<script>
  import Icon from "@iconify/svelte";
  import { fromHex, toHex, commonCvars } from '$lib/utils';

  export let parsedLog = {}; 
  export let initialData = { name: "New Option", settings: {} };
  export let onSave;
  export let onCancel;

  let optionName = initialData.name;
  let searchQuery = "";
  let activeSettings = { ...initialData.settings };
  let showOnlySelected = false;
  let displayModes = {}; 

  $: masterList = Object.entries(parsedLog)
    .filter(([key, data]) => {
      return key !== 'engineVersion' && 
             key !== 'uploadedFile' && 
             data && 
             typeof data.hexValue === 'string';
    })
    .map(([key, data]) => ({
      name: key,
      ...data,
      currentHex: activeSettings[key] || data.hexValue.replace('0x', '')
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  $: filteredList = masterList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isSelected = !!activeSettings[item.name];
    if (showOnlySelected) return isSelected && matchesSearch;
    return matchesSearch;
  });

  function toggleCvar(cvar) {
    if (activeSettings[cvar.name]) {
      delete activeSettings[cvar.name];
      activeSettings = { ...activeSettings };
    } else {
      activeSettings[cvar.name] = cvar.hexValue.replace('0x', '');
    }
  }

  function updateValue(name, val, type) {
    const hex = toHex(val, type);
    activeSettings[name] = hex;
  }

  function addCommon() {
    commonCvars.forEach(c => {
      if (parsedLog[c] && parsedLog[c].hexValue && !activeSettings[c]) {
        activeSettings[c] = parsedLog[c].hexValue.replace('0x', '');
      }
    });
  }

  function handleSave() {
    if (Object.keys(activeSettings).length === 0) {
      alert("Please select at least one setting.");
      return;
    }
    onSave({ name: optionName, settings: activeSettings });
  }
</script>

<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4">
  <div class="card bg-base-100 border border-base-300 w-full h-full md:h-[85vh] md:max-w-5xl shadow-2xl flex flex-col rounded-none md:rounded-box overflow-hidden">
    
    <!-- Header -->
    <div class="p-4 border-b border-base-300 flex justify-between items-center bg-base-200/50">
      <div>
        <h3 class="font-bold text-lg flex items-center gap-2">
          <Icon icon="mdi:pencil-box-outline" class="text-primary" /> 
          {initialData.name === "New Option" ? "Create Option" : "Edit Option"}
        </h3>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-sm btn-ghost hidden sm:flex" on:click={addCommon}>
          <Icon icon="mdi:magic-staff" /> Add Common
        </button>
        <button class="btn btn-sm btn-circle btn-ghost" on:click={onCancel}>✕</button>
      </div>
    </div>

    <!-- Controls -->
    <div class="p-4 bg-base-100 border-b border-base-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
      <div class="md:col-span-4 form-control">
        <label class="label py-1"><span class="label-text text-xs font-bold uppercase opacity-70">Option Name</span></label>
        <input type="text" bind:value={optionName} class="input input-bordered input-sm w-full" placeholder="e.g. 60 FPS" />
      </div>
      <div class="md:col-span-5 form-control">
        <label class="label py-1"><span class="label-text text-xs font-bold uppercase opacity-70">Search Variables</span></label>
        <div class="join w-full">
          <div class="join-item flex items-center justify-center bg-base-200 px-3 border border-base-300 border-r-0">
            <Icon icon="mdi:magnify" />
          </div>
          <input type="text" bind:value={searchQuery} class="input input-bordered input-sm join-item w-full" placeholder="Type to search..." />
        </div>
      </div>
      <div class="md:col-span-3 form-control">
        <label class="label cursor-pointer border border-base-300 rounded-lg px-3 py-1.5 hover:bg-base-200 transition-colors">
          <span class="label-text text-xs font-semibold">Show Selected ({Object.keys(activeSettings).length})</span>
          <input type="checkbox" bind:checked={showOnlySelected} class="checkbox checkbox-sm checkbox-primary" />
        </label>
      </div>
    </div>

    <!-- List -->
    <div class="flex-grow overflow-y-auto bg-base-100">
      <table class="table table-pin-rows table-sm">
        <thead>
          <tr class="bg-base-200/50 text-base-content/70">
            <th class="w-10 text-center"></th>
            <th>Variable Name</th>
            <th class="w-20 hidden sm:table-cell">Type</th>
            <th class="w-48 md:w-64">Value</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredList as item (item.name)}
            {@const isSelected = !!activeSettings[item.name]}
            {@const mode = displayModes[item.name] || 'hex'}
            <!-- Subtle highlight using white/10 instead of theme colors -->
            <tr class="hover group transition-colors border-b border-base-200" class:bg-white-10={isSelected}>
              <td class="text-center">
                <input 
                  type="checkbox" 
                  class="checkbox checkbox-sm checkbox-primary" 
                  checked={isSelected} 
                  on:change={() => toggleCvar(item)} 
                />
              </td>
              <td class="font-mono text-xs md:text-sm break-all py-3">
                <div class="flex flex-col">
                  <span class:font-bold={isSelected} class:text-primary={isSelected}>{item.name}</span>
                </div>
              </td>
              <td class="hidden sm:table-cell">
                <span class="badge badge-ghost badge-xs font-mono opacity-70">{item.type}</span>
              </td>
              <td>
                {#if isSelected}
                  <div class="join w-full shadow-sm">
                    <button 
                      class="btn btn-xs join-item font-mono w-12 btn-neutral" 
                      on:click={() => {
                        const modes = ['hex', 'float', 'int'];
                        const next = modes[(modes.indexOf(mode) + 1) % modes.length];
                        displayModes[item.name] = next;
                      }}
                      title="Toggle Hex/Float/Int"
                    >
                      {mode.substring(0,3).toUpperCase()}
                    </button>
                    <input 
                      type="text" 
                      class="input input-xs input-bordered join-item font-mono flex-grow min-w-0 text-base-content"
                      value={mode === 'hex' ? item.currentHex : fromHex(item.currentHex, mode)}
                      on:input={(e) => updateValue(item.name, e.target.value, mode)}
                    />
                  </div>
                {:else}
                  <span class="opacity-30 text-xs font-mono">{item.hexValue}</span>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
      
      {#if filteredList.length === 0}
        <div class="flex flex-col items-center justify-center h-40 opacity-50">
          <Icon icon="mdi:filter-off" class="text-4xl mb-2" />
          <p>No variables found.</p>
        </div>
      {/if}
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-base-300 flex justify-between items-center bg-base-200/50">
      <div class="text-xs opacity-50 hidden sm:block">
        {Object.keys(activeSettings).length} variables selected
      </div>
      <div class="flex gap-3 w-full sm:w-auto">
        <button class="btn btn-ghost flex-1 sm:flex-none" on:click={onCancel}>Cancel</button>
        <button class="btn btn-primary flex-1 sm:flex-none gap-2" on:click={handleSave}>
          <Icon icon="mdi:check" /> Save Option
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  /* Custom subtle highlight for dark mode */
  .bg-white-10 {
    background-color: rgba(255, 255, 255, 0.08);
  }
</style>