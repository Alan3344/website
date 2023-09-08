---
title: WindowDragArea
sidebar_label: WindowDragArea
---

拖动移动的控件，最大化和还原应用程序窗口。

当您使用[`page.window_title_bar_hidden`](page#window_title_bar_hidden)隐藏标题栏时，您可以添加此控件以移动窗口位置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

### App 窗口，而无需移动的标题

<img src="/website/img/docs/controls/window-drag-area/no-title-draggable-window.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.window_title_bar_hidden = True
    page.window_title_bar_buttons_hidden = True

    page.add(
        ft.Row(
            [
                ft.WindowDragArea(ft.Container(ft.Text("Drag this area to move, maximize and restore application window."), bgcolor=ft.colors.AMBER_300, padding=10), expand=True),
                ft.IconButton(ft.icons.CLOSE, on_click=lambda _: page.window_close())
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `content`

用于拖动/最大化/还原应用窗口的控件。

### `maximizable`

是否在窗口拖放区域上双击会导致窗口最大化/还原。 默认值为`True`。
