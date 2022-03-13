<template>
    <header>
        <img class="logo" src="@/assets/logo.png" alt="">
        <nav>
            <ul class="nav-links">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Usuarios</a></li>
               
            </ul>
        </nav>
        <a class="cta" href="#"><button>Contact</button></a>
    </header>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252A;
}

li,a,button{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo{
    cursor: pointer;
    order: 3;
    margin-left: auto;
}

nav {
    order: 1;
}
.nav-links{
    list-style: none;
}

.nav-links li {
    display: inline-block;
    padding: 0 20px;
}

.nav-links li:nth-child(1) {
    padding: 0 20px 0 0;
}

.nav-links li a{
    transition: all 0.3s ease 0s;
}

.nav-links li a:hover{
    color: #0088a9;
}

.cta{
    order:2
}

button{
    padding: 9px 25px;
    background-color: rgba(0,136,169,1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

button:hover{
    background-color: rgba(0,136,169,0.8);
}

img{
    height: 50px;
}


</style>