---
title: TextButton
sidebar_label: TextButton
slug: textbutton
---

从'@themy/tabs'导入选项卡片;
import TabItem from '@theme/TabItem';

文本按钮用于最低优先级操作，尤其是在提供多个选项时。 文本按钮可以放置在各种背景上。 在与按钮相互作用之前，它的容器尚不可见。 有关更多信息，请参见[材料 3 按钮](https://m3.material.io/components/buttons/overview)。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/textbutton)

### 基本文本按钮

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Basic text buttons"
    page.add(
        ft.TextButton(text="Text button"),
        ft.TextButton("Disabled button", disabled=True),
    )


ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/text-button/basic-text-buttons.png" className="screenshot-40" />

### Text buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Text buttons with icons"
    page.add(
        ft.TextButton("Button with icon", icon="chair_outlined"),
        ft.TextButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/text-button/text-buttons-with-icons.png" className="screenshot-40" />

### Text button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Text button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.TextButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)

```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/text-button/text-button-with-click-event.gif" className="screenshot-50" />

### 带有自定义内容的文本按钮

<tabs groupId="language">
   <tabitem value ="python" label ="python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Text buttons with custom content"
    page.add(
        ft.TextButton(
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
        ft.TextButton(
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

<img src="/website/img/docs/controls/text-button/text-buttons-with-custom-content.png" className="screenshot-40" />

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

有关此属性的更多信息，请参见[6293}

### `text`

显示在按钮上的文本。

### `tooltip`

在按钮上悬停鼠标时显示的文本。

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

当控件失去焦点时发射。

### `on_click`

用户单击按钮时发射。

### `on_focus`

当控件收到焦点时发射。

### `on_hover`

当鼠标指针进入或存在按钮响应区域时发射。 `data`事件对象的属性包含`true`（string）当光标进入时，`false`退出时`false`。

### `on_long_press`

长时间按钮时会发射。
