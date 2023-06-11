<template>
  <div
    class="portfolio overflow-auto fill-height box txtBox--text elevation-12"
  >
    <v-container class="px-6">
      <h1 class="main-heading text-center">Portfolio</h1>
      <v-tabs right background-color="transparent">
        <v-tab>Landscape</v-tab>
        <v-tab>City</v-tab>
        <v-tab>Abstract</v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <outlined-card>
                  <template v-slot:content>
                    <div class="pa-3">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${
                          i * n * 5 + 10
                        }`"
                        :lazy-src="`https://picsum.photos/10/6?image=${
                          i * n * 5 + 10
                        }`"
                        aspect-ratio="1"
                        max-height="200"
                      ></v-img>
                    </div>
                  </template>
                </outlined-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import outlinedCard from "@/components/outlinedCard.vue";
export default {
  name: "PortfolioView",
  components: { outlinedCard },
};
</script>

<style lang="scss">
</style>