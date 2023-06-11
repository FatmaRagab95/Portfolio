<template>
  <div
    class="contact-page overflow-auto fill-height frame txtFrame--text elevation-12"
  >
    <v-container class="px-6 box txtBox--text">
      <v-row align="center" class="px-6">
        <h1 class="main-heading mb-1">Contact Me</h1>
        <v-spacer></v-spacer>
        <v-divider
          v-if="$vuetify.breakpoint.mdAndUp"
          class="mx-3 linesColorIns"
          vertical
        ></v-divider>
        <div>
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
    </v-container>
    <v-divider class="linesColorIns"></v-divider>
    <div class="py-6">
      <v-sheet
        color="transparent"
        max-width="1000"
        class="mx-auto overflow-hidden"
      >
        <v-form>
          <v-container class="py-6" fluid>
            <outlined-card>
              <template v-slot:content>
                <v-card outlined flat tile color="transparent">
                  <div class="d-flex justify-space-between align-center">
                    <v-container fluid class="py-12">
                      <v-row>
                        <v-col cols="12" :md="6">
                          <v-text-field
                            outlined
                            label="Name"
                            required
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" :md="6">
                          <v-text-field
                            outlined
                            label="Email"
                            type="email"
                            required
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            rows="3"
                            outlined
                            label="Message"
                            required
                            hide-details
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-divider class="linesColorOut" vertical></v-divider>
                    <div class="ma-3">
                      <v-btn
                        x-large
                        tile
                        min-height="80"
                        color="txtBox"
                        class="box--text"
                      >
                        Send Message
                      </v-btn>
                    </div>
                  </div>
                </v-card>
              </template>
            </outlined-card>
          </v-container>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import outlinedCard from "@/components/outlinedCard.vue";
export default {
  name: "AboutView",
  components: { outlinedCard },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        msg: "",
      },
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
      },
    };
  },
  computed: {
    formIsValid() {
      let form = this.$refs.form;
      return form ? form.validate() : false;
    },
  },
};
</script>

<style lang="scss">
.contact-page {
  .map {
    min-width: 100%;
    min-height: 300px;
  }
}
</style>