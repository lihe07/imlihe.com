<script>
    import {theme} from "../stores";
    import {scale} from "svelte/transition";

    let show = true;
</script>

<div class="button" class:close={show} on:click={() => show = !show}>
    <div class="bars">

        <div class="bar first"></div>
        <div class="bar second"></div>
        <div class="bar third"></div>
    </div>
</div>

<ul class:show={show} class="menu">
    <li>
        <a href="#home">Home</a>
    </li>
    <li>
        <a href="#about">About</a>
    </li>
    <li>
        <a href="#contact">Contact</a>
    </li>
    <li>
        {#if $theme === "light"}
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"
                 on:click={() => $theme = "dark"} in:scale>
                <g fill="none">
                    <path d="M7.456 2a6 6 0 1 1-5.406 8.605a.5.5 0 0 1 .36-.71c1.276-.231 3.278-.937 4.078-3.07c.563-1.5.512-3.015.283-4.23a.5.5 0 0 1 .475-.591C7.316 2 7.386 2 7.456 2z"
                          fill="currentColor"></path>
                </g>
            </svg>

        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 16 16" on:click={() => $theme = "light"} in:scale>
                <g fill="none">
                    <path d="M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1zm0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13zM2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1zm.646-5.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm.708 9.708a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708.707l-1 1zm9-9.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zm-.708 9.708a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707l1 1z"
                          fill="currentColor"></path>
                </g>
            </svg>

        {/if}
    </li>
</ul>


<style>
    * {
        transition: all .3s ease-in-out;
    }

    .button {
        opacity: 0;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background-color: var(--primary);
        z-index: 3;
    }

    .bar {
        width: 30px;
        height: 5px;
        background: white
    }

    .menu {
        position: fixed;
        bottom: 70px;
        opacity: 0;
        right: 20px;
        width: 100px;
        background-color: var(--primary);
        border-radius: 20px;
        z-index: 3;
        list-style: none;
        padding: 10px 0;
    }

    .bars {
        width: 30px;
        height: 30px;
        position: absolute;
        margin: 15px;
    }

    .bar {
        position: absolute;
        border-radius: 4px;
    }

    .first {
        top: 2px;
    }

    .second {
        top: 12px;
    }

    .third {
        top: 22px;
    }

    .close .first {
        transform: rotate(45deg);
        top: 12px;
    }

    .close .third {
        transform: rotate(-45deg);
        top: 12px;
    }

    .close .second {
        opacity: 0;
    }

    li {
        color: white;
        text-align: center;
        padding: 10px;
        height: 20px;
    }

    a {
        color: white;
        text-decoration: none;
        display: block;
        font-family: var(--font-sans-serif);
        font-size: 16px;
        transition: font-size .1s ease-in-out, margin-top .1s ease-in-out;
    }

    a:active {
        font-size: 14px;
        margin-top: 2px;
    }

    svg {
        width: 25px;
        height: 25px;
        transition: transform .1s ease-in-out;
    }

    svg:active {
        transform: scale(.8);
    }

    @media screen and (max-width: 768px) {
        .button {
            opacity: 1;
        }

        .menu.show {
            bottom: 80px;
            opacity: 1;
        }
    }
</style>
