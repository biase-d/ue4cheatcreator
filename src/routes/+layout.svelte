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
<div class="grid items-center justify-center gap-2.5 p-2">
  <main class='p-5 transition-all max-w-md w-full'>
    <slot />
  </main>
</div>
<footer class="flex flex-col justify-center items-center w-full">
  <div class='flex flex-col items-center'>
    <!--
    <h2 class='uppercase font-bold'>Links</h2>
    -->
    <div  class='flex flex-col gap-2'>
      <!--
      <a href='https://discord.gg/XhwEWVyKer' class='btn' alt='NSwitch 60 FPS Cheats & Mods'><span class='w-[24px] h-[24px]'><Icon icon="line-md:discord-twotone" width='auto'/></span> NSwitch 60 FPS Cheats & Mods</a>
      -->
      <p class='text-sm'>Custom configs, categorisation now supported</p>
      <p class='text-sm'>NX version will be update soon... kinda busy rn</p>
      <a href="https://github.com/biase-d/ue4cheatcreator" class="btn btn-ghost"><Icon icon="line-md:github-twotone" width='auto'/>Source Code</a>
    </div>
  </div>
</footer>

