// 页面样式，只能使用字符串
export const RenderDom = (item) => {
  // 以@开头的说明是标题，要单独起一行
  if (item.startsWith("@")) {
    return `<div style="margin-top:16px">
          <span style="margin: 0px;padding:0px;">${item.slice(1)}</span>
      </div>`;
  }
  return `<span style="margin: 0px;padding:0px;">${item}</span>`;
};

export const render = (list, contentRef, keyword, isInit) => {
  // 页面首次进来初次渲染
  if (isInit) {
    contentRef.current.innerHTML = list
      .map((item) => `${RenderDom(item)}`)
      .join("");
    return;
  }

  let newList = list;
  let reg;
  if (keyword) {
    // 创建正则表达式
    reg = new RegExp(keyword, "gi");

    contentRef.current.innerHTML = newList
      .map((item) => {
        // 设置默认值
        let content = item;
        // 如果存在有正则表达式存在则表示需要对内容进行关键词匹配
        if (reg) {
          // 将匹配的关键词通过 replace 方法进行替换-并重新赋值给 content
          content = item.replace(
            reg,
            `<span style="background-color: yellow">${keyword}</span>`
          );
        }
        // 返回组装的 html 字符串，样式只能使用原生的写法
        return `${RenderDom(content)}`;
      })
      .join("");
  }
  if (keyword?.length === 0) {
    contentRef.current.innerHTML = "";
  }
};
