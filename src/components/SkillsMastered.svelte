<div class="skills">
    <div class="bg">
        <p>Python</p>
        <p>CSS</p>
        <p>MongoDB</p>
        <p>RESTFul API</p>
        <p>HTML</p>
        <p>Javascript</p>
        <p>Svelte</p>
        <p>Vue</p>
        <p>Kotlin</p>
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


<style>
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
    }
</style>
