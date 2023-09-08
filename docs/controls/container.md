---
title: Container
sidebar_label: Container
slug: container
---

容器允许用背景颜色和边框装饰控件，并用填充，边距和对齐方式将其放置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/layout/container)

### 具有不同背景颜色的容器

<img src="/img/docs/controls/container/containers-background-color.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Containers with background color"

    c1 = ft.Container(
        content=ft.ElevatedButton("Elevated Button in Container"),
        bgcolor=ft.colors.YELLOW,
        padding=5,
    )

    c2 = ft.Container(
        content=ft.ElevatedButton(
            "Elevated Button with opacity=0.5 in Container", opacity=0.5
        ),
        bgcolor=ft.colors.YELLOW,
        padding=5,
    )

    c3 = ft.Container(
        content=ft.OutlinedButton("Outlined Button in Container"),
        bgcolor=ft.colors.YELLOW,
        padding=5,
    )
    page.add(c1, c2, c3)


ft.app(target=main)
```

  </TabItem>
</Tabs>

### 可单击的容器

<img src="/img/docs/controls/container/clickable-container.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Containers - clickable and not"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    page.add(
        ft.Row(
            [
                ft.Container(
                    content=ft.Text("Non clickable"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.AMBER,
                    width=150,
                    height=150,
                    border_radius=10,
                ),
                ft.Container(
                    content=ft.Text("Clickable without Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.GREEN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    on_click=lambda e: print("Clickable without Ink clicked!"),
                ),
                ft.Container(
                    content=ft.Text("Clickable with Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.CYAN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable with Ink clicked!"),
                ),
                ft.Container(
                    content=ft.Text("Clickable transparent with Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable transparent with Ink clicked!"),
                ),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## 属性

<img src="/img/docs/controls/container/container-diagram.png" className="screenshot-50" />

### `alignment`

对齐容器中的 child 控件。

对齐是`alignment.Alignment`类对象的实例，`x`和`y`属性代表距矩形中心的距离。 `x=0`，`y=0`表示矩形的中心。 `x = -1`，`y = -1`代表矩形的左上角，`x=1.0`，`y=1.0`表示矩形的右下角。 `flet.alignment`模块中有预定的对齐常数: `top_left`，`top_center`，`top_right`，`center_left`，`center`，`center`，`center_right`，`center_right`，`bottom_left`，`bottom_left`，`bottom_center`，`bottom_center`，`bottom_center`，{279917}。

<img src="/img/docs/controls/container/container-alignments-diagram.png" className="screenshot-40" />

例如:

```python

container_1.alignment = alignment.center
container_2.alignment = alignment.top_left
container_3.alignment = alignment.Alignment(-0.5, -0.5)
```

<img src="/img/docs/controls/container/containers-alignments.png" className="screenshot-50" />

### `animate`

启用容器“隐式”动画，该动画在一段时间内逐渐更改其值。

`animate`属性的值可能是以下类型之一:

- `bool` - `True`以`linear`曲线启用`1000`毫秒毫秒的曲线启用容器动画。
- `int` - 使用`linear`曲线和指定的毫秒数启用容器动画。
- `andimation.animation（持续时间: int，曲线: str）` - 启用具有指定持续时间和过渡曲线的容器动画。

例如:

<img src="/img/docs/controls/container/animate-container.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=200,
        height=200,
        bgcolor="red",
        animate=ft.animation.Animation(1000, "bounceOut"),
    )

    def animate_container(e):
        c.width = 100 if c.width == 200 else 200
        c.height = 100 if c.height == 200 else 200
        c.bgcolor = "blue" if c.bgcolor == "red" else "red"
        c.update()

    page.add(c, ft.ElevatedButton("Animate container", on_click=animate_container))

ft.app(target=main)
```

### `bgcolor`

容器的背景颜色。

颜色值可能是`＃argb`格式（例如＃ffcc0000`），`＃rgb`格式（例如＃cc0000`）或`flet.colors`模块中的命名颜色的颜色值。

