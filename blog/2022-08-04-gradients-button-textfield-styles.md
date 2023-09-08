---
slug: gradients-button-textfield-styles
title: Beautiful gradients, button styles and TextField rounded corners in a new Flet release
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

我们刚刚发布[Flet 0.1.46](https://pypi.org/project/flet/0.1.46/)添加新的令人兴奋的功能:

- 渐变背景在容器中
- 针对按钮，Textfield 和下拉列表控件的广泛样式
- ...以及更多

## 渐变背景

### 线性梯度

<img src="/img/blog/gradients/linear-gradient.png" className="screenshot-30" />

```python
import math
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Container(
            alignment=ft.alignment.center,
            gradient=ft.LinearGradient(
                begin=ft.alignment.top_left,
                end=Alignment(0.8, 1),
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
            width=150,
            height=150,
            border_radius=5,
        )
    )

ft.app(target=main)
```

检查[`Container.gradient`](/docs/controls/container#lineargradient)文档以获取有关`LinearGradient`属性的更多信息。

### radial 渐变

<img src="/img/blog/gradients/radial-gradient.png" className="screenshot-30" />

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Container(
            alignment=ft.alignment.center,
            gradient=ft.RadialGradient(
                center=Alignment(0.7, -0.6),
                radius=0.2,
                colors=[
                    "0xFFFFFF00",  # yellow sun
                    "0xFF0099FF",  # blue sky
                ],
                stops=[0.4, 1.0],
            ),
            width=150,
            height=150,
            border_radius=5,
        )
    )

ft.app(target=main)
```

检查[`Container.gradient`](/docs/controls/container#radialgradient)文档以获取有关`RadialGradient`属性的更多信息。

### 扫描渐变

<img src="/img/blog/gradients/sweep-gradient.png" className="screenshot-30" />

```python
import math
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Container(
            alignment=ft.alignment.center,
            gradient=SweepGradient(
                center=ft.alignment.center,
                start_angle=0.0,
                end_angle=math.pi * 2,
                colors=[
                    "0xFF4285F4",
                    "0xFF34A853",
                    "0xFFFBBC05",
                    "0xFFEA4335",
                    "0xFF4285F4",
                ],
                stops=[0.0, 0.25, 0.5, 0.75, 1.0],
            ),
            width=150,
            height=150,
            border_radius=5,
        )
    )

ft.app(target=main)
```

检查[`Container.gradient`](/docs/controls/container#sweepgradient)文档以获取有关`SweepGradient`属性的更多信息。

## 按钮样式

此 Flet 版本将`style`属性引入所有按钮控件，该按钮控件是`ButtonStyle`类的实例。
`ButtonStyle`允许控制按钮的所有视觉方面，例如形状，前景，背景和阴影颜色，内容填充，边框宽度和半径！

此外，每个单独的样式属性都可以为一个按钮的不同“材料状态”配置，例如“悬停”，“聚焦”，“禁用”等。 例如，您可以为盘旋状态配置不同的形状，背景颜色，并为所有其他状态配置后备值。

检查此“极端”样式示例:

<img src="/img/blog/gradients/styled-button.gif" className="screenshot-30" />

```python
import flet as ft
from flet.border import BorderSide
from flet.buttons import RoundedRectangleBorder

def main(page: ft.Page):

    page.add(
        ft.ElevatedButton(
            "Styled button 1",
            style=ft.ButtonStyle(
                color={
                    ft.MaterialState.HOVERED: ft.colors.WHITE,
                    ft.MaterialState.FOCUSED: ft.colors.BLUE,
                    ft.MaterialState.DEFAULT: ft.colors.BLACK,
                },
                bgcolor={ft.MaterialState.FOCUSED: ft.colors.PINK_200, "": ft.colors.YELLOW},
                padding={ft.MaterialState.HOVERED: 20},
                overlay_color=ft.colors.TRANSPARENT,
                elevation={"pressed": 0, "": 1},
                animation_duration=500,
                side={
                    ft.MaterialState.DEFAULT: BorderSide(1, ft.colors.BLUE),
                    ft.MaterialState.HOVERED: BorderSide(2, ft.colors.BLUE),
                },
                shape={
                    ft.MaterialState.HOVERED: RoundedRectangleBorder(radius=20),
                    ft.MaterialState.DEFAULT: RoundedRectangleBorder(radius=2),
                },
            ),
        )
    )

