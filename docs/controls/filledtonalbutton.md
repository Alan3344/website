---
title: FilledTonalButton
sidebar_label: FilledTonalButton
slug: filledtonalbutton
---

从'@themy/tabs'导入选项卡片;
import TabItem from '@theme/TabItem';

填充的音调按钮是[FilledButton](filledbutton)和[OutlinedButton](outlinedbutton)按钮之间的另一种中间立场。 它们在较低优先级按钮所需的重点比轮廓所赋予的略高的上下文中很有用，例如入职流中的“下一个”。 音调按钮使用辅助颜色映射。 有关更多信息，请参见[材料 3 按钮](https://m3.material.io/components/buttons/overview)。

<img src="/website/img/docs/controls/filled-tonal-button/basic-filled-tonal-buttons.png" className="screenshot-20" />

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/filledtonalbutton)

### Filled tonal button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Basic filled tonal buttons"
    page.add(
        ft.FilledTonalButton(text="Filled tonal button"),
        ft.FilledTonalButton("Disabled button", disabled=True),
        ft.FilledTonalButton("Button with icon", icon="add"),
    )

ft.app(target=main)
```

  </TabItem>

</Tabs>

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `content`

代表自定义按钮内容的控件。

### `icon`

按钮中显示的图标。

### `icon_color`

图标[颜色](/docs/guides/python/colors)。

### `style`

有关此属性的更多信息，请参见[3521} `text`

按钮上显示的文本。

### `tooltip`

悬停在按钮上时显示的文本。

### `url`

单击按钮时要打开的 URL。 如果已注册，`on_click`事件在此之后被解雇。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前的选项卡片/窗口。

## 事件

### `on_click`

当用户单击按钮时发射。

### `on_hover`

当鼠标指针进入或存在按钮响应区域时发射。 `data`事件对象的属性包含`true`（string）当光标输入时，`false`退出时`false`。

###

### `on_long_press`

长时间按钮时会发射。
