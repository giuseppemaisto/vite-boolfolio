<script>
    export default {
        name: 'Header',
        data(){
            return{
                menuItems : [
                    {
                        label: 'HomePage',
                        routeName: 'HomePage',
                       
                    }, 

                  
                ]
            }
        }
    }
    
  
</script>

<template>
    <nav class="navbar navbar-expand-md">
        <div class="container">
            <div class="navbar-brend">
                logo 
            </div>
            <div class="collapse navbar-collapse" id="NavbarSupportedContent">
                <ul class="navbar">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="{name: item.routeName}" class="nav-link">
                    {{ item.label }}
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</template>