---
title: IconButton
sidebar_label: IconButton
slug: iconbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

图标按钮是一个圆形按钮，中间带有图标，通过填充颜色（墨水）对触摸做出反应。

图标按钮通常在工具栏中使用，但也可以在其他许多地方使用。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/iconbutton)

### 图标按钮

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Icon buttons"
    page.add(
        ft.Row(
            [
                ft.IconButton(
                    icon=ft.icons.PAUSE_CIRCLE_FILLED_ROUNDED,
                    icon_color="blue400",
                    icon_size=20,
                    tooltip="Pause record",
                ),
                ft.IconButton(
                    icon=ft.icons.DELETE_FOREVER_ROUNDED,
                    icon_color="pink600",
                    icon_size=40,
                    tooltip="Delete record",
                ),
            ]
        ),
    )


ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-buttons.gif" className="screenshot-50" />

### Icon button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Icon button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.IconButton(
        icon=ft.icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0
    )
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-button-with-click-event.gif" className="screenshot-50" />

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个控件将获得焦点。

### `content`

代表自定义按钮内容的控件。

### `icon`

按钮中显示的图标。

### `icon_color`

图标[颜色](/docs/guides/python/colors)。

### `icon_size`

虚拟像素中的图标大小。

### `selected`

将图标按钮转到切换按钮: `True` - 该按钮在选定状态，`False` - 在正常状态中。

### `selected_icon`

所选状态的按钮中显示的图标。

### `selected_icon_color`

所选状态的图标[颜色](/docs/guides/python/colors)。

EN 图标切换按钮的示例:

<img src="/img/blog/gradients/toggle-icon-button.gif" className="screenshot-10" />

```python
import flet as ft

def main(page: ft.Page):

    def toggle_icon_button(e):
        e.control.selected = not e.control.selected
        e.control.update()

    page.add(
        ft.IconButton(
            icon=ft.icons.BATTERY_1_BAR,
            selected_icon=ft.icons.BATTERY_FULL,
            on_click=toggle_icon_button,
            selected=False,
            style=ft.ButtonStyle(color={"selected": ft.colors.GREEN, "": ft.colors.RED}),
        )
    )

ft.app(target=main)
```

### `style`

有关此属性的更多信息。

悬停在按钮上时显示的文本。

### `url`

单击按钮时要打开的 URL。 如果已注册，则在此之后发射`on_click`事件。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认） - 新 Tab/window。
- `_self` - 当前选项卡片/窗口。

## 方法

### `focus()`

将重点放在按钮上。

## 事件

### `on_blur`

当控件失去焦点时发射。

### `on_click`

用户单击按钮时发射。

### `on_focus`

当控件获得焦点时发射。
