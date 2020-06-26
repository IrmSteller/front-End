<template>
  <div class="hello">
    <b-container class='CardContainer'>
      <b-row align-v="center">
        <LinkCard />
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import LinkCard from './LinkCard'
export default {
  components:{
    LinkCard,
  },
  data(){
    return{
      name: "Mongo",
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
