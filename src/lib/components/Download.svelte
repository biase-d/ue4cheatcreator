<script>
  import Icon from '@iconify/svelte';

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
<!--
<ul class="">
  <li class="flex gap-2.5 text-xl"><Icon icon="line-md:file-document" width=auto/> { name }</li>
  <li class="flex gap-2.5 text-xl"><Icon icon="line-md:hash-small" width=auto/> {size} KB</li>
</ul>
-->
<button class="btn btn-primary items-center" on:click={() => downloadCheat(cheats)}><span class="h-[32] w-[32]"><Icon icon="pixelarticons:download" width="auto"/></span>{name} ({size}KB) </button>