<script>
    const { data } = $props();
</script>

<main class="min-h-screen mt-20 pb-36 pt-8 px-8 max-w-[1200px] mx-auto">
    <img
        src={data.image}
        alt={data.title}
        class="w-full aspect-video object-cover"
    />
    <h1 class="text-3xl uppercase mt-4"><b>ARTICLE:</b> {data.title}</h1>
    <div class="article">
        {@html data.content}
    </div>
</main>

<style>
    :global(.article h2) {
        font-size: 1.8em;
        margin-top: 10px;
    }
    :global(.article h3) {
        font-size: 1.5em;
        margin-top: 10px;
    }
    :global(.article p) {
        font-size: 1em;
    }
    :global(.article ul) {
        margin: 10px 0;
        padding-left: 20px;
        font-size: 1em;
    }
</style>
