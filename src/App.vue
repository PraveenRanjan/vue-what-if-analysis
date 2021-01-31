<template>
  <div id="app">
      <item-list></item-list>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue'

export default {
    name: 'app',
    components: {
        'item-list': ItemList,
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
