<template>
  <div>

    <div id="accordion-flush" data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400">
      <div v-for="(question, index) in questions" :key="index">
        <h2 :id="`accordion-flush-heading-${index}`">
          <button type="button"
            class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            :data-accordion-target="`#accordion-flush-body-${index}`" aria-expanded="true" :aria-controls="`accordion-flush-body-${index}`">
            <span>{{question.question}}</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </h2>
        <div :id="`accordion-flush-body-${index}`" class="hidden" :aria-labelledby="`accordion-flush-heading-${index}`">
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">{{question.answer}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const runtimeConfig = useRuntimeConfig();

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const props = defineProps({
  contentfulFAQS: Object
});
const questions = props.contentfulFAQS;


</script>