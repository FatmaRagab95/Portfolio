<template>
    <v-app-bar
      absolute
      color="frame"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      height="80"
    >
      <v-container>
        <v-card max-width="500" flat color="transparent" class="mx-auto">
          <v-row justify="space-between" class="txtFrame--text" align="center">
            <transition name="fade" v-for="(item, i) in items" :key="i">
              <router-link :to='{name:item.name}' class="px-1" exact-active-class="txtBox box--text activeNav">
                <span class="d-block">{{item.title}}</span>
              </router-link>
            </transition>
          </v-row>
        </v-card>
      </v-container>
    </v-app-bar>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  data () {
    return {
        items: [],
        right: null,
    }
  },
  methods: {
    prepareNav() {
      const that = this;
      const pages = that.$router.options.routes;
      pages.map(x => {
        if (x.meta) {
          that.items.push({
            title: x.meta.title,
            name:x.name
          });
        }
      });
    }
  },
  mounted() {
    this.prepareNav();
  }
}
</script>