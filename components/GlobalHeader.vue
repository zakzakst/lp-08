<template lang="pug">
v-app-bar(dark,fixed)
  v-tabs(centered,center-active,show-arrows)
    v-tab(
      v-for="(item, index) in tabItems",
      :key="index"
    ) {{ item.label }}
</template>

<script>
export default {
  data: () => ({
    tabItems: [
      { label: 'HOME' },
      { label: '講演一覧' },
      { label: 'よくある質問' },
      { label: 'お問い合わせ' },
    ],
  })
}
</script>
