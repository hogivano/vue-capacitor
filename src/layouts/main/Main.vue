<template>
    <MainHeader/>
    <main>
      <router-view/>
    </main>
    <MainFooter />
</template>
<script>
import MainHeader from '@/layouts/main/MainHeader.vue';
import MainFooter from '@/layouts/main/MainFooter.vue';

export default {
  name: 'Main',
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>
