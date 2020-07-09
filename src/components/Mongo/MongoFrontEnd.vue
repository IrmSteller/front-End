<template>
  <div>    
    
    <button @click="this.fetchBooks">Refresh</button>
    <input type="text" v-model="search">
    <div id="container">
      <b-container>
        <b-row align-v="center">
          <bookCard v-for="book in filterdItems" :key="book._id" :book="book"
          @deleteBook="deleteBook"
          />
        <!-- <b-card v-for="book in books" :key="book._id" :title="book.name"/> -->
        </b-row>
      </b-container>
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
  
  
  components:{
    BookCard
  },
  data(){
    return{
      name: '',
      search: '',
      price: 0,
      quantity: 0,     
      
      books:[{name: "hans", _id:10}, {name: "werner", _id:11}]
    }
  },
  created(){
    this.fetchBooks()
  },
  computed:{
    filterdItems(){
      return this.books.filter(book =>{
        return book.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
    }
  },
  methods:{

    async fetchBooks(){
      await MongoService.getAll()
         .then(res => {this.books = res.data})
         .catch(err => {console.log(err)})
    },
    async addBook(){
   
      await MongoService.addBook(this.name, this.price, this.quantity)
      .then(res => {console.log(res), this.fetchBooks();})
      .catch(console.log("fehler"));
      
    },
    async deleteBook(bookId){
      await MongoService.deleteBook(bookId)
      .then(this.fetchBooks())
      .catch(console.log("fehler"));
      
    }
  }
}
</script>

<style>
    #container{
      background-color: lightblue;
      margin: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 2px;
      border-color: black;
    }
   


</style>