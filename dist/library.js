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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*[data-v-5bf721a0],\n*[data-v-5bf721a0]::before,\n*[data-v-5bf721a0]::after {\n  box-sizing: border-box;\n  font-family: inherit;\n  margin: 0;\n  padding: 0;\n}\n*[data-v-5bf721a0]:placeholder-shown,\n*[data-v-5bf721a0]::before:placeholder-shown,\n*[data-v-5bf721a0]::after:placeholder-shown {\n  color: #ccc;\n}\n.text[data-v-5bf721a0] {\n  font-size: xx-large;\n  color: #f9be4c;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-5bf721a0";
script.__file = "src/SampleText.vue";

const plugin = {
  install (Vue) {
    Vue.component("SampleText", script);
  }
};

module.exports = plugin;
