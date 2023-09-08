---
title: Displaying data
sidebar_label: Displaying data
---

##文字

`Text`控件用于输出文本数据。 它的主要属性是`value`和`size`，但它也具有许多格式化属性来控制其外观。 例如:

```python
t = ft.Text(
    value="This is a Text control sample",
    size=30,
    color="white",
    bgcolor="pink",
    weight="bold",
    italic=True,
)
page.add(t)
```

<img src="/website/img/docs/getting-started/displaying-data-text.png" className="screenshot-50" />

### 文本样式

[TBD]
字体？
可变重量？
带有自定义的内置样式。
textfield 类描述。

## 图标

- 图标列表
- 链接到应用程序

## 图像

关于 CORS 的注意
侧载资产
Web 中的 HTML 渲染器显示所有格式
支持哪些格式？

在桌面版本中，它确实支持 JPEG，JPG，PNG
在网络版本中，它仅支持 PNG
您可以尝试将 HTML 渲染器用于网络吗？ https://flet.dev/docs/controls/text/#using-system-fonts
阅读本文我认为“ html”渲染器必须支持浏览器支持的任何格式: https://docs.flutter.dev/development/platform-integration/web/web/web-images
