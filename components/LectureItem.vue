<template lang="pug">
v-card(
  hover,
  @click="showDialog(index)",
  :ripple="{ center: true }",
  height="100%"
)
  v-card-title {{ item.title }}
  v-card-subtitle 11月{{ item.date }}日 {{ item.startTime }} ～ {{ item.endTime }}
  v-card-text(v-html="item.speaker")
  v-divider
  v-card-text.py-2
    v-chip-group(column)
      v-chip(
        v-for="(category, categoryIndex) in item.categories",
        :key="categoryIndex",
        small,
        dark,
        :ripple="false"
      ) {{ category }}
</template>

<script>
export default {
  props: ['index','item'],
  methods: {
    showDialog(index) {
      this.$emit('showDialog', index);
    }
  }
}
</script>
