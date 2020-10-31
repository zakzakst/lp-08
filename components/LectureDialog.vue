<template lang="pug">
v-dialog(
  v-model="dialog",
  max-width="500",
  persistent,
  no-click-animation,
  @click:outside="hideDialog"
)
  v-card(v-if="dialogData")
    v-img.grey.white--text.align-end(
      height="120px",
      :src="dialogData.img"
    )
      template(v-slot:placeholder)
        v-row.fill-height.ma-0(align="center",justify="center")
          v-progress-circular(indeterminate,color="grey lighten-5")
    v-card-title {{ dialogData.title }}
    v-card-text
      p.mb-0.font-weight-bold 日時
      p 11月{{ dialogData.date }}日 {{ dialogData.startTime }} ～ {{ dialogData.endTime }}
      p.mb-0.font-weight-bold 登壇者
      p(v-html="dialogData.speaker")
      p.mb-0.font-weight-bold 講演概要
      p(v-html="dialogData.summary")
</template>

<script>
export default {
  props: ['dialog','dialogData'],
  methods: {
    hideDialog() {
      this.$emit('hideDialog');
    }
  }
}
</script>
