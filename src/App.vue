<template>
  <v-app>
    <!-- themes settings -->
    <template>
      <v-btn tile absolute right fab x-small @click="openThemeSet = true">
        <v-icon>mdi-cog-box</v-icon>
      </v-btn>
      <transition name="slideLeft">
        <themes-set v-if="openThemeSet">
          <template v-slot:closeBtn>
            <v-btn icon @click="openThemeSet = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </themes-set>
      </transition>
    </template>
    <top-bar></top-bar>
    <v-container fluid class="app-container px-0 pb-0 frame">
      <v-divider class="linesColorOut"></v-divider>
      <v-row>
        <v-col cols="12" :md="3" :lg="2">
          <info-bar></info-bar>
        </v-col>
        <v-col cols="12" :md="8" :lg="9" class="px-0">
          <v-sheet
            class="page-container overflow-hidden"
            color="box"
            flat
            width="100%"
            tile
          >
            <transition :name="transitionName">
              <router-view class="view"></router-view>
            </transition>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="1" class="px-0">
          <v-container class="fill-height">
            <v-row align="center" justify="space-around" class="fill-width">
              <v-col
                class="text-center"
                :cols="12"
                v-for="icon in icons"
                :key="icon"
              >
                <v-btn icon>
                  <v-icon size="24px" color="txtFrame">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="linesColorOut"></v-divider>
    <footer-layout></footer-layout>
  </v-app>
</template>

<script>
import topBar from "./layout/topBar.vue";
import footerLayout from "./layout/footerLayout.vue";
import infoBar from "./components/infoBar.vue";
import themesSet from "./components/themesSet.vue";
export default {
  name: "HomeView",
  components: {
    topBar,
    footerLayout,
    infoBar,
    themesSet,
  },
  data() {
    return {
      openThemeSet: false,
      transitionName: "slideLeft",
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      transitions: [
        "slideLeft",
        "slideRight",
        "slideTop",
        "slideBottom",
        "flipx",
        "flipy",
      ],
    };
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler() {
        let currentTrans = -1;
        for (let i = 0; i < this.transitions.length; i++) {
          if (this.transitions[i] == this.transitionName) {
            currentTrans = i;
            break;
          }
        }
        // going forward to next effect
        if (currentTrans > -1 && currentTrans < this.transitions.length - 1) {
          this.transitionName = this.transitions[currentTrans + 1];
        }
        // going to first effect
        else if (currentTrans >= this.transitions.length - 1) {
          this.transitionName = this.transitions[0];
        }
      },
    },
  },
  mounted() {},
};
</script>

<style lang="scss" src='@/assets/styles/globals.scss'></style>
