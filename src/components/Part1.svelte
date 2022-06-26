<script>

    import CodeCard from "./CodeCard.svelte";
</script>

<section class="container" id="home">
    <div class="texts">
        <p class="top">Hello! I'm</p>
        <h1>He Li.</h1>
        <p class="about">A 9th grade student, computer rookie and anime fan.</p>

        <div class="platforms">
            <a href="https://github.com/lihe07/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                          fill="currentColor"></path>
                </svg>
            </a>
            <a href="https://space.bilibili.com/88498677" target="_blank">
                <svg style="fill: currentColor;overflow: hidden;"
                     viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="529">
                    <path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                          p-id="530"></path>
                </svg>
            </a>
        </div>
    </div>
    <CodeCard/>
</section>

<style>
    /*@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");*/

    .platforms {
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        margin-left: -20px;
    }

    a {
        margin: 0 10px;
        color: var(--primary);
        transition: all .2s ease-in-out;
    }
    a:hover {
        filter: brightness(.8);
    }
    a:active {
        filter: brightness(1);
        transform: scale(0.9);
    }

    img, svg {
        width: 40px;
        height: 40px;
        margin: 10px;
    }

    .texts {
        max-width: 50%;
        color: var(--frontground);
        transition: color .3s ease-in-out;
        height: min-content;
    }

    .top {
        font-family: var(--font-sans-serif);
        margin: 0;
        font-size: 18px;
        opacity: 0.7;
    }

    .about {
        font-family: var(--font-sans-serif);
        font-size: 25px;
        font-weight: 100;
        margin: 0 0 15px;
        opacity: 0.9;
    }

    h1 {
        font-family: "Alfa Slab One", serif;
        margin: 0;
        font-size: 48px;
        letter-spacing: 2px;
    }

    .container {
        max-width: 70rem;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 100vh;
        align-items: center;
        position: sticky;
        top: 20px;
        margin: 0 auto 60px;
    }

    @font-face {
        font-family: 'Alfa Slab One';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://cn-gapis.0cdn.cn/g-fonts/s/alfaslabone/v17/6NUQ8FmMKwSEKjnm5-4v-4Jh2dJhew.woff2) format('woff2');
    }


    @media screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            padding-top: 50px;
            transform: translateY(-20px);
            height: max-content;
            min-height: 0;
        }



        .texts {
            text-align: center;
            width: 100%;
            max-width: 100%;
            margin-bottom: 40px;
        }

        .platforms {
            margin: auto;
        }
    }
</style>
