<head>
  <title> UE4cheatcreator for NX </title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
</head>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css"
</script>
<header class="flex justify-center">
  <nav class="flex gap-2.5 p-5">
    <h1><a href="/"><Icon icon="icon-park-twotone:game" width=32/></a></h1>
  </nav>
</header>
<div class="grid items-center justify-center gap-2.5">
  <main class='p-5 py-10 rounded-md w-96 transition-all border border-primary/15'>
    <slot />
  </main>
</div>
<footer class="flex flex-col mt-10 justify-center items-center w-full gap-5">
  <div class='flex flex-col items-center gap-5'>
    <h2 class='uppercase font-bold'>Links</h2>
    <div  class='flex flex-col gap-2'>
      <a href='https://discord.gg/XhwEWVyKer' class='btn' alt='NSwitch 60 FPS Cheats & Mods'><span class='w-[24px] h-[24px]'><Icon icon="line-md:discord-twotone" width='auto'/></span> NSwitch 60 FPS Cheats & Mods</a>
      <a href="https://github.com/biase-d/ue4cheatcreator" class="btn"><Icon icon="line-md:github-twotone" width='auto'/>Source Code</a>
    </div>
  </div>
</footer>

