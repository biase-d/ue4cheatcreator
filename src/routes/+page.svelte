<script>
  import { page } from '$app/stores'
  import Download from './Download.svelte';
  import Icon from '@iconify/svelte';

  let isBeta = $page.url.searchParams.get('beta')

  /**
   * @type {HTMLInputElement}
   */
  let file;
  let loading = false

  const cheat = {
    name: '',
    content: '',
    size: '',
  }
  
  const FPSLockerPatch = {
    name: '',
    content: '',
    size: '',
  }
  
  const handleCFGfile = async () => {
    loading = true
    const formData = new FormData()

    if (file.files){
      formData.append('cfg', file.files[0])
    } else {
      alert('Select a file to start')
    }

    if (isBeta) {
      try {
        const response = await fetch('/api/createFPSLockerPatch', {
          method: 'POST',
          body: formData
        })

        let data = await response.json()

        FPSLockerPatch.content = ''
        FPSLockerPatch.name = ''
        FPSLockerPatch.size = ''

        FPSLockerPatch.name = data.name
        FPSLockerPatch.content += data.content
        FPSLockerPatch.size = data.size

        console.log('Patch Generated Successfully')

      } catch (err) {
        console.log(err)
      }
    }


    const response  = await fetch('/api/createCheat', {
      method: 'POST',
      body: formData
    })

    if (response.ok){
      let data = await response.json()
      // Prevent duplicate entries on multiple uploads
      cheat.content = "";
      cheat.size = "";
      cheat.name = "";

      cheat.name = data.name
      cheat.content += data.content
      cheat.size = data.size
    } else if (response.status === 500){
      alert('File is too big. Make sure you are selecting the correct .txt file')
    } else {
      alert('Something went wrong. Make sure you are selecting the correct .txt file')
    }
  }

  function recreate() {
    loading = false
    cheat.content = ''
    cheat.name = ''
    cheat.size = ''
    FPSLockerPatch.content = ''
    FPSLockerPatch.name = ''
    FPSLockerPatch.size = ''
  }
  
</script>

{#if cheat.content === ""}
  <form on:submit|preventDefault= {handleCFGfile} class="grid px-8 gap-2.5 items-center justify-center">
    <div class="w-[96px] h-[96px] my-10 animate-pulse ml-auto mr-auto">
      <Icon icon="pixelarticons:article" width=96 class='text-primary'/>
    </div>
    <span class="label-text-alt">Max Size: 5KB</span>
    <input type='file' class="file-input file-input-bordered file-input-primary w-full max-w-xs" bind:this={file} accept='.txt' required/>
    
    {#if !loading}
      <button class="btn btn-primary font-bold" type='submit'> Create Cheats </button>
    {:else}
      <button class="btn btn-primary cursor-not-allowed" disabled><span class='animate-spin'><Icon icon="pixelarticons:loader"/> </span></button>
    {/if}
    {#if !isBeta}
      <p class='label-text-alt'> Test out FPSLocker patches <a href='/?beta=true' class='link text-primary'>here</a></p>
    {:else}
      <p class='label-text-alt'> Go back to stable <a href='/' class='link text-primary'>here</a></p>
    {/if}
  </form>
{:else}
  <div class="flex flex-col items-center justify-center gap-2.5">
    <span class="h-[96px] w-[96px] rounded-full text-green-500 my-10"><Icon icon="pixelarticons:check" width=96/></span>
    <Download cheat={cheat} FPSLockerPatch={FPSLockerPatch} isBeta={isBeta}/>
    <button on:click={recreate} class="text-sm font-bold text-primary"> Create for another game </button>
  </div>
{/if}