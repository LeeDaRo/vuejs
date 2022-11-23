<template>
  <div>
    <div>
    <input type="number" v-model="numberModel" />
    </div>
    <div>
      <textarea v-model="textArea1"></textarea>
    </div>
    <div  style="marginTop:10px">
      <span>체크 박스</span>
      <DataBindingChk/>
    </div>
    <div style="marginTop:10px">
      <span>선택 박스</span>
      <DataBindingSelect/>
    </div>
    <div style="marginTop:10px">
      <span>라디오 박스</span>
      <DataBindingRadio/>
    </div>
    <div style="marginTop:10px">
      <span>버튼 바인딩 박스</span>
      <DataBindingButton/>
    </div>

  </div>
</template>
<script>
import DataBindingChk from './DataBindingChk.vue'
import DataBindingSelect from './DataBindingSelect.vue'
import DataBindingRadio from './DataBindingRadio.vue'
import DataBindingButton from './DataBindingButton.vue'

export default {
  name: 'DataBindingInput',
  components: {
    DataBindingChk,
    DataBindingSelect,
    DataBindingRadio,
    DataBindingButton
  },
  data () {
    return {
      numberModel: 3,
      textArea1: '여러줄을 입력할 수 있는 textarea'
    }
  }
}
</script>
