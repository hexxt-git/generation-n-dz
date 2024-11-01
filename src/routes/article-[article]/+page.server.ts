import events from "$lib/events";

export async function load({ params }) {
    const { article } = params;

    return events.find((event) => String(event.id) == article);
}
