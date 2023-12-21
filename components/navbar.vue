<template>
    <!-- <div class="BUNav">
        <nav class="bg-white border-gray-200 dark:bg-gray-900 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div></div>
                <nuxt-link to="/" class="flex items-center">
                    <LogoBUSmall />
                </nuxt-link>
                <div></div>
            </div>
        </nav>
        <nav class="bg-gray-50 dark:bg-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div></div>
                <div class="flex items-center">
                    <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <nuxt-link to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/About" class="text-gray-900 dark:text-white hover:underline" aria-current="page">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/FAQ" class="text-gray-900 dark:text-white hover:underline" aria-current="page">FAQ's</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/Schedule" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Schedule Now</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    </div> -->
    <div class="bg-JBlue-500">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
          >Jacqueline Valdes
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
      @click="toggleNav"
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <nuxt-link to="/" class="text-gray-100 hover:text-indigo-400" aria-current="page">Home</nuxt-link>
        <nuxt-link to="/Teaching" class="text-gray-100 hover:text-indigo-400" aria-current="page">Teaching</nuxt-link>
        <nuxt-link to="/About" class="text-gray-100 hover:text-indigo-400" aria-current="page">About</nuxt-link>
        <li class="text-gray-100 hover:text-indigo-400">Blogs</li>
        <li class="text-gray-100 hover:text-indigo-400">Contact Us</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>