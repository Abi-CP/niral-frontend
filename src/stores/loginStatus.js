import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const isAdminLoggedIn = writable(false);
export const userDetailsStore = writable({});