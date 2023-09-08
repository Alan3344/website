---
title: AppBar
sidebar_label: AppBar
slug: appbar
---

a material design app bar。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/navigation/appbar)

### appbar

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    page.appbar = ft.AppBar(
        leading=ft.Icon(ft.icons.PALETTE),
        leading_width=40,
        title=ft.Text("AppBar Example"),
        center_title=False,
        bgcolor=ft.colors.SURFACE_VARIANT,
        actions=[
            ft.IconButton(ft.icons.WB_SUNNY_OUTLINED),
            ft.IconButton(ft.icons.FILTER_3),
            ft.PopupMenuButton(
                items=[
                    ft.PopupMenuItem(text="Item 1"),
                    ft.PopupMenuItem(),  # divider
                    ft.PopupMenuItem(
                        text="Checked item", checked=False, on_click=check_item_clicked
                    ),
                ]
            ),
        ],
    )
    page.add(ft.Text("Body!"))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/app-bar/app-bar.gif" className="screenshot-40"/>

## properties

### `actions`

标题控件后，`Control` s 的`Control` s 的列表。

通常，这些控件为[`IconButtons`](iconbutton)代表常见操作。 对于不常见的操作，请考虑使用[`PopupMenuButton`](popupmenubutton)作为最后一个动作。

### `automatically_imply_leading`

控制我们是否应该尝试暗示 leading 窗口小部件（如果为 null）。

如果`True`和`leading`为 null，则自动尝试推断 leading 窗口小部件应为什么。 如果`False`且`leading`为 null，则将空间列为标题。 如果 leading 窗口小部件不是 null，则该参数无效。

### `bgcolor`

填充[颜色](/docs/guides/python/colors)用于 Appbar。 默认颜色由当前主题定义。

### `center_title`

标题是否应居中。 默认值为`False`。

### `color`

应用程序栏内的文本和图标的默认[颜色](/docs/guides/python/colors)。 默认颜色由当前主题定义。

### `elevation`

该属性控制应用程序栏下方阴影的大小。 默认值为 4。

注意: 只有在使用材料 2 设计时（`Theme.use_material3=False`）。

### `leading`才能看到此效果

`Control`在工具栏的标题之前显示。

通常，leading 控制是[`Icon`](icon)或[`IconButton`](iconbutton)。

### `leading_width`

定义 leading 控制的宽度。 默认情况下，`leading_width`的值为`56.0`。

### `title`

主要`Control`在应用程序栏中显示。 通常是一个[`Text`](text)控制，其中包含应用程序当前内容的描述。

### `toolbar_height`

定义 Appbar 的工具栏组件的高度。 默认情况下，`toolbar_height`的值为`56.0`。
