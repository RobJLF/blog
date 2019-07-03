// 动态壁纸
(function () {
  /* 设置body的背景颜色 */
  document.body.style.backgroundColor = "#cfe8cc"
  /* 设置循环的动态壁纸 不过由于图片过大 会很大的影响响应速度 */
  /* document.body.style.backgroundColor = "transparent";
  var len = 8
  var index = Math.floor(Math.random()*len)+1;
  var oDiv = document.createElement("div");
  oDiv.classList.add("background-image");
  var oBack1 = document.createElement("div");
  var oBack2 = document.createElement("div");
  oBack1.className="full";
  oBack2.className="full";
  oDiv.appendChild(oBack1); oDiv.appendChild(oBack2);
  oBack1.style.background = "url(/blog/uploads/bg"+index+".jpg) no-repeat fixed center center/cover";
  oBack2.style.opacity = 0;
  var indexBg = 1;
  document.body.appendChild(oDiv);

  setInterval(() => {
    index = index == 8? 1:index + 1;
    console.log(index);
    if (indexBg == 1) {
      oBack2.style.background = "url(/blog/uploads/bg"+index+".jpg) no-repeat fixed center center/cover";
      oBack2.style.opacity = 1;
      oBack1.style.opacity = 0;
      indexBg = 2;
    }else {
      oBack1.style.background = "url(/blog/uploads/bg"+index+".jpg) no-repeat fixed center center/cover";
      oBack1.style.opacity = 1;
      oBack2.style.opacity = 0;
      indexBg = 1;
    }
  }, 60000); */
})()

