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
<ul class="grid gap-2.5 w-full">
  <li><span class="label-text">Filename</span> <br>{ name }</li>
  <li><span class="label-text">Size</span><br>{size} KB</li>
</ul>

<button class="btn btn-primary w-full mt-5 font-bold" on:click={() => downloadCheat(cheats)}>Download</button>