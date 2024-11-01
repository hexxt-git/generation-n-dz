import events from "$lib/events";

export async function load() {
    function getRandomElements(arr: any[], num: number) {
        const shuffled = arr.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    return {
        thumbnails: getRandomElements(events, 4)
    };
}
