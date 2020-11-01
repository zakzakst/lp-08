<template lang="pug">
div
  v-img(
    height="120",
    width="100%",
    :lazy-src="mainImgLazy",
    :src="mainImg"
  )

  v-container.pt-12
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h1.mb-4.text-center 講演一覧
        v-row(v-if="lectureItems")
          v-col(cols="12",sm="6")
            v-select(
              v-model="dateSelect",
              :items="dateItems",
              label="日付"
            )
          v-col(cols="12",sm="6")
            v-select(
              v-model="categorySelect",
              :items="categoryItems",
              label="カテゴリー"
            )
        transition-group(
          v-if="filteredItems",
          name="lecture",
          mode="out-in",
          tag="div",
          class="row"
        )
          v-col(
            v-for="(item, index) in filteredItems",
            :key="item.title"
            cols="12",
            sm="6",
            lg="4"
          )
            lecture-item(
              :index="index",
              :item="item",
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
    :dialog="dialog",
    :dialogData="dialogData",
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
    dateSelect: 'all',
    dateItems: [
      {
        text: '全て',
        value: 'all',
      },
      {
        text: '20日',
        value: 20,
      },
      {
        text: '21日',
        value: 21,
      },
      {
        text: '22日',
        value: 22,
      },
    ],
    categorySelect: 'all',
    categoryItems: [
      {
        text: '全て',
        value: 'all',
      },
      {
        text: '環境',
        value: 'environment',
      },
      {
        text: '経済',
        value: 'economy',
      },
      {
        text: 'ビジネス',
        value: 'business',
      },
      {
        text: 'テクノロジー',
        value: 'technology',
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
      this.dialogData = this.filteredItems[index];
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
    },
    filteredItems() {
      let result = this.lectureItems;
      if (this.dateSelect !== 'all') {
        result = result.filter(item => {
          return item.date === this.dateSelect.toString();
        });
      }
      if (this.categorySelect !== 'all') {
        result = result.filter(item => {
          return item.categories.indexOf(this.categorySelect) !== -1;
        });
      }
      return result;
    }
  }
}
</script>

<style>
.lecture-enter-active {
  transition: opacity .5s, transform .5s;
}
.lecture-leave-active {
  opacity: 0;
  position: absolute;
}
.lecture-move:not(.lecture-leave-active) {
  transition: opacity .5s, transform .5s;
}
.lecture-enter,
.lecture-leave-to {
  opacity: 0;
}
</style>
