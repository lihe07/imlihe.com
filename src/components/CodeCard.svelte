<script>
    import {tweened} from "svelte/motion";
    import {cubicInOut} from "svelte/easing";
    import {theme} from "../stores";

    import highlight from "highlight.js";

    let lang = 0;
    let show_calculated = false;

    $:code = {
        0: {
            true:
                `let me = Person {
    name: "Michael Li",
    age: 15
};`,
            false:
                `let me = Person {
    name: "Michael Li",
    age: chrono::offset::Utc::now().naive_utc().year() - 2007,
};`
        },
        1: {
            true:
                `me = Person()
me.name = "Michael Li",
me.age = 15`,
            false:
                `me = Person()
me.name = "Michael Li",
me.age = 15`
        },
        2: {
            true:
                `me = {
    name: "Michael Li",
    age: 15
}`,
            false:
                `me = {
    name: "Michael Li",
    age: chrono::offset::Utc::now().naive_utc().year() - 2007
}`
        },
    }[lang][show_calculated];

    const bg_left = tweened(0, {
        duration: 300,
        easing: cubicInOut
    });

    $: {
        $bg_left = lang * 70
        inner = highlight.highlight(code, {
            language: {
                0: "rust",
                1: "python",
                2: "javascript"
            }[lang],
        }).value
    }

    let inner;
</script>

<div class="code-card">

    <div class="tags">
        <div class="bg" style="margin-left: {$bg_left}px"></div>
        <div class="tag" class:active={lang === 0} on:click={() => lang = 0}>
            me.rs
        </div>
        <div class="tag" class:active={lang === 1} on:click={() => lang = 1}>
            me.py
        </div>
        <div class="tag" class:active={lang === 2} on:click={() => lang = 2}>
            me.js
        </div>
    </div>
    <div class="code-of-me">
        <pre class:dark={$theme==="dark"} class:light={$theme==="light"}>{ @html inner }</pre>
    </div>
