<script>
  import config from '$lib/config.yml'
  import { parseLogFile, generateCheats } from '$lib/functions'
  import yaml from 'js-yaml'
  
  let loaded = false
  let show = false
  let file = {}
  let customConfig
  let content
  let name
  let override = config.config[0]
  let temp;

  async function handleProcessing() {
    if (file && file.files && file.files.length > 0) {
      const uploadedFile = file.files[0];
      const fileName = uploadedFile.name;
      const fileContent = await uploadedFile.text();

      file = {
        name: fileName,
        content: fileContent,
      };
    } else {
      console.error("No file uploaded or 'file.files' is undefined.");
      return; // Exit early if files don't exist
    }

    if (customConfig && customConfig.files && customConfig.files.length > 0) {
      try {
        console.log(customConfig);
        const configFile = customConfig.files[0];
        const configText = await configFile.text();
        temp = yaml.load(configText);
      } catch (err) {
        console.error("Error parsing customConfig:", err);
      }
    } else {
      console.warn("No customConfig file uploaded.");
    }

    loaded = true;
    name = file.name.split('.')[0];
    content = file.content;
  }

  async function generateAndDownload(){
    const parsed = parseLogFile(content)
    const {cheats, warning} = (generateCheats(parsed, (temp ? temp : config), override))

    const link =document.createElement("a")
    const txt = new Blob([cheats], { type: 'text/plain' })

    link.href=URL.createObjectURL(txt)
    link.download = name + '.txt'
    link.click()
    URL.revokeObjectURL(link.href)
  }

</script>

<form class="grid px-8 gap-2.5 items-center justify-center w-full">
  {#if loaded == false}
  <label class='flex flex-col gap-2.5'>
    Upload .log file to start
    <input type='file' class="file-input file-input-bordered file-input-primary w-full max-w-xs" on:change={handleProcessing} bind:this={file} accept='.log' required/>
  </label>
  <div>
    <button class='link text-primary label-text-alt' on:click={() => { show = true }}>Use custom config</button>
    {#if show}
      <label class=grid>
        <span>Upload the custom config file to be used for generation</span>
        <input type='file' bind:this={customConfig} accept=".yml, yaml">
      </label>
    {/if}
  </div>


  {:else}
  <div>
    <p class='label-text-alt font-bold'>BID</p>
    <p>{name}</p> 
  </div>
  {#if !(show == true) && !temp}
    <label class='grid label-text-alt gap-2.5'>
      <span class='font-bold'>Group by Categories</span>
      <select bind:value={override.categories} class='select select-bordered'>
        <option disabled selected value={config.config[0].categories}>Set by Config ({config.config[0].categories ? 'Enabled' : 'Disabled'})</option>
        <option value={true}>Enable</option>
        <option value={false}>Disable</option>
      </select>
    </label>
    <label class='grid label-text-alt gap-2.5'>
      <span class='font-bold'>Default Option Marker</span>
      <input type="text" bind:value={override.defaultIndicator} class='input input-bordered'>
    </label>
  {:else}
    <p> Generated using custom config</p>
  {/if}
  <button class='btn btn-primary' on:click={generateAndDownload}>Generate & Download</button>
  {/if}
</form>