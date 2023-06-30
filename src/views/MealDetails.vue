<template >
<div class="bg-orange-100 h-full" >
    <div class="max-w-[800px] mx-auto bg-orange-100 p-8 ">
        <!-- <pre>{{ meal }}</pre> -->
        <h1 class="text-5xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full rounded-lg"/>
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
           <div>
           <strong font-bold>Category:</strong> {{ meal.strCategory }}
           </div> 
           <div>
            <strong font-bold>Area:</strong> {{ meal.strArea }}
           </div> 
           <div>
            <strong font-bold>Tags:</strong> {{ meal.strTags }}
           </div> 
        </div>
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul>
               <template v-for="(el, ind) of new Array(20)">
                <li v-if="meal[`strIngredient${ind + 1}`]">
               {{ ind +1}}. {{ meal[`strIngredient${ind + 1}`] }}
                </li>
               </template> 
            </ul>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-2">Measures</h2>
            <ul>
               <template v-for="(el, ind) of new Array(20)">
                <li v-if="meal[`strMeasure${ind + 1}`]">
               {{ ind +1}}. {{ meal[`strMeasure${ind + 1}`] }}
                </li>
               </template> 
            </ul>
        </div>
       
    </div>

    <div class="flex justify-between mt-4">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <a :href="meal.strSource" target="_blank" class="rounded py-2 px-2 border-double border-2 border-indigo-500 shadow-md bg-indigo-200 text-black hover:bg-indigo-500 hover:text-white transition-colors">
     View  Original Source
    </a>
       </div> 
    </div>

    
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() =>{
   axiosClient.get(`lookup.php?i=${route.params.id}`)  
   .then(({data}) =>{
   
    meal.value = data.meals[0] || {}
   } )
})


</script>