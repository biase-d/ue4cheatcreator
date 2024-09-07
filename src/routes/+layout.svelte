<head>
  <title> UE4cheatcreator for NX </title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
</head>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css"
</script>

<div>
  <header class="sticky top-0">
    <nav class="p-8 font-bold lowercase text-xl flex items-center">
      <div class="grid items-center justify-center w-[32px] h-[32px]">
        <Icon icon='pixelarticons:chevrons-horizontal'width=auto/>
      </div>
      <h1><a href="/">ue4cheatscreator </a></h1>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer class="grid justify-center mt-10">
    <a href="https://github.com/biase-d/ue4cheatcreator" class="flex font-bold lowercase hover:text-secondary"> <Icon icon='pixelarticons:github' width=auto/></a>
  </footer>
</div>
