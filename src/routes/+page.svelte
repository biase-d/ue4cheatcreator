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
    }
  }

</script>
<h1> ue4cheatscreator </h1>

{#if cheats === ""}
<form on:submit|preventDefault= {handleCFGfile}>
  <input type='file' bind:this={file} accept='.txt'/>
  <button type='submit'> Submit </button>
</form>
{:else}
  <Download cheat={cheats} name={name} />
{/if}
