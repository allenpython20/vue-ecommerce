<template>
    <!-- Navbar section -->
<nav class="navbar navbar-expand-sm navbar-light bg-dark border-bottom"> 
    <router-link :to="{name:'shop-list'}" class="navbar-brand ml-2 font-weight-bold">
        <span id="burgundy">ZEAN</span><span id="orange">STORE</span>
    </router-link> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarColor">
        <ul class="navbar-nav">
            <li class="nav-item rounded bg-light search-nav-item"><input type="text" id="search" class="bg-light" placeholder="Buscar productos"><span class="fa fa-search text-muted"></span></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-user-o"></span><span class="text">Login</span></a> </li>
            <li class="nav-item">
                <router-link :to="{name:'cart-products'}" class="nav-link"><span class="fa fa-shopping-cart"></span><span class="text" >Cart</span></router-link> 
            </li>
        </ul>
    </div>
</nav>
<div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
</div>

</template>

<style scoped>
* {
    box-sizing: border-box
}

#search {
    outline: none;
    border: none;
    display: inline-block
}

#burgundy {
    color: rgb(153, 40, 59)
}

#orange,
select,
.btn {
    color: orange
}

.fa-search {
    font-size: 20px;
    padding: 10px;
    margin-bottom: 3px;
    padding-right: 20px
}

.search-nav-item {
    height: 40px
}

nav {
    padding: 10px 100px
}

.fa-user-o,
.fa-shopping-cart {
    font-size: 20px;
    padding: 4px;
    color:#fff
}

.form-group {
    margin-bottom: 5px
}

label {
    padding-left: 10px
}

.form-group:last-child {
    margin-bottom: 0
}

h6 {
    margin-bottom: 0px
}

#sort {
    outline: none;
    border: none
}

.btn {
    border: 1px solid orange;
    border-radius: 10px;
    background-color: #fff
}

.btn:hover {
    color: #fff;
    background-color: orange
}

.card-body {
    padding: 8px
}

.sign {
    width: 25px;
    height: 25px
}

.discount {
    border: 1px solid orange;
    border-radius: 5px;
    width: 65px;
    position: absolute;
    top: 2%
}

@media(min-width:1200px) {
    #search {
        width: 300px;
        padding: 5px;
        padding-left: 20px
    }

    .search-nav-item {
        margin-left: 400px;
        width: 350px
    }

    .fa-user-o {
        margin-left: 300px
    }

    .text {
        display: none
    }

    .fa-user-o,
    .fa-shopping-cart {
        font-size: 20px;
        padding-left: 20px
    }

    #sidebar {
        width: 30%;
        padding: 20px;
        float: left
    }

    #products {
        width: 70%;
        padding: 10px;
        margin: 0;
        float: right
    }

    .card {
        width: 300px;
        height: 330px;
        border: none
    }

    .card-img-top {
        width: 295px;
        height: 200px;
        border-radius: 10px
    }

    del {
        padding-right: 2px
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:992px) and (max-width:1199px) {
    #search {
        width: 300px;
        padding: 5px;
        padding-left: 20px
    }

    .search-nav-item {
        margin-left: 200px;
        width: 350px
    }

    .fa-user-o {
        margin-left: 160px
    }

    .text {
        display: none
    }

    #sidebar {
        width: 30%;
        padding: 20px;
        float: left
    }

    #products {
        width: 70%;
        padding: 10px;
        margin: 0;
        float: right
    }

    .card {
        width: 200px;
        height: 330px;
        border: none
    }

    .card-img-top {
        width: 200px;
        height: 200px;
        border-radius: 10px
    }

    .fa-plus,
    .fa-minus {
        font-size: 12px
    }

    .sign {
        height: 25px
    }

    .price {
        width: 99px
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:768px) and (max-width:991px) {
    #search {
        width: 300px;
        padding: 5px;
        padding-left: 20px
    }

    .search-nav-item {
        margin-left: 60px;
        width: 350px
    }

    .fa-user-o {
        margin-left: 80px
    }

    .text {
        display: none
    }

    #sidebar {
        width: 35%;
        padding: 20px;
        float: left
    }

    #products {
        width: 65%;
        padding: 10px;
        margin: 0;
        float: right
    }

    .card {
        border: none
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:576px) and (max-width:767px) {
    .text {
        display: none
    }

    .search-nav-item {
        margin-left: 35px;
        width: 270px
    }

    #search {
        width: 240px;
        padding: 5px;
        padding-left: 20px
    }

    .fa-search {
        padding: 3px;
        font-size: 18px
    }

    #sidebar {
        width: 40%;
        padding: 20px;
        float: left
    }

    #products {
        width: 60%;
        padding: 10px;
        margin: 0;
        float: right
    }

    .card {
        border: none
    }

    #off {
        padding-left: 2px
    }

    #sorting span,
    #res {
        font-size: 14px
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(max-width:575px) {
    .search-nav-item {
        margin: 0;
        width: 100%;
        margin-top: 10px
    }

    #search {
        width: 80%;
        padding-left: 10px;
        margin-top: 10px;
        padding-right: 10px
    }

    .fa-search {
        padding: 10px;
        font-size: 18px
    }

    #sidebar {
        display: none
    }

    .filter {
        margin-left: 70%;
        margin-top: 2%
    }

    #sorting,
    #res {
        font-size: 12px;
        margin-top: 2%
    }
}
</style>