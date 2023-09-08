---
title: Tooltip
sidebar_label: Tooltip
slug: tooltip
---

材料设计工具提示。

工具提示提供文本标签，可帮助解释按钮或其他用户界面操作的功能。 将按钮包装在工具提示控件中，并提供一条消息，该消息将在长期按下控件时显示。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/utility/tooltip)

### 用自定义装饰的工具提示

<img src="/website/img/docs/controls/tooltip/custom-tooltip.gif" className="screenshot-30"/>

```python
import math
import flet as ft
from flet import alignment

def main(page: ft.Page):
    page.title = "Tooltip Example"
    page.add(
        ft.Tooltip(
            message="This is tooltip",
            content=ft.Text("Hover to see tooltip"),
            padding=20,
            border_radius=10,
            text_style=ft.TextStyle(size=20, color=ft.colors.WHITE),
            gradient=ft.LinearGradient(
                begin=alignment.top_left,
                end=alignment.Alignment(0.8, 1),
                colors=[
                    "0xff1f005c",
                    "0xff5b0060",
                    "0xff870160",
                    "0xffac255e",
                    "0xffca485c",
                    "0xffe16b5c",
                    "0xfff39060",
                    "0xffffb56b",
                ],
                tile_mode=ft.GradientTileMode.MIRROR,
                rotation=math.pi / 3,
            ),
        )
    )

ft.app(target=main)
```

## properties

### `bgcolor`

工具提示的背景[颜色](/docs/guides/python/colors)。

### `border`

工具提示周围的边界。

### `border_radius`

工具提示的边框半径。

### `content`

应在工具提示内显示的`Control`。

### `message`

要在工具提示中显示的文本。

### `enable_feedback`

当`True`（默认）工具提示应提供声学和/或触觉反馈。

例如，在启用反馈时，在 Android 上，Tap 会产生单击的声音，而长压会产生短振动。

### `gradient`

工具提示的背景梯度

### `height`

工具提示内容的高度。

### `margin`

围绕工具提示的空白空间。

### `padding`

插入工具提示内容的空间数量。

在移动设备上，默认为 16.0 逻辑像素水平和 4.0 垂直。 在桌面上，默认为 8.0 逻辑像素水平和 4.0 垂直。

### `prefer_below`

工具提示是否默认为控件下方显示。

默认为`True`。 如果没有足够的空间在首选方向上显示工具提示，则该工具提示将以相反的方向显示。

### `shape`

工具提示的形状。

### `show_duration`

以毫秒为单位的时间长度是在释放长按或释放 TAP 或鼠标指针退出控件后显示该工具提示。

### `text_align`

工具提示的消息如何水平对齐。

属性值为`TextAlign`枚举，具有以下值:

- `LEFT`（默认）
- `RIGHT`
- `CENTER`
- `JUSTIFY`
- `START`
- `END`

### `text_style`

用于工具提示的消息的样式。

### `vertical_offset`

小部件和显示的工具提示之间的垂直差距。

### `wait_duration`

以毫秒为单位的时间长度是，在显示工具提示之前，指针必须悬停在工具提示的控制上。

默认值为 0 毫秒（工具提示立即显示在悬停）上。
