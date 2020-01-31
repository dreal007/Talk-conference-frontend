<template>
  <div class="">
    <!--<div class="jumbotron text-white shadow jumbotron-fluid" style="background-image: url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80);">-->
    <div class="jumbotron jumbotron-demo text-white shadow jumbotron-fluid">
      <div class="bg"></div>
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

    <section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>Fully Responsive</h3>
            <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Bootstrap 4 Ready</h3>
            <p class="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-check m-auto text-primary"></i>
            </div>
            <h3>Easy to Use</h3>
            <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container container-fluid my-5">
    <div class="row">
      <div v-for="talkItem in talks" class="col-sm-6 col-md-4 my-2">
        <div class="card">
          <img class="card-img-top img-fluid fixedHieght" v-bind:src="talkItem.image_url" alt="Card image cap">
          <div class="card-body fixedText">
            <h5 class="card-title">{{talkItem.name}}</h5>
            <p class="card-text">{{talkItem.description}}</p>
            <a href="#" class="btn btn-primary">View Attendees</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import {mapState, mapGetter, mapAction } from 'vuex';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
      ...mapState(['talks', 'talk_events']),

      getTalks(){
          this.$store.dispatch('get_talks')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .jumbotron-demo .bg{
  background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position : absolute;
  top: 76px;
  left: 0;
  width: 100%;
  min-height : 450px !important;
  opacity : 0.86;

  // -webkit-filter: blur(2px);
  //   -moz-filter: blur(2px);
  //    -o-filter: blur(2px);
  //    -ms-filter: blur(2px);
  //    filter: blur(2px);
     z-index : 1;
}

.jumbotron .container {
  position:relative;
  z-index:2;
}

header.masthead {
  position: relative;
  background-color: #343a40;
  background: url("../assets/banner.jpeg") no-repeat center center;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

header.masthead .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}

header.masthead h1 {
  font-size: 2rem;
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  header.masthead h1 {
    font-size: 3rem;
  }
}

.showcase .showcase-text {
  padding: 3rem;
}

.showcase .showcase-img {
  min-height: 30rem;
  background-size: cover;
}

@media (min-width: 768px) {
  .showcase .showcase-text {
    padding: 7rem;
  }
}

.features-icons {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.features-icons .features-icons-item {
  max-width: 20rem;
}

.features-icons .features-icons-item .features-icons-icon {
  height: 7rem;
}

.features-icons .features-icons-item .features-icons-icon i {
  font-size: 4.5rem;
}

.features-icons .features-icons-item:hover .features-icons-icon i {
  font-size: 5rem;
}

.testimonials {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.testimonials .testimonial-item {
  max-width: 18rem;
}

.testimonials .testimonial-item img {
  max-width: 12rem;
  box-shadow: 0px 5px 5px 0px #adb5bd;
}

.call-to-action {
  position: relative;
  background-color: #343a40;
  background: url("../assets/banner.jpeg") no-repeat center center;
  background-size: cover;
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.call-to-action .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}

footer.footer {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

img.fixedHieght{
  height : 200px;
}
div.fixedText {
  height : 220px;
}
</style>
