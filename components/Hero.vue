<template>
  <div>


    <section
      class="bg-center bg-no-repeat bg-[url('https://www.nps.gov/common/uploads/banner_image/imr/homepage/67E3E3EF-A06E-4F2F-A504E53A3FEE635F.jpg')] bg-gray-400 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-Gistesy tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{{
          hero.heroText }}</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">{{ hero.heroSubtext }}</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

          <!-- Start SimplePractice Appointment-Request Widget Embed Code -->
          <a href="https://alexis-santiago.clientsecure.me"
            class="spwidget-button spwidget-button-wrapper inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-BUGreen-500 hover:bg-BUGreen-600 focus:ring-4 focus:ring-BUGreen-100 dark:focus:ring-BUGreen-800"
            data-spwidget-scope-id="8f670dae-55b3-4192-839c-f5e4e9ddb743" data-spwidget-scope-uri="alexis-santiago"
            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
            data-spwidget-scope-global data-spwidget-autobind>
            Request Appointment
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
          <!-- End SimplePractice Appointment-Request Widget Embed Code -->

            <nuxt-link to="/about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">Learn more</nuxt-link>


        </div>
      </div>
    </section>


  </div>
</template>
  
<script setup>

const props = defineProps({
  contentfulData: Object
});
const hero = props.contentfulData;

</script>