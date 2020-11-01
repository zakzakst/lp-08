<template lang="pug">
div
  v-img(
    height="120"
    width="100%"
    :lazy-src="mainImgLazy"
    :src="mainImg"
  )

  v-container.pt-12
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h1.mb-4.text-center 講演一覧
        v-row(v-if="lectureItems")
          v-col(
            v-for="(item, index) in lectureItems",
            :key="index"
            cols="12",
            sm="6",
            lg="4",
          )
            lecture-item(
              :index="index"
              :item="item"
              @showDialog="showDialog"
            )
        v-row(v-else)
          v-col(
            v-for="index in 6",
            :key="index"
            cols="12",
            sm="6",
            lg="4",
          )
            v-card
              v-skeleton-loader(type="article, divider, list-item")

  lecture-dialog(
    :dialog="dialog"
    :dialogData="dialogData"
    @hideDialog="hideDialog"
  )
</template>

<script>
import LectureItem from '@/components/LectureItem'
import LectureDialog from '@/components/LectureDialog'

export default {
  data: () => ({
    mainImg: 'https://picsum.photos/id/11/500/300',
    mainImgLazy: 'https://picsum.photos/id/11/10/6',
    dialog: false,
    dialogData: null,
  }),
  components: {
    LectureItem,
    LectureDialog,
  },
  methods: {
    test() {
      this.$store.dispatch('lecture/setItems');
    },
    showDialog(index) {
      this.dialogData = this.lectureItems[index];
      this.dialog = true;
    },
    hideDialog() {
      this.dialog = false;
      this.dialogData = null;
    }
  },
  mounted() {
    if (!this.lectureItems) {
      this.$store.dispatch('lecture/setItems');
    }
  },
  computed: {
    lectureItems() {
      return this.$store.getters['lecture/items'];
    }
  }
}
</script>
