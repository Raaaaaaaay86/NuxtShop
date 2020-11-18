import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

VeeValidate.Validator.extend('required', {
  ...required,
  getMessage: (field) => `${field}不得為空`,
});

Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
