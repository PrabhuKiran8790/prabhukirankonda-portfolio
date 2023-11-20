import { writable, type Writable } from "svelte/store";

type theme = 'light' | 'dark' | 'system'

export const openMobileMenu: Writable<boolean> = writable(false)
export const theme: Writable<theme> = writable<theme>()
export const searchOpen: Writable<boolean> = writable(false)