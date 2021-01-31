<template>
    <div id="item-list">
        <h2>Item List</h2>
        <ul>
            <li v-for="(item, index) in itemList">
                <div v-on:click="selectItem(index)">
                <div>
                <span class="name">{{ item.name }}</span>
                <span class="price">${{ item.amount }}</span>
                </div>
                <div>
                <span v-if="item.selected">selected:: {{item.selected}}</span>
                </div>
                <div v-if="item.from">
                    from
                </div>
                <div v-if="item.to">
                    to
                </div>

                </div>
            </li>
        </ul>
        <div>
            <span>Amount diff: {{header.diffAmount}} **</span>
            <span> Amount diff %: {{header.diffPercentAmount}} **</span>
            <span > Show Amount diff in percent: {{header.showPercent}}</span>
            <button v-on:click="togglePercentDisplay">toggle</button>
        <div v-if="selectedItems.fromItem">
            <h1>From</h1>
                {{selectedItems.fromItem.name}}

        </div>
        <div v-if="selectedItems.toItem"><h1>to</h1>
        <span>{{selectedItems.toItem.name}}</span>
        </div>
        
       
    </div>
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
        selectedItems(){
             return this.$store.state.selectedItems
        },
        header(){
            return this.$store.state.header
        },
        ...mapGetters([
            'diffPercentAmount'
        ])
    },
    methods: {
        ...mapActions([
            'selectItem',
            'togglePercentDisplay'
        ])
    }
}
</script>

<style scoped>
#item-list{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#item-list ul{
    padding: 0;
}
#item-list li{
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
