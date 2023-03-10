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
            BaseUrl:"http://127.0.0.1:8000",
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getPost(post_page){
            this.loading = true,
            axios.get(`${this.BaseUrl}/api/posts`, {params: {page: post_page}}).then((response)=> {
                if(response.data.success){
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false
                }
                else{

                }
            });

        }
    },
    mounted(){
        this.getPost(this.currentPage)
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
                <div class="col-12 d-flex  flex-wrap" v-else>
                    <div class="row">
                        <div class="col-4 " v-for="post in posts" :key= "post.id" >
                        <PostCard   :post="post" :BaseUrl="BaseUrl">
                       
                        </PostCard>
                    </div>
                    </div>
                   
                    
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center my-3">
                        <ul class="pagination">
                            <li :class="currentPage == 1 ? 'disabled' :'page-item'">
                            <button class="page-link btn btn-success" @click="getPost(currentPage - 1)">Prev</button>
                            </li>
                            <li :class="currentPage == i ? 'disabled' :'page-item'" v-for="i in lastPage">
                            <button class="page-link " @click="getPost(i)">{{ i }}</button>
                            </li>


                            <li :class="currentPage == lastPage ? 'disabled' :'page-item'">
                            <button class="page-link btn btn-success" @click="getPost(currentPage + 1)">next</button>
                            </li>
                        </ul>
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
