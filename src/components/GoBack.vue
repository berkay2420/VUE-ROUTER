<template>
  <div class="go-back">
    <button @click="previous()">go back</button>
  </div>
</template>

<script>
export default{
  methods:{
    previous(){
      this.$router.back()
    }
  }
}
</script>