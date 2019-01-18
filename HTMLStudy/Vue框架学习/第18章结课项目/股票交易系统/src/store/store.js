import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // ...
    state: {
        funds: 10000,
        stocks: [
            { id: 1, name: 'Bmw', price: 110 },
            { id: 2, name: 'Google', price: 200 },
            { id: 3, name: 'Apple', price: 260 },
            { id: 4, name: 'Twitter', price: 8 },
        ],
        ownerStocks: []
    },
    mutations: {
        buyStock: (state, {stockId, stockName, stockPrice, quantity}) => {
            const record = state.ownerStocks.find(element => element.id == stockId);
            if (record) {
                record.quantity += quantity;
            }else {
                state.ownerStocks.push({
                    id: stockId,
                    name: stockName,
                    price: stockPrice,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity;
        },
        sellStock: (state, {stockId, stockPrice, quantity}) => {
            const record = state.ownerStocks.find(element => element.id == stockId);
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            }else {
                state.ownerStocks.splice(state.ownerStocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity;
        },
        randomPrice: state=> {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.48));
            });
            state.stocks.forEach(stock => {
                state.ownerStocks.forEach(own => {
                    if (stock.name == own.name) {
                        own.price = stock.price;
                    }
                }); 
            })
        }        
    },
    getters: {
        stocks: state => {
            return state.stocks;
        },
        ownerStocks: state => {
            return state.ownerStocks;
        },
        funds: state => {
            return state.funds;
        }
    }
})