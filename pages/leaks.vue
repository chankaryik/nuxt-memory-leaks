<template>
    <h1>hi leaks</h1>
    <pre>
        <code>
            {{ data }}
        </code>
    </pre>
</template>

<script lang="ts" setup>
    const { data } = await useFetch('/api/todos/1');   
</script>