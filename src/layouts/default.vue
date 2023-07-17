<template>
    <div>
        <div class="flex flex-col min-h-screen">
            <slot />
            <Navbar />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/navbar.vue'
</script>
