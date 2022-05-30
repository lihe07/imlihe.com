<script>
    import {theme} from "../stores";
    import {scale} from "svelte/transition";
</script>

<ul>
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
        transition: all 0.1s ease-in-out;
    }

    ul {
        list-style: none;
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        max-width: 70rem;
        margin: 0 auto;
        padding: 0 25px;
    }


    li {
        margin: 0;
        padding: 0;
        width: 30px;
        text-align: center;
        color: var(--primary);
    }

    svg {
        width: 28px;
        height: 28px;
        opacity: 0.8;
    }

    svg:hover {
        opacity: 1;
    }

    svg:active {
        transform: scale(0.9);
    }

    a {
        color: var(--primary);
        opacity: 0.8;
        text-decoration: none;
        font-family: var(--font-sans-serif);
        font-size: 18px;
        outline: none;
        line-height: 20px;
    }

    a:visited {
        color: var(--primary);
    }

    a:hover {
        opacity: 1;
    }

    a:active {
        filter: brightness(0.8);
        opacity: 1;
        font-size: 17px;
    }
</style>
