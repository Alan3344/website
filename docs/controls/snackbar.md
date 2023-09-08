---
title: SnackBar
sidebar_label: SnackBar
slug: snackbar
---

带有可选操作的轻量级消息，该消息在屏幕底部短暂显示。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/dialogs/snackbar)

### 带有动态消息的 snackbar

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

class Data:
    def __init__(self) -> None:
        self.counter = 0

d = Data()

def main(page):

    page.snack_bar = ft.SnackBar(
        content=ft.Text("Hello, world!"),
        action="Alright!",
    )

    def on_click(e):
        page.snack_bar = ft.SnackBar(ft.Text(f"Hello {d.counter}"))
        page.snack_bar.open = True
        d.counter += 1
        page.update()

    page.add(ft.ElevatedButton("Open SnackBar", on_click=on_click))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/snackbar/snackbar-with-custom-content.gif" className="screenshot-40"/>

## properties

### `action`

用户可以根据小吃栏采取的可选操作。

例如，小吃栏可能让用户撤消促使 Snackbar 的操作。 小吃吧最多可以采用一个动作。

该操作不应被“解雇”或“取消”。

### `action_color`

动作按钮的前景[颜色](/docs/guides/python/colors)。

### `behavior`

这定义了小吃吧的行为和位置。

定义 Snackbar 应在 PSGE 内出现的位置，以及该页面还包括`FloatingActionButton`或`NavigationBar`时应调整其位置。

如果此属性为`None`，则默认值为`SnackBarBehavior.FIXED`。

如果此值为`SnackBarBehavior.FLOATING`，则条的长度由`width`或`margin`定义。

### `bgcolor`

Snackbar 背景[颜色](/docs/guides/python/colors)。

### `close_icon_color`

如果`show_close_icon`为`True`。

### `content`

小吃吧的主要内容。 通常是[`Text`](text)控制。

### `dismiss_direction`

可以解散小吃的方向。

不能为`None`，默认为`DismissDirection.DOWN`。

### `duration`

小切子的 *毫秒 *的数量被开放。 未设置时默认为 4000（[4 秒](https://api.flutter.dev/flutter/material/SnackBar/duration.html)）。

### `elevation`

放置小吃吧的 Z 坐标。 这控制了小吃棒下方阴影的大小。

### `margin`

空的空间包围小吃吧。

仅当`behavior`为`SnackBarBehavior.FLOATING`时，才使用此属性。 如果指定了`width`，则不能使用它。

### `open`

设置为`True`以显示小键。 一旦显示 Snackbar，此属性会自动设置为`False`。

### `padding`

适用于小吃吧的内容和可选操作的填充量。

### `show_close_icon`

是否包括“关闭”图标小部件。

点击图标将关闭小吃栏。

### `width`

小吃吧的宽度。

如果指定宽度，则小吃栏将在可用空间中水平居中。 仅当`behavior`为`SnackBarBehavior.FLOATING`时，才使用此属性。 如果指定了`margin`，则无法使用。

## 事件

### `on_action`

单击操作按钮时发射。
