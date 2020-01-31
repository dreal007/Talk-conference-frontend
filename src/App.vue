<template>
  <div id="app">
    <div id="nav container container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link to="/"><a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" width="120" height="50" alt="">
          </a></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about"><a class="nav-link">About</a></router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" data-toggle="modal" data-target="#createTalk">Create A Talk</a>
                  <a class="dropdown-item" data-toggle="modal" data-target="#createAttendee">Create An Attendee</a>
                  <a class="dropdown-item" data-toggle="modal" data-target="#addAttendee">Add Attendee To Talk</a>
                   <!--<a class="dropdown-item" href="#">Another action</a>
                   <div class="dropdown-divider"></div>
                   <a class="dropdown-item" href="#">Something else here</a>-->
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <!-- Modal -->
        <div class="modal fade" id="createTalk" tabindex="-1" role="dialog" aria-labelledby="createTalkLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Create a talk</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <form>
                    <div class="form-group align-content-center">
                        <label for="inputPassword5">Name</label>
                        <input type="text" id="name" v-model="new_talk.name" class="form-control" aria-describedby="nameHelpBlock" placeholder="Enter name of talk" required>
                        <!--<small id="nameHelpBlock" class="form-text text-muted">
                          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </small>-->
                    </div>
                    <div class="form-row align-content-center">
                        <div class="col-md-6">
                           <label>Category :</label>
                          <select id="category" class="form-control" v-model="new_talk.category" placeholder="Choose category" required>
                              <option disabled value="">Choose category</option>
                              <option value="Education">Education</option>
                              <option value="Engineering">Engineering</option>
                              <option value="Fintech">Fintech</option>
                              <option value="Health">Health</option>
                              <option value="Software Development">Software Development</option>
                              <option value="Transportation">Transportation</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                           <label>Duration in Mins:</label>
                            <input type="number" step="5" min="0" max="120" id="duration" class="form-control" placeholder="Set Duration" v-model="new_talk.duration" required>
                        </div>
                    </div>
                    <div class="form-row align-content-center my-3">
                        <div class="col-md-6">
                            <label>Date :</label>
                            <input type="date" value="2020-02-01" min="2020-02-01" 
                            id="date" class="form-control" placeholder="Set Date" v-model="new_talk.date" required>
                        </div>
                        <div class="col-md-6">
                            <label>Caption Image URL :</label>
                            <input type="url"
                            id="image_url" class="form-control" placeholder="Enter caption image url" v-model="new_talk.image_url" required>
                        </div>
                    </div>
                      <div class="form-group align-content-center">
                        <label>Description</label>
                        <textarea id="description" row="8" v-model="new_talk.description" class="form-control" placeholder="Describe Talk" required></textarea>
                    </div>    
                  </form>  
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="submit_talk(new_talk)" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="createAttendee" tabindex="-1" role="dialog" aria-labelledby="createAttendeeLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Create an Attendee</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <form>
                    <div class="form-group align-content-center">
                        <label for="inputPassword5">First Name</label>
                        <input type="text" id="first_name" v-model="new_attendee.first_name" class="form-control" placeholder="Enter first name" required>
                    </div>
                    <div class="form-group align-content-center">
                        <label for="inputPassword5">Last Name</label>
                        <input type="text" id="last_name" v-model="new_attendee.last_name" class="form-control" placeholder="Enter last name" required>
                    </div>
                    <div class="form-row align-content-center my-3">
                        <div class="col-md-6">
                            <label>Email :</label>
                            <input type="email" 
                            id="email" class="form-control" placeholder="Enter email" v-model="new_attendee.email" required>
                        </div>
                        <div class="col-md-6">
                            <label>Phone Number :</label>
                            <input type="text"
                            id="phone" class="form-control" placeholder="Enter phone number" v-model="new_attendee.phone" required>
                        </div>
                    </div>  
                  </form>  
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="submit_attendee(new_attendee)" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="addAttendee" tabindex="-1" role="dialog" aria-labelledby="createAttendeeLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Add an Attendee to Talk</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <form>
                    <div class="form-group align-content-center">
                        <label>Select Talk</label>
                        <select type="text" id="talk_id" v-model="add_attendee.talk_id" class="form-control" required>
                            <option v-for="talk in talks" v-bind:value="talk._id">{{talk.name}}</option>
                        </select>
                    </div>
                    <div class="form-group align-content-center">
                        <label>Select Attendee</label>
                        <select type="text" id="attendee" v-model="add_attendee.attendees" class="form-control" placeholder="Enter last name" required>
                            <option v-for="attendee in attendees" v-bind:value="attendee._id">{{attendee.first_name}} {{attendee.last_name}}</option>
                        </select>
                    </div>  
                  </form>  
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="add_attendee_to_talk(add_attendee)" data-dismiss="modal">Add Attendee</button>
              </div>
            </div>
          </div>
        </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetter, mapAction } from 'vuex';
export default {
  name : 'App',
  data : () => {
    return {
      new_talk : {},
      new_attendee : {},
      add_attendee : {}
    } 
  },

  methods: {
     submit_talk(talk){
        this.$http.post('talks', talk).then((resp)=>{
            console.log(resp)
            this.$store.dispatch('get_talks')
            this.$toast.success('Created talk successfully')
        }).catch((err)=>{
          console.log(err)
          this.$toast.info('Could not create talk');
        })
     },

    submit_attendee(attendee){
        this.$http.post('attendees', attendee).then((resp)=>{
            console.log(resp)
            this.$store.dispatch('get_attendees')
            this.$toast.success('Created attendee successfully')
        }).catch((err)=>{
          console.log(err)
          this.$toast.info('Could not create attendee');
        })
     },

     add_attendee_to_talk(attendees){
        this.$http.post('talk-events', attendees).then((resp)=>{
            this.$store.dispatch('get_talk_events', attendees.talk_id)
            this.$toast.success('Added attendee to talk successfully')
        }).catch((err)=>{
          console.log(err)
          this.$toast.info('Could not add attendee to talk');
        })
     }

  },

  computed: {
      ...mapState(['talks', 'talk_events', 'attendees']),
  },

}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
