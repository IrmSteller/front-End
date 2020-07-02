<template>
  <div>    
    
    <button @click="this.fetchBooks">Refresh</button>
    <div id="container">
        <BookCard  v-for="book in books" :key="book._id" :name="book.name"
         
        />
        <b-card v-for="book in books" :key="book._id" :title="book.name"/>
    </div>
    <p></p>
  <form method="post" @submit.prevent="addBook">
    <label for="name">Name</label>
    <input type="text" name="name" v-model="name">
    <p></p>
    <label for="name">Price</label>
    <input type="text" name="name" v-model="price">
    <p></p>
    <label for="name">Quantity</label>
    <input type="text" name="name" v-model="quantity"> 
    <input type="submit" value="Add">
  </form>
  </div>
</template>

<script>
import MongoService from '../../services/MongoService';
import BookCard from '../BookCard';
export default {
  
  
  comments:{
    MongoService,
    BookCard
  },
  data(){
    return{
      name: '',
      price: 0,
      quantity: 0,     
      
      books:[]
    }
  },
  created(){
    this.fetchBooks()
  },
  methods:{
    fetchBooks(){
       MongoService.getAll()
         .then(res => {this.books = res.data})
         .catch(err => {console.log(err)})
    },
    addBook(){
   
      MongoService.addBook(this.name, this.price, this.quantity)
      .then(res => {console.log(res)})
      .catch(console.log("fehler"));
    },
    deleteBook(){
      MongoService.deleteBook()
    }
  }
}
</script>

<style>
    #container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 2px;
      border-color: black;
    }
   


</style>