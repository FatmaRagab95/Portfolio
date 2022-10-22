<template>
  <div class="about overflow-auto fill-height">
    <v-container>
        <h1 class="main-heading mb-1">Experience</h1>
        <v-divider class="mb-6"></v-divider>
        <v-row justify="space-between">
            <v-col :cols='12' :md='7'>
                <v-sheet max-width="700" color="transparent">
                    <p>
                        Felis arcu fusce nisl mi mi nunc fusce et morbi cursus scelerisque magna quisque hendrerit ac portaest urna tristique tristique maximus pellentesque sit tincidunt sit suspendisse metus sit sit leo molestie mi nunc diam lorem tincidunt quisque pellentesque eget vel morbi scelerisque portaest quam proin eu et arcu aliquam tincidunt.
                    </p>
                    <p>
                        Quam maecenas ut suspendisse molestie phasellus lorem arcu adipiscing arcu pellentesque ut facilisis felis portaest congue phasellus nec quam magna consectetur nisi metus tortor varius.
                    </p>
                </v-sheet>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col :cols='12' :md='4'>
                <div class="mb-2">
                    <span class="font-weight-bold">Birthday</span>
                    <span class="mx-3">1/9/1995</span>
                </div>
                <div class="mb-2">
                    <span class="font-weight-bold">Country</span>
                    <span class="mx-3">UAE</span>
                </div>
                <div class="mb-2">
                    <span class="font-weight-bold">Address</span>
                    <span class="mx-3">88 Some Street, Some Town</span>
                </div>
                <div class="mb-2">
                    <span class="font-weight-bold">E-mail</span>
                    <span class="mx-3">email@example.com</span>
                </div>
                <div>
                    <span class="font-weight-bold">Phone</span>
                    <span class="mx-3">+0123 123 456 789</span>
                </div>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  components: {},
}
</script>

<style lang="scss">

</style>