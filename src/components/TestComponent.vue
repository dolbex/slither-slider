<template>
  <div>
    This is a test component. Time is: {{ time }}
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'TestComponent',
  props: {
    testProp: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      time: new Date()
    }
  },
  mounted () {
    setInterval(() => {
      this.time = new Date()
    }, 1000);
  }
}
</script>