<template>
  <div class="">
  <section id="talkz" class="container container-fluid my-5">
    <h3 class="text-center mt-5 mb-2">Attendees registered</h3>
    <hr>
    <div class="row mt-5">
      <div v-if="Object.keys(talk).length" class="col-sm-12 col-md-8 offset-2 my-2">
        <div class="card">
          <img class="card-img-top img-fluid" v-bind:src="talk.image_url" alt="Card image cap">
          <div class="card-body fixedText">
            <h5 class="card-title">{{talk.name}}</h5>
            <p class="card-text">{{talk.description}}</p>
            <h6 class="card-text" style="opacity : 0.85;"><i class="fa fa-calendar-day"></i> {{talk.date | moment('dddd, MMMM Do YYYY')}}</h6>
            <h6 class="card-text" style="opacity : 0.85;"><i class="fa fa-clock"></i> {{talk.duration * 60000 | duration('humanize')}}</h6>
            <a v-on:click="remove_talk(talk._id)" class="btn btn-danger text-white mr-4">Remove Talk</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section  class="container container-md container-fluid">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">S/N</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="talk_events != undefined">
        <tr v-for="(talk_attendee, index) in talk_events.attendees">
          <th scope="row">{{index + 1}}</th>
          <td>{{talk_attendee.first_name}}</td>
          <td>{{talk_attendee.last_name}}</td>
          <td>{{talk_attendee.email}}</td>
          <td>{{talk_attendee.phone}}</td>
          <td>
            <button v-on:click="remove_attendee_from_talk(talk_events.talk_id, talk_attendee._id)" class="btn btn-danger text-white"><i class="fa fa-trash"></i> Delete</button>
          </td>
        </tr>
      </tbody>
      <p v-if="talk_events == undefined" class="lead my-5 mx-auto text-center">No registered attendee</p>
    </table>
  </section>
  </div>
</template>

<script>
import {mapState, mapGetter, mapAction } from 'vuex';
export default {
  name: 'ViewAttendees',
  props: {
    msg: String
  },

  methods: {
    getTalks(){
          this.$store.dispatch('get_talks')
      },

    getAttendees(){
          this.$store.dispatch('get_attendees')
      },  

    remove_talk(id){
        this.$http.delete('talks/'+ id).then((resp)=>{
             this.$store.dispatch('get_talks')
             this.$store.dispatch('get_talk_by_id', id)
             this.$toast.success('Removed talk successfully')
        }).catch((err)=>{
          console.log(err)
          this.$toast.info('Could not remove talk');
        })
    },

    get_talk_events(talk_id){
        this.$store.dispatch('get_talk_events', talk_id)
    },

    remove_attendee_from_talk(talk_id, attendee_id){
        const body = {
           talk_id : talk_id,
           attendees : attendee_id
        }

        console.log(body)

        this.$http.post('talk-events/remove', body).then((resp)=>{
            this.$toast.success('Attendee removed successfully');
            this.get_talk_events(talk_id);
        }).catch((err)=>{
          console.log(err)
          this.$toast.info('Could not remove attendee from talk');
        })
    } 
  },
  computed: {
      ...mapState([ 'talk', 'talks', 'talk_events', 'attendees']),
  },

  beforeMount() {
    
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
  height : 260px;
}
</style>
