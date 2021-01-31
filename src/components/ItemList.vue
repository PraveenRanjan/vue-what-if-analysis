<template>
    <div id="item-list">
        <h2>Item List</h2>
        <ul>
            <li v-for="item in itemList">
                <div v-on:click="selectItem(item.index)">
                <span class="name">{{ item.name }}</span>
                <span class="price">${{ item.amount }}</span>
                <span v-if="item.selected">{{item.selected}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        itemList(){
            return this.$store.state.itemList
        },
        ...mapGetters([
            'diffPercentAmount'
        ])
    },
    methods: {
        ...mapActions([
            'selectItem'
        ])
    }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
.selected {
    color: darkblue
}
</style>
