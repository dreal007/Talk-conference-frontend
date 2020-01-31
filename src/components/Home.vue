<template>
  <div class="" style="height : 50%;">
    <div class="jumbotron text-white shadow jumbotron-fluid" style="background-image: url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80);">
      <div class="container">
        <h2 class="mb-4 display-4">
          Intelligent Innovations Conference
        </h2>
        <p class="mb-4 lead display-5">
          Our aim is to make communication easier for your business so we've put together a list of useful talks and workshops for you to enhance your knowledge.
        </p>
        <a href="" class="btn btn-primary btn-lg">See Conference Talks</a>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .jumbotron {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height : 350px !important;
}
</style>
