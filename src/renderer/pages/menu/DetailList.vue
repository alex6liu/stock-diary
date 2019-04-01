<template>
  <div>{{code}}</div>
</template>
<script>
import apis from '../../utils/apis.js';
import $ from 'jquery';

export default {
  data() {
    return {
      code: 0,
      api: '',
      data: null,
    };
  },
  mounted() {
    this.code = this.$route.params.code;
    this.api = apis.detail + this.code + '.js';
    $.ajax({
      type: 'get',
      async: false,
      url: this.api,
      cache: false,
      success: data => {
        console.log(data);
        // data = data.split('(')[1].split(')')[0];
        // data = JSON.parse(data);
        // name = data.name;
      },
    });
  },
  computed: {},
  methods: {},
};

</script>
<style lang="less">
</style>
