import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,

  state: {
    itemList: [
      {
        index: 0,
        name: "ADBE",
        companyName: "Adobe Syatem Inc",
        amount: 14528.4,
        amountParcent: 1.09,
        from: true,
        to: false,
        selected: false,
      },
      {
        index: 1,
        name: "ALL",
        companyName: "Allstate",
        amount: 20766,
        amountParcent: 1.02,
        from: true,
        to: false,
        selected: false,
      },
      {
        index: 2,
        name: "BK",
        companyName: "Bank New York Mellon",
        amount: 8024,
        amountParcent: 1.01,
        from: true,
        to: false,
        selected: false,
      },
      {
        index: 3,
        name: "BX",
        companyName: "Blackstone Group Inc",
        amount: 18420,
        amountParcent: 1.28,
        from: true,
        to: false,
        selected: false,
      },
      {
        index: 4,
        name: "CAT",
        companyName: "Caterpiller Inc",
        amount: 20955.6,
        amountParcent: 0.98,
        from: true,
        to: false,
        selected: false,
      },
      {
        index: 5,
        name: "CSGP",
        companyName: "Costar Group Inc",
        amount: 17414,
        amountParcent: 0.92,
        from: true,
        to: false,
        selected: false,
      },
    ],
    selectedItems: {
      fromItem: null,
      toItem: null,
    },
    header: {
      totalAmount: 21736048,
      diffAmount: 0,
      diffPercentAmount: 0,
      showPercent: true,
    },
  },
  getters: {
    diffPercentAmount: (state) => {
      if (state.selectItems) {
        const diffAmount =
          state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
        const diffAmountPercent =
          (diffAmount / state.selectItems.toItem.amount) * 100;
        return diffAmountPercent;
      }
    },
    diffAmount: (state) => {
      if (state.selectItems) {
        const diffAmount =
          state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
        return diffAmount;
      }
    },
  },
  mutations: {
    SELECT_FROM_ITEM: (state, index) => {
      const updatedItems = state.itemList.map((it, idx) => {
        if (idx === index) {
          it.selected = true;
          it.from = true;
          it.to = false;
          //
          if (!state.selectedItems.fromItem) {
            state.selectedItems.fromItem = it;
            console.log(
              "state.selectedItems.fromItem:: ",
              state.selectedItems.fromItem
            );
          }
        } else {
          it.to = true;
          it.from = false;
        }
        return it;
      });
      state.itemList = updatedItems;
    },
    SELECT_TO_ITEM: (state, index) => {
      const toItem = state.itemList[index];
      state.selectedItems.toItem = toItem;
      console.log("toItem:: ", toItem.amount);
      console.log(
        "state.selectedItems fromItem.amount:: ",
        state.selectedItems.fromItem.amount
      );

      const diffAmount = state.selectedItems.fromItem.amount - toItem.amount;
      const diffAmountPercent =
        (diffAmount / state.selectedItems.fromItem.amount) * 100;
      console.log("diffAmount:: ", diffAmount);
      console.log("diffAmountPercent:: ", diffAmountPercent);
      // state.obj = {...state, header: {...state.header, diffAmount: diffAmount,
      //     diffPercentAmount: diffAmountPercent}}
      state.header.diffAmount = diffAmount;
      state.header.diffPercentAmount = diffAmountPercent;

      console.log("state in SELECT_TO_ITEM:: ", state);
    },
    TOGGLE_PERCET_AMOUNT: (state) => {
      const locShowPercent = !state.header.showPercent;
      state.header = {...state.header, showPercent: locShowPercent};
    },
    ACCEPT: (state) => {
        let selList = [state.selectedItems.fromItem.name, state.selectedItems.toItem.name];
        console.log("selected List is ", selList);
        const filterdList = state.itemList.filter(item => {
            return !selList.includes(item.name);
        });
        state.itemList = [state.selectedItems.fromItem, state.selectedItems.toItem, ...filterdList]
        state.selectedItems = {};

    }
  },
  actions: {
    selectItem: (context, payload) => {
      if (!context.state.selectedItems.fromItem) {
        context.commit("SELECT_FROM_ITEM", payload);
      } else {
        context.commit("SELECT_TO_ITEM", payload);
      }
    },
    accept: (context) => {
        context.commit("ACCEPT");

    },
    togglePercentDisplay: (context) => {
      context.commit("TOGGLE_PERCET_AMOUNT");
    },
    moveSlider: (context, payload) => {},
  },
});
