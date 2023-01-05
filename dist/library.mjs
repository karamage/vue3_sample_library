import { openBlock, createElementBlock } from 'vue';

var script = {
  name: 'SampleText',
  components: {}
};

const _hoisted_1 = { class: "text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, "ライブラリ"))
}

script.render = render;
script.__scopeId = "data-v-5bf721a0";
script.__file = "src/SampleText.vue";

const plugin = {
  install (Vue) {
    Vue.component("SampleText", script);
  }
};

export { plugin as default };
