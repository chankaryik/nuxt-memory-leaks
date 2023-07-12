<template>
	<h1>
		{{ data }}
	</h1>
</template>

<script setup lang="ts">
const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1');
</script>