混合模式应用于容器的`color`或`gradient`背景。 有关更多详细信息，请参见[`ShaderMask.blend_mode`](shadermask#blend_mode)。

### `blur`

在容器下应用高斯模糊效果。

该属性的值可能是以下一个:

- **一个数字** - 指定水平和垂直 sigmas 的值相同的值，例如 `10`。
- **元组** - 指定水平和垂直 sigmas 的单独值，例如 `（10，1）`。
- ** `ft.Blur` **的实例 - 允许为滤波器指定水平和垂直闪光的单独值以及`tile_mode`的过滤器。 `tile_mode`是`ft.BlurTileMode`的值，该值默认为`ft.BlurTileMode.CLAMP`。

例如:

```python
ft.Stack(
    [
        ft.Container(
            content=ft.Text("Hello"),
            image_src="https://picsum.photos/100/100",
            width=100,
            height=100,
        ),
        ft.Container(
            width=50,
            height=50,
            blur=10,
            bgcolor="#44CCCC00",
        ),
        ft.Container(
            width=50,
            height=50,
            left=10,
            top=60,
            blur=(0, 10),
        ),
        ft.Container(
            top=10,
            left=60,
            blur=ft.Blur(10, 0, ft.BlurTileMode.MIRROR),
            width=50,
            height=50,
            bgcolor="#44CCCCCC",
            border=ft.border.all(2, ft.colors.BLACK),
        ),
    ]
)
```

### `border`

在背景颜色上绘制的边框。

容器边框的每一侧均由`border.BorderSide`类的实例描述，其中有两个属性: `width`（number）和`color`（string）。 `border`属性的值是`border.Border`类的实例，描述了矩形的所有 4 个侧面。 可用于设置边框样式的辅助方法:

- `border.all（width，color）``
- `边框。
- ```只有border.ly（左: Borderside，顶部: Borderside，右: Borderside，底部: Borderside）。

  ```

例如:

```python
container_1.border = ft.border.all(10, ft.colors.PINK_600)
container_1.border = ft.border.only(bottom=ft.border.BorderSide(1, "black"))
```

### `border_radius`

如果指定，容器的角将被此半径舍入。 边框半径是`border_radius.BorderRadius`类的实例，具有 4 个属性: `top_left`，`top_right`，`bottom_left`，`bottom_right`。 可以使用构造函数创建对象，其中所有角值分别设置或使用辅助方法设置:

- `border_radius.all(value)`
- `border_radius.horizontal（左: float = 0，右: float = 0）
- `border_radius.vertical（顶部: float = 0，底部: float = 0）`
- `border_radius.only（top_left，top_right，bottom_left，bottom_right）

例如:

```python
container_1.border_radius= ft.border_radius.all(30)
```

### `clip_behavior`

内容将根据此选项剪辑（或不）。

属性值为`ClipBehavior`枚举，具有支持的值:

- `NONE`
- `ANTI_ALIAS`
- `ANTI_ALIAS_WITH_SAVE_LAYER`
- `HARD_EDGE`

如果`border_radius`不是`None`，则默认值为`ANTI_ALIAS`; 否则`HARD_EDGE`。

### `content`

child 控件由容器包含。

### `gradient`

配置梯度背景。 该值必须是以下类之一的实例:

- `LinearGradient`
- `RadialGradient`
- `SweepGradient`

#### `LinearGradient`

<img src="/img/docs/controls/container/linear-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=ft.LinearGradient(
        begin=ft.alignment.top_center,
        end=ft.alignment.bottom_center,
       colors=[ft.colors.BLUE, ft.colors.YELLOW],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`LinearGradient`类具有以下属性:

- `begin` - `Alignment`类的实例。 放置 0.0 梯度的偏移。
- `end` - `Alignment`类的实例。 放置梯度的 1.0 停止的偏移。
- `colors` - 梯度应在每个停止处获得的颜色。 如果停止是非空的，则此列表必须具有与停止相同的长度。 此列表中必须至少具有两种颜色（否则，它不是渐变！）。
- `stops` - 0.0 到 1.0 的值列表，表示沿梯度的分数。 如果非编号，此列表必须具有与`colors`的长度相同的长度。 如果第一个值不是 0.0，则暗示`colors`中的颜色等于`colors`中的第一种颜色的停止。 如果最后一个值不是 1.0，则隐含`colors`中的最后一个颜色等于位置 1.0 的停止。
- `tile_mode` - 在`begin`之前和`end`之前，该梯度应如何在该区域范围内铺平平面。 值是`GradientTileMode`枚举，具有支持的值: `CLAMP`（默认值），`DECAL`，`MIRROR`，`REPEATED`。 更多信息[此处](https://api.flutter.dev/flutter/dart-ui/TileMode.html)。
- `rotation` - 梯度的旋转，在[弧度](https://en.wikipedia.org/wiki/Radian)中，围绕其边界框的中心点。

更多信息:

- [线性梯度](https://api.flutter.dev/flutter/painting/LinearGradient-class.html)在 Flutter 文档中。
- [Radian 测量单元](https://en.wikipedia.org/wiki/Radian)在 Wikipedia 上。

#### `RadialGradient`

<img src="/img/docs/controls/container/radial-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=ft.RadialGradient(
       colors=[ft.colors.YELLOW, ft.colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`RadialGradient`类具有以下属性:

- `colors`，`stops`，`tile_mode`，`rotation` - 参见[线性梯度](#lineargradient)以获取这些属性的描述。
- `center` - `Alignment`类的实例。 梯度的中心，作为（-1.0，-1.0）x（1.0，1.0）正方形的偏移，描述了将映射到油漆箱上的梯度。 例如，（0.0，0.0）的比对将径向梯度放置在盒子的中央。
- `radius` - 梯度的半径，是油漆箱最短一侧的一小部分。 例如，如果将径向梯度涂在 100.0 像素宽，高 200.0 像素的盒子上，则半径为 1.0，将使 1.0 停止以 100.0 像素从`center`放在 100.0 像素。
- `focal` - 梯度的焦点。 如果指定，则梯度似乎将沿向量从`center`到焦点进行聚焦。
- `focal_radius` - 梯度焦点的半径，是油漆箱最短一侧的一小部分。 例如，如果将径向梯度涂在宽 100.0 像素和 200.0 像素的盒子上，则半径为 1.0，将使 1.0 停止位于焦点的 100.0 像素。

更多信息:

- [radial 渐变](https://api.flutter.dev/flutter/painting/RadialGradient-class.html)在 flutter 文档中。

#### `SweepGradient`

<img src="/img/docs/controls/container/sweep-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=SweepGradient(
        center=ft.alignment.center,
        start_angle=0.0,
        end_angle=math.pi * 2,
       colors=[ft.colors.YELLOW, ft.colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```

`SweepGradient`类具有以下属性:

- `colors`，`stops`，`tile_mode`，`rotation` - 参见[线性梯度](#lineargradient)以获取这些属性的描述。
- `center` - 梯度的中心，作为（-1.0，-1.0）x（1.0，1.0）正方形的偏移，描述了将映射到油漆盒上的梯度。 例如，（0.0，0.0）的比对将扫描梯度放在盒子的中心。
- `start_angle` - 放置梯度 0.0 的弧度的角度。 默认为 0.0。
- `end_angle` - 放置梯度 1.0 的弧度的角度。 默认为 Math.pi \* 2。

更多信息:

- [扫描渐变](https://api.flutter.dev/flutter/painting/SweepGradient-class.html)在 flutter 文档中。

### `image_fit`

有关更多详细信息，请参见[`Image.fit`](image#fit)。

### `image_opacity`

与背景混合时设置图像不透明度: `0.0`和`1.0`之间的值。

### `image_repeat`

有关更多详细信息，请参见[`Image.repeat`](image#repeat)。

### `image_src`

将图像设置为容器背景。 有关更多详细信息，请参见[`Image.src`](image#src)。

### `image_src_base64`

将编码为基本 64 字符串的图像设置为容器背景。 有关更多详细信息，请参见[`Image.src_base64`](image#src_base64)。

### `ink`

`True`在用户单击容器时产生墨水涟漪效应。 默认值为`False`。

### `margin`

围绕装饰的空白空间和 child 控制。

保证金是`margin.Margin`类的实例，该类别具有属性的属性设置边距的矩形: `left`，`top`，`right`，`right`，`bottom`。 `margin.Margin`的实例可以通过具有特定侧面值或使用辅助方法创建的构造器创建:

- `margin.all(value)`
- `边缘对称（垂直，水平）``
- ``仅限余量（左，顶，右，底部）`

例如:

```python

container_1.margin = margin.all(10)
container_2.margin = 20 # same as margin.all(20)
container_3.margin = margin.symmetric(vertical=10)
container_3.margin = margin.only(left=10)
```

<img src="/img/docs/controls/container/container-margin-diagram.png" className="screenshot-50" />

### `padding`

空的空间可以刻在容器装饰中（背景，边框）。 child 控件放置在此填充物中。

填充是`padding.Padding`类的实例，具有属性的属性填充矩形的所有侧面: `left`，`top`，`right`，`right`，`bottom`。 `padding.Padding`的实例可以通过具有特定侧面值的构造器创建，也可以使用辅助方法创建:

- `padding.all（value: float）``
- `填充物（垂直，水平）``
- `仅padding.ly（左，顶，右，底部）`

例如:

```python

container_1.padding = ft.padding.all(10)
container_2.padding = 20 # same as ft.padding.all(20)
container_3.padding = ft.padding.symmetric(horizontal=10)
container_4.padding=padding.only(left=10)
```

<img src="/img/docs/controls/container/container-padding-diagram.png" className="screenshot-50" />

### `shadow`

容器铸造的阴影列表。

该属性的值是一个实例或`ft.BoxShadow`类实例的列表，具有以下属性:

- `spread_radius` - 在应用模糊之前，该框应夸大该框的金额。 默认值为`0.0.`。
- `blur_radius` - 高斯与阴影形状卷积的标准偏差。 默认值为`0.0.`。
- `color` - 颜色会绘制阴影的颜色。
- `offset` - `ft.Offset` class 的实例 - 铸件中阴影的位移。 正 X/Y 偏移将使阴影向右和向下移动，而负偏移将阴影转移到左侧和向上。 偏移相对于施放它的元素的位置。 默认值为`ft.offset（0,0）`。
- `blur_style` - 用于此阴影的`ft.BlurStyle`。 默认为`ft.BlurStyle.NORMAL`。

例子:

```python
ft.Container(
    border_radius=10,
    width=100,
    height=100,
    shadow=ft.BoxShadow(
        spread_radius=1,
        blur_radius=15,
        color=ft.colors.BLUE_GREY_300,
        offset=ft.Offset(0, 0),
        blur_style=ft.ShadowBlurStyle.OUTER,
    )
)
```

### `shape`

设置容器的形状。 值为`BoxShape`枚举:

- `RECTANGLE`（默认）
- `CIRCLE`

### `theme_mode`

设置`theme_mode`（`ft.ThemeMode`）“重置”父主题，并为容器内的所有控件创建一个新的独特方案。 否则，在容器的`theme`中定义的样式属性覆盖了父母的相应样式，即继承的主题。

### `theme`

允许设置一个嵌套`ft.Theme`，以用于容器内部和树的所有控件，例如:

```python
import flet as ft

def main(page: ft.Page):
    # Yellow page theme with SYSTEM (default) mode
    page.theme = ft.Theme(
        color_scheme_seed=ft.colors.YELLOW,
    )

    page.add(
        # Page theme
        ft.Container(
            content=ft.ElevatedButton("Page theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),

        # Inherited theme with primary color overridden
        ft.Container(
            theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.colors.PINK)),
            content=ft.ElevatedButton("Inherited theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),

        # Unique always DARK theme
        ft.Container(
            theme=ft.Theme(color_scheme_seed=ft.colors.INDIGO),
            theme_mode=ft.ThemeMode.DARK,
            content=ft.ElevatedButton("Unique theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),
    )

ft.app(main)
```

<img src="/img/blog/theme-scrolling/nested-themes.png"  className="screenshot-60" />

### `url`

单击容器时要打开的 URL。 如果已注册，则在此之后发射`on_click`事件。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前选项卡片/窗口。

## 事件

### `on_click`

当用户单击容器时发射。 事件对象`e`是`ContainerTapEvent`类的实例:

```python
class ft.ContainerTapEvent():
    local_x: float
    local_y: float
    global_x: float
    global_y: float
```

:::信息
如果`ink`为`True`，则使用空的`ControlEvent`将是`ControlEvent`的`ControlEvent`，而无需`data`，而不是`ContainerTapEvent`。
:::。

一个简单的用法示例:

```python
import flet as ft

def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    t = ft.Text()

    def container_click(e: ft.ContainerTapEvent):
        t.value = f"local_x: {e.local_x}\nlocal_y: {e.local_y}\nglobal_x: {e.global_x}\nglobal_y: {e.global_y}"
        t.update()

    page.add(
        ft.Column(
            [
                ft.Container(
                    content=ft.Text("Clickable inside container"),
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.GREEN_200,
                    width=200,
                    height=200,
                    border_radius=10,
                    on_click=container_click,
                ),
                t,
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        ),
    )

ft.app(target=main)
```

### `on_hover`

当鼠标指针进入或存在容器区域时发射。 `data`事件对象的属性包含`true`（string）当光标进入时，`false`退出时。

容器在鼠标悬停上更改其背景颜色的一个简单示例:

```python
import flet as ft

def main(page: ft.Page):
    def on_hover(e):
        e.control.bgcolor = "blue" if e.data == "true" else "red"
        e.control.update()

    page.add(
        ft.Container(width=100, height=100, bgcolor="red", ink=False, on_hover=on_hover)
    )

ft.app(target=main)
```

### `on_long_press`

当容器长时间时会发射。
