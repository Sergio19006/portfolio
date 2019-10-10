<template>
  <div class="content has-text-centered is-blue">
    <figure class="image">
      <img src="../assets/emoji.png" alt="Me" />
    </figure>

    <h1 class="title">Junior Fullstack developer</h1>
    <h4>In my free time i like to learn all the about Javascript, Docker, testing and good practices.</h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  max-width: 300px;
}
h4 {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 4s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>