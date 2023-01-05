'use strict';

var vue = require('vue');

var script = {
  name: 'SampleText',
  components: {}
};

const _hoisted_1 = { class: "text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, "ライブラリ"))
}

script.render = render;
script.__scopeId = "data-v-5bf721a0";
script.__file = "src/SampleText.vue";

const plugin = {
  install (Vue) {
    Vue.component("SampleText", script);
  }
};

module.exports = plugin;
