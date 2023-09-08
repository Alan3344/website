---
title: ElevatedButton
sidebar_label: ElevatedButton
slug: elevatedbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

高架按钮本质上是带有阴影的音调按钮。 为了防止阴影蠕变，只有在绝对必要的情况下使用它们，例如当按钮需要与图案背景的视觉分离时。 有关更多信息，请参见[材料 3 按钮](https://m3.material.io/components/buttons/overview)。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/elevatedbutton)

### 基本高架按钮

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Basic elevated buttons"
    page.add(
        ft.ElevatedButton(text="Elevated button"),
        ft.ElevatedButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/basic-elevated-buttons.png" className="screenshot-20" />

### Elevated buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Elevated buttons with icons"
    page.add(
        ft.ElevatedButton("Button with icon", icon="chair_outlined"),
        ft.ElevatedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-icons.png" className="screenshot-30" />

### Elevated button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Elevated button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.ElevatedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-button-with-click-event.gif" className="screenshot-50" />

### 带有自定义内容的高架按钮

<tabs groupId="language">
   <tabitem value ="python" label="python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Elevated buttons with custom content"
    page.add(
        ft.ElevatedButton(
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
        ft.ElevatedButton(
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

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-custom-content.png" className="screenshot-30" />

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个控件将获得焦点。

### `bgcolor`

按钮的背景[颜色](/docs/guides/python/colors)。

### `color`

按钮的文本[颜色](/docs/guides/python/colors)。

### `content`

代表自定义按钮内容的控件。

### `elevation`

按钮的高程。

### `icon`

按钮中显示的图标。

### `icon_color`

图标[颜色](/docs/guides/python/colors)。

### `style`

该值是`ButtonStyle`类的实例。 `ButtonStyle`允许控制按钮的所有视觉方面，例如形状，前景，背景和阴影颜色，内容填充，边框宽度和半径。

每个单独的样式属性都可以为一个按钮的所有或特定的“材料状态”配置，例如“徘徊”，“聚焦”，“禁用”等。 例如，您可以为盘旋状态配置不同的形状，背景颜色，并为所有其他状态配置后备值。

支持以下`MaterialState`值:

- `HOVERED`
- `FOCUSED`
- `PRESSED`
- `DRAGGED`
- `SELECTED`
- `SCROLLEDUNDER`
- `DISABLED`
- `ERROR`
- `DEFAULT` - 后备状态，意思是“所有其他状态”。

为了配置所有材料状态的样式属性，将其值设置为文字（或类实例）。 例如，如果将`color`属性设置为字面的属性，则将将值应用于所有按钮状态:

```python
ButtonStyle(
    color=ft.colors.WHITE
)
```

为特定材料状态配置样式属性，将其值设置为键是状态名称的字典。 例如，为`HOVERED`和`FOCUSED`配置不同的背景颜色，以及所有其他状态的另一种颜色:

```python
ButtonStyle(
    color={
        ft.MaterialState.HOVERED: ft.colors.WHITE,
        ft.MaterialState.FOCUSED: ft.colors.BLUE,
        ft.MaterialState.DEFAULT: ft.colors.BLACK,
    }
)
```

检查以下示例:

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

#### `ButtonStyle`类

`ButtonStyle`类具有以下属性:

- `color` - 按钮文本和图标控制后代的颜色。
- `bgcolor` - 按钮的背景填充颜色。
- `overlay_color` - 通常用于指示按钮聚焦，悬停或按下的突出颜色。
- `shadow_color` - 按钮材料的阴影颜色。
- `surface_tint_color` - 按钮材料的表面色彩。
- `elevation` - 按钮材料的高程。
- `animation_duration` - 在动画变化的形状和高程中定义了持续时间。
- `padding` - 按钮边界与其 child 之间的填充。
- `side` - `BorderSide`类的实例，按钮轮廓的颜色和重量。
- `shape` - 按钮基础材料的形状，以下实现之一的实例:
  - `StadiumBorder`
  - `RoundedRectangleBorder`
    - `radius` - 边框半径，`BorderRadius`类或数字的实例。
  - `CircleBorder`
  - `BeveledRectangleBorder`
    - `radius` - 边框半径，`BorderRadius`类或数字的实例。
  - `ContinuousRectangleBorder`
    - `radius` - 边框半径，`BorderRadius`类或数字的实例。

这是展示各种按钮形状的示例:

<img src="/img/blog/gradients/button-shapes.png" className="screenshot-20" />

```python
import flet as ft

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

### `text`

按钮上显示的文本。

### `tooltip`

悬停在按钮上时显示的文本。

### `url`

单击按钮时要打开的 URL。 如果已注册，`on_click`事件在此之后发射。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前的选项卡片/窗口。

## 方法

### `focus()`

将重点移至按钮。

## 事件

### `on_blur`

当控件失去焦点时会发射。

### `on_click`

用户单击按钮时发射。

### `on_focus`

控件收到焦点时发射。

### `on_hover`

当鼠标指针进入或存在按钮响应区域时发射。 `data`事件对象的属性包含`true`（string）当光标输入时，`false`退出时。

```python
import flet as ft

def main(page: ft.Page):
    def on_hover(e):
        e.control.bgcolor = "orange" if e.data == "true" else "yellow"
        e.control.update()

    page.add(
        ft.ElevatedButton(
            "I'm changing color on hover", bgcolor="yellow", on_hover=on_hover
        )
    )

ft.app(target=main)
```

### `on_long_press`

长时间按钮时会发射。
