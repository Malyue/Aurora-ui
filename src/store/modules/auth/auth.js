import { defineStore } from 'pinia';

export const userStore = defineStore('counter',{
    state: ()=> ({
        count: 1,
    }),
    actions: {
        accumulate() {
            this.count++
        },
    },
});