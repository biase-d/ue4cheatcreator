<script>
  import defaultConfig from '$lib/config.yml';
  import { parseLogFile, generateCheats } from '$lib/functions';
  import PresetEditor from '$lib/PresetEditor.svelte';
  import SettingsSidebar from '$lib/SettingsSidebar.svelte';
  import Icon from "@iconify/svelte";

  let step = 0; 
  let logFile = null;
  let parsedLog = null;
  let gameName = "Unknown Game";
  let titleId = null;
  
  let presetOptions = []; 
  let globalConfig = { categories: false, defaultIndicator: "Default" };
  let communityPresets = [];
  
  let showEditor = false;
  let editingIndex = -1; 
  let editorInitialData = null;
  let isDrawerOpen = false;

  let saveModalOpen = false;
  let saveForm = { name: "", author: "" };
  let isSaving = false;

  async function handleLogUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    parsedLog = parseLogFile(text);
    gameName = file.name.replace('.log', '');
    fetchCommunityPresets();
    step = 1;
  }

  async function fetchCommunityPresets() {
    try {
      const res = await fetch(`/api/presets?gameName=${encodeURIComponent(gameName)}`);
      if (res.ok) communityPresets = await res.json();
    } catch (err) { console.error(err); }
  }

  function handlePresetUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        loadPresetJson(json);
      } catch (err) { alert("Invalid JSON preset"); }
    };
    reader.readAsText(file);
  }

  function loadPresetJson(json) {
    const key = Object.keys(json)[0];
    let optionsArray = Array.isArray(json[key]) ? json[key] : (Array.isArray(json) ? json : []);
    
    if (optionsArray.length > 0) {
      presetOptions = optionsArray.map(opt => {
        const settings = {};
        opt.options.forEach(o => {
          const [k, v] = Object.entries(o)[0];
          settings[k] = v.split(' ')[0];
        });
        return { name: opt.name, settings };
      });
      isDrawerOpen = false;
    }
  }

  function openEditorNew() {
    editingIndex = -1;
    editorInitialData = { name: "New Option", settings: {} };
    showEditor = true;
  }

  function openEditorEdit(index) {
    editingIndex = index;
    editorInitialData = JSON.parse(JSON.stringify(presetOptions[index])); 
    showEditor = true;
  }

  function openEditorClone(index) {
    editingIndex = -1; 
    const clone = JSON.parse(JSON.stringify(presetOptions[index]));
    clone.name += " (Copy)";
    editorInitialData = clone;
    showEditor = true;
  }

  function deleteOption(index) {
    if(confirm("Delete this option?")) {
      presetOptions = presetOptions.filter((_, i) => i !== index);
    }
  }

  function saveEditorResult(data) {
    if (editingIndex === -1) presetOptions = [...presetOptions, data];
    else presetOptions[editingIndex] = data;
    showEditor = false;
  }

  async function trackUsage() {
    try {
      await fetch('/api/track', {
        method: 'POST',
        body: JSON.stringify({ titleId: titleId || "UNKNOWN", gameName }),
        headers: { 'content-type': 'application/json' }
      });
    } catch (e) {}
  }

  function openSaveModal() {
    saveForm = { name: "", author: localStorage.getItem("ue4cc_author") || "" };
    saveModalOpen = true;
  }

  async function confirmSaveToCloud() {
    if (!saveForm.name || !saveForm.author) return;
    isSaving = true;

    // Save author for next time
    localStorage.setItem("ue4cc_author", saveForm.author);

    const presetData = {};
    presetData[gameName] = presetOptions.map(opt => ({
      name: opt.name,
      options: Object.entries(opt.settings).map(([k, v]) => ({ [k]: `${v} ${v}` }))
    }));

    try {
      const res = await fetch('/api/presets', {
        method: 'POST',
        body: JSON.stringify({
          titleId: titleId || "UNKNOWN",
          gameName,
          presetName: saveForm.name,
          author: saveForm.author,
          configJson: presetData
        }),
        headers: { 'content-type': 'application/json' }
      });

      if (res.ok) {
        alert("Saved to community database!");
        fetchCommunityPresets();
        saveModalOpen = false;
      } else {
        alert("Failed to save preset.");
      }
    } catch (e) {
      alert("Error saving to cloud.");
    } finally {
      isSaving = false;
    }
  }

  function downloadCustomCheats() {
    trackUsage();
    const tempConfig = {
      config: [globalConfig],
      cheats: presetOptions.map(opt => ({
        name: opt.name,
        options: Object.entries(opt.settings).map(([k, v]) => ({ [k]: `${v} ${v}` }))
      }))
    };
    const { cheats } = generateCheats(parsedLog, tempConfig, globalConfig);
    triggerDownload(cheats, `${gameName}.txt`);
  }

  function downloadDefaultCheats() {
    trackUsage();
    const { cheats } = generateCheats(parsedLog, defaultConfig, globalConfig);
    triggerDownload(cheats, `${gameName}.txt`);
  }

  function downloadPreset() {
    const exportObj = {};
    exportObj[gameName] = presetOptions.map(opt => ({
      name: opt.name,
      options: Object.entries(opt.settings).map(([k, v]) => ({ [k]: `${v} ${v}` }))
    }));
    const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${gameName}_preset.json`;
    link.click();
  }

  function triggerDownload(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
</script>

<div class="drawer drawer-end h-full">
  <input id="settings-drawer" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
  
  <div class="drawer-content flex flex-col h-full">
    
    {#if showEditor}
      <PresetEditor 
        parsedLog={parsedLog} 
        initialData={editorInitialData} 
        onSave={saveEditorResult} 
        onCancel={() => showEditor = false} 
      />
    {/if}

    {#if saveModalOpen}
      <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="card bg-base-100 w-full max-w-sm shadow-2xl border border-base-content/10">
          <div class="card-body">
            <h3 class="font-bold text-lg">Share Preset</h3>
            <p class="text-sm opacity-70">Publish your config to the community list.</p>
            
            <div class="form-control w-full mt-2">
              <label class="label"><span class="label-text">Preset Name</span></label>
              <input type="text" bind:value={saveForm.name} placeholder="e.g. 60FPS High Quality" class="input input-bordered w-full" />
            </div>
            
            <div class="form-control w-full">
              <label class="label"><span class="label-text">Creator Name</span></label>
              <input type="text" bind:value={saveForm.author} placeholder="Your Name / Alias" class="input input-bordered w-full" />
            </div>

            <div class="card-actions justify-end mt-4">
              <button class="btn btn-ghost" on:click={() => saveModalOpen = false}>Cancel</button>
              <button class="btn btn-primary" on:click={confirmSaveToCloud} disabled={isSaving || !saveForm.name || !saveForm.author}>
                {#if isSaving}<span class="loading loading-spinner loading-xs"></span>{/if}
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl flex-grow flex flex-col">
      
      {#if step === 0}
        <div class="flex-grow flex items-center justify-center">
          <div class="hero">
            <div class="hero-content text-center">
              <div class="max-w-xl">
                <div class="mb-8 inline-block p-6 bg-base-100/10 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                  <Icon icon="mdi:upload" class="text-8xl text-primary drop-shadow-lg" />
                </div>
                <h1 class="text-5xl font-black mb-6 text-white drop-shadow-md">
                  ue4cheatcreator
                </h1>
                <p class="py-6 text-lg text-gray-300">
                  Drag and drop your <code>.log</code> file from <strong>UE4cfgdumper</strong> here
                </p>
                
                <div class="form-control w-full max-w-md mx-auto">
                  <input 
                    type="file" 
                    class="file-input file-input-lg file-input-primary w-full shadow-xl bg-base-100/80" 
                    accept=".log"
                    on:change={handleLogUpload} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}

      {#if step === 1}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          
          <div class="lg:col-span-12">
            <div class="navbar bg-base-100/80 backdrop-blur rounded-box border border-base-content/10 px-4">
              <div class="flex-1 gap-4">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon icon="mdi:gamepad-variant" width="24" />
                </div>
                <div>
                  <h2 class="text-xl font-bold leading-tight">{gameName}</h2>
                  <p class="text-xs opacity-60">{Object.keys(parsedLog).length} Variables Found</p>
                </div>
              </div>
              <div class="flex-none gap-2">
                <label for="settings-drawer" class="btn btn-ghost btn-circle" title="Community Presets">
                  <div class="indicator">
                    <Icon icon="mdi:earth" width="24" />
                    {#if communityPresets.length > 0}
                      <span class="badge badge-xs badge-primary indicator-item"></span>
                    {/if}
                  </div>
                </label>
                <button class="btn btn-ghost btn-circle text-error" on:click={() => step = 0} title="Close Game">
                  <Icon icon="mdi:close" width="24" />
                </button>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            
            <div class="card bg-base-100/80 backdrop-blur border border-base-content/10">
              <div class="card-body p-6">
                <div class="flex items-center gap-2 mb-2">
                  <Icon icon="mdi:rocket-launch" class="text-secondary text-xl" />
                  <h3 class="card-title text-sm uppercase tracking-wider opacity-70">Quick Start</h3>
                </div>
                <p class="text-sm opacity-60 mb-4">
                  Generate cheats immediately using the standard configuration (FPS, Resolution, AA, etc).
                </p>
                <button class="btn btn-secondary w-full shadow-md" on:click={downloadDefaultCheats}>
                  <Icon icon="mdi:flash" /> Generate Default .txt
                </button>
              </div>
            </div>

            <div class="card bg-base-100/80 backdrop-blur border border-base-content/10">
              <div class="card-body p-6">
                <div class="flex items-center gap-2 mb-2">
                  <Icon icon="mdi:tune" class="text-primary text-xl" />
                  <h3 class="card-title text-sm uppercase tracking-wider opacity-70">Custom Config</h3>
                </div>
                
                <div class="flex flex-col gap-3">
                  <button class="btn btn-primary w-full shadow-md" on:click={downloadCustomCheats} disabled={presetOptions.length === 0}>
                    <Icon icon="mdi:download" class="text-lg" /> Generate Custom .txt
                  </button>
                  
                  <div class="grid grid-cols-2 gap-3">
                    <button class="btn btn-outline btn-sm" on:click={downloadPreset} disabled={presetOptions.length === 0}>
                      <Icon icon="mdi:code-json" /> Save JSON
                    </button>
                    <button class="btn btn-outline btn-sm" on:click={openSaveModal} disabled={presetOptions.length === 0}>
                      <Icon icon="mdi:cloud-upload" /> Share
                    </button>
                  </div>

                  <div class="divider my-1 text-xs opacity-50">OR</div>

                  <label class="btn btn-ghost btn-sm w-full gap-2 border border-dashed border-base-content/20">
                    <Icon icon="mdi:upload" /> Load Local JSON
                    <input type="file" class="hidden" accept=".json" on:change={handlePresetUpload} />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8 order-1 lg:order-2">
            <div class="flex justify-between items-center mb-4 px-1">
              <h3 class="font-bold text-lg">Custom Options ({presetOptions.length})</h3>
              <button class="btn btn-sm btn-primary gap-2" on:click={openEditorNew}>
                <Icon icon="mdi:plus" /> Create New
              </button>
            </div>

            {#if presetOptions.length === 0}
              <div class="card bg-base-100/50 border-2 border-dashed border-base-content/10 p-12 flex flex-col items-center justify-center text-center">
                <Icon icon="mdi:playlist-edit" class="text-6xl mb-4 opacity-20" />
                <h4 class="font-bold text-lg opacity-70">Custom Editor Empty</h4>
                <p class="text-sm max-w-xs mt-2 opacity-50">
                  Use the <strong>Quick Start</strong> card to generate defaults, or click <strong>Create New</strong> to build your own cheats.
                </p>
              </div>
            {:else}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each presetOptions as opt, i}
                  <div class="card bg-base-100/80 backdrop-blur hover:bg-base-100 transition-all border border-base-content/10">
                    <div class="card-body p-5">
                      <div class="flex justify-between items-start">
                        <div>
                          <h4 class="card-title text-base">{opt.name}</h4>
                          <p class="text-xs opacity-60 mt-1">{Object.keys(opt.settings).length} variables modified</p>
                        </div>
                        <div class="dropdown dropdown-end">
                          <div tabindex="0" role="button" class="btn btn-ghost btn-xs btn-circle">
                            <Icon icon="mdi:dots-vertical" />
                          </div>
                          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-content/10">
                            <li><button on:click={() => openEditorEdit(i)}><Icon icon="mdi:pencil" /> Edit</button></li>
                            <li><button on:click={() => openEditorClone(i)}><Icon icon="mdi:content-copy" /> Duplicate</button></li>
                            <li><button class="text-error" on:click={() => deleteOption(i)}><Icon icon="mdi:delete" /> Delete</button></li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="mt-4 space-y-1">
                        {#each Object.entries(opt.settings).slice(0, 3) as [key, val]}
                          <div class="flex justify-between text-xs font-mono bg-base-content/5 p-1 rounded px-2">
                            <span class="opacity-70 truncate max-w-[140px]">{key}</span>
                            <span class="text-primary">{val}</span>
                          </div>
                        {/each}
                        {#if Object.keys(opt.settings).length > 3}
                          <div class="text-[10px] text-center opacity-50 pt-1">
                            + {Object.keys(opt.settings).length - 3} more
                          </div>
                        {/if}
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>

        </div>
      {/if}
    </div>
  </div> 

  <div class="drawer-side z-50">
    <label for="settings-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <SettingsSidebar 
      bind:globalConfig={globalConfig} 
      communityPresets={communityPresets}
      onLoadPreset={(p) => loadPresetJson(p.config_json)}
      onClose={() => isDrawerOpen = false}
    />
  </div>

</div>