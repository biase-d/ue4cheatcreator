<head>
  <title>UE4cheatcreator for NX</title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="og:description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<script>
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<Header />

<div class="flex flex-col">
  <main class="flex-grow container mx-auto p-4 sm:p-6 transition-all max-w-4xl">
    <div class="card bg-base-100 mx-auto max-w-md">
      <div class="card-body">
        <slot />
      </div>
    </div>
  </main>
</div>

<Footer />