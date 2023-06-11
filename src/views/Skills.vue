<template>
  <div
    class="skills overflow-auto fill-height box txtBox--text"
    style="height: 100%"
  >
    <v-container style="height: 100%">
      <div>
        <v-subheader class="main-font">
          Technical Skills <v-spacer></v-spacer>
          <span>({{ skills.length }})</span>
        </v-subheader>
        <v-divider class="mb-6"></v-divider>
        <v-row>
          <v-col
            cols="12"
            v-for="(skill, index) in skills"
            :md="index % 2 == 0 ? 7 : 5"
            :key="index"
            class="pb-0"
          >
            <div>
              <h3 class="text-body-1 mb-3">{{ skill.name }}</h3>
              <v-chip
                color="frame"
                class="text-caption pa-1"
                v-if="skill.category"
              >
                <v-chip outlined small color="txtFrame">
                  {{ skill.category }}
                </v-chip>
              </v-chip>
            </div>
            <v-slider
              readonly
              :value="skill.level"
              thumb-label="always"
              thumb-color="txtBox"
              hide-details
            >
              <template v-slot:thumb-label="{ value }">
                <span class="box--text"> {{ value + "%" }} </span>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </div>
      <div class="mt-12">
        <v-subheader class="main-font">
          Languages <v-spacer></v-spacer> <span>({{ languages.length }})</span>
        </v-subheader>
        <v-divider class="mb-6"></v-divider>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="(lang, index) in languages"
            :key="index"
            class="pb-0"
          >
            <div>
              <h3 class="text-body-1 mb-3">{{ lang.name }}</h3>
            </div>
            <v-slider
              readonly
              :value="lang.level"
              thumb-label="always"
              thumb-color="txtBox"
              hide-details
            >
              <template v-slot:thumb-label="{ value }">
                <span class="box--text"> {{ value + "%" }} </span>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  data() {
    return {
      skills: [
        {
          name: "JavaScript",
          level: 80,
          category: "Frontend",
        },
        {
          name: "Typescript",
          level: 75,
          category: "Frontend",
        },
        {
          name: "Vue.js",
          level: 90,
          category: "Frontend",
        },
        {
          name: "Node.js",
          level: 70,
          category: "Backend",
        },
      ],
      languages: [
        {
          name: "Arabic",
          level: 100,
        },
        {
          name: "English",
          level: 80,
        },
        {
          name: "Spanish",
          level: 80,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skills .v-subheader {
  height: auto;
}
</style>