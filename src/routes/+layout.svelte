<head>
  <title> UE4cheatcreator for NX </title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
</head>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css"
</script>

<div class="grid items-center justify-center gap-2.5">
  <header class="flex justify-center">
    <nav class="flex gap-2.5 p-8 font-bold lowercase text-xl">
      <div class="w-[32px] h-[32px]">
        <Icon icon="icon-park-twotone:game" width=32/>
      </div>
      <h1><a href="/">ue4cheatscreator</a></h1>
    </nav>
  </header>
  <main class='bg-primary/5 p-5 py-10 rounded-md w-96 transition-all border border-primary/15'>
    <slot />
  </main>
</div>
<footer class="flex flex-col mt-10 justify-center items-center w-full gap-5">
  <div>
    <a href="https://github.com/biase-d/ue4cheatcreator" class="flex font-bold lowercase hover:text-secondary transition-all"> <Icon icon='pixelarticons:github' width=auto/></a>
  </div>
</footer>