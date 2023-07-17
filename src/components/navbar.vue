<template>
    <header id="navbar-header" ref="navbarHeaderRef" class="sticky top-0 z-30 bg-white shadow">
        <div class="relative">
            <nav
                aria-label="Global"
                class="flex items-center justify-between h-16 px-5 py-4 space-x-2 md:py-6 lg:h-auto md:h-20 lg:bootstrap-container"
            >
                <div class="flex lg:flex-1">
                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        Holiday Tours
                    </NuxtLink>
                </div>
                <template v-if="navigationItems && navigationItems.length > 0">
                    <template v-for="navItem in navigationItems">
                        <div 
                            v-if="navItem.items.length > 0" 
                            :key="navItem.key"
                        >
                            <p>{{ navItem.name }}</p>
                            <div class="p-3 space-y-1">
                                <template v-for="navSubItem in navItem.items" :key="navSubItem.key">
                                    <component
                                        :is="navSubItem.link ? NuxtLink : 'div'"
                                        href="#"
                                        active-class="text-brand-orange"
                                        class="relative flex p-4 space-x-6 font-semibold leading-6 rounded-lg group [&:not([aria-current])]:hover:bg-gray-50"
                                    >
                                        {{ navSubItem.title }}
                                        <span class="absolute inset-0" />
                                    </component>
                                </template>
                            </div>
                        </div>
                        <component
                            v-else
                            :is="navItem.link ? NuxtLink : 'div'"
                            href="#"
                            active-class="text-brand-orange"
                            class="text-sm font-semibold leading-6 uppercase hover:text-gray-400"
                        >
                            {{ navItem.link?.name }}
                        </component>
                    </template>
                </template>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useEventListener, useDebounceFn } from '@vueuse/core';

const { data: navigationSettings } = await useFetch(
    prependOrigin('/api/v1/navigation-settings', process.server), {
        key: 'navigation'
    }
);

const navigationItems = computed(() => navigationSettings.value?.data?.items);
const NuxtLink = resolveComponent('NuxtLink');

const route = useRoute();

const mobileMenuOpen = ref(false);
const navbarHeaderRef = ref();

const setCssVariables = () => {
    if (!navbarHeaderRef.value) return;
    const navbarHeaderComputedCss = window.getComputedStyle(navbarHeaderRef.value);

    const navbarHeaderHeight = navbarHeaderComputedCss.height || (navbarHeaderRef.value.clientHeight + (navbarHeaderRef.value.getBoundingClientRect().top)) + 'px';

    document.documentElement.style.setProperty('--navbar-header-height', navbarHeaderHeight);
}

// Execute setCssVariables when mounted
onMounted(() => {
    setCssVariables();
})

useEventListener('resize', useDebounceFn(setCssVariables, 150));
</script>
