import Vue from 'vue';
import VModal from 'vue-js-modal'

require('./bootstrap');
window.Vue = require('vue');
Vue.use(VModal, {componentName: "modal-window"});
Vue.component('presentation', require('./components/Presentation.vue'));
Vue.component('services', require('./components/Services.vue'));

const app = new Vue({
    el: '#app'
});
