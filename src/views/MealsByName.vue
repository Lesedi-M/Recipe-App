<template>


        <div class=" p-8 pb-0">
          
        <input type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-300 w-full"
        placeholder="Search for meals"
        @change="searchMeals"
        />
    </div>

   <Meals :meals="meals" /> 

</template>

<script setup>


import {onMounted ,ref } from 'vue';
import {useRoute} from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import {computed  } from '@vue/reactivity'
import YoutubeButton from '../components/YoutubeButton.vue'


const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);


 function searchMeals(){
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value);
    } else{
        store.commit('setSearchedMeals',[]);  
    }

 }

 onMounted(() =>{
     keyword.value = route.params.name
     if(keyword.value){
         searchMeals()
    }
 })



</script>
