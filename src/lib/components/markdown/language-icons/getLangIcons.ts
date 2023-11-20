import { js, py, ts } from ".";
import { Svelte } from "$lib/components/site/icons";

interface LangIcons {
    [key: string]: any; // Add an index signature allowing any string key
}

const langIcons: LangIcons = {
    py: py,
    js: js,
    svelte: Svelte,
    ts: ts
};

export const getLangIcons = ({ lang }: { lang: string }) => {
    return langIcons[lang];
};
