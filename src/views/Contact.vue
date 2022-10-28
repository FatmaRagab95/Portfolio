<template>
  <div class="contact-page overflow-auto fill-height box txtBox--text elevation-12">
    <v-container class='px-6'>
        <v-row align="center" class="px-6">
            <h1 class="main-heading mb-1">Contact Me</h1>
            <v-spacer></v-spacer>
            <v-divider class="mx-3 linesColorIns" vertical></v-divider>
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
        <v-divider class="mb-8 mt-3 linesColorIns"></v-divider>
        <v-row justify="space-between">
            <v-col :cols='12' :md='7'>
                <v-sheet max-width="700" min-height="100%" color="transparent" class="txtBox--text">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30598058!2d-73.69949329518501!3d40.69714941153588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1666736000012!5m2!1sar!2seg" class="map" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-sheet>
            </v-col>
            <v-col :cols='12' :md='4'>
                <v-form
                ref="form"
                @submit.prevent="submit"
                >
                    <v-container fluid>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                v-model="contact.name"
                                :rules="rules.name"
                                color="primary"
                                label="First name"
                                required
                                outlined
                                dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                v-model="contact.email"
                                :rules="rules.name"
                                color="primary"
                                label="Last name"
                                required
                                outlined
                                dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                v-model="contact.msg"
                                color="primary"
                                label="Message"
                                outlined
                                dense
                                rows="4"
                                >
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        :disabled="!formIsValid"
                        color="primary"
                        type="submit"
                        >
                            SEND
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
    name: 'AboutView',
    components: {},
    data () {
      return {
        contact: {
            name:"",
            email:"",
            msg:""
        },
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
      }
  },
  computed: {
      formIsValid () {
        let form = this.$refs.form;
        return form ? form.validate() : false;
      },
    },
}
</script>

<style lang="scss">
    .contact-page {
        .map {
            min-width: 100%;
            min-height: 300px;
        }
    }
</style>