import { writable } from 'svelte/store';

type theme = 'light' | 'dark' | 'system';

export const openMobileMenu = writable<boolean>(false);
export const theme = writable<theme>();
export const searchOpen = writable<boolean>(false);
export const currentHeadingId = writable<string>('');