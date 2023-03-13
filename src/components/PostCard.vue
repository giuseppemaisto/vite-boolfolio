<script>
import { store } from '../store'
    export default{
        name: "PostCard",
        props:{
            post: Object,
            
        },
        data(){
            return{
                store
            }
        }
    }
</script>
<template>
    <div class="card d-flex flex-wrap">
        <div class="card-body">
            <div class="card-img-top d-flex justify-content-center">
                <img :src="post.cover_image != null ? `${BaseUrl}/storage/${post.cover_image}`: 'https://picsum.photos/200/300'" :alt="post.title" class="img-fluid">
            </div>
            <div class="card-title">
                <h3>{{ post.title }}</h3>
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
            <div class="card-text">
                <p>{{ post.description }}</p>
            </div>

            <div>
                <router-link :to = "{name: 'single-post', params:{slug:post.slug}}" class="btn btn-sm btn-success">leggil'articolo</router-link>
            </div>
        </div>
        
    </div>
</template>