<script>
  import Download from '$lib/components/Download.svelte';
  import Icon from '@iconify/svelte';

  /**
   * @type {HTMLInputElement}
   */
  let file;
  let cheats = "";
  let size = '';
  let name = ''
  let loading = false

  const handleCFGfile = async () => {
    loading = true
    const formData = new FormData()

    if (file.files){
      formData.append('cfg', file.files[0])
    } else {
      alert('There is no file to process')
    }

    const response  = await fetch('/api/process', {
      method: 'POST',
      body: formData
    })

    if (response.ok){
      let data = await response.json()
      // Prevent duplicate entries on multiple uploads
      cheats = "";
      size = "";
      name = "";

      name = data.name
      cheats += data.cheats
    } else if (response.status === 500){
      alert('File is too big. Make sure you are selecting the correct .txt file')
    } else {
      alert('Something went wrong. Make sure you are selecting the correct .txt file')
    }
  }

  function recreate() {
    loading = false
    cheats = ""
  }
</script>

{#if cheats === ""}
  <form on:submit|preventDefault= {handleCFGfile} class="grid px-8 gap-2.5 items-center justify-center">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="text-xs">Max Size: 20KB</label>
    <input type='file' class="file-input file-input-bordered file-input-primary w-full max-w-xs" bind:this={file} accept='.txt' required/>
    {#if !loading}
      <button class="btn btn-primary max-w-sm" type='submit'> Get Cheats </button>
    {:else}
      <button class="btn btn-primary max-w-sm cursor-not-allowed" disabled><span class='animate-spin'><Icon icon="pixelarticons:loader"/> </span></button>
    {/if}
  </form>
{:else}
  <div class="grid items-center justify-center gap-2.5">
    <Download { cheats } { name } />
    <button on:click={recreate} class="text-sm font-bold text-primary"> Create for another game </button>
  </div>
{/if}

<p class="text-center bold text-sm mt-2">Work in progress</p>