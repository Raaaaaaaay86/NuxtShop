<template>
  <div class="container mx-auto">
    <img class="mx-auto my-4 cursor-pointer" width="150" height="40" :src="require('@/assets/svgs/logo.svg')" alt="">
    <Navbar class="sticky top-0 z-50" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>
