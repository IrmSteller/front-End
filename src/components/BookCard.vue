<template>
  <div>
      <label>{{name}}</label>
       <b-card
          :title="name"
          tag="article"
          style="max-width:20rem"
          class="mb-2"
          footer="footer"
        />
        <b-button @click="deleteBook($event)" variant="primary">Delete</b-button>
    </div>
</template>

<script>
export default {
    props: ["name"],
    
    methods:{
        deleteBook(event){
            event.preventDefault();
            this.$emit('deleteBook', {id:this.books.id})
        }
    }
    
}
</script>

<style>

</style>