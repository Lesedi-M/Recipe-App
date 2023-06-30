<template>
      <div  class="bg-indigo-50 shadow-lg rounded-xl hover:scale-105 transition-all p-3">
            <router-link  :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
                <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded w-full h-60 object-cover"  />
            </router-link>
            <div>
                <h3 class="py-1 font-semibold text-yellow-600 ">{{ meal.strMeal }}</h3>
                <p> <p class="mb-4"> {{truncateWords(meal.strInstructions, 20) }}</p></p>
            <div class="py-4 flex justify-between">
             <YoutubeButton :href="meal.strYoutube"></YoutubeButton>

            </div>
            </div>
        </div>
</template>
<script setup>
import { truncateWords } from '../filters/truncateWords.js'
import YoutubeButton from './YoutubeButton.vue';
    const {meal} = defineProps({
        meal: {
            required: true,
            type: Object
        }
    })
</script>