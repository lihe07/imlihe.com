<script>
    import SelfIntroduction from "./SelfIntroduction.svelte";
    import SkillsMastered from "./SkillsMastered.svelte";
</script>

<section class="container" id="about">
    <div class="inner">
        <header>
            <h2>About me</h2>
            <div class="highlight"></div>
        </header>
        <SelfIntroduction/>
        <header>
            <h2>Skills mastered</h2>
            <div class="highlight"></div>
        </header>

        <SkillsMastered/>

        <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</section>


<style>
    .container {
        padding: 20px;
        position: sticky;
        top: 70px;
        background-color: var(--part2-background);
        border-radius: 20px 20px 0 0;
    }

    .inner {
        max-width: 70rem;
        margin: 20px auto;
    }

    header {
        width: max-content;
    }

    h2 {
        color: var(--frontground);
        font-family: var(--font-sans-serif);
        font-size: 2.5rem;
        width: max-content;
        margin-bottom: 10px;
    }
    .highlight {
        height: 6px;
        width: 120%;
        background-color: var(--primary);
        margin: auto;
        margin-left: -5px;
    }


    @media screen and (max-width: 768px) {
        .container {
            top: 0;
        }

        header {
            margin: auto;
        }
        .highlight {
            width: calc(100% + 10px);

        }
    }
</style>
