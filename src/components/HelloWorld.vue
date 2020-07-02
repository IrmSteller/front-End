<template>
  <div class="hello">
    <b-container class='CardContainer'>
      <b-row align-v="center">
        <LinkCard v-bind="props"/>
      </b-row>
    </b-container>
    <div class="flex-container">
      <button @click="$router.replace('/mongo')">Button1</button>
     
    </div>  
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
      props:{name: "MongoDB", footer: "DB Example"},
      
    };
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container{
  flex-wrap: wrap;
  width: 200;
  display: flex;
  background-color: aquamarine;
}

.flex-container > button{
  margin: 10px;
  background-color: rgb(79, 175, 34);
  width: 100;
  height: 100;
}

</style>
