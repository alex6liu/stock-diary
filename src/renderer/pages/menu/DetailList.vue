<template>
  <div>{{code}}</div>
</template>
<script>

export default {
  data() {
    return {
      code: 0,
    };
  },
  mounted() {
    this.code = this.$route.params.code;
  },
  computed: {},
  methods: {},
};

</script>
<style lang="less">
</style>
