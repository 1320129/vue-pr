<template>
  <div>
      <ul>
          <li v-for="(todoitem, index) in todoitems" v-bind:key="index" class="shadow">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoitem.complete}" @click="toggletodo(todoitem, index)"></i>
              <span v-bind:class="{textCompleted: todoitem.complete}">{{ todoitem.item }}</span>
              <span class="removeBtn" @click="removeTodo(todoitem, index)">
                  <i class="fas fa-trash-alt"></i>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            todoitems:[],
        }
    },
    methods:{
        removeTodo:function(todoitem, index){
            localStorage.removeItem(todoitem);
            this.todoitems.splice(index,1);
        },
        toggletodo:function(todoitem){
            todoitem.complete = !todoitem.complete;
            localStorage.removeItem(todoitem.item);
            localStorage.setItem(todoitem.item, JSON.stringify(todoitem));
        }
    },
    created:function(){
        for(let i = 0;localStorage.length > i; i++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.todoitems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
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