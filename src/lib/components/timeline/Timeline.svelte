<script lang="ts">
    interface Event {
        id: number;
        from: Date;
        to: Date;
        name: string;
        description: string;
        image: string;
        category: string;
        color?: string;
        row?: number;
    }

    let zoomLevel = 1;
    const minZoomLevel = 0.5;
    const maxZoomLevel = 2;
    const baseYearWidth = 170;
    $: yearWidth = baseYearWidth * zoomLevel;

    const categoryColorMap: { [key: string]: string } = {
        social: "#f87171",
        war: "#a3a3a3",
        politics: "#3b82f6",
        economics: "#34d399",
        culture: "#fbbf24",
        arts: "#c084fc",
        sports: "#89fb89",
        health: "#ffbb33",
    };

    export let events: Event[];

    const categories = Array.from(new Set(events.map((e) => e.category)));
    let selectedCategories = [...categories];

    $: filteredEvents = events.filter((e) =>
        selectedCategories.includes(e.category),
    );

    const rowHeight = 120;
    function assignRows(eventList: Event[]) {
        const rows: Date[] = [];
        eventList.forEach((event) => {
            let placed = false;
            for (let i = 0; i < rows.length; i++) {
                if (event.from.getTime() >= rows[i].getTime()) {
                    event.row = i;
                    let maxedTo = new Date(event.to);
                    maxedTo.setFullYear(maxedTo.getFullYear() + 1);
                    rows[i] = maxedTo;
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                let maxedTo = new Date(event.to);
                maxedTo.setFullYear(maxedTo.getFullYear() + 1);
                rows.push(maxedTo);
                event.row = rows.length - 1;
            }
        });
    }
    $: assignRows(filteredEvents);

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    $: startDate = new Date(Math.min(...events.map((e) => e.from.getTime())));
    $: endDate = new Date(Math.max(...events.map((e) => e.to.getTime())));
    $: totalYears =
        (endDate.getTime() - startDate.getTime()) / millisecondsPerYear;

    $: computedEvents = filteredEvents.map((event) => {
        const startPosition =
            ((event.from.getTime() - startDate.getTime()) /
                millisecondsPerYear) *
            yearWidth;
        const durationMs = event.to.getTime() - event.from.getTime();
        const eventWidth =
            Math.max(1, durationMs / millisecondsPerYear) * yearWidth;
        return { ...event, startPosition, eventWidth };
    });

    function zoomIn() {
        if (zoomLevel < maxZoomLevel) zoomLevel += 0.1;
    }
    function zoomOut() {
        if (zoomLevel > minZoomLevel) zoomLevel -= 0.1;
    }

    let controlsVisible = true;
    function toggleControls() {
        controlsVisible = !controlsVisible;
    }
</script>

<div class="flex relative border-t border-gray-400 mt-24">
    {#if controlsVisible}
        <div class="relative bg-card p-4 border-r border-gray-400 w-64">
            <div class="space-y-2">
                <button
                    on:click={zoomOut}
                    disabled={zoomLevel <= minZoomLevel}
                    class="w-full px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                    Zoom Out
                </button>
                <button
                    on:click={zoomIn}
                    disabled={zoomLevel >= maxZoomLevel}
                    class="w-full px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                    Zoom In
                </button>
                <div class="mt-4">
                    <h3 class="text-lg font-semibold mb-2">Categories</h3>
                    {#each categories as category}
                        <label class="flex items-center mb-1">
                            <input
                                type="checkbox"
                                bind:group={selectedCategories}
                                value={category}
                                class="mr-2"
                            />
                            <span class="flex items-center">
                                <span
                                    class="w-3 h-3 mr-2 rounded"
                                    style="background-color: {categoryColorMap[
                                        category
                                    ]}"
                                ></span>
                                {category}
                            </span>
                        </label>
                    {/each}
                </div>
            </div>
        </div>
    {/if}

    <button
        on:click={toggleControls}
        class="absolute bottom-2 left-2 z-10 px-2 py-1 bg-gray-800 text-white rounded"
    >
        {#if !controlsVisible}
            Show Controls
        {:else}
            Hide Controls
        {/if}
    </button>

    <div class="flex-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
        <div
            class="relative"
            style="
                height: calc(100vh - 6rem);
                width: {totalYears * yearWidth}px;
                background-image: repeating-linear-gradient(
                    to right,
                    #00000010 0px,
                    #00000010 {yearWidth}px,
                    transparent {yearWidth}px,
                    transparent {yearWidth * 2}px
                );
            "
        >
            <div
                class="absolute top-0 left-0 h-[30px] w-full border-b border-gray-400"
            >
                {#each Array(Math.ceil(totalYears)) as _, i}
                    <div
                        class="absolute top-0 h-full border-r border-gray-400 text-center text-xs text-gray-400"
                        style="left: {i * yearWidth}px; width: {yearWidth}px;"
                    >
                        {startDate.getFullYear() + i}
                    </div>
                {/each}
            </div>
            {#each computedEvents as event}
                <a
                    class="absolute p-1 text-white rounded shadow-lg scale-95 overflow-hidden"
                    style="
                        left: {event.startPosition}px;
                        width: {event.eventWidth}px;
                        top: {(event.row ?? 0) * rowHeight + 30}px;
                        height: {rowHeight}px;
                        background-color: {event.color};
                    "
                    href="/article-{event.id}"
                >
                    {#if event.eventWidth >= 160}
                    {@const x = Math.floor(Math.random()*200+200)}
                        <div class="flex h-full">
                            <img
                                src={event.image || `https://picsum.photos/${x}/${x}`}
                                alt={event.name}
                                class="h-full w-1/3 max-w-48 object-cover rounded-l"
                            />
                            <div
                                class="p-2 w-2/3 flex flex-col justify-between"
                            >
                                <div>
                                    <h4
                                        class="font-bold text-lg overflow-hidden"
                                    >
                                        {event.name}
                                    </h4>
                                    <p class="text-sm overflow-hidden">
                                        {event.description}
                                    </p>
                                </div>
                                <span class="text-blue-700 self-end">
                                    Read more
                                </span>
                            </div>
                        </div>
                    {:else}
                        <img
                            src={event.image || "/image.png"}
                            alt={event.name}
                            class="h-full w-full object-cover rounded"
                        />
                    {/if}
                </a>
            {/each}
        </div>
    </div>
</div>
