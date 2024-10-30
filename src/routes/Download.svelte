<script>
  export let cheats; 
  export let name;
  export let size

  const downloadCheat = (/** @type {BlobPart} */ cheat) => {
    const link = document.createElement("a");
    const text = new Blob([cheat], { type: 'text/plain' });
    link.href=URL.createObjectURL(text)
    link.download = name;
    link.click()
    URL.
    revokeObjectURL(link.href)
  }
</script>
<ul>
  <li><span>Filename</span> <br>{ name }</li>
  <li><span>Size</span><br>{size} KB</li>
</ul>

<button on:click={() => downloadCheat(cheats)}>Download</button>