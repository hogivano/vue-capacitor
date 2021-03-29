<template>
    <section>
        Here is testing for setup composition API
    </section>
</template>
<script type="ts">
export default {
  name: 'TestComponent',
  setup(props, context) {
    // eslint-disable-next-line no-console
    console.log('props', props);
    // eslint-disable-next-line no-console
    console.log('context', context);
  },
};
</script>
