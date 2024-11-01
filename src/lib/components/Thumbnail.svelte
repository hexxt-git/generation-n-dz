<script>
    import { SquareArrowOutUpRight } from "lucide-svelte";

    export let thumbnail;
</script>

<a
    class="relative w-screen h-[calc(100vh-8rem)] snap-center flex-shrink-0 m-2"
    href="/article-{thumbnail.id}"
>
    <img
        src={thumbnail.image || `/history-${Math.floor(Math.random()*10)}.png`}
        alt=""
        class="w-full h-full object-cover"
    />
    <span class="bg-card absolute top-3 right-3 px-3 py-2 font-bold">
        {new Date(thumbnail.from).toLocaleDateString()} - {new Date(
            thumbnail.to,
        ).toLocaleDateString()}
    </span>
    <div class="title absolute bottom-4 left-4 bg-card w-[85%] p-6 rounded-sm">
        <h1 class="text-2xl md:text-7xl flex justify-between items-center">
            {thumbnail.name}
            <SquareArrowOutUpRight size="35" />
        </h1>
        <div class="description max-h-0 text-lg md:text-2xl overflow-clip">
            {thumbnail.description}
            <span
                class="capitalize text-blue-400 ml-auto w-fit block mt-2 text-xl underline"
            >
                read more
            </span>
        </div>
    </div>
</a>

<style>
    .description {
        transition: max-height 600ms ease-in-out;
    }
    .title:hover .description,
    .title:focus .description {
        max-height: 1000px;
    }
</style>
