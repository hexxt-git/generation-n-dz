<script lang="ts">
    import { Drawer, Button, CloseButton } from "flowbite-svelte";
    import {
        InfoCircleSolid,
        ArrowRightOutline,
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
            <AlignJustifyOutline size="lg" class="scale-110" />
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
            <SearchOutline size="lg" />
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
    <div class="flex items-center">
        <h5
            id="drawer-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
            <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
        </h5>
        <CloseButton
            on:click={() => (hidden1 = true)}
            class="mb-4 dark:text-white"
        />
    </div>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a
            href="/"
            class="text-primary-600 underline dark:text-primary-500 hover:no-underline"
        >
            limited-time sale
        </a>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
        and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
        <Button color="light" href="/">Learn more</Button>
        <Button href="/" class="px-4"
            >Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button
        >
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
