<template>
  <v-footer
    padless
    height="90"
    color="frame"
  >
    <v-container fluid class="fill-height py-0">
      <v-row justify="center" align="center">
        <v-btn tile width="100" class="mx-1" color="box" @click='go(-1)'>
          <v-icon color="txtBox">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn tile width="100" class="mx-1" color="txtBox"  @click='go(1)'>
          <v-icon color="box">mdi-arrow-right</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  data () {
      return {
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }
  },
  methods: {
    go(num) {
      const that = this;
      const pages = that.$router.options.routes;
      const currentPage  = that.$route;
      let currentIndix = -1;
      for (let i = 0; i < pages.length; i++) {
        if (pages[i].name == currentPage.name) {
          currentIndix = i;
          break;
        }
      }

      // going forward to next page
      if (currentIndix > -1 && currentIndix < pages.length - 1 && num > 0) {
        that.$router.push({ name: pages[currentIndix + 1].name });
      }
      // going backward to previous page
      else if (currentIndix > 0 && num < 0) {
        that.$router.push({ name: pages[currentIndix - 1].name });
      }
      // going to first page
      else if (currentIndix >= pages.length - 1 && num > 0) {
        that.$router.push({ name: pages[0].name });
      }
      // going to last page
      else if (currentIndix == 0 && num < 0) {
        that.$router.push({ name: pages[pages.length - 1].name });
      }
    }
  }
}
</script>