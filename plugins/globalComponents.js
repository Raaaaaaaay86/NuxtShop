import Vue from 'vue';
import sobutton from '@/components/UI/client/s-o-button';
import sbutton from '@/components/UI/client/s-button';

const components = {
  sobutton,
  sbutton,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
