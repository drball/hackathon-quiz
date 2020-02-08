import { writable } from 'svelte/store';

export const user = writable(JSON.parse(localStorage.getItem("user")) || {
    'name': '',
    'color': '',
    'image': '',
    'configured': false
});

user.subscribe(val => localStorage.setItem("user", JSON.stringify(val)));
