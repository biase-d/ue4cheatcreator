<script>
  import Icon from "@iconify/svelte";

  export let globalConfig;
  export let communityPresets = [];
  export let onLoadPreset; 
  export let onClose;
</script>

<div class="menu p-4 w-80 min-h-full bg-base-200/90 backdrop-blur text-base-content flex flex-col gap-6 border-l border-white/10">
  
  <!-- Header -->
  <div class="flex justify-between items-center">
    <h2 class="text-xl font-bold flex items-center gap-2">
      <Icon icon="mdi:cog" /> Settings
    </h2>
    <button class="btn btn-sm btn-circle btn-ghost" on:click={onClose}>✕</button>
  </div>

  <!-- Global Config -->
  <div class="flex flex-col gap-4">
    <h3 class="font-semibold opacity-70 uppercase text-xs tracking-wider">Global Configuration</h3>
    
    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-4">
        <input type="checkbox" class="toggle toggle-primary" bind:checked={globalConfig.categories} />
        <span class="label-text">Use Categories</span> 
      </label>
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Default Indicator</span>
      </label>
      <input 
        type="text" 
        bind:value={globalConfig.defaultIndicator} 
        class="input input-bordered input-sm" 
        placeholder="e.g. Default"
      />
    </div>
  </div>

  <div class="divider"></div>

  <!-- Community Presets -->
  <div class="flex flex-col gap-4 flex-grow overflow-y-auto">
    <h3 class="font-semibold opacity-70 uppercase text-xs tracking-wider">Community Presets</h3>
    
    {#if communityPresets.length === 0}
      <div class="text-sm opacity-50 italic text-center py-4">
        No community presets found. <br> Be the first to share!
      </div>
    {:else}
      <ul class="flex flex-col gap-3">
        {#each communityPresets as preset}
          <li>
            <button class="btn btn-outline btn-sm h-auto py-2 w-full flex flex-col items-start gap-1" on:click={() => onLoadPreset(preset)}>
              <div class="flex justify-between w-full items-center">
                <span class="font-bold">{preset.name}</span>
                <!-- <span class="badge badge-ghost badge-xs">{preset.downloads || 0} ⬇</span> -->
              </div>
              <span class="text-[10px] opacity-60 font-normal">
                by {preset.author || 'Anonymous'}
              </span>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="text-xs text-center opacity-40 mt-auto pt-4">
    Hi, How are you doing?
  </div>
</div>