<main
    class="relative min-h-[calc(100vh)] flex justify-center items-center border-b"
>
    <div id="squares"></div>
    <img src="/image.png" alt="algeria" class="absolute -top-8 md:top-[5%] left-0 h-[55rem] object-cover">
    <div
        class="absolute bottom-0 right-0 p-4 md:p-12 text-5xl sm:text-7xl md:text-8xl md:text-end thin"
    >
        this is <b>algeria,</b> <br class="hidden md:block" />
        in the <b>past,</b> <br class="hidden md:block" />
        and the <b>future.</b>
    </div>
</main>

<style>
    main {
        background: radial-gradient(circle at 25% 40%, transparent, #10201046);
    }
    img {
        mask: radial-gradient(circle at 50% 50%, white 5%, transparent 60%);

    }    
    #squares {
        --c: #00ff001e; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
                90deg,
                var(--c) 0,
                var(--c) 1px,
                transparent 1px,
                transparent 100%
            ),
            linear-gradient(
                0deg,
                var(--c) 0,
                var(--c) 1px,
                transparent 1px,
                transparent 100%
            );
        background-size: 50px 50px;
        mask: radial-gradient(circle at 25% 40%, white 10%, transparent 70%);
    }
    .thin {
        font-family: "Britanica Thin";
        letter-spacing: 10px !important;
    }
    b {
        font-family: "Britanica";
        text-transform: uppercase;
    }
</style>
