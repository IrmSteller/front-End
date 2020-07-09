<template>
  <div>
      <b-col>
       <b-card
          :title="book.name"
          img-src="../assets/kulturen.png"
          tag="article"
          style="max-width:20rem"
          class="mb-2"
          :footer="book.price"
        />
        <b-card-text> dskgfsdhgfiserhgirsegferg</b-card-text>
        <b-button @click="deleteBook()" variant="danger">Delete</b-button>
        </b-col>
    </div>
</template>

<script>
export default {
    props: ["book"],
    
    methods:{
        deleteBook(){
            // event.preventDefault();
            this.$emit('deleteBook', this.book._id)
        }
    }
    
}
</script>

<style>

</style>