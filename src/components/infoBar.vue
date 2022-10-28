<template>
    <div class="infoBar pt-12 text-center txtFrame--text">
        <v-card flat rounded="xl" class="img-box linesColorOut mx-auto overflow-hidden pa-1" width="160" height="160" color="transparent">
            <v-img :src='require("@/assets/imgs/person.jpg")' width="100%" height="100%"></v-img>
        </v-card>
        <h2 class="mt-6">Johnny Doe</h2>
        <span class="text-caption d-block">Front-end developer</span>
        <v-btn tile outlined color="txtFrame" class="mt-12">DownLoad CV</v-btn>
        <p class="text-body-2 mt-12 pt-12"> <v-icon color="txtFrame">mdi-copyright</v-icon> All rights reserved.</p>
    </div>
</template>

<style lang="scss">
    .infoBar {
    }
</style>