<script>
    const { data } = $props();
</script>

<main class="relative min-h-screen mt-20 pb-36 pt-8 px-8 max-w-[1200px] mx-auto">
    <img
        src={data.image || `/history-${Math.floor(Math.random() * 10)}.png`}
        alt={data.name}
        class="w-full aspect-video object-cover"
    />
    <div class="article">
        {@html data.article}
    </div>
    <span class="bg-card absolute top-9 right-9 px-3 py-2 font-bold">
        {new Date(data.from).toLocaleDateString()} - {new Date(
            data.to,
        ).toLocaleDateString()}
    </span>
</main>

<style>
    :global(.article h1) {
        font-size: 2.3em;
        text-align: center;
        margin: 10px;
    }
    :global(.article h2) {
        font-size: 1.8em;
        margin-top: 24px;
    }
    :global(.article h3) {
        font-size: 1.5em;
        margin-top: 24px;
    }
    :global(.article p) {
        font-size: 1.1em;
    }
    :global(.article ul) {
        margin: 10px 0;
        padding-left: 20px;
        font-size: 1em;
    }
</style>
