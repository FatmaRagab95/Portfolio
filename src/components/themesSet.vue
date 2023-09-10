<template>
  <v-navigation-drawer right fixed class="theme-settings" width="340">
    <v-list-item>
      <v-list-item-title class="text-h6"> Choose Theme </v-list-item-title>
      <v-list-item-icon>
        <slot name="closeBtn"></slot>
      </v-list-item-icon>
    </v-list-item>

    <v-divider></v-divider>

    <v-container>
      <v-row dense>
        <v-col cols="6" v-for="theme in themesOriginal" :key="theme.themeName">
          <v-sheet outlined flat>
            <v-card
              @click="changeTheme(theme.themeName)"
              :class="
                currentName != theme.themeName ? 'elevation-0' : 'active-theme'
              "
              height="74"
              :color="theme.frame"
              outlined
              class="text-center"
            >
              <v-container fluid class="px-0">
                <v-divider
                  :style="{ borderColor: theme.linesColorOut }"
                ></v-divider>
                <v-row no-gutters>
                  <v-col cols="2" class="d-flex justify-end">
                    <v-divider
                      vertical
                      :style="{
                        borderColor: theme.linesColorOut,
                        borderWidth: '2px',
                      }"
                    ></v-divider>
                  </v-col>
                  <v-col cols="8">
                    <v-sheet :color="theme.box" flat width="100%" tile>
                      <h4
                        class="py-3 ma-0 px-0 main-font"
                        :style="{ color: theme.txtBox, fontSize: '12px' }"
                      >
                        {{ theme.themeName.replaceAll("_", " ") }}
                      </h4>
                    </v-sheet>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-start">
                    <v-divider
                      vertical
                      :style="{
                        borderColor: theme.linesColorOut,
                        borderWidth: '1px',
                      }"
                    ></v-divider>
                  </v-col>
                </v-row>
                <v-divider
                  :style="{ borderColor: theme.linesColorOut }"
                ></v-divider>
              </v-container>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
import Vue from "vue";
import colors from "@/assets/colors.json";
export default {
  name: "HomeView",
  data() {
    return {
      currentName: "light",
      currentTheme: {},
      themes: colors.colors,
      themesOriginal: {},
      frameSuggested: [],
      boxSuggested: ["#FFFFFF", "#000000", "#CCCCCC"],
      linesSuggested: ["#FFFFFF", "#333333", "#CCCCCC"],
      txtSuggested: ["#FFFFFF", "#000000"],
    };
  },
  watch: {
    currentTheme: {
      deep: true,
      handler() {
        if (this.currentTheme) {
          Object.keys(this.currentTheme).map((x) => {
            if (typeof this.currentTheme[x] == "string" && x != "themeName") {
              this.currentTheme[x] = this.currentTheme[x].substring(0, 7);
            }
          });
          this.changeTheme(this.currentName);
        }
      },
    },
  },
  methods: {
    changeTheme(theme) {
      if (theme != this.currentName) {
        this.currentName = theme.toLowerCase();
        this.currentTheme = this.themes[this.currentName];
      }
      if (theme != "dark" && theme != this.currentName) {
        this.$vuetify.theme.dark = false;
        this.$vuetify.theme.themes.light = this.currentTheme;
      } else if (theme != this.currentName) {
        this.$vuetify.theme.dark = true;
        this.$vuetify.theme.themes.dark = this.currentTheme;
      }
    },
  },
  mounted() {
    this.currentName = this.$vuetify.theme.dark
      ? "dark"
      : this.$vuetify.theme.themes.light.themeName;
    this.currentTheme = this.themes[this.currentName];
    Object.keys(colors.colors).map((x) => {
      const that = this;
      const theme = Object.assign({}, colors.colors[x]);
      Vue.set(that.themesOriginal, x, theme);
      that.frameSuggested.push(theme.frame);
    });
  },
};
</script>
<style lang="scss">
.theme-settings {
  .active-theme {
    box-shadow: 0 0 4px 2px #87e784 !important;
  }
  .color-pick {
    border: double 3px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(circle at top left, red, yellow, blue);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
  .theme-color-diagonal {
    overflow: hidden;
    height: 120px;
    &.mini {
      height: 40px;
    }
    > div {
      width: 117%;
      height: 100%;
      > div {
        display: inline-block;
        height: 100%;
        width: 25%;
        transform: skewX(-45deg);
        &:first-child {
          width: 50%;
        }
      }
    }
  }
}
</style>
