<template>
    <a :href="href" target="_blank" class="rounded py-2 px-2 border-double border-2 border-red-500 shadow-md bg-red-300 hover:bg-red-500 hover:text-white transition-colors">
        <img src="/src/assets/youtube.svg" alt="" class="inline h-5 w-8 m-1">
    <slot></slot>
    </a>
</template>

<script setup>

const props = defineProps({
    href:String
})

</script>