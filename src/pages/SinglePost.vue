     
        <script>
        import { store } from '../store'
        import axios from 'axios'
        export default {
          name:'SinglePost',
          data(){
            return{
                store,
                post: null,
                loading:true
            }
          }, 
          mounted(){
            this.loading = true;
            axios.get(`${this.store.BaseUrl}/api/posts/${this.$route.params.slug}`).then((response) =>{
                this.post = response.data.post
            })
          }
        }
        </script>
        <template lang="">
        <div>
            <h2>dettaglio post</h2>
        </div>
     </template>
  
     <style lang="">
        
     </style>