const state = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  cachedViews: [],
  showTab: false,
  likeStatus: null // 点赞画作状态
};

export default state;
