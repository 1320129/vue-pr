<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="cleartodo">
          Clear All
      </span>
  </div>
</template>

<script>
export default {
    methods:{
        cleartodo(){
            this.$emit('allCleartodo')
        }
    }
}
</script>

<style scoped>
.clearAllContainer{
    width:8.5rem;
    height:50px;
    line-height:50px;
    background-color: #fff;
    border-radius: 5px;
    margin:0 auto;
}
.clearAllBtn{
    color:#e20303;
    display: block;
}
</style>