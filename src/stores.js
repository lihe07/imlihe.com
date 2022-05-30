import {writable} from "svelte/store";


export const theme = writable(
    ["dark", "light"].includes(localStorage.getItem("theme")) ? localStorage.getItem("theme") : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
);

theme.subscribe(value => {
    localStorage.setItem("theme", value);
})