</div>
<style>


    .code-card {
        max-width: 500px;
        max-height: 500px;
        flex: 1;
        background-color: var(--card-background);
        border-radius: 20px;
        transition: background-color 0.3s ease-in-out;
        height: 100%;
        min-height: 250px;
        width: max-content;
    }

    .tags {
        display: flex;
    }

    .tag {
        width: 70px;
        height: 50px;
        border-radius: 20px;
        line-height: 45px;
        text-align: center;
        font-family: var(--font-sans-serif);
        font-size: 16px;
        color: var(--frontground);
        opacity: 0.5;
        z-index: 1;
        transition: opacity 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .tag.active {
        color: white;
        opacity: 1;
    }

    .bg {
        background-color: var(--primary);
        width: 70px;
        height: 50px;
        border-radius: 20px;
        position: absolute;
        z-index: 0;
    }

    .code-of-me {
        padding: 20px 30px 30px;
    }

    pre {
        font-family: var(--font-sans-serif);
        font-size: 16px;
        margin: 0;
        width: 100%;
        letter-spacing: 1px;
        line-height: 1.5;
        word-wrap: break-word;
        word-break: break-all;
        white-space: pre-wrap;
    }

    @media screen and (max-width: 768px) {
        .code-card {
            width: 100%;
            max-width: 500px;
            max-height: 100%;
            margin: 0;
            padding: 0;
        }
    }

    .dark {
        color: #c9d1d9;
    }

    :global(pre *, pre) {
        transition: all 0.3s ease-in-out;
    }

    :global(.dark .hljs-doctag), :global(.dark .hljs-keyword), :global(.dark .hljs-meta) :global(.dark .hljs-keyword), :global(.dark .hljs-template-tag), :global(.dark .hljs-template-variable), :global(.dark .hljs-type), :global(.dark .hljs-variable.language_) {
        color: #ff7b72
    }

    :global(.dark .hljs-title), :global(.dark .hljs-title).class_, :global(.dark .hljs-title).class_.inherited__, :global(.dark .hljs-title).function_ {
        color: #d2a8ff
    }

    :global(.dark .hljs-attr), :global(.dark .hljs-attribute), :global(.dark .hljs-literal), :global(.dark .hljs-meta), :global(.dark .hljs-number), :global(.dark .hljs-operator), :global(.dark .hljs-selector-attr), :global(.dark .hljs-selector-class), :global(.dark .hljs-selector-id), :global(.dark .hljs-variable) {
        color: #79c0ff
    }

    :global(.dark .hljs-meta) :global(.dark .hljs-string), :global(.dark .hljs-regexp), :global(.dark .hljs-string) {
        color: #a5d6ff
    }

    :global(.dark .hljs-built_in), :global(.dark .hljs-symbol) {
        color: #ffa657
    }

    :global(.dark .hljs-code), :global(.dark .hljs-comment), :global(.dark .hljs-formula) {
        color: #8b949e
    }

    :global(.dark .hljs-name), :global(.dark .hljs-quote), :global(.dark .hljs-selector-pseudo), :global(.dark .hljs-selector-tag) {
        color: #7ee787
    }

    :global(.dark .hljs-subst) {
        color: #c9d1d9
    }

    :global(.dark .hljs-section) {
        color: #1f6feb;
        font-weight: 700
    }

    :global(.dark .hljs-bullet) {
        color: #f2cc60
    }

    :global(.dark .hljs-emphasis) {
        color: #c9d1d9;
        font-style: italic
    }

    :global(.dark .hljs-strong) {
        color: #c9d1d9;
        font-weight: 700
    }

    :global(.dark .hljs-addition) {
        color: #aff5b4;
        background-color: #033a16
    }

    :global(.dark .hljs-deletion) {
        color: #ffdcd7;
        background-color: #67060c
    }


    :global(.light .hljs-doctag), :global(.light .hljs-keyword), :global(.light .hljs-meta) :global(.light .hljs-keyword), :global(.light .hljs-template-tag), :global(.light .hljs-template-variable), :global(.light .hljs-type), :global(.light .hljs-variable).language_ {
        color: #d73a49
    }

    :global(.light .hljs-title), :global(.light .hljs-title).class_, :global(.light .hljs-title).class_.inherited__, :global(.light .hljs-title).function_ {
        color: #6f42c1
    }

    :global(.light .hljs-attr), :global(.light .hljs-attribute), :global(.light .hljs-literal), :global(.light .hljs-meta), :global(.light .hljs-number), :global(.light .hljs-operator), :global(.light .hljs-selector-attr), :global(.light .hljs-selector-class), :global(.light .hljs-selector-id), :global(.light .hljs-variable) {
        color: #005cc5
    }

    :global(.light .hljs-meta) :global(.light .hljs-string), :global(.light .hljs-regexp), :global(.light .hljs-string) {
        color: #032f62
    }

    :global(.light .hljs-built_in), :global(.light .hljs-symbol) {
        color: #e36209
    }

    :global(.light .hljs-code), :global(.light .hljs-comment), :global(.light .hljs-formula) {
        color: #6a737d
    }

    :global(.light .hljs-name), :global(.light .hljs-quote), :global(.light .hljs-selector-pseudo), :global(.light .hljs-selector-tag) {
        color: #22863a
    }

    :global(.light .hljs-subst) {
        color: #24292e
    }

    :global(.light .hljs-section) {
        color: #005cc5;
        font-weight: 700
    }

    :global(.light .hljs-bullet) {
        color: #735c0f
    }

    :global(.light .hljs-emphasis) {
        color: #24292e;
        font-style: italic
    }

    :global(.light .hljs-strong) {
        color: #24292e;
        font-weight: 700
    }

    :global(.light .hljs-addition) {
        color: #22863a;
        background-color: #f0fff4
    }

    :global(.light .hljs-deletion) {
        color: #b31d28;
        background-color: #ffeef0
    }

</style>
