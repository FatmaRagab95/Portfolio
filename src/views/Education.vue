<template>
  <div class="education overflow-auto fill-height box txtBox--text">
    <div class="education-item">
      <h3>Master of Science in Computer Science</h3>
      <p>
        Harvard University |
        <span class="frame txtFrame--text text-caption">2020-2022</span>
      </p>
    </div>
    <v-divider class="my-12 linesColorIns"></v-divider>
    <div class="education-item">
      <h3>Bachelor of Science in Computer Science</h3>
      <p>
        Stanford University |
        <span class="frame txtFrame--text text-caption">2016-2020</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationView",
  components: {},
};
</script>

<style>
.education {
  margin-top: 50px;
}
.education h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.education-item {
  margin-bottom: 20px;
}
.education-item h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.education-item p {
  font-size: 18px;
  margin: 0;
}
</style>