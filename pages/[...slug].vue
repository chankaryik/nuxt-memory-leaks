<template>
    <h1>hi leaks</h1>
    <pre>
        <code>
            {{ data }}
        </code>
    </pre>
</template>

<script lang="ts" setup>
interface Json {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
}

const head = useHead({
    title: 'Hi'
})
const { data } = await useFetch<Json>('/api/todos/1');

// console.log(data.value)

if (data.value === null) {
    throw createError({ statusCode: 404, message: 'Page not found', fatal: true })
} else {
    if (head) {
        head.patch({
            title: data.value.title
        })
    }
}
</script>