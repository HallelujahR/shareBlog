<style scoped lang="scss">
@import "@/assets/css/index.scss";
</style>
<style>
body {
  background: white;
}
</style>

<template>
  <div id="index-father">
    <div id="index">{{user}}</div>
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

  },
  mounted: function () {
    var _this = this;
    _this.show = true;
  },
  methods: {

  }
}
</script>
