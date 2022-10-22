<template>
  <v-app>
      <top-bar></top-bar>
      <v-container fluid class="app-container px-0 pb-0 subColor">
        <v-divider></v-divider>
        <v-row>
          <v-col :cols="3" :lg='2'>
            <info-bar></info-bar>
          </v-col>
          <v-col :cols="8" :lg='9' class="px-0">
            <v-sheet class="page-container overflow-hidden"
             color="transparent" flat width="100%" tile>
              <transition :name="transitionName">
                <router-view class="view"></router-view>
              </transition>
            </v-sheet>
          </v-col>
          <v-col :cols="1" class="px-0">
            <v-container class='fill-height'>
              <v-row align='center' justify="space-around" class="fill-width">
                <v-col class='text-center' :cols="12" v-for="icon in icons" :key="icon">
                  <v-btn
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
        <v-divider></v-divider>
      <footer-layout></footer-layout>
  </v-app>
</template>

<script>
import topBar from './layout/topBar.vue';
import footerLayout from './layout/footerLayout.vue';
import infoBar from './components/infoBar.vue';
export default {
  name: 'HomeView',
  components: {
    topBar,
    footerLayout,
    infoBar
  },
  data () {
      return {
        transitionName:"",
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
        transitions: [
          "fade",
          "slideLeft",
          "slideRight",
          "slideTop",
          "slideBottom",
          "flipx"
        ]
      }
  },
  watch: {
    "$route": {
      immediate:true,
      deep:true,
      handler() {
        let random = Math.floor(Math.random() * (this.transitions.length - 0) + 0);
        this.transitionName = this.transitions[random]
      }
    }
  }
}
</script>

<style lang="scss" src='@/assets/styles/globals.scss'></style>
