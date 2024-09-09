<script>
  import Download from './Download.svelte';
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
      alert('Select a file to start')
    }

    const response  = await fetch('/api/createCheat', {
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
      cheats += data.content
      size = data.size
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
    <div class="w-[96px] h-[96px] my-10 animate-pulse ml-auto mr-auto">
      <Icon icon="pixelarticons:article" width=96/>
    </div>
    <input type='file' class="file-input file-input-bordered file-input-primary w-full max-w-xs" bind:this={file} accept='.txt' required/>
    {#if !loading}
      <button class="btn btn-primary font-bold" type='submit'> Create Cheats </button>
    {:else}
      <button class="btn btn-primary cursor-not-allowed" disabled><span class='animate-spin'><Icon icon="pixelarticons:loader"/> </span></button>
    {/if}

  </form>
{:else}
  <div class="flex flex-col items-center justify-center gap-2.5">
    <span class="h-[96px] w-[96px] bg-primary/10 rounded-full text-green-700 my-10"><Icon icon="pixelarticons:check" width=96/></span>
    <Download { cheats } { name } {size}/>
    <button on:click={recreate} class="text-sm font-bold text-primary"> Create for another game </button>
  </div>
{/if}