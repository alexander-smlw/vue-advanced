import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './cart';
import products from './products';
import alerts from './alerts';
import user from './user';

import { addErrorHandler } from '@/api/http';

const store = new Vuex.Store({
	modules: {
		cart,
		products,
		alerts,
		user
	},
	strict: process.env.NODE_ENV !== 'production'
});

addErrorHandler(response => {
  let text = 'Ошибка ответа от сервера';
  
	if('vueAlert' in response.config){
		text += ` ${response.config.vueAlert}`;
  }
  
  const closable = response.config.vueErrorType !== 'critical'
  const timeout = closable ? 7000 : null
  
	store.dispatch('alerts/add', { type: 'error', text, timeout, closable});
	return { res: false };
});

export default store;