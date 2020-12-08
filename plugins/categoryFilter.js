import Vue from 'vue';

const categoryFilter = (unit) => {
  switch (unit) {
    case 'nail':
      return '指彩';
    case 'lip':
      return '唇彩';
    case 'blush':
      return '腮紅';
    default:
      return 'NA';
  }
};

Vue.filter('category', categoryFilter);
