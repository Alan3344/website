---
slug: fun-with-animations
title: Fun with animations
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

尽管 Flet 发布了首次亮相动画支持，但我们刚刚发布了记录其新功能的完成！ 我们都知道是否没有记录该功能，就不存在！ 😉

Flutter 提供[多种方法](https://docs.flutter.dev/development/ui/animations)用于创建动画，例如“隐式”，“显式”，“ Tween”，“ Stagered”，“预先庆祝”动画，并显示在 Rive 和 Lottie 编辑中准备的动画场景。

我们从“隐式”动画开始，该动画使您可以通过设置目标值来为控制属性进行动画。 每当目标值变化时，控件会使属性从旧值到新值动画。

## 演示时间

<div style={{fontSize: "1.1rem", textAlign: "center", padding: "1rem" }}>
<a href="https://flet-animation.herokuapp.com/">Check out this live demo!</a>
</div>

<a href="https://flet-animation.herokuapp.com/"><img src="/website/img/blog/animations/flet-animation-demo.gif" className="screenshot-100" /></a>

[探索演示源](https://github.com/flet-dev/flet-heroku-app)。 顺便说一句，该演示托管在 Heroku 上，因此您可以将其用作自己部署的起点。

## 隐式动画

可以为以下控制属性启用隐式动画:

- [不透明度](/docs/guides/python/animations#opacity-animation)
- [旋转](/docs/guides/python/animations#rotation-animation)（此版本中的新）
- [比例](/docs/guides/python/animations#scale-animation)（此版本中的新）
- [偏移](/docs/guides/python/animations#offset-animation)（此版本中的新）
- [位置](/docs/guides/python/animations#position-animation)

此外，所有`Container`控制属性[现在可以动画](/docs/guides/python/animations#animated-container)，并且有一个新的[`AnimatedSwitcher`](/docs/controls/animatedswitcher)控制旧内容之间的动画过渡。

<img src="/website/img/docs/controls/animated-switcher/animated-switcher.gif" className="screenshot-20" />

## 其他新功能

### `Markdown`控制

允许以降价格式渲染文本。 支持各种扩展: `CommonMark`，`github web''和`github affeered“ flueed”。

[请参阅`Markdown`控制文档](/docs/controls/markdown)有关更多信息和示例。

### URL 启动器

`page.launch_url(url)`方法允许在新浏览器窗口中编程打开一个 URL，例如:

```python
page.launch_url("https://google.com")
```

它还可以与`Markdown`控制在 Markdown 文档中打开链接。

### Keyboard 快捷方式

`Page`现在包含[`on_keyboard_event`](/docs/controls/page#on_keyboard_event)事件手点，以全球截距所有键击。

检查此[简单用法示例](https://github.com/flet-dev/examples/blob/main/python/controls/page/keyboard-events.py)。

### 可访问性改进

我们在涵盖屏幕读取器的语义支持的文档中添加了[可访问性](/docs/guides/python/accessibility)部分。

### `ShaderMark`控制

将阴暗器生成的掩码应用于其内容的控件。 允许[逐渐消失的图像](/docs/controls/shadermask#gradually-fade-out-image-to-the-bottom-edge)做出很好的效果。

就是这样！

[给 Flet 试试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
