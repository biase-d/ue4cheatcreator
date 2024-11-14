<script>
  export let cheat;
  export let FPSLockerPatch;
  export let isBeta;

  const downloadCheat = (/** @type {BlobPart} */ cheat) => {
    const link = document.createElement("a");
    const text = new Blob([cheat.content], { type: 'text/pain' });
    link.href=URL.createObjectURL(text)
    link.download = cheat.name;
    link.click()
    URL.
    revokeObjectURL(link.href)
  }

</script>
<ul class="grid gap-2.5 w-full">
  <li><span class="label-text">BID</span> <br>{ cheat.name.split('.')[0] }</li>
</ul>

<div>
  <button class="btn btn-primary w-full mt-5 font-bold" on:click={() => downloadCheat(cheat, 'text/plain')}>Download Cheats ({cheat.size} KB)</button>
  {#if isBeta}
    <button class="btn btn-primary w-full mt-5 font-bold" on:click={() => downloadCheat(FPSLockerPatch)}>Download FPSLocker Patch ({FPSLockerPatch.size} KB)</button>
  {/if}
</div>
