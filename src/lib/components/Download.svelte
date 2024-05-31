<script>
  export let cheat; 
  export let name;

  const downloadTextFile = (cheat) => {
    const link = document.createElement("a");
    const text = new Blob([cheat], {type: 'text/plain'});
    link.href=URL.createObjectURL(text)
    link.download = name;
    link.click()
    URL.
    revokeObjectURL(link.href)
  }

</script>

<button on:click={() => downloadTextFile(cheat)}> Download</button>