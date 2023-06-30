<template>
    <div class="p-8 pb-0">
     <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
        <div class="flex flex-wrap justify-center gap-2 mt-2 w-full mb-6 p-8">
            
           <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
            {{ letter }}
           </router-link>
        </div>

      <Meals :meals="meals"/>  
</template>

<script setup>
import { onMounted, watch } from 'vue';
import MealItem from '../components/MealItem.vue';
import store from '../store';
import { useRoute } from 'vue-router';
import {computed  } from '@vue/reactivity';
import Meals from '../components/Meals.vue'

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)


watch(route , () =>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})


onMounted(() =>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>
