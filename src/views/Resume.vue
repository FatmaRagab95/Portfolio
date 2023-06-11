<template>
  <div class="resume overflow-auto fill-height box txtBox--text elevation-12">
    <v-container fluid class="py-0 px-3" style="height: 100%">
      <v-row
        :align="showCards ? 'center' : 'none'"
        no-gutters
        style="height: 100%"
      >
        <v-scale-transition leave-absolute>
          <v-col cols="12" :md="showCards ? 12 : 4">
            <v-banner sticky elevation="0" tile>
              <v-container fluid class="mt-5">
                <v-scale-transition leave-absolute>
                  <h1
                    class="pb-9"
                    :class="{
                      'text-center': showCards,
                      'pt-6': !showCards,
                      'main-heading': showCards,
                      'main-font': !showCards,
                    }"
                    :style="{ fontSize: !showCards ? '4rem' : '6rem' }"
                  >
                    {{ showCards ? "Resume" : opendedSection }}
                  </h1>
                </v-scale-transition>
                <v-row class="pt-9">
                  <v-col
                    cols="12"
                    :md="showCards ? 4 : 12"
                    v-for="item in items"
                    :key="item.title"
                    :class="{ 'mx-0': !showCards }"
                  >
                    <v-layout>
                      <v-divider class="linesColorIns" vertical></v-divider>
                      <v-flex grow>
                        <v-divider class="linesColorIns"></v-divider>
                        <v-card
                          @click="openSection(item.title)"
                          outlined
                          flat
                          tile
                          color="transparent"
                        >
                          <div
                            class="d-flex flex-no-wrap justify-space-between align-center"
                          >
                            <v-flex grow>
                              <v-card-title class="text-h5">
                                {{ item.title }}
                              </v-card-title>
                              <v-scale-transition leave-absolute>
                                <div v-if="showCards">
                                  <v-divider class="linesColorIns"></v-divider>

                                  <v-card-subtitle>
                                    {{ item.subTitle }}
                                  </v-card-subtitle>

                                  <v-card-actions>
                                    <v-btn
                                      class="mx-2 mt-3"
                                      fab
                                      height="40px"
                                      right
                                      width="40px"
                                      @click="openSection(item.title)"
                                      depressed
                                      outlined
                                    >
                                      <v-icon>mdi-play</v-icon>
                                    </v-btn>
                                  </v-card-actions>
                                </div>
                              </v-scale-transition>
                            </v-flex>
                            <v-divider
                              class="linesColorIns"
                              vertical
                            ></v-divider>
                            <template v-if="showCards">
                              <v-avatar class="ma-3" size="80" color="frame">
                                <v-img
                                  :src="require('@/assets/' + item.avatar)"
                                  class="mx-auto"
                                  max-width="70px"
                                  contain
                                  alt="Web Developing"
                                ></v-img>
                              </v-avatar>
                            </template>
                            <v-slide-x-transition leave-absolute>
                              <div class="ma-3" v-if="!showCards">
                                <v-btn
                                  fab
                                  small
                                  color="red"
                                  @click="closeSection()"
                                  v-if="opendedSection == item.title"
                                  outlined
                                  class="mx-2"
                                  height="40px"
                                  right
                                  width="40px"
                                  depressed
                                >
                                  <v-icon>mdi-stop</v-icon>
                                </v-btn>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  height="40px"
                                  right
                                  width="40px"
                                  @click="openSection(item.title)"
                                  depressed
                                  outlined
                                  v-else
                                >
                                  <v-icon>mdi-play</v-icon>
                                </v-btn>
                              </div>
                            </v-slide-x-transition>
                          </div>
                        </v-card>
                        <v-divider class="linesColorIns"></v-divider>
                      </v-flex>
                      <v-divider class="linesColorIns" vertical></v-divider>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-container>
            </v-banner>
          </v-col>
        </v-scale-transition>
        <v-scale-transition leave-absolute>
          <v-col cols="1" v-if="!showCards" class="text-center">
            <v-container
              class="py-0 overflow-hidden"
              fluid
              style="height: 100%"
            >
              <v-divider class="py-3 linesColorIns" vertical></v-divider>
            </v-container>
          </v-col>
        </v-scale-transition>

        <v-slide-y-reverse-transition
          leave-absolute
          v-for="item in items"
          :key="item.title"
        >
          <template v-if="opendedSection === item.title">
            <v-col cols="12" :md="showCards ? 12 : 7">
              <v-container class="py-0" style="height: 100%">
                <v-layout style="height: 100%" align-center>
                  <v-flex>
                    <component class="py-3" :is="item.title"></component>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-col>
          </template>
        </v-slide-y-reverse-transition>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Skills from "./Skills.vue";
import Education from "./Education.vue";
import Experience from "./Experience.vue";
export default {
  name: "educationView",
  components: { Skills, Education, Experience },
  data() {
    return {
      opendedSection: "skills",
      showCards: true,
      items: [
        {
          title: "Skills",
          subTitle: "What can I do for you?",
          avatar: "imgs/code1.png",
        },
        {
          title: "Experience",
          subTitle: "What can I do for you?",
          avatar: "imgs/design1.png",
        },
        {
          title: "Education",
          subTitle: "What can I do for you?",
          avatar: "imgs/seo.png",
        },
      ],
    };
  },
  methods: {
    openSection(section) {
      this.opendedSection = section;
      this.showCards = false;
    },
    closeSection() {
      this.opendedSection = "";
      this.showCards = true;
    },
  },
};
</script>

<style lang='scss'>
.resume .v-banner__wrapper {
  padding: 0 !important;
}
</style>
