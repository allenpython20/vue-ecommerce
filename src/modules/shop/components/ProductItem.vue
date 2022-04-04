<template>
    <div  class="col-md-4 col-sm-6">
        <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                <div class="inner">
                    <div class="main-img"><img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category"></div>
                    <div class="thumblist"><img src="https://i.imgur.com/ILEU18M.jpg" alt="Category"><img src="https://i.imgur.com/2kePJmX.jpg" alt="Category"></div>
                </div>
            </a>
            <div class="card-body text-center">
                <h4 class="card-title">{{product.name}}</h4>
                <p class="text-muted">Starting from ${{product.price}}</p>
                <a @click="$router.push( {name:'shop-product',params:{id:product.id}})" class="btn btn-outline-primary btn-sm"  data-abc="true">
                    Ver Producto
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            required:true
        }
    }
}
</script>

<style scoped>
body {
    background-color: #eee
}

.mt-100 {
    margin-top: 100px
}

.card {
    border-radius: 7px !important;
    border-color: #e1e7ec
}

.mb-30 {
    margin-bottom: 30px !important
}

.card-img-tiles {
    display: block;
    border-bottom: 1px solid #e1e7ec
}

a {
    color: #0da9ef;
    text-decoration: none !important
}

.card-img-tiles>.inner {
    display: table;
    width: 100%
}

.card-img-tiles .main-img,
.card-img-tiles .thumblist {
    display: table-cell;
    width: 65%;
    padding: 15px;
    vertical-align: middle
}

.card-img-tiles .main-img>img:last-child,
.card-img-tiles .thumblist>img:last-child {
    margin-bottom: 0
}

.card-img-tiles .main-img>img,
.card-img-tiles .thumblist>img {
    display: block;
    width: 100%;
    margin-bottom: 6px
}

.thumblist {
    width: 35%;
    border-left: 1px solid #e1e7ec !important;
    display: table-cell;
    width: 65%;
    padding: 15px;
    vertical-align: middle
}

.card-img-tiles .thumblist>img {
    display: block;
    width: 100%;
    margin-bottom: 6px
}

.btn-group-sm>.btn,
.btn-sm {
    padding: .45rem .5rem !important;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem
}
</style>