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
        v-row
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
    lectureItems: [
      {
        title: 'タイトル',
        speaker: '○○会社<br>山田 太郎',
        date: 20,
        startTime: '13:00',
        endTime: '14:00',
        categories: [
          'aaa',
          'bbb',
        ],
        img: 'https://picsum.photos/id/11/500/300',
        summary: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
      },
      {
        title: 'タイトル2',
        speaker: '○○会社<br>山田 太郎',
        date: 20,
        startTime: '13:00',
        endTime: '14:00',
        categories: [
          'aaa',
          'bbb',
        ],
        img: 'https://picsum.photos/id/11/500/300',
        summary: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
      },
    ],
    dialog: false,
    dialogData: null,
  }),
  components: {
    LectureItem,
    LectureDialog,
  },
  methods: {
    showDialog(index) {
      this.dialogData = this.lectureItems[index];
      this.dialog = true;
    },
    hideDialog() {
      this.dialog = false;
      this.dialogData = null;
    }
  },
}
</script>
