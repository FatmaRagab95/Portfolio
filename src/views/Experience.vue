<template>
  <div class="experience overflow-auto fill-height box txtBox--text">
    <v-stepper v-model="step" class="elevation-0 transparent" v-if="false">
      <v-stepper-items class="elevation-0">
        <v-stepper-content
          v-for="(ex, i) in experinces"
          :key="`${ex.id}-content`"
          :step="i + 1"
        >
          <v-card color="transparent" flat max-width="700" class="txtBox--text">
            <h3 class="d-flex align-center">
              {{ ex.date }}
              <span class="mx-3">|</span>
              <span class="frame txtFrame--text text-caption">{{
                ex.address
              }}</span>
            </h3>
            <h2>{{ ex.position }}</h2>
            <p class="my-6">{{ ex.desc }}</p>
          </v-card>

          <v-btn
            absolute
            bottom
            right
            tile
            color="txtBox"
            @click="nextStep(i + 1)"
          >
            <span class="box--text">Next</span>
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
      <v-stepper-header flat class="elevation-0 mt-12">
        <template v-for="(ex, i) in experinces">
          <v-stepper-step :key="`${ex.id}-step`" :step="i + 1" editable>
            <span>{{ ex.date }}</span>
          </v-stepper-step>

          <v-divider
            v-if="(ex, i) !== experinces"
            :key="i"
            class="linesColorIns"
          ></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>

    <!-- timeline -->
    <template v-if="true">
      <v-timeline align-top :dense="$vuetify.breakpoint.mdAndDown">
        <v-timeline-item v-for="(ex, i) in experinces" :key="i" small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold`" v-text="ex.date"></span>
          </template>
          <v-card class="txtBox" outlined>
            <v-card-title class="text-body-2 box--text">
              {{ ex.position }}
              <span class="mx-2">|</span>
              {{ ex.company }}
            </v-card-title>
            <v-card-text class="pt-3 pb-3 box--text">
              <span>{{ ex.address }}</span>
              <p class="mb-0">{{ ex.desc }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "AboutView",
  components: {},
  data() {
    return {
      step: 1,
      experinces: [
        {
          id: 1,
          date: "2022",
          company: "Google",
          position: "Lead Ui/Ux Designer",
          address: "USA - NY",
          desc: "Sem scelerisque pellentesque maximus commodo metus leo erat felis nisl metus phasellus pellentesque amet maecenas elit accumsan sem urna maximus sit consectetur proin euismod elementum.",
        },
        {
          id: 2,
          date: "2021",
          company: "Yahoo",
          position: "Senior Ui/Ux Designer",
          address: "USA - NY",
          desc: "Maecenas portaest nulla et et accumsan id id tempus a quis bibendum a magna quis ipsum dolor felis varius et nunc diam eu sollicitudin eros.Felis molestie nisi suspendisse metus id ipsum elit bibendum urna lacus sed arcu phasellus quis tristique massa tristique lacus sem erat quam placerat rutrum enim.",
        },
        {
          id: 3,
          date: "2020",
          company: "Microsoft",
          position: "Junior Ui/Ux Designer",
          address: "USA - NY",
          desc: "Sem scelerisque pellentesque maximus commodo metus leo erat felis nisl metus phasellus pellentesque amet maecenas elit accumsan sem urna maximus sit consectetur proin euismod elementum.",
        },
        {
          id: 4,
          date: "2015",
          company: "Facebook",
          position: "Ui/Ux Designer Trainee",
          address: "USA - NY",
          desc: "Sem scelerisque pellentesque maximus commodo metus leo erat felis nisl metus phasellus pellentesque amet maecenas elit accumsan sem urna maximus sit consectetur proin euismod elementum.",
        },
      ],
    };
  },
  methods: {
    nextStep(n) {
      if (n == this.experinces.length) {
        this.step = 1;
      } else {
        this.step = n + 1;
      }
    },
  },
});
</script>

<style lang="scss">
</style>