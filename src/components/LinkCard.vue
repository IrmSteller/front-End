<template>
  <div>
      <b-card
       :title="name"
        img-src="../../public/favicon.ico"
        img-alt="job-info"
        img-top
        tag="article"
        style="max-width:10rem"
        class="mb-2"
        footer="Card Footer"      
      />
  </div>
</template>

<script>
export default {
  props: "name"
}
</script>

<style>

</style>