<template>
<div >
<section class="bg-white dark:bg-gray-900" >
    <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16" >
        <p class="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400" 
        v-for="(paragraph, index) in paragraphs" :key="index">{{paragraphs[index]}}</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        </div>
    </div>
</section>
</div>

</template>

<script setup>
const props = defineProps({
  contentfulData: Object
});
const paragraphs = props.contentfulData.welcomeParagraph;

</script>