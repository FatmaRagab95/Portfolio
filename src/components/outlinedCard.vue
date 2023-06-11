<template>
  <v-layout>
    <v-divider class="linesColorOut" vertical></v-divider>
    <v-flex grow>
      <v-divider class="linesColorOut"></v-divider>
      <slot name="content"></slot>
      <v-divider class="linesColorOut"></v-divider>
    </v-flex>
    <v-divider class="linesColorOut" vertical></v-divider>
  </v-layout>
</template>