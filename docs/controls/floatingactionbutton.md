---
title: FloatingActionButton
sidebar_label: FloatingActionButton
slug: floatingactionbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

material design 浮动动作按钮。 浮动操作按钮是一个圆形图标按钮，它悬停在内容上以促进应用程序中的主要动作。
浮动动作按钮通常设置为`page.floating_action_button`，但也可以在页面上的任何位置添加作为常规控件。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/floatingactionbutton)

### 基本 fab

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Floating Action Button"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.auto_scroll = True
    page.scroll = ft.ScrollMode.HIDDEN
    page.appbar = ft.AppBar(
        title=ft.Text(
            "Floating Action Button", weight=ft.FontWeight.BOLD, color=ft.colors.BLACK87
        ),
        bgcolor=ft.colors.BLUE,
        center_title=True,
        actions=[
            ft.IconButton(ft.icons.MENU, tooltip="Menu", icon_color=ft.colors.BLACK87)
        ],
        color=ft.colors.WHITE,
    )

    # keeps track of the number of tiles already added
    page.count = 0

    def fab_pressed(e):
        page.add(ft.ListTile(title=ft.Text(f"Tile {page.count}")))
        page.show_snack_bar(
            ft.SnackBar(ft.Text("Tile was added successfully!"), open=True)
        )
        page.count += 1

    page.floating_action_button = ft.FloatingActionButton(
        icon=ft.icons.ADD, on_click=fab_pressed, bgcolor=ft.colors.LIME_300
    )
    page.add(ft.Text("Press the FAB to add a tile!"))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/floatingactionbutton/custom-fab.gif"/>

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面上的第一个将获得焦点。

### `bgcolor`

按钮背景[颜色](/docs/guides/python/colors)。

### `content`

代表自定义按钮内容的控件。

### `icon`

按钮中显示的图标。

### `mini`

控制此按钮的大小。

默认情况下，浮动动作按钮是非微尼，高度和宽度为 56.0 逻辑像素。 迷你浮动动作按钮的高度和宽度为 40.0 逻辑像素，布局宽度和高度为 48.0 逻辑像素。

### `shape`

工厂边界的形状。

该值是以下实现之一的实例:

- `StadiumBorder`
- `RoundedRectangleBorder`
  - `radius` - 边框半径，`BorderRadius`类或数字的实例。
- `CircleBorder`
- `BeveledRectangleBorder`
  - `radius` - 边框半径，`BorderRadius`类或数字的实例。
- `ContinuousRectangleBorder`
  - `radius` - 边框半径，`BorderRadius`类或数字的实例。

使用`shape`属性的示例:

```python
import flet as ft

def main(page: ft.Page):

    page.floating_action_button = ft.FloatingActionButton(
        content=ft.Row(
            [ft.Icon(ft.icons.ADD), ft.Text("Add")], alignment="center", spacing=5
        ),
        bgcolor=ft.colors.AMBER_300,
        shape=ft.RoundedRectangleBorder(radius=5),
        width=100,
        mini=True,
    )

    page.add(ft.Text("Just a text!"))

ft.app(target=main)
```

<img src="/img/docs/controls/floatingactionbutton/fab-with-custom-shape.png" className="screenshot-20" />

### `text`

在按钮上显示的文本。

### `tooltip`

悬停在按钮上时显示的文本。

### `url`

单击按钮时要打开的 URL。 如果已注册，则`on_click`事件在此之后发射。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前选项卡片/窗口。

## 事件

### `on_click`

当用户单击按钮时发射。
