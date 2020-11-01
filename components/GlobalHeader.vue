<template lang="pug">
v-app-bar(dark,fixed)
  v-tabs(centered,center-active,show-arrows)
    v-tab(
      v-for="(item, index) in tabItems",
      :key="index",
      :to="item.path"
    ) {{ item.label }}
</template>

<script>
export default {
  data: () => ({
    tabItems: [
      {
        label: 'HOME',
        path: '/',
      },
      {
        label: '講演一覧',
        path: '/lecture',
      },
      {
        label: 'よくある質問',
        path: '/faq',
      },
      {
        label: 'お問い合わせ',
        path: '/contact',
      },
    ],
  })
}
</script>
