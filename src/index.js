import SampleText from'./SampleText.vue'

const plugin = {
  install (Vue) {
    Vue.component("SampleText", SampleText)
  }
}

export default plugin