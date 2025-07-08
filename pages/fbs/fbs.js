// pages/fbs/fbs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
  },

  // 自定义逻辑
  onSelected() {
    console.log("in")
    this.setData({
      isActive: true
    });
  },

// 设置当前页的标题
setNavigatInfo() {
  wx.setNavigationBarColor({
    frontColor: "#ffffff",
    backgroundColor: "#6a72d9",
  });
  wx.setNavigationBarTitle({
    title: '🏀 篮球场集合',
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setNavigatInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})