<script setup lang="ts">
import { computed, ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxButton from 'devextreme-vue/button';

const props = defineProps({
  text: {
    type: String,
    default: 'count',
  },
});
const count = ref(0);
const buttonText = computed < string > (
  () => `Click ${props.text}: ${count.value}`
);
function clickHandler() {
  count.value += 1;
}
</script>
<template>
  <div>
    <DxButton
      :text="buttonText"
      @click="clickHandler"
    />
  </div>
</template>
