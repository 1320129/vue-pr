<template>
  <div class="inputBox shadow">
      <input type="text" v-model="inputcont" @keyup.enter="search">
      <!-- <button @click="search">add</button> -->
      <span class="addContainer" @click="search">
          <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            inputcont:'',
        }
    },
    methods:{
        search:function(){
            this.$emit('addTodoItem',this.inputcont);
            this.clearinput();
        },
        clearinput:function(){
            this.inputcont = '';
        }
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background:white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float:right;
    background:linear-gradient(to right, #6478fb,#8763fb);
    display:block;
    width:3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:white;
    vertical-align: middle;
}
</style>