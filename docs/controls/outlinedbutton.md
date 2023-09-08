---
title: OutlinedButton
sidebar_label: OutlinedButton
slug: outlinedbutton
---

从'@themy/tabs'导入选项卡片;
import TabItem from '@theme/TabItem';

概述的按钮是中等强调按钮。 它们包含重要的操作，但不是应用程序中的主要动作。
概述按钮与填充按钮很好地搭配，以指示另一种次要动作。 有关更多信息，请参见[材料 3 按钮](https://m3.material.io/components/buttons/overview)。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/outlinedbutton)

### 基本概述按钮

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Basic outlined buttons"
    page.add(
        ft.OutlinedButton(text="Outlined button"),
        ft.OutlinedButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/website/img/docs/controls/outlined-button/basic-outlined-buttons.png" className="screenshot-40" />

### Outlined buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Outlined buttons with icons"
    page.add(
        ft.OutlinedButton("Button with icon", icon="chair_outlined"),
        ft.OutlinedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/website/img/docs/controls/outlined-button/outlined-buttons-with-icons.png" className="screenshot-50" />

### Outlined button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Outlined button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.OutlinedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/website/img/docs/controls/outlined-button/outlined-button-with-click-event.gif" className="screenshot-50" />

### 用自定义内容概述按钮

<tabs groupId="language">
   <tabitem value="python" label="python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Outlined buttons with custom content"
    page.add(
        ft.OutlinedButton(
            width=150,
            content=ft.Row(
                [
                    ft.Icon(name=ft.icons.FAVORITE, color="pink"),
                    ft.Icon(name=ft.icons.AUDIOTRACK, color="green"),
                    ft.Icon(name=ft.icons.BEACH_ACCESS, color="blue"),
                ],
                alignment=ft.MainAxisAlignment.SPACE_AROUND,
            ),
        ),
        ft.OutlinedButton(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.Text(value="Compound button", size=20),
                        ft.Text(value="This is secondary text"),
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                    spacing=5,
                ),
                padding=ft.padding.all(10),
            ),
        ),
    )

ft.app(target=main)

```

   </tabitem>
  
</tabs>

<img src="/website/img/docs/controls/outlined-button/outlined-buttons-with-custom-content.png" className="screenshot-50" />

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则将第一个添加到页面中的第一个控件将获得焦点。

### `content`

代表自定义按钮内容的控件。

### `icon`

按钮中显示的图标。

### `icon_color`

图标[颜色](/docs/guides/python/colors)。

### `style`

有关此属性的更多信息。

按钮上显示的文本。

### `tooltip`

悬停在按钮上时显示的文本。

### `url`

单击按钮时要打开的 URL。 如果已注册，则`on_click`事件在此之后发射。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前选项卡片/窗口。

## 方法

### `focus()`

将重点移至按钮。

## 事件

### `on_blur`

当控件失去焦点时会发射。

### `on_click`

用户单击按钮时发射。

### `on_focus`

当控件收到焦点时发射。

### `on_hover`

当鼠标指针进入或存在按钮响应区域时发射。 `data`事件对象的属性包含`true`（string）Enter Enter Enter 和`false`当它退出时。

### `on_long_press` `on_long_press`

长时间按钮时会发射。