ft.app(target=main)
```

`ft.MaterialState.DEFAULT`状态是后备样式。

`ButtonStyle.shape`属性也可以更改按钮形状:

<img src="/img/blog/gradients/button-shapes.png" className="screenshot-30" />

```python
import flet as ft
from flet.buttons import (
    BeveledRectangleBorder,
    CircleBorder,
    ContinuousRectangleBorder,
    RoundedRectangleBorder,
    StadiumBorder,
)

def main(page: ft.Page):
    page.padding = 30
    page.spacing = 30
    page.add(
        ft.FilledButton(
            "Stadium",
            style=ft.ButtonStyle(
                shape=ft.StadiumBorder(),
            ),
        ),
        ft.FilledButton(
            "Rounded rectangle",
            style=ft.ButtonStyle(
                shape=ft.RoundedRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Continuous rectangle",
            style=ft.ButtonStyle(
                shape=ft.ContinuousRectangleBorder(radius=30),
            ),
        ),
        ft.FilledButton(
            "Beveled rectangle",
            style=ft.ButtonStyle(
                shape=ft.BeveledRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Circle",
            style=ft.ButtonStyle(shape=ft.CircleBorder(), padding=30),
        ),
    )

ft.app(target=main)
```

检查[{`ElevatedButton.style`](/docs/controls/elevatedbutton#style)属性文档，以获取`ButtonStyle`类及其属性的完整描述。

## Textfield 和下拉式样式

现在可以为`TextField`和`Dropdown`控件的普通和聚焦状态配置文本大小，边框样式和角落半径。 `TextField`还允许为光标和选择配置颜色。

此外，现在可以使用`max_length`属性限制输入到`TextField`中的最大长度。

我们还介绍了`capitalization`属性，以自动将字符键入`TextField`键入字符时。 您可以从 4 种资本化策略中进行选择: `none`（默认），`characters`，`words`和`sentences`。

带有`max_length`和`capitalization`的样式`TextField`样式的示例:

<img src="/img/blog/gradients/styled-textfield.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.padding = 50
    page.add(
        ft.TextField(
            text_size=30,
            cursor_color=ft.colors.RED,
            selection_color=ft.colors.YELLOW,
            color=ft.colors.PINK,
            bgcolor=ft.colors.BLACK26,
            filled=True,
            focused_color=ft.colors.GREEN,
            focused_bgcolor=ft.colors.CYAN_200,
            border_radius=30,
            border_color=ft.colors.GREEN_800,
            focused_border_color=ft.colors.GREEN_ACCENT_400,
            max_length=20,
            capitalization="characters",
        )
    )

ft.app(target=main)
```

样式`Dropdown`控制的示例:

<img src="/img/blog/gradients/styled-dropdown.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.padding = 50
    page.add(
        ft.Dropdown(
            options=[
                ft.dropdown.Option("a", "Item A"),
                ft.dropdown.Option("b", "Item B"),
                ft.dropdown.Option("c", "Item C"),
            ],
            border_radius=30,
            filled=True,
            border_color=ft.colors.TRANSPARENT,
            bgcolor=ft.colors.BLACK12,
            focused_bgcolor=ft.colors.BLUE_100,
        )
    )

ft.app(target=main)
```

## 其他更改

`IconButton`获得了`selected`状态，该状态与新的`style`一起播放。

这是一个切换图标按钮的示例:

<img src="/img/blog/gradients/toggle-icon-button.gif" className="screenshot-20" />

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

[给 Flet 尝试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
