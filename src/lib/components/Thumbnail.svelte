<script>
    export let thumbnail;
</script>

<div class="relative w-screen h-[calc(100vh-8rem)] snap-center flex-shrink-0 m-2">
    <img src={thumbnail.image} alt="" class="w-full h-full object-cover">
    <div class="title absolute bottom-2 left-2 hover:bg-card w-[85%] p-4 rounded-sm"> 
        <h1 class="text-7xl">{thumbnail.title}</h1>
        <div class="description hidden text-2xl">
            {thumbnail.description}
            <a href="/article-1" class="capitalize text-blue-400 ml-auto w-fit block mt-2 text-xl underline">read more</a>
        </div>
    </div>
</div>

<style>
    .title:hover .description, .title:focus .description {
        display: block;
    }
</style>