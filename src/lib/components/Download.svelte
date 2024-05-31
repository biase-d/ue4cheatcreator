<script>
  import Icon from '@iconify/svelte';

  export let cheats; 
  export let name;
  export let size;

  const downloadTextFile = (/** @type {BlobPart} */ cheat) => {
    const link = document.createElement("a");
    const text = new Blob([cheat], {type: 'text/plain'});
    link.href=URL.createObjectURL(text)
    link.download = name;
    link.click()
    URL.
    revokeObjectURL(link.href)
  }

</script>

<button class="btn btn-primary items-center" on:click={() => downloadTextFile(cheats)}><span class="w-[32px] h-[32px] flex items-center"><Icon icon='pixelarticons:cloud-download' width=auto/></span> {name} ({size/1000}KB)</button>