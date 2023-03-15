<script>
export default {
    name:'ThankYou'
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 my-5 text-center ">
                <h2>Grazie per averci contattato</h2>
                <p>a breve ti ricontatteremo, intanto puoi contnuare a quarsdare gli altri progetti</p>
                <router-link :to="{name: 'post_list'}" class="btn btn-success">torna agli articoli </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>