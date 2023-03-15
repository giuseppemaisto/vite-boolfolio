<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Contacts',
    data(){
        return{
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: null
        }
    }, 
    methods:{
        sendForm(){
            const data={
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message
            }
            axios.post(`${this.store.BaseUrl}/api/contacts`, data).then((response) =>{
                if(!response.data.success){
                    this.errors = response.data.errors
                }
                else{
                    //nel caso vado a svuotare queste info 
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';

                }
            })
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row my-5">
            <div class="col-12">
                <h2 class="text-center my-5">pagina contatti</h2>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="text-center d-flex flex-column text-center">
                            <Div class="my-2">
                                <strong><i class="fas fa-map mx-2"> </i>indirizzo: </strong>
                                vianuovadiprova, 1, 80000, (PR)
                            </Div>
                            <div class="my-2">
                                <strong><i class="fas fa-book mx-2"> </i>partita IVA: </strong>
                               11122234456677
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="text-center">
                            <div class="my-2">
                                <strong><i class="fas fa-phone mx-2"> </i>telefono: </strong>
                               1234567891
                            </div>
                            <div class="my-2">
                                <strong><i class="fas fa-envelope mx-2"> </i>email: </strong>
                               maildiprova@mail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>    
            <div  class=" background-nav ">

              
                <div class="container">

             
                    <div class="col-12 my-5 ">
                        <h5 class="text-center text-white ">scrivici</h5>
                        <form @submit.prevent="sendForm">
                            <div class="row">
                                <div class="col-12 col-md-6 my-2">
                                    <label class="control-label text-white" for="nome">Nome</label>
                                    <input type="text" class="form-control" name="nome" id="nome" placeholder="nome" v-model="name">
                                </div>
                                <div class="col-12 col-md-6 my-2">
                                    <label class="control-label text-white" for="cognome">cognome</label>
                                    <input type="text" class="form-control" name="cognome" id="cognome" placeholder="cognome" v-model="surname">
                                </div>
                                <div class="col-12 col-md-6 my-2">
                                    <label class="control-label text-white" for="email">Email</label>
                                    <input type="mail" class="form-control" name="email" id="email" placeholder="emaiil" v-model="email">
                                </div>
                                <div class="col-12 col-md-6 my-2">
                                    <label class="control-label text-white" for="phone">telefono</label>
                                    <input type="phone" class="form-control" name="phone" id="phone" placeholder="phone" v-model="phone">
                                </div>
                                <div class="col-12 my-2">
                                    <label class="control-label text-white" for="messaggio">messaggio</label>
                                    <textarea class="form-control" name="messaggio" id="messaggio" placeholder="messaggio" v-model="message"></textarea>
                                </div>
                                <div class="col-12 my-2 text-center">
                                    <button type="submit" class="sand_email">Invia</button>
                                </div>

                            </div>
                            
                        </form>
                    </div>
                </div> 
            </div>
       
   
</template>

<style lang="scss" scoped>
        .background-nav{
        background-color:rgb(8, 133, 175) ;
    }
    .sand_email{
        background-color: white;
        color:rgb(8, 133, 175) ;
        border:none;
        padding: 10px 20px;

        &:hover{
            background-color:rgb(4, 98, 129)  ;
            color: white;
            width: 100px;
        }
    }
</style>