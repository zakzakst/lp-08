import convert from 'xml-js';

export const state = () => ({
  items: null
})

export const mutations = {
  setItems(state, payload) {
    state.items = payload;
  },
}

export const actions = {
  async setItems({commit}) {
    const xml = await this.$axios.$get('/works/lp-08/blog.xml');
    // xmlをjson形式に変換
    let xmlObj = convert.xml2js(xml);
    // ブログのみ抽出
    xmlObj = xmlObj.elements[0].elements[0].elements.filter(element => {
      return element.name === 'item';
    });
    const items = xmlObj.map(obj => {
      // 必要な情報を取得
      const titleObj = obj.elements.find(element => element.name === 'title');
      const imgObj = obj.elements.find(element => element.name === 'media:thumbnail');
      const linkObj = obj.elements.find(element => element.name === 'link');
      const dateObj = obj.elements.find(element => element.name === 'pubDate');
      const textObj = obj.elements.find(element => element.name === 'description');
      // 日付のフォーマット変更
      const date = new Date(dateObj.elements[0].text);
      // オブジェクトを作成
      const item = {
        title: titleObj.elements[0].text,
        img: imgObj ? imgObj.elements[0].text : 'https://fakeimg.pl/200x120/888/000/?text=NoImage',
        link: linkObj.elements[0].text,
        date: date.toLocaleDateString(),
        text: textObj.elements[0].cdata.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''),
      };
      return item;
    });

    // storeにセット
    commit('setItems', items);
  }
}

export const getters = {
  items(state) {
    return state.items;
  }
}
