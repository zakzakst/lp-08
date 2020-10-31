<template lang="pug">
v-app-bar(dark fixed)
  v-tabs(centered center-active show-arrows)
    v-tab(
      v-for="(item, index) in tabItems"
      :key="index"
    ) {{ item.label }}
</template>

<script>
export default {
  data: () => ({
    tabItems: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
      { label: 'Tab 4' },
      { label: 'Tab 5' },
      { label: 'Tab 6' },
    ],
  })
}
</script>
