<script>
  import Download from '$lib/components/Download.svelte';

  /**
   * @type {HTMLInputElement}
   */
  let file;
  let cheats = "";
  let size = '';
  let name = ''

  const handleCFGfile = async () => {
    const formData = new FormData()
    formData.append('cfg', file.files[0])

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

      size = data.size
      name = data.name
      cheats += data.cheats
    } else if (response.status === 500){
      alert('File is too big to be a cheat file')
    } else {
      alert('Something went wrong. Make sure you are selecting the correct .txt file')
    }
  }

</script>

<h1 class="p-8 font-bold lowercase text-xl"> <a href="/">ue4cheatscreator</a> </h1>

{#if cheats === ""}
  <form on:submit|preventDefault= {handleCFGfile} class="grid px-8 gap-2.5 items-center justify-center">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="text-xs">Max Size: 20KB</label>
    <input type='file' class="file-input file-input-bordered file-input-primary w-full max-w-xs" bind:this={file} accept='.txt' max-size required/>
    <button class="btn btn-primary max-w-sm" type='submit'> Get Cheats </button>
  </form>

{:else}
<div class="grid items-center justify-center gap-2.5">
  <Download {cheats} {name} {size}/>
</div>

{/if}
