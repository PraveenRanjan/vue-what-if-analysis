import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        itemList: [
            {
                index: 0,
                name: "ADBE",
                companyName: "Adobe Syatem Inc",
                amount: 14528.40,
                amountParcent: 1.09,
                from: true,
                to: false,
                selected: false
            },
            {
                index: 1,
                name: "ADBE",
                companyName: "Adobe Syatem Inc",
                amount: 14528.40,
                amountParcent: 1.09,
                from: true,
                to: false,
                selected: false
            }
        ],
        selectedItems: {
            fromItem: null,
            toItem: null
        },
        header: {
            
        }
    },
    getters: {
        diffPercentAmount: (state)  => {
            if(state.selectItems){
                const diffAmount = state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
                const diffAmountPercent = (diffAmount /state.selectItems.toItem.amount) * 100
                return diffAmountPercent;
            }
        },
        diffAmount: (state)  => {
            if(state.selectItems){
                const diffAmount = state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
                return diffAmount;
            }
        }

    },
    mutations: {
        SELECT_ITEM: (state, index) => {
            state.itemList[index].selected = true

        },

    },
    actions: {
        selectItem: (context, payload) => {
            context.commit('SELECT_ITEM', payload);
        },
    }
});
