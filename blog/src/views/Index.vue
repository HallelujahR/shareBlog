<style lang="scss">
@import "../assets/css/index.scss";
</style>
<template>
  <div id="index-body">
    <div>{{user}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    show: false,
    test: '1',
    percent: 0,
    a: null,
  }),
  computed: {
    ...mapState([
      'user'
    ]),
    ...mapActions([
      'setUser',
    ]),
  },
  created: function () {
    const _this = this;

  },
  mounted: function () {
    var _this = this;
    _this.show = true;
  },
  methods: {

  }
}
</script>
