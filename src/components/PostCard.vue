<script>
    export default{
        name: "PostCard",
        props:{
            post: Object,
            BaseUrl: String,
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
                    <p class="badge " v-if="post.type">
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
                <a class="btn btn-success" href="#">leggi l'articolo</a>
            </div>
        </div>
        
    </div>
</template>