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
            <div class="card-title d-flex">
                <h3>{{ post.title }}</h3>
            </div>
        </div>
        
    </div>
</template>