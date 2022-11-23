<template>
  <div>
    <div style="marginTop:20px">
      <EventClick/>
      <EventChange/>
    </div>
  </div>
</template>
<script>
import EventClick from './EventCilck.vue'
import EventChange from './EventChange.vue'

export default {
  name: 'EventPage',
  components: {
    EventClick,
    EventChange
  }
}
</script>
