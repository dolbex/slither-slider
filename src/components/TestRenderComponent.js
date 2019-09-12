import TestComponent from './TestComponent.vue'

export default {
  name: 'TestRenderComponent',
  render (h, ctx) {
    return h(
      TestComponent,
      {
        props: {
          testProp: true,
        }
      })
  },
};