import Vue from 'vue';
import VModal from 'vue-js-modal'
import * as VueGoogleMaps from 'vue2-google-maps'

require('./bootstrap');
window.Vue = require('vue');
Vue.use(VModal, {componentName: "modal-window"});
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCIFdjyGMhSC5H2xakdJljEPMlacPVgFpw',
        libraries: 'places',
    },
});
Vue.component('google-map', require('./components/GoogleMap.vue'));
Vue.component('presentation', require('./components/Presentation.vue'));
Vue.component('services', require('./components/Services.vue'));
Vue.component('contact-section', require('./components/ContactSection.vue'));

const app = new Vue({
    el: '#app'
});
