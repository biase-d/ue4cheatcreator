<head>
  <title> UE4cheatcreator for NX </title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
</head>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css"
</script>
<header class="flex justify-center sticky top-0 border-b border-primary/15">
  <nav class="flex gap-2.5 p-5">
    <h1><a href="/"><Icon icon="icon-park-twotone:game" width=32/></a></h1>
  </nav>
</header>
<div class="grid items-center justify-center gap-2.5">
  <main class='p-5 py-10 rounded-md w-96 transition-all '>
    <slot />
  </main>
</div>
<footer class="flex flex-col items-center justify-center py-10 w-full gap-5 border-t border-primary/15">
    <div  class='flex flex-wrap gap-2 text-primary max-w-md'>
      <div>
        <h2 class='label-text'>Discord Server</h2>
        <a href='https://discord.gg/XhwEWVyKer' class='btn btn-ghost cursor-pointer' alt='NSwitch 60 FPS Cheats & Mods'><span class='w-[24px] h-[24px]'><Icon icon="line-md:discord-twotone" width='auto'/></span> NSwitch 60 FPS Cheats & Mods</a>
      </div>
    </div>
    <div  class='flex flex-wrap gap-2 text-primary'>
      <div>
        <h2 class='label-text'>Source</h2>
        <a href="https://github.com/biase-d/ue4cheatcreator" class="btn btn-ghost cursor-pointer justify-start"><Icon icon="line-md:github-twotone" width='auto'/>Source Code</a>
      </div>
    </div>
</footer>

