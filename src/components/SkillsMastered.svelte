<div class="skills">
    <div class="bg">
        <div class="inner">
            {#each skills as skill}
                <p>{skill}</p>
            {/each}
        </div>
    </div>
    <div class="skill">
        <img src="/assets/rust.svg" alt="rust logo">
        <h2>Rust</h2>
    </div>
    <div class="skill">
        <img src="/assets/pytorch.svg" alt="pytorch logo">
        <h2>PyTorch</h2>
    </div>
    <div class="skill">
        <img src="/assets/html5.svg" alt="html5 logo">
        <h2>HTML5</h2>
    </div>
</div>


<script>
    import {onMount} from "svelte";

    const skills = [
        "Python",
        "CSS",
        "MongoDB",
        "RESTFul",
        "HTML",
        "Javascript",
        "Svelte",
        "Vue",
        "Kotlin",
        "Java",
        "Android",
    ]


    let positioned_skills = []

    function calc_layout() {
        positioned_skills = skills.map(name => {
            let x = Math.random() * 95 + 2.5
            let y = Math.random() * 95 + 2.5
            return {
                name,
                x,
                y
            }
        })

    }

    onMount(() => {
        calc_layout()
    })
</script>

<style>
    .skill {
        z-index: 1;
    }

    .skills {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        min-height: 400px;


        position: relative;
    }

    img {
        width: 100px;
        height: 100px;
        margin: 0;
        padding: 0;
    }

    h2 {
        text-align: center;
        font-family: var(--font-sans-serif);
        font-size: 26px;
        color: var(--frontground);
        opacity: .7;
        margin: 10px 0;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inner {
        width: 70%;
        height: 70%;
        display: grid;
        
    }

    p {
        font-family: var(--font-sans-serif);
        opacity: 0.5;
        font-size: 18px;
        width: max-content;
        color: var(--frontground)
    }
</style>
