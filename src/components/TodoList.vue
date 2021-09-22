<template>
  <div>
      <ul>
          <li v-for="(todoitem, index) in propsdata" v-bind:key="index" class="shadow">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoitem.complete}" @click="toggletodo(todoitem, index)"></i>
              <span v-bind:class="{textCompleted: todoitem.complete}">{{ todoitem.item }}</span>
              <span class="removeBtn" @click="removeTodo(todoitem.item, index)">
                  <i class="fas fa-trash-alt"></i>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        removeTodo:function(todoitem, index){
            this.$emit('removetodo',todoitem,index);
        },
        toggletodo:function(todoitem, index){
            this.$emit('toggletodoitem',todoitem, index)
        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding-left: 0;
    margin-top:0;
    text-align: center;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin:0.5rem 0;
    padding:0 0.9rem;
    background:#fff;
    border-radius: 5px;
}
.checkBtn{
    line-height: 45px;
    color:#62acde;
    margin-right: 5px;
}
.checkBtnCompleted{
    color:#b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color:#b3adad;
}
.removeBtn{
    cursor: pointer;
    margin-left:auto;
    color:#de4343;
}
</style>