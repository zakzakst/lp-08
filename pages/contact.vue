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
        h1.mb-4.text-center お問い合わせ
        v-form
          v-row
            v-col(cols="12"): v-text-field(
              v-model="name",
              label="名前",
              placeholder="山田 太郎",
              :rules="rules",
              outlined
            )
            v-col(cols="12"): v-text-field(
              v-model="email",
              label="メールアドレス",
              placeholder="example@mail.com",
              :rules="rules",
              outlined
            )
            v-col(cols="12"): v-textarea(
              v-model="content",
              label="お問い合わせ内容",
              placeholder="例）○○の内容が分かりません",
              :rules="rules",
              outlined
            )
          .mb-4.text-center: v-btn(@click="submit",dark) 送信する
</template>

<script>
export default {
  data: () => ({
    mainImg: 'https://picsum.photos/id/11/500/300',
    mainImgLazy: 'https://picsum.photos/id/11/10/6',
    name: '',
    email: '',
    content: '',
    rules: [
      value => !!value || '必須項目です。入力してください',
    ],
  }),
  methods: {
    submit() {
      if (this.name && this.email && this.content) {
        const message = `【送信】\n名前：${this.name}\nメールアドレス：${this.email}\n内容：${this.content}`;
        alert(message);
      } else {
        alert('送信内容が入力されていません');
      }
    }
  }
}
</script>
