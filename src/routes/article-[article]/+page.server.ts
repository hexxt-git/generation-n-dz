export async function load({ params }) {
    const { article } = params;

    return { content: `you are reading article: ${article}`};
}
