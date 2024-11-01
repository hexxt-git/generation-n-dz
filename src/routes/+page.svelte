<script>
    import Timeline from "$lib/components/timeline/Timeline.svelte";
    import Home from "$lib/components/Home.svelte";
    export let data;
</script>

<Home />
<Timeline events={data.events} />
