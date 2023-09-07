scrollToAnchor = (anchorName) => {
  if (anchorName) {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName);
    //如果对应的id锚点存在就跳转
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};
