<script>
export default {
    name: 'NotFound'
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 my-5 text-center ">
                <h2>pagina non trovata</h2>
                <router-link :to="{name: 'post_list'}" class="btn btn-success">torna agli articoli </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>