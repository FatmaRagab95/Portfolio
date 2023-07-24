<template>
  <div class="about overflow-auto fill-height box txtBox--text elevation-12">
    <v-container class="px-6">
      <v-row align="center" class="px-6">
        <h1
          class="main-heading mb-1"
          :class="$vuetify.breakpoint.lgAndUp ? 'text-start' : 'text-center'"
        >
          About Me
        </h1>
        <v-spacer></v-spacer>
        <v-divider
          v-if="$vuetify.breakpoint.lgAndUp"
          class="mx-3 linesColorIns"
          vertical
        ></v-divider>
        <div>
          <div class="mb-2">
            <v-icon small class="mb-1" color="txtBox">mdi-cake</v-icon>
            <span class="font-weight-bold mx-3 text-caption"
              >Date Of Birth</span
            >
            <span>1/9/1995</span>
          </div>
          <div class="mb-2">
            <v-icon small color="txtBox">mdi-map</v-icon>
            <span class="font-weight-bold mx-3 text-caption">Address</span>
            <span>88 Some Street, Some Town</span>
          </div>
          <div class="mb-2">
            <v-icon small color="txtBox">mdi-email</v-icon>
            <span class="font-weight-bold mx-3 text-caption">E-mail</span>
            <span>email@example.com</span>
          </div>
          <div>
            <v-icon small color="txtBox">mdi-phone</v-icon>
            <span class="font-weight-bold mx-3 text-caption">Phone</span>
            <span>+0123 123 456 789</span>
          </div>
        </div>
      </v-row>
      <v-divider class="mb-8 mt-3 linesColorIns"></v-divider>
      <v-row justify="space-between">
        <v-col :cols="12" :md="7">
          <h2>Profile</h2>
          <v-divider class="mb-6 linesColorIns"></v-divider>
          <v-sheet max-width="700" color="transparent" class="txtBox--text">
            <p>
              Felis arcu fusce nisl mi mi nunc fusce et morbi cursus scelerisque
              magna quisque hendrerit ac portaest urna tristique tristique
              maximus pellentesque sit tincidunt sit suspendisse metus sit sit
              leo molestie mi nunc diam lorem tincidunt quisque pellentesque
              eget vel morbi scelerisque portaest quam proin eu et arcu aliquam
              tincidunt.
            </p>
            <p>
              Quam maecenas ut suspendisse molestie phasellus lorem arcu
              adipiscing arcu pellentesque ut facilisis felis portaest congue
              phasellus nec quam magna consectetur nisi metus tortor varius.
            </p>
          </v-sheet>
        </v-col>
        <v-col :cols="12" :md="4">
          <h2>What I Do</h2>
          <v-divider class="mb-6 linesColorIns"></v-divider>
          <v-row>
            <v-col :cols="6" :md="6">
              <div class="text-center">
                <v-avatar color="frame" size="70">
                  <v-img
                    :src="require('@/assets/imgs/code1.png')"
                    class="mx-auto"
                    max-width="60px"
                    contain
                    alt="Web Developing"
                  ></v-img>
                </v-avatar>
                <h4 class="mt-3">Web Developing</h4>
              </div>
            </v-col>
            <v-col :cols="6" :md="6">
              <div class="text-center">
                <v-avatar color="frame" size="70">
                  <v-img
                    :src="require('@/assets/imgs/design1.png')"
                    class="mx-auto"
                    max-width="60px"
                    contain
                    alt="Web Design"
                  ></v-img>
                </v-avatar>
                <h4 class="mt-3">Web Design</h4>
              </div>
            </v-col>
            <v-col :cols="6" :md="6">
              <div class="text-center">
                <v-avatar color="frame" size="70">
                  <v-img
                    :src="require('@/assets/imgs/seo.png')"
                    class="mx-auto"
                    max-width="60px"
                    contain
                    alt="SEO"
                  ></v-img>
                </v-avatar>
                <h4 class="mt-3">SEO</h4>
              </div>
            </v-col>
            <v-col :cols="6" :md="6">
              <div class="text-center">
                <v-avatar color="frame" size="70">
                  <v-img
                    :src="require('@/assets/imgs/data.png')"
                    class="mx-auto"
                    max-width="60px"
                    contain
                    alt="Data Structure"
                  ></v-img>
                </v-avatar>
                <h4 class="mt-3">Data Structure</h4>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
};
</script>

<style lang="scss">
</style>