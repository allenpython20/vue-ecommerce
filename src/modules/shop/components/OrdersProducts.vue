<template>
    <h1>Mis compras</h1>
    <div v-if="myOrders"
        class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Nro de Orden</th>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <template  v-for="item in myOrders" :key="item.id">
                    <tr style="background-color:lightblue">
                        <td >{{ item.number }}</td>
                        <td>{{ item.createDate }}</td>
                        <td>{{ item.amount }}</td>
                    </tr>
                    <tr  v-for="detalle in item.detalles" :key="detalle.id">
                        <td>{{detalle.productName}}</td>
                        <td>{{detalle.amount}}</td>
                        <td>{{detalle.total}}</td>
                    </tr>
                </template>
                
                
    
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            myOrders:[]
        }
    },
    methods:{
        ...mapActions('shop',['loadOrderProducts']),

        async onLoadOrderProducts(){
            const {ok,data} = await this.loadOrderProducts()
            this.myOrders = data
            console.log(ok,data)
        }
    },
    created(){
        this.onLoadOrderProducts()
    }
    
}
</script>

