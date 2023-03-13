     
        <script>
        import { store } from '../store'
        import axios from 'axios'
        export default {
       
          data(){
            return{
                store,
                post: '',
                loading:true
            }
          }, 
          mounted(){
            this.loading = true;
            axios.get(`${store.BaseUrl}/api/posts/${this.$route.params.slug}`).then((response) =>{
                if(response.data.success){
                    this.post = response.data.post
                    this.loading = false
                }
                else{
                    
                }
                
            })
          }
        }
        </script>
        <template lang="">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between my-2">
                    <h2>{{post.title}}</h2>
                    <router-link :to="{name: 'post_list'}" class="btn btn-success">torna agli articoli </router-link>
                </div>
                <div class="cover_img">
                     <img :src="post.cover_image != null ? `${this.store.BaseUrl}/storage/${this.post.cover_image}` : 'https://picsum.photos/300/200'" class="img-fluid" alt="">
                </div>
                <div>
                    <p>
                        {{post.description}}
                    </p>
                </div>
                <div class="d-flex">
                    <strong>categoria:  </strong>
                    <p class="" v-if="post.type">
                        {{ post.type.name }}
                    </p>
                    <p v-else>
                        nessuna categoria selezionata
                    </p>
                </div>

            </div>
            
        </div>
     </template>
  
     <style lang="scss" scoped>
        .cover_img{
            width: 300px;
        }
     </style>