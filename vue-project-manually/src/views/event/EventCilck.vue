<template>
  <div>
    <p>The counter is : {{counter}}</p>
    <button type="button" @click="increaseCounter">Add 1</button>
    <button type="button" @click="setCounter(7)">set 7</button>
    <button type="button" @click="one(counter), two(counter), over(counter)">Click</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    setCounter (counter) {
      this.counter += counter
    },
    one (number) {
      if (number === 1) {
        alert('One : ' + number)
      }
    },
    two (number) {
      if (number === 2) {
        alert('two : ' + number)
      }
    },
    over (number) {
      if (number !== 1 && number !== 2) {
        alert('reset : ' + number)
        this.counter = 0
      }
    }
  }
}
</script>
