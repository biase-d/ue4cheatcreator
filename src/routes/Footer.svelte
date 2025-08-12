<script>
    import Icon from "@iconify/svelte";
    import '@fontsource-variable/caveat';
</script>

<footer class="mt-auto">
    <div class="container mx-auto p-4 sm:p-6 text-center">
        <div class="flex flex-col items-center gap-3">
        <div class="flex flex-wrap gap-4 justify-center flex-col">
            <a href="https://github.com/biase-d/ue4cheatcreator" 
                class="btn btn-ghost btn-sm gap-2"
                aria-label="GitHub Repository">
            <Icon icon="line-md:github-twotone" class="text-xl text-primary" />
            <span class="hidden sm:inline">Source Code</span>
            </a>
            <a class='self-plug text-xl' href='https://github.com/biase-d'>a biase-d project</a>
        </div>
        </div>
    </div>
</footer>

<style>
    .self-plug{
        font-family: 'Caveat Variable', cursive;
    }
</style>