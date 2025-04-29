import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
    const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    })

    // Добавляем api в nuxtApp
    nuxtApp.provide('api', api)
})
