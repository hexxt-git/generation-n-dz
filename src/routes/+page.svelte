<script>
    import Home from "$lib/components/Home.svelte";
    import Thumbnail from "$lib/components/Thumbnail.svelte";
    export let data;
</script>

<Home />

<div class="w-screen overflow-x-scroll snap-x snap-mandatory flex">
    {#each data.thumbnails as thumbnail}
        <Thumbnail {thumbnail} />
    {/each}
</div>
