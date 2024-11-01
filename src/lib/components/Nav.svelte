<script lang="ts">
    import { Drawer } from "flowbite-svelte";
    import {
        AlignJustifyOutline,
        SearchOutline,
    } from "flowbite-svelte-icons";
    import { sineInOut } from "svelte/easing";
    let hidden1 = true;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineInOut,
    };
    let search = false;
    let mobile = false;
    let textArea: any;
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    function handleResize() {
        if (browser) mobile = window.innerWidth < 700;
    }

    onMount(() => {
        handleResize();
        if (browser) window.addEventListener("resize", handleResize);
    });

    onDestroy(() => {
        if (browser) window.removeEventListener("resize", handleResize);
    });
</script>

<nav
    class="fixed top-0 left-0 w-full h-24 grid justify-items-center items-center border-b bg-card overflow-clip z-20 px-4 py-4 {search &&
    mobile
        ? ''
        : 'grid-cols-3'}"
>
    {#if !(search && mobile)}
        <button
            on:click={() => (hidden1 = false)}
            class="flex items-center gap-3 text-xl uppercase h-full px-6 hover:bg-black/20 me-auto"
        >
            <AlignJustifyOutline size="xl" class="scale-110" />
        </button>

        <a class="text-2xl md:text-4xl font-extrabold whitespace-nowrap" href="/">
            GEN-B
        </a>
    {:else}{/if}
    <div
        class="flex items-center h-full {search ? 'bg-black/20' : ''} {search &&
        mobile
            ? 'w-full'
            : ''} ms-auto"
    >
        <button
            on:click={() => {
                search = !search;
                setTimeout(() => {
                    textArea.focus();
                }, 100);
            }}
            class="flex items-center gap-3 text-xl uppercase h-full px-6 {!search
                ? 'hover:bg-black/20'
                : ''}"
        >
            <SearchOutline size="xl" />
        </button>
        {#if search}
            <input
                type="text"
                bind:this={textArea}
                class="bg-transparent h-fit px-2 me-4 resize-none show text-lg"
                on:blur={() => (search = false)}
            />
        {/if}
    </div>
</nav>

<Drawer
    transitionType="fly"
    {transitionParams}
    bind:hidden={hidden1}
    id="sidebar1"
    placement="left"
    backdrop={false}
>
    <div class="text-lg grid space-y-2 pt-8">    
        <a class="hover:underline" href="/">Landing</a>
        <a class="hover:underline" href="/timeline">Timeline</a>
        <a class="hover:underline" href="/article-landing">Articles</a>
    </div>
</Drawer>

<style>
    .show {
        animation: showWidth 2500ms ease-out forwards;
        outline: none !important;
        box-shadow: none !important;
        border: none !important;
    }
    @keyframes showWidth {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
</style>
