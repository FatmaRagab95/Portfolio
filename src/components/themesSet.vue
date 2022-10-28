<template>
  <v-navigation-drawer right fixed class="theme-settings" width="340">
    <v-list-item>
        <v-list-item-title class="text-h6"> Color Settings </v-list-item-title>
        <v-list-item-icon>
            <slot name="closeBtn"></slot>
        </v-list-item-icon>
    </v-list-item>

    <v-divider></v-divider>

    <div class="text-center">
        <h3 class="text-caption my-2">Choose Theme</h3>
        <template v-for="theme in Object.keys(themesOriginal)">
          <v-btn
              tile
              x-small
              :key="theme + '-theme'"
              :color="themesOriginal[theme].frame"
              class="ma-1 px-0"
              height="25"
              min-width="25"
              @click="changeTheme(theme)"
              elevation="1"
          >
            <v-icon :color="themesOriginal[theme].box">mdi-rectangle</v-icon>
          </v-btn>
        </template>
    </div>
    <!-- change current theme -->

    <v-divider class="my-3"></v-divider>
    <!-- frame Color -->
    <div class="text-center">
        <h3 class="text-caption my-2">
          Frame Color
          <v-btn
            tile
            x-small
            :color="currentTheme.frame"
            class="mx-1 px-0"
            height="25"
            min-width="25"
            :elevation="1"
            >
            </v-btn>
        </h3>
        <template v-for="(color , i) in frameSuggested">
            <v-btn
            x-small
            :key="color + i + '-frame'"
            :color="color"
            class="mx-1 px-0"
            height="25"
            min-width="25"
            rounded
            @click="currentTheme.frame = color"
            :elevation="1"
            >
            </v-btn>
        </template>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="color-pick ma-1 px-0"
                color="transparent"
                v-bind="attrs"
                v-on="on"
                x-small
                height="25"
                min-width="25"
                rounded
                elevation="0"
              >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-color-picker
            dot-size="25"
            swatches-max-height="200"
            v-model="currentTheme.frame"
            ></v-color-picker>
        </v-menu>
    </div>

    <v-divider class="my-3"></v-divider>
    <!-- text insides frame -->
    <div class="text-center">
      <h3 class="text-caption my-2">
        Frame Text
        <v-btn
          tile
          x-small
          :color="currentTheme.frame"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          :elevation="1"
        >
          <span :style="{color: currentTheme.txtFrame}">ABC</span>
        </v-btn>
      </h3>
      <template v-for="(color, i) in txtSuggested">
        <v-btn
          rounded
          x-small
          :key="color + i"
          :color="color"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          @click="currentTheme.txtFrame = color"
          :elevation="1"
        ></v-btn>
      </template>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="color-pick ma-1 px-0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
            x-small
            height="25"
            min-width="25"
            rounded
            elevation="0"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          dot-size="25"
          swatches-max-height="100"
          v-model="currentTheme.txtFrame"
          dense
        ></v-color-picker>
      </v-menu>
    </div>

    <v-divider class="my-3"></v-divider>
    <!-- lines Outside Color -->
    <div class="text-center">
      <h3 class="text-caption my-2">
        Frame Lines
        <v-btn
          tile
          x-small
          :color="currentTheme.frame"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          :elevation="1"
        >
          <v-icon :color="currentTheme.linesColorOut">mdi-minus</v-icon>
        </v-btn>
      </h3>
      <v-sheet color="transparent" max-width="230" class="mx-auto d-inline-block">
        <v-combobox
          dense
          outlined
          v-model="currentTheme.linesColorOut"
          :items="linesSuggested"
          class="mx-auto"
          single-line
          hide-details
        >
          <template v-slot:selection="{}">
            <v-sheet :color="currentTheme.frame" min-width="170" elevation="1" class="pa-2">
              <v-sheet :color="currentTheme.linesColorOut" min-width="160" height="2"></v-sheet>
            </v-sheet>
          </template>
          <template v-slot:item="{ item }">
            <v-sheet :color="currentTheme.frame" min-width="160" elevation="1" class="pa-2">
              <v-sheet :color="item" min-width="160" height="2"></v-sheet>
            </v-sheet>
          </template>
        </v-combobox>
      </v-sheet>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="color-pick mx-2 mb-3 px-0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
            x-small
            height="25"
            min-width="25"
            rounded
            elevation="0"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          dot-size="25"
          swatches-max-height="200"
          v-model="currentTheme.linesColorOut"
        ></v-color-picker>
      </v-menu>
    </div>

    <v-divider class="my-3"></v-divider>
    <!-- box Color -->
    <div class="text-center">
      <h3 class="text-caption my-2">
        Box Color
          <v-btn
              tile
              x-small
              :color="currentTheme.frame"
              class="mx-1 px-0"
              height="25"
              min-width="25"
              elevation="1"
          >
            <v-icon :color="currentTheme.box">mdi-rectangle</v-icon>
          </v-btn>
      </h3>
      <template v-for="color in boxSuggested">
        <v-btn
          rounded
          x-small
          :key="color + '-box'"
          :color="color"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          @click="currentTheme.box = color"
          :elevation="1"
        >
        </v-btn>
      </template>
      <!-- no color -->
      <template>
        <v-btn
          rounded
          x-small
          color="transparent"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          @click="currentTheme.box = currentTheme.frame"
          :elevation="1"
        >
          <v-icon>mdi-circle-opacity</v-icon>
        </v-btn>
      </template>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="color-pick ma-1 px-0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
            x-small
            height="25"
            min-width="25"
            rounded
            elevation="0"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          dot-size="25"
          swatches-max-height="200"
          v-model="currentTheme.box"
        ></v-color-picker>
      </v-menu>
    </div>

    <v-divider class="my-3"></v-divider>
    <!-- text insides box -->
    <div class="text-center">
      <h3 class="text-caption my-2">
        Box Text
        <v-btn
          tile
          x-small
          :color="currentTheme.box"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          elevation="1"
        >
          <span :style="{color: currentTheme.txtBox}">ABC</span>
        </v-btn>
      </h3>
      <template v-for="color in txtSuggested">
        <v-btn
          rounded
          x-small
          :key="color + '-txtbox'"
          :color="currentTheme.box"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          @click="currentTheme.txtBox = color"
          :elevation="1"
        >
          <span :style="{color: color}">ABC</span>
        </v-btn>
      </template>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="color-pick ma-1 px-0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
            height="25"
            min-width="25"
            rounded
            elevation="0"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          dot-size="25"
          swatches-max-height="100"
          v-model="currentTheme.txtBox"
          dense
        ></v-color-picker>
      </v-menu>
    </div>
    
    <v-divider class="my-3"></v-divider>
    <!-- lines insides box Color -->
    <div class="text-center mb-12">
      <h3 class="text-caption my-2">Box Lines
        <v-btn
          tile
          x-small
          :color="currentTheme.box"
          class="mx-1 px-0"
          height="25"
          min-width="25"
          :elevation="1"
        >
          <v-icon :color="currentTheme.linesColorIns">mdi-minus</v-icon>
        </v-btn>
      </h3>

      <v-sheet color="transparent" max-width="230" class="mx-auto d-inline-block">
        <v-combobox
          dense
          outlined
          v-model="currentTheme.linesColorIns"
          :items="linesSuggested"
          class="mx-auto"
          single-line
          hide-details
          label="Box Lines"
        >
          <template v-slot:selection="{}">
            <v-sheet :color="currentTheme.box" min-width="170" elevation="1" class="pa-2">
              <v-sheet :color="currentTheme.linesColorIns" min-width="160" height="2"></v-sheet>
            </v-sheet>
          </template>
          <template v-slot:item="{ item }">
            <v-sheet :color="currentTheme.box" min-width="160" elevation="1" class="pa-2">
              <v-sheet :color="item" min-width="160" height="2"></v-sheet>
            </v-sheet>
          </template>
        </v-combobox>
      </v-sheet>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="color-pick mx-2 mb-3 px-0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
            x-small
            height="25"
            min-width="25"
            rounded
            elevation="0"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          dot-size="25"
          swatches-max-height="100"
          v-model="currentTheme.linesColorIns"
          dense
        ></v-color-picker>
      </v-menu>
    </div>
  </v-navigation-drawer>
</template>
<script>
import Vue from 'vue';
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
        let that = this;
        Object.keys(that.currentTheme).map(x => {
          if (typeof that.currentTheme[x] == 'string' && x != "themeName") {
            that.currentTheme[x] = that.currentTheme[x].substring(0,7)
          }
        });
        this.changeTheme(this.currentName);
      },
    },
  },
  methods: {
    changeTheme(theme) {
      if (theme != this.currentName) {
        this.currentName = theme;
        this.currentTheme = this.themes[this.currentName];
      }
      if (theme != "dark") {
        this.$vuetify.theme.dark = false;
        this.$vuetify.theme.themes.light = this.currentTheme;
      } else {
        this.$vuetify.theme.dark = true;
        this.$vuetify.theme.themes.dark = this.currentTheme;
      }
    },
  },
  mounted() {
    this.currentName = this.$vuetify.theme.dark ? 'dark' : this.$vuetify.theme.themes.light.themeName;
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
  .color-pick {
    border: double 3px transparent;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, red, yellow, blue,);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
}
</style>