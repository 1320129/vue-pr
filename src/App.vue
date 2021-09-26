<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoitems" v-on:removetodo="removetodoone" 
    v-on:toggletodoitem="toggletodooneitem"></TodoList>
    <TodoFooter v-on:allCleartodo="cleartodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


export default {
  data(){
    return{
      todoitems:[],
    }
  },
  created(){
      for(let i = 0;localStorage.length > i; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoitems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
      }
  },
  methods:{
    addOneItem(todoval){
      console.log(todoval);
      let obj = {complete:false, item:todoval};
      localStorage.setItem(todoval,JSON.stringify(obj));
      this.todoitems.push(obj);
    },
    removetodoone(todoitem,index){
      localStorage.removeItem(todoitem);
      this.todoitems.splice(index,1);
    },
    toggletodooneitem(todoitem,index){
      this.todoitems[index].complete = !todoitem.complete;
      localStorage.removeItem(todoitem.item);
      localStorage.setItem(todoitem.item, JSON.stringify(todoitem));
    },
    cleartodo(){
      this.todoitems = [];
      localStorage.clear();
    }
  },
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color:#f6f6f6;
}
input{
  border-style:groove;
  width:200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
