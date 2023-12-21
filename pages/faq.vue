<template>
<div>
    <section>
            <div class="px-4 mx-auto max-w-screen-xl text-center pt-10 ">
                <h1 class="mb-4 text-4xl font-Gistesy tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
                    Frequently asked questions</h1>
            </div>
            <p class="mb-8 text-lg font-normal text-center text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Please feel free to call or email any questions to 210-XXX-XXXX if you cannot find an answer to your questions.
            </p>
        </section>

        <section class="bg-white dark:bg-gray-900" >
    <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-16" >
        <faq :contentfulFAQS="contentfulFAQS"/>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        </div>
    </div>
</section>
    
</div>
</template>

<script setup>



</script>