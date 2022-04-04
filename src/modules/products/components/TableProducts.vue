<template>

<div class="container mt-2">
    <div class="row mb-3">
        <div class="col-sm-12 col-md-6 mb-xs-4 mb-sm-2 mb-md-0">
            <button @click="isOpen = true" type="button" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Producto</button>
        </div>
        <div class="col-sm-12 col-md-6">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar producto"
                v-model="term"
                
            >
        </div>
    </div>

    <div v-if="productsByTerm.length>0"
        class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Descripción</th>
                    <th>Price</th>
                    <th class="text-right">Amount</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in productsByTerm" :key="item.id">
                    <td><img :src="item.picture" alt=""></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.stock }}</td>
                    <td class="td-actions text-right">
                        <button  @click="openUpdateProduct(item.id,item.name,item.description,item.price,item.stock)" class="btn btn-success">
                            <i class="fas fa-edit"></i>
                        </button>&nbsp;
                        <button @click="onDeleteProduct(item.id)" class="btn btn-danger ml-2">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
    
            </tbody>
        </table>
    </div>

    <div v-else 
        class="alert-danger text-center mt-5 p-2">
        No se encontraron productos
    </div>
    <modal
        v-if="isOpen"
        @on:close="closeModal"
        >
        <template v-slot:header>
            <h2>Crear Producto</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="onCreateProduct" class="form">
                <div class="form-group">
                    <label for="inputEmail4">Nombre</label>
                    <input type="email" class="form-control" placeholder="Nombre del producto" v-model="product.name">
                </div>

                <div class="form-group pt-2">
                    <label for="inputAddress">Descripción</label>
                    <input type="text" class="form-control" placeholder="Descripción del producto" v-model="product.description">
                </div>
                <div class="form-group pt-2">
                    <label for="inputAddress2">Precio</label>
                    <input type="number" class="form-control" placeholder="Apartment, studio, or floor" v-model="product.price">
                </div>
                <div class="form-group pt-2">
                    <label for="inputAddress2">Cantidad</label>
                    <input type="number" class="form-control" placeholder="Apartment, studio, or floor" v-model="product.stock">
                </div> 
            </form>
        </template>
        <template v-slot:footer>
            <div class="form-group pt-2">
                <button @click="onCreateProduct" class="btn btn-success">Guardar</button>&nbsp;
                <button @click="closeModal"  class="btn btn-danger">Cerrar</button> 
            </div>
        </template>
    </modal>

    <modal
        v-if="isOpenEdit"
        @on:close="closeModalEdit"
        >
        <template v-slot:header>
            <h2>Editar Producto</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="onCreateProduct" class="form">
                <div class="form-group">
                    <label for="inputEmail4">Nombre</label>
                    <input type="email" class="form-control" placeholder="Nombre del producto" v-model="editProduct.name">
                </div>

                <div class="form-group pt-2">
                    <label for="inputAddress">Descripción</label>
                    <input type="text" class="form-control" placeholder="Descripción del producto" v-model="editProduct.description">
                </div>
                <div class="form-group pt-2">
                    <label for="inputAddress2">Precio</label>
                    <input type="number" class="form-control" placeholder="Apartment, studio, or floor" v-model="editProduct.price">
                </div>
                <div class="form-group pt-2">
                    <label for="inputAddress2">Cantidad</label>
                    <input type="number" class="form-control" placeholder="Apartment, studio, or floor" v-model="editProduct.stock">
                </div> 
            </form>
        </template>
        <template v-slot:footer>
            <div class="form-group pt-2">
                <button @click="ondUpdateProduct" class="btn btn-success">Guardar</button>&nbsp;
                <button @click="closeModalEdit"  class="btn btn-danger">Cerrar</button> 
            </div>
        </template>
    </modal>
</div>
</template>

<script>
import Modal from './Modal'
import Swal from 'sweetalert2'
import { mapGetters,mapActions } from 'vuex'
import {ref} from 'vue'

export default {
    components:{
        Modal
    },
    setup(){
        const isOpen = ref(false)
        const isOpenEdit = ref(false)
        return {
            isOpen,
            isOpenEdit,
            openModal: () =>  isOpen.value = true,
            closeModal: () => isOpen.value = false,
            openModalEdit: () =>  isOpenEdit.value = true,
            closeModalEdit: () => isOpenEdit.value = false
            
        }
    },
    methods:{
        ...mapActions('products',['loadProducts','deleteProduct','createProduct','updateProduct']),
        loadProductById(id){
            
            this.id = id
        },
        openUpdateProduct(id,name,description,price,stock){
            this.openModalEdit()
            this.editProduct.id = id
            this.editProduct.name = name
            this.editProduct.description = description
            this.editProduct.price = price
            this.editProduct.stock = stock
        },
        async ondUpdateProduct(){
            
            const {isConfirmed} = await Swal.fire({
                title: '¿Está seguro?',
                text: '¿Esta seguro de editar?',
                showDenyButton:true,
                confirmButtonText: 'Sí,estoy seguro'
            })

            if(isConfirmed){
                new Swal({
                    title:'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()

                await this.updateProduct(this.editProduct)
            
                Swal.fire('Editado','','success')
                this.closeModalEdit()
            }
            
        },
        async onCreateProduct(){
            new Swal({
                title:'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()
            await this.createProduct(this.product)
            this.product.name = ''
            this.product.description = ''
            this.product.price = 0
            this.product.stock = 0
            this.product.id = 0
            Swal.fire('Guardado','Se registro el producto con éxito','success')
            this.closeModal()
        },
        async onDeleteProduct(id){

            const {isConfirmed} = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrado,no se puede recuperar',
                showDenyButton:true,
                confirmButtonText: 'Sí,estoy seguro'
            })

            if(isConfirmed){
                new Swal({
                    title:'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()

                await this.deleteProduct(id)
            
                Swal.fire('Eliminado','','success')
            }      
        }
    },
    computed:{
        ...mapGetters('products',['getProductsByTerm']),
        productsByTerm() {
            return this.getProductsByTerm(this.term)
        }
    },
    data(){
        return {
            term:'',
            titleModal:'123',
            product:{
                id:0,
                name:'',
                description:'',
                price:0,
                stock:0,
            },
            editProduct:{
                id:0,
                name:'',
                description:'',
                price:0,
                stock:0,
            }
        }
    }
}
</script>


<style scoped>
img{
    height: 80px;
}
</style>