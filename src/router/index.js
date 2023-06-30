import { createRouter,createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsbyLetter from '../views/MealsbyLetter.vue';
import MealsbyName from '../views/MealsbyName.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients  from '../views/Ingredients.vue';

const routes =[
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsbyName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsbyLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },
            {
                path: "/by-ingredient/:ingredient",
                name: "byIngredient",
                component: MealsByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ] 
    }  
    // },

    //  {
    //     path: "/guest",
    //     component: GuestLayout,
    //     children: [
            
    //     ]
    //  }
];


const router = createRouter({
    history: createWebHistory(),
    routes
    
})

export default router;