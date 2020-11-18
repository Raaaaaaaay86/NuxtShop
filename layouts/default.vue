<template>
  <div class="container mx-auto">
    <Navbar />
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
