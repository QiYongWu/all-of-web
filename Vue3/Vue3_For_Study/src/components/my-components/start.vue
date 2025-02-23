<script>
export default{
    name : 'start',
    data:function(){
    return {
        name : 'Vue3',
        age : 6
    };
   },

   methods: {
    showInfo() {
      // alert 只能接收一个参数，建议拼接字符串
      alert(this.name + ', ' + this.age);
    },
    showName() {
      alert(this.name);
    }
  }
}
   

</script>

<template>
    
    <p>Hello {{ name }}</p>
    <p>age : {{ age }}</p>

    <button v-on:click = 'showInfo'>点我打印信息</button>
    <button v-on:click = 'showName'>点我打印名字</button>
    
</template>

<style>
</style>