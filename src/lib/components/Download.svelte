<script>
  export let cheats; 
  export let name;
  export let size

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

<button class="btn btn-primary" on:click={() => downloadTextFile(cheats)}> {name} ({size/1000}KB)</button>