<template>
  <div>
    <select v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">제주</option>
    </select>
    <div>
      <label><input v-model="citychk" type="checkbox" v-bind:value="'서울'">서울</label>
      <label><input v-model="citychk" type="checkbox" v-bind:value="'부산'">부산</label>
      <label><input v-model="citychk" type="checkbox" v-bind:value="'제주'">제주</label>
    </div>
    <div>
      <span>체크한 지역 : {{citychk}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      city: '03',
      citychk: []
    }
  }
}
</script>
