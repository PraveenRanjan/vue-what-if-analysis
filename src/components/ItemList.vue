<template>
    <div class="main">
        <div class="wrapper">
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <p style="font-weight: bold; font-size: 25px; padding-left: 12px;">What- Analysis | $21,41,234 | <span style="font-size: 15px;">Account</span></p>
                </div>
                    <div v-if="selectedItems.toItem">
                          <button v-on:click="togglePercentDisplay">toggle</button>
                         
                          <span> Amount diff %: {{header.diffPercentAmount}} **</span>
                           <input type="range" v-model.number="header.diffPercentAmount">{{header.diffPercentAmount}}
                          <button v-on:click="accept">Accept</button>
                    </div>
                <div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input placeholder="Sort by Value" />
                </div>
            </div>
            <v-row>
                <v-col lg="10">
                    <v-row style="margin: 0px;">
                        <div class="card" v-for="(linkname,index) in itemList" :key="index">
                            <div v-on:click="selectItem(index)">
                            <v-row class="label">
                                <div><p style="font-weight: bold; font-size: 25px; padding-left: 12px;">{{linkname.name}}</p></div>
                                <div><span :data-letters="linkname.amountParcent"></span></div>
                            </v-row>
                            <div><p style="padding-left: 0.8rem;">{{ linkname.companyName }}</p></div>
                            <v-row class="label bottom">
                                <div v-if="linkname.from">
                                   <div class="chip">Form</div>
                                </div>
                                <div v-if="linkname.to">
                                     <div class="chip">To</div>
                                </div>
                                
                            </v-row>
                            </div>
                        </div>
                    </v-row>
                </v-col>
                <v-col lg="2">
                    <div class="card card-green">
                        <v-row class="">
                            <div><p style="font-weight: bold; font-size: 25px; padding-left: 27px;">CASH$</p></div>
                        </v-row>
                        <div><p style="padding-left: 0.8rem; margin-bottom: 0px;">Cash Account</p></div>
                        <div><p style="padding-left: 0.8rem;">$1,1178</p></div>
                        <v-row class="label bottom">
                            <div class="chip" style="background: #00968852;">From</div>
                        </v-row>
                    </div>

                    <div class="card card-green">
                        <v-row class="">
                            <div><p style="font-weight: bold; font-size: 25px; padding-left: 27px;">MM$</p></div>
                        </v-row>
                        <div><p style="padding-left: 0.8rem; margin-bottom: 0px;">Money Market</p></div>
                        <div><p style="padding-left: 0.8rem;">$1,1178</p></div>

                         
                        <v-row class="label bottom">
                            <div class="chip" style="background: #00968852;">From</div>
                        </v-row>
                    </div>

                    <div class="card card-blue">
                        <v-row class="">
                            <div><p style="font-weight: bold; font-size: 25px; padding-left: 27px; font-size: 18px;">ADD INSTRUMENT</p></div>
                        </v-row>

                        <v-row class="label bottom">
                            <div class="chip">+</div>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
            <!-- </div> -->
<!-- 
            <div id="item-list">
                <h2>Item List</h2>
                <div>
                    <span>Amount diff: {{header.diffAmount}} **</span>
                    <span> Amount diff %: {{header.diffPercentAmount}} **</span>
                    <span> Show Amount diff in percent: {{header.showPercent}}</span>
                    <button v-on:click="togglePercentDisplay">toggle</button>
                    <div v-if="selectedItems.fromItem">
                        <h1>From</h1>
                        {{selectedItems.fromItem.name}}
                    </div>
                    <div v-if="selectedItems.toItem">
                        <h1>to</h1>
                        <span>{{selectedItems.toItem.name}}</span>
                    </div>
                </div>
                <div>
                    <template>
                        <v-row dense>
                            <v-col class="col-12 col-sm-6" v-for="(linkname,index) in itemList" :key="index" :cols="flex">
                                <div v-on:click="selectItem(index)">
                                    <v-card style="margin: 8px; border: 2px solid black !important; border-radius: 10px; width: 250px;" id="card-hover">
                                        <v-img height="100px">
                                            {{linkname.name}}<span :data-letters="linkname.amountParcent"></span>
                                            <p>{{ linkname.companyName }}</p>
                                            <center>
                                                <v-card-title v-text="linkname.amount" class="card-title pt"></v-card-title>
                                            </center>
                                        </v-img>
                                        <div v-if="linkname.from">
                                            from
                                        </div>
                                        <div v-if="linkname.to">
                                            to
                                        </div>
                                    </v-card>
                                </div>
                            </v-col>
                        </v-row>
                    </template>
                </div>
            </div> -->
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
            'togglePercentDisplay',
            'accept'
        ])
    }
}
</script>

<style scoped>
    i {
        padding: 0.4rem;
        border: 1px solid;
        border-radius: 5px;
    }
    .main {
        background: #d3d3d336;
        padding: 1rem;
    }
    .card:hover {
        border: 4px solid black;
    }
    .card {
        width: 9rem;
        height: 9rem;
        border-radius: 20px;
        box-shadow: 3px 3px 7px 3px #8888884a;
        color: black;
        margin: 0.5rem;
    }
    .card-green {
        background: #5fe38dd1;
    }
    .card-blue {
        background: #3f51b5c7;
        color: white !important;
    }
    .label {
        color: black;
        justify-content: space-around;
    }
    .chip {
        background: #d3d3d345;
        border-radius: 12px;
        padding: 4px;
        margin-left: 1.7rem;
        margin-right: 1rem;
        font-size: 14px;
    }
    .bottom {
        position: absolute;
        bottom: 7px;
    }
    .wrapper {
        height: 100%;
        width: 100%;
        background: white;
        padding: 2rem;
        border-radius: 20px;
    }

    .message {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        bottom: 0;
        display: flex;
        color: #fff;
        padding: 0.5em;
    }

    #item-list {
        background: #fff8b1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #item-list ul {
        padding: 0;
    }
    #item-list li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }
    .price {
        font-weight: bold;
        color: #e8800c;
    }
    .selected {
        color: darkblue;
    }
    /* #product-list-one{
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
} */
    .selected {
        color: darkblue;
    }
    .pt {
        padding-top: 8px;
    }
    [data-letters]:before {
        content: attr(data-letters);
        font-size: 1em;
        width: 2.5em;
        height: 2.5em;
        float: right;
        line-height: 2.5em;
        text-align: center;
        border-radius: 50%;
        border: 3px solid;
        box-sizing: initial;
        background: blueviolet;
        color: white;
    }
    .card-title {
        font-weight: 400;
        /* padding-left: 27px !important; */
        justify-content: center !important;
        word-break: keep-all !important;
    }
    .add-plus-icon {
        color: #616161;
    }
    .avatar-icon {
        border-color: #3f51b5;
        background: white;
    }
    .link-icon {
        color: #e9aa22;
    }
    #card-hover {
        background: linear-gradient(to right, darkgray, white);
        /* background: linear-gradient(90deg, hsla(208, 67%, 81%, 1) 0%, hsla(37, 65%, 85%, 1) 50%, hsla(301, 65%, 83%, 1) 100%); */
    }
    #card-hover:hover {
        background: #ededed;
    }
    #card-hover:hover .link-icon {
        color: #e9aa22;
    }
    #card-hover:hover .avatar-icon {
        border-color: #3f51b5;
        background: white;
    }
    #card-hover:hover .card-title {
        color: #777777;
    }
    #card-hover:hover .add-plus-icon {
        border: none;
        border-radius: 100%;
        color: white;
        background: #3f51b5;
    }
</style>
