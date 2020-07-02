<template>
  <div>
    <label>{{name}}</label>
      <b-card
       :title="name"
        img-src="../../public/kulturen.png"
        img-alt="job-info"
        img-top
        tag="article"
        style="max-width:10rem"
        class="mb-2"
        :footer="footer" 
      />
  </div>
</template>

<script>
export default {
  props: ["name", "footer"]
}
</script>

<style>

</style>