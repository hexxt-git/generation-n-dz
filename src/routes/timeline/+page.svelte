<script>
    import Timeline from "$lib/components/timeline/Timeline.svelte";
    export let data;
</script>

<Timeline events={data.events} />
