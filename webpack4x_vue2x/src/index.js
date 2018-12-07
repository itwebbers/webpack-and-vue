import Vue from 'vue';
import App from './App';

import './styles/index.css'

import './api/login'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});

if (module.hot) {
  module.hot.accept();
}