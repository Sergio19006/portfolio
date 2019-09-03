<template>
  <div class="container">
    <hooper :progress="true" :autoPlay="true" :playSpeed="2400">
      <slide class="slide">
          <img src="../assets/database.png" alt="databases">
          knowlege in SQL and no-SQL databases
      </slide>
       <slide class="slide">
        <img src="../assets/graduate.png" alt="devops">
        Computer Sciense degree
      </slide>
      <slide class="slide">
        <img src="../assets/devops.png" alt="devops">
        Continuous Integration with Travis CI
      </slide>
      <slide class="slide">
        <img class="vue" src="../assets/vuejs.png" alt="vuejs">
        Expirience with framework Vue and know all the lifecicle
      </slide>
      <slide class="slide">
        <img src="../assets/backend.png" alt="devops">
        Experience with API resful with NodeJS
      </slide>
      <slide class="slide">
        <img src="../assets/testing.png" alt="devops">
        Testing and good practices
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import 'hooper/dist/hooper.css';


export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
}

img {
  width: 120px;
  height: 120px;
  margin-top: 10px;
}

.vue{
  width: 120px;
  height: 90px;
  margin-top: 15px;
}

.slide {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>