<head>
  <title>UE4cheatcreator for NX</title>
  <meta name="description" content="A tool to create cheats based on dumps from UE4cfgdumper">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<script>
  import "../app.css";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import StarBackground from "$lib/StarBackground.svelte";
</script>

<StarBackground />

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="flex-grow w-full max-h-[80%]">
    <slot />
  </main>
  
  <Footer />
</div>