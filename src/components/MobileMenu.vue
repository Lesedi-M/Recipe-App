<template>
      <header class="header">
       

        <nav class="navbar">
            <router-link :to="{name: 'home' }" class="inline-flex items-center px-5 gap-2 md-2 border-b-2 rounded text-orange-300 shadow-inner-indigo-600 border-indigo-200 transition ease-in-out duration-700 hover:bg-purple-100 font-bold text-3xl ">
                Home
            </router-link>
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
.header .icons div{
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
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



.header .navbar{
    position: absolute;
    top:110%; right:-110%;
    width:30rem;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    background: #fff;
}

.header .navbar.active{
    right:2rem;
    transition: .4s linear;
}

.header .navbar a{
    font-size: 2rem;
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