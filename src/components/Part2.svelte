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
            <h2>Skills learning/learnt</h2>
            <div class="highlight"></div>
        </header>

        <SkillsMastered/>



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
