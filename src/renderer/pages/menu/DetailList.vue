<template>
  <div>{{code}}</div>
</template>
<script>
import apis from '../../utils/apis.js';

export default {
  data() {
    return {
      code: 0,
      api: '',
    };
  },
  mounted() {
    this.code = this.$route.params.code;
    this.api = apis.detail + this.code + '.js';
  },
  computed: {},
  methods: {},
};

</script>
<style lang="less">
</style>
