<script>
    let quotes = [
        {
            quote: "Algeria is the land where the ancient Mediterranean meets the vast Sahara, a land of resilience and beauty.",
            author: "Unknown",
        },
        {
            quote: "We are shaped by our past and driven by a love for our land and its history.",
            author: "Unknown",
        },
        {
            quote: "Freedom is never given; it is won by the courage and sacrifice of those who dream of a better future.",
            author: "Frantz Fanon",
        },
        {
            quote: "Algeria’s strength lies in the souls of its people, who stood up in unity for their independence.",
            author: "Houari Boumédiène",
        },
        {
            quote: "Algeria’s heart is woven from many threads — Berber, Arab, African, and Mediterranean.",
            author: "Unknown",
        },
        {
            quote: "From the Kabylie mountains to the deep Sahara, every corner of Algeria tells a story.",
            author: "Unknown",
        },
        {
            quote: "In the heart of every Algerian beats the rhythm of endurance, the pride of a land that has endured time.",
            author: "Albert Camus",
        },
        {
            quote: "Algeria is a testament to resilience, a story of survival against all odds.",
            author: "Assia Djebar",
        },
        {
            quote: "A country is not only built by victories but by its stories of resilience and hope.",
            author: "Kateb Yacine",
        },
        {
            quote: "The soul of a nation lives in the memories of its people, in the dreams of its youth, and in the wisdom of its elders.",
            author: "Malek Bennabi",
        },
    ];

    let quote = quotes[Math.floor(Math.random()*quotes.length)]
</script>

<main
    class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center border-b mt-16 overflow-hidden tracking-[10px] md:tracking-[20px] p-6"
>
    <h1
        class="text-4xl md:text-9xl uppercase mb-8 tracking-[20px md:tracking-[40px] font-[Britanica] md:font-[inherit]"
    >
        this is algeria
    </h1>
    <h2 class="text-xl md:text-6xl mt-6">the</h2>
    <a
        href="/timeline"
        class="text-3xl md:text-8xl uppercase -mt-1 hover:underline"
        ><b>past</b></a
    >
    <h2 class="text-xl md:text-6xl mt-8">the</h2>
    <a
        href="/timeline"
        class="text-3xl md:text-8xl uppercase -mt-1 hover:underline"
        ><b>present</b></a
    >
    <h2 class="text-xl md:text-6xl mt-8">the</h2>
    <a
        href="/timeline"
        class="text-3xl md:text-8xl uppercase -mt-1 hover:underline"
        ><b>future</b></a
    >
    <hr class="mt-8" />
    <p class="mt-8 text-lg font-bold">{quote.quote} - {quote.author}</p>
</main>

<style>
    main {
        font-family: "Britanica Thin";
    }
    b {
        font-family: "Britanica";
        font-weight: normal;
    }
    hr {
        width: 80%;
        border-top: solid 1px;
    }
    p {
        letter-spacing: 2px;
    }
</style>
