import Vue from 'vue';

require('./bootstrap');

window.Vue = require('vue');
Vue.component('presentation', require('./components/Presentation.vue'));
Vue.component('services', require('./components/Services.vue'));

const app = new Vue({
    el: '#app'
});
