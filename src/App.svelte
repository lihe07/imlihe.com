<script>
    import Part1 from "./components/Part1.svelte"
    import Header from "./components/Header.svelte";

    import {theme} from "./stores";
    import {onMount} from "svelte";
    import Part2 from "./components/Part2.svelte";
    import Part3 from "./components/Part3.svelte";
    import Menu from "./components/Menu.svelte";

    function handle_keyboard(event) {
        // j: 向下滚动
        // k: 向上滚动
        // J: 快速向下滚动
        // K: 快速向上滚动
        if (event.key === "j") {

        }
    }

    onMount(() => {
        document.addEventListener("keydown", handle_keyboard);
        return () => {
            document.removeEventListener("keydown", handle_keyboard);
        }
    })
</script>

<main class:dark={$theme==="dark"} class:light={$theme==="light"} class="container">
    <section class="header">
        <Header></Header>
    </section>
    <Part1></Part1>
    <Part2></Part2>
    <Part3></Part3>
    <Menu/>
</main>



<style>
    * {
        transition: color .3s ease-in-out, background-color .3s ease-in-out, border-color .3s ease-in-out, background .3s ease-in-out;
    }

    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 70px;
        overflow: hidden;
        background: var(--card-background);
        transition: margin-top .3s ease-in-out, background .3s ease-in-out;
        z-index: 1;
    }

    @media screen and (max-width: 768px) {
        .header {
            /* 隐藏 */
            margin-top: -70px;
        }
    }

    .container {
        background: var(--background);
        min-height: 100vh;

    /*    暂时关闭sticky布局*/
        overflow: hidden;
    }

    .light {
        --background: #f0f3f4;
        --card-background: #fff;
        --frontground: #000;
        --primary: #3498db;
        --part2-background: #85c1e9;
        --part3-background: #76d7c4;
    }

    .dark {
        --background: #17202a;
        --card-background: #212f3d;
        --frontground: #fff;
        --primary: #3498db;
        --part2-background: #212f3d;
        --part3-background: #17202a;
    }

</style>

