<script>
import axios from 'axios';
import PostCard from './PostCard.vue';
export default {
    name: "PostMain",
    components:{
        PostCard,
    },
    data(){
        return{
            posts: [],
            loading: true,
            BaseUrl:"http://127.0.0.1:8000"
        }
    },
    methods: {
        getPost(){
            this.loading = true,
            axios.get(`${this.BaseUrl}/api/posts`).then((response)=> {
                if(response.data.success){
                    this.posts = response.data.results;
                    this.loading = false
                }
                else{

                }
            });

        }
    },
    mounted(){
        this.getPost()
    }
};
</script>

<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>elenco progetti</h2>
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-center" v-if="loading == true">
                    <div class="loader"></div>
                </div>
                <div class="d-flex flex-wrap" v-else>
                    <div v-for="post in posts" :key= "post.id" >
                        <PostCard   :post="post" :BaseUrl="BaseUrl">
                       
                        </PostCard>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
