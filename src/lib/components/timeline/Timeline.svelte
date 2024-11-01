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
    const baseYearWidth = 100;
    $: yearWidth = baseYearWidth * zoomLevel;

    // Map categories to colors
    const categoryColorMap: { [key: string]: string } = {
        political: "#f87171",
        sports: "#34d399",
        war: "#a3a3a3",
        arts: "#c084fc",
        scientific: "#60a5fa",
    };

    const events: Event[] = new Array(20)
        .fill(0)
        .map((_, index) => {
            const from = new Date(
                1950 + Math.random() * 60,
                Math.random() * 12,
                Math.random() * 28
            );
            const to = new Date(
                from.getTime() +
                    (Math.random() + 0.3) * 1000 * 60 * 60 * 24 * 365 * 4
            );
            const category = [
                "political",
                "sports",
                "war",
                "arts",
                "scientific",
            ][Math.floor(Math.random() * 5)];
            return {
                id: index,
                from,
                to,
                name: "Event " + index,
                description: "This is a brief description of Event " + index + ".",
                image: "https://via.placeholder.com/150",
                category,
                color: categoryColorMap[category],
            };
        })
        .sort((a, b) => a.from.getTime() - b.from.getTime());

    // Extract unique categories
    const categories = Array.from(new Set(events.map((e) => e.category)));
    let selectedCategories = [...categories];

    // Filtered events based on selected categories
    $: filteredEvents = events.filter((e) =>
        selectedCategories.includes(e.category)
    );

    // Assign rows to events to avoid collisions
    const rowHeight = 120;
    function assignRows(eventList: Event[]) {
        const rows: Date[] = [];
        eventList.forEach((event) => {
            let placed = false;
            for (let i = 0; i < rows.length; i++) {
                if (event.from.getTime() >= rows[i].getTime()) {
                    event.row = i;
                    rows[i] = event.to;
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                rows.push(event.to);
                event.row = rows.length - 1;
            }
        });
    }
    $: assignRows(filteredEvents);

    // Calculate timeline range
    const startYear = Math.min(...events.map((e) => e.from.getFullYear()));
    const endYear = Math.max(...events.map((e) => e.to.getFullYear()));
    const totalYears = endYear - startYear + 1;

    function zoomIn() {
        if (zoomLevel < maxZoomLevel) zoomLevel += 0.1;
    }
    function zoomOut() {
        if (zoomLevel > minZoomLevel) zoomLevel -= 0.1;
    }

    // Toggle control panel visibility
    let controlsVisible = true;
    function toggleControls() {
        controlsVisible = !controlsVisible;
    }
</script>

<div class="flex relative">
    <!-- Control Panel -->
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
                                    style="background-color: { categoryColorMap[category] }"
                                ></span>
                                {category}
                            </span>
                        </label>
                    {/each}
                </div>
            </div>
        </div>
    {/if}

    <!-- Show/Hide Controls Button -->
    <button
        on:click={toggleControls}
        class="absolute bottom-2 left-2 z-50 px-2 py-1 bg-gray-800 text-white rounded"
    >
        {#if !controlsVisible}
            Show Controls
        {:else}
            Hide Controls
        {/if}
    </button>

    <!-- Timeline -->
    <div class="flex-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
        <div
            class="relative"
            style="
                height: calc(100vh - 80px);
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
            <!-- Time scale -->
            <div class="absolute top-0 left-0 h-[30px] w-full border-b border-gray-400">
                {#each Array(totalYears) as _, i}
                    <div
                        class="absolute top-0 h-full border-r border-gray-400 text-center text-xs text-gray-400"
                        style="left: {i * yearWidth}px; width: {yearWidth}px;"
                    >
                        {startYear + i}
                    </div>
                {/each}
            </div>
            <!-- Events -->
            {#each filteredEvents as event}
                <div
                    class="absolute p-2 text-white rounded shadow-lg scale-95"
                    style="
                        left: {(event.from.getFullYear() - startYear) * yearWidth}px;
                        width: {(event.to.getFullYear() - event.from.getFullYear()) * yearWidth}px;
                        top: {(event.row ?? 0) * rowHeight + 30}px;
                        height: {rowHeight}px;
                        background-color: {event.color};
                    "
                >
                    <div class="flex h-full">
                        <img src="{event.image}" alt="{event.name}" class="h-full w-1/3 object-cover rounded-l">
                        <div class="p-2 w-2/3 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-lg">{event.name}</h4>
                                <p class="text-sm overflow-hidden">{event.description}</p>
                            </div>
                            <a href="/events/{event.id}" class="text-blue-200 underline self-end">Read more</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>