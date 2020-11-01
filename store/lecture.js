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
    const csv = await this.$axios.$get('/works/lp-08/lectures.csv');
    // CSVデータを二次元配列に変換
    let csvLines = csv.split(/\r\n|\n/);
    let csvArr = [];
    csvLines.forEach(line => {
      // 空行でない場合、配列に追加（テキストエディタの設定などで、CSVの最終行が空行の場合がある）
      if (line) {
        csvArr.push(line.split(','));
      }
    });
    // オブジェクトの作成
    const headings = csvArr.shift();
    const items = [];
    csvArr.forEach(line => {
      const item = {};
      for (let i = 0; i < line.length; i++) {
        item[headings[i]] = line[i];
      }
      items.push(item);
    });
    // vategoriesを配列に変換
    items.forEach(item => {
      item.categories = item.categories.split('/');
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
