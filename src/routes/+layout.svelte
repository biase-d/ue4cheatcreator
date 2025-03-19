<head>
  <title>UE4cheatcreator for NX</title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css";
</script>

<header class="navbar bg-base-100 px-4 sm:px-8">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost px-2 gap-2">
      <Icon icon="icon-park-twotone:game" width="32" />
      <span class="text-xl font-semibold hidden sm:inline-block">UE4cheatcreator</span>
    </a>
  </div>
</header>

<div class="flex flex-col">
  <main class="flex-grow container mx-auto p-4 sm:p-6 transition-all max-w-4xl">
    <div class="card bg-base-100 mx-auto max-w-md">
      <div class="card-body">
        <slot />
      </div>
    </div>
  </main>

  <footer class="mt-auto">
    <div class="container mx-auto p-4 sm:p-6 text-center">
      <div class="flex flex-col items-center gap-3">
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://github.com/biase-d/ue4cheatcreator" 
             class="btn btn-ghost btn-sm gap-2"
             aria-label="GitHub Repository">
            <Icon icon="line-md:github-twotone" class="text-xl" />
            <span class="hidden sm:inline">Source Code</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>