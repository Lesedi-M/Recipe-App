<template>

     <header class="bg-white shadow-lg h-16 flex justify-between items-center px-3" id="head">
        <router-link :to="{name: 'home' }" class="inline-flex items-center px-5 gap-2 md-2 border-b-2 rounded text-orange-300 shadow-inner-indigo-600 border-indigo-200 transition ease-in-out duration-700 hover:bg-purple-100 font-bold text-3xl ">
                Home
            </router-link>
        <nav class="navbar">
            
            <div class="px-3 justify-between ">
               <router-link :to="{name: 'byName'}" class="px-2 gap-2 inline md-2 border-b-2 rounded shadow-inner border-indigo-200 transition ease-in-out duration-700 hover:bg-purple-100">
                Search Meals
               </router-link> 
               <router-link :to="{name: 'byLetter'}" class="px-2 gap-2 md-2  border-b-2 rounded shadow-inner border-indigo-200 transition ease-in-out duration-700 hover:bg-purple-100 ">
                Meals by Letter
               </router-link>

               <router-link :to="{name: 'ingredients'}" class="px-2 gap-2 md-2  border-b-2 rounded shadow-inner border-indigo-200 transition ease-in-out duration-700 hover:bg-purple-100">
                Meals by Ingredients
               </router-link> 
            </div>
        </nav>
            <div class="icons">
            <div class="fas fa-bars" id="menu-btn"  @click="toggleNavbar"></div>
           
        </div>
        
        </header>

</template>
<style>
    #head .icons div{
    height: 3.5rem;
    width: 3.5rem;
    line-height: 4.1rem;
    border-radius: .5rem;
    background: #eee;
    color: black;
    font-size: 2rem;
    margin-left: .3rem;
    cursor: pointer;
    text-align: center;
}

#menu-btn{
    display: none;
}

@media (max-width:768px){

#menu-btn{
    display: inline-block;
}



#head .navbar{
    position: absolute;
    top:10%; right:-120%;
    width:20rem;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    background: #fff;
}

#head .navbar.active{
    right:2rem;
    transition: .4s linear;
}

#head .navbar a{
    font-size: 1rem;
    margin:2rem 2.5rem;
    display: block;
}
}
</style>
<script setup>
function toggleNavbar(){
    const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('active');
}
</script>