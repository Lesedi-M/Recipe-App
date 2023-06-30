<template>
   
        <Navbar/>
        
       <main>
        <div class="max-w-[1200px] mx-auto">
           <router-view/> 
        </div>
       </main>

</template>
<style>
    
</style>
<script setup>
import Navbar from '../components/Navbar.vue';
import MobileMenu from '../components/MobileMenu.vue'


</script>