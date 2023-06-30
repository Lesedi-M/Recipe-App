<template>

    <div class="p-8 bg-orange-100 max-w-[1200px] mx-auto">
        <h1 class="text-4xl text-orange-500 font-bold mb-4">Ingredients</h1>
        
        <div class="pb-8 pt-2">
          
          <input type="text"
          v-model="keyword"
          class="rounded border-2 border-gray-300 w-full"
          placeholder="Search for Ingredients"
          
          />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from "../axiosClient";
import { computed  } from '@vue/reactivity'
import store from "../store";
import { useRouter } from "vue-router";

const router = useRouter();
const keyword = ref('');

const ingredients = ref([]);


const computedIngredients = computed(() => {
    if(!computedIngredients) return ingredients;

    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}


onMounted(() =>{
    axiosClient.get('list.php?i=list')
    .then(({data}) => {
        ingredients.value = data.meals;
    })
})

</script>
