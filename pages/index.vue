<template lang="pug">
mixin blogSlide
  v-slide-group.mb-2(v-if="blogItems",center-active,show-arrows)
    v-slide-item(v-for="item in blogItems",:key="item.id")
      v-card.ma-4(
        :href="item.link",
        target="_blank",
        height="240",
        width="200",
        hover,
        link,
        :ripple="{ center: true }"
      )
        v-img.grey.white--text.align-end(
          height="120px",
          :src="item.img",
          gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.3)"
        )
          template(v-slot:placeholder)
            v-row.fill-height.ma-0(align="center",justify="center")
              v-progress-circular(indeterminate,color="grey lighten-5")
          v-card-title.subtitle-2.font-weight-bold {{ item.title | trimText(24) }}
        v-card-subtitle.pb-0 {{ item.date }}
        v-card-text {{ item.text | trimText(24) }}

div
  v-img.grey(
    height="120",
    width="100%",
    :lazy-src="mainImgLazy",
    :src="mainImg"
  )

  v-container.pt-12
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h1.mb-4.text-center イベント名
        p リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。<br>リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。リード文が入ります。

  v-container
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h2.mb-4.text-center 開催概要
        v-simple-table.mb-4: template(v-slot:default): tbody
          tr(v-for="(item, index) in infoItems",:key="index")
            th {{ item.label }}
            td {{ item.content }}
        iframe(
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6476.091846566769!2d139.805343!3d35.749676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bc4e612ab55d171!2z5YyX5Y2D5L2P6aeF!5e0!3m2!1sja!2sjp!4v1604164774072!5m2!1sja!2sjp",
          width="100%",
          height="300px",
          frameborder="0",
          style="border:0",
          allowfullscreen="",
        )

  v-container
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h2.mb-4.text-center 講演情報
        p テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        .mb-4.text-center: v-btn(to="/lecture",dark) 講演一覧を見る

  v-container
    v-row(justify="center")
      v-col(cols="12",sm="8")
        h2.mb-4.text-center ブログ
        +blogSlide
</template>

<script>
export default {
  data: () => ({
    mainImg: 'https://picsum.photos/id/10/2000/120',
    mainImgLazy: 'https://picsum.photos/id/10/100/6',
    infoItems: [
      {
        label: 'イベント名',
        content: 'テキストテキストテキスト',
      },
      {
        label: '開催日時',
        content: '2020年 0月0日（●） 00:00～00:00',
      },
      {
        label: '主催',
        content: '株式会社○○',
      },
      {
        label: '参加費',
        content: '無料',
      },
      {
        label: '場所',
        content: '○○ビル3階 イベントスペース',
      },
      {
        label: '住所',
        content: '東京都○○区○○町 0-00-00',
      },
    ],
  }),
  mounted() {
    if (!this.blogItems) {
      this.$store.dispatch('blog/setItems');
    }
  },
  computed: {
    blogItems() {
      return this.$store.getters['blog/items'];
    }
  },
  filters: {
    trimText(val, limit) {
      if (val.length > limit) {
        return val.substr(0, limit) + '…';
      } else {
        return val;
      }
    }
  }
}
</script>
