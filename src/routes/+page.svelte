<script>
  import config from '$lib/config.yml';
  import { parseLogFile, generateCheats } from '$lib/functions';
  import yaml from 'js-yaml';
  import Icon from "@iconify/svelte";

  let loaded = false;
  let show = false;
  let file = {};
  let customConfig;
  let content;
  let name;
  let override = config.config[0];
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
      return;
    }

    if (customConfig && customConfig.files && customConfig.files.length > 0) {
      try {
        const configFile = customConfig.files[0];
        const configText = await configFile.text();
        temp = yaml.load(configText);
      } catch (err) {
        console.error("Error parsing customConfig:", err);
      }
    }

    loaded = true;
    name = file.name.split('.')[0];
    content = file.content;
  }

  async function generateAndDownload() {
    const parsed = parseLogFile(content);
    const { cheats, warning } = generateCheats(parsed, temp || config, override);

    const link = document.createElement("a");
    const txt = new Blob([cheats], { type: 'text/plain' });

    link.href = URL.createObjectURL(txt);
    link.download = `${name}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
</script>

<div class="container mx-auto p-4 md:p-8 max-w-4xl">
  <div class="flex flex-col gap-4 md:gap-6">
    {#if !loaded}
      <form class="card bg-base-100">
        <div class="card-body items-center text-center">
          <div class="mb-4">
            <Icon 
              icon="pixelarticons:arrow-up-box" 
              class="w-32 h-32 text-primary" 
            />
          </div>
          
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">Upload .log file to start</span>
            </div>
            <input
              type="file"
              class="file-input file-input-primary w-full"
              on:change={handleProcessing}
              bind:this={file}
              accept=".log"
              required
            />
          </label>

          <div class="w-full max-w-xs">
            <button
              class="btn w-full"
              type="button"
              on:click={() => (show = !show)}
            >
              {show ? 'Hide Custom Config' : 'Use Custom Config'}
              <Icon icon={show ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
            </button>

            {#if show}
              <div class="mt-4 collapse collapse-arrow border border-base-300">
                <input type="checkbox" checked />
                <div class="collapse-title font-medium">
                  Custom Configuration
                </div>
                <div class="collapse-content">
                  <label class="form-control">
                    <input
                      type="file"
                      class="file-input file-input-accent file-input-sm"
                      bind:this={customConfig}
                      accept=".yml, .yaml"
                    />
                  </label>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </form>
    {/if}

    {#if loaded}
      <div class="card bg-base-100">
        <div class="card-body">
          <h2 class="card-title">
            <Icon icon="mdi:file-document-outline" />
            {name}
          </h2>

          {#if !show && !temp}
            <div class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Group by Categories</span>
                </label>
                <select
                  bind:value={override.categories}
                  class="select select-bordered"
                >
                  <option disabled selected value={config.config[0].categories}>
                    Set by Config ({config.config[0].categories ? 'Enabled' : 'Disabled'})
                  </option>
                  <option value={true}>Enable</option>
                  <option value={false}>Disable</option>
                </select>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Default Option Marker</span>
                </label>
                <input
                  type="text"
                  bind:value={override.defaultIndicator}
                  class="input input-bordered"
                  placeholder="Enter marker symbol..."
                />
              </div>
            </div>
          {/if}

          {#if show || temp}
            <div class="alert alert-info mt-4">
              <Icon icon="mdi:information-outline" />
              Generated using custom config
            </div>
          {/if}

          <div class="mt-6 flex flex-col gap-2">
            <button
              class="btn btn-primary gap-2"
              type="button"
              on:click={generateAndDownload}
            >
              <Icon icon="mdi:download" />
              Generate & Download
            </button>
            <button
            class='btn btn-secondary gap-2'
            type='button'
            on:click={()=> {
              loaded = false;
            }}
          >
            <Icon icon="mdi:reload" />
            Recreate
          </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>