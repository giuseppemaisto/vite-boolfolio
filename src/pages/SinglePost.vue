     
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
                <div class="col-12">
                    <h2>{{post.title}}</h2>
                </div>
                <div class="cover_img">
                     <img :src="`${this.store.BaseUrl}/storage/${this.post.cover_image}`" class="img-fluid" alt="">
                </div>
                <div>
                    <p>
                        {{post.description}}
                    </p>
                </div>
            </div>
            
        </div>
     </template>
  
     <style lang="scss" scoped>
        .cover_img{
            width: 200px;
        }
     </style>