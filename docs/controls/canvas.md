---
title: Canvas
sidebar_label: Canvas
slug: canvas
---

帆布是使用一组原语或“形状”（例如线，弧，路径和文本）绘制任意图形的控件。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/displays/canvas)

### 基本用法

<img src="/website/img/docs/controls/canvas/canvas-face.png" className="screenshot-20"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    stroke_paint = ft.Paint(stroke_width=2, style=ft.PaintingStyle.STROKE)
    fill_paint = ft.Paint(style=ft.PaintingStyle.FILL)
    cp = cv.Canvas(
        [
            cv.Circle(100, 100, 50, stroke_paint),
            cv.Circle(80, 90, 10, stroke_paint),
            cv.Circle(84, 87, 5, fill_paint),
            cv.Circle(120, 90, 10, stroke_paint),
            cv.Circle(124, 87, 5, fill_paint),
            cv.Arc(70, 95, 60, 40, 0, math.pi, paint=stroke_paint),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### `Path`形状示例

<img src="/website/img/docs/controls/canvas/canvas-triangles.png" className="screenshot-20"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Path(
                [
                    cv.Path.MoveTo(25, 25),
                    cv.Path.LineTo(105, 25),
                    cv.Path.LineTo(25, 105),
                ],
                paint=ft.Paint(
                    style=ft.PaintingStyle.FILL,
                ),
            ),
            cv.Path(
                [
                    cv.Path.MoveTo(125, 125),
                    cv.Path.LineTo(125, 45),
                    cv.Path.LineTo(45, 125),
                    cv.Path.Close(),
                ],
                paint=ft.Paint(
                    stroke_width=2,
                    style=ft.PaintingStyle.STROKE,
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### bezier 曲线

<img src="/website/img/docs/controls/canvas/canvas-bezier.png" className="screenshot-30"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Path(
                [
                    cv.Path.MoveTo(75, 25),
                    cv.Path.QuadraticTo(25, 25, 25, 62.5),
                    cv.Path.QuadraticTo(25, 100, 50, 100),
                    cv.Path.QuadraticTo(50, 120, 30, 125),
                    cv.Path.QuadraticTo(60, 120, 65, 100),
                    cv.Path.QuadraticTo(125, 100, 125, 62.5),
                    cv.Path.QuadraticTo(125, 25, 75, 25),
                ],
                paint=ft.Paint(
                    stroke_width=2,
                    style=ft.PaintingStyle.STROKE,
                ),
            ),
            cv.Path(
                [
                    cv.Path.SubPath(
                        [
                            cv.Path.MoveTo(75, 40),
                            cv.Path.CubicTo(75, 37, 70, 25, 50, 25),
                            cv.Path.CubicTo(20, 25, 20, 62.5, 20, 62.5),
                            cv.Path.CubicTo(20, 80, 40, 102, 75, 120),
                            cv.Path.CubicTo(110, 102, 130, 80, 130, 62.5),
                            cv.Path.CubicTo(130, 62.5, 130, 25, 100, 25),
                            cv.Path.CubicTo(85, 25, 75, 37, 75, 40),
                        ],
                        100,
                        100,
                    )
                ],
                paint=ft.Paint(
                    gradient=ft.PaintRadialGradient(
                        ft.Offset(150, 150), 50, [ft.colors.PINK_100, ft.colors.PINK]
                    ),
                    style=ft.PaintingStyle.FILL,
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### 绘制文本

<img src="/website/img/docs/controls/canvas/canvas-text.png" className="screenshot-60"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Text(0, 0, "Just a text"),
            cv.Circle(200, 100, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                200,
                100,
                "Rotated",
                ft.TextStyle(weight=ft.FontWeight.BOLD, size=30),
                spans=[
                    ft.TextSpan(
                        "around top_center",
                        ft.TextStyle(italic=True, color=ft.colors.GREEN, size=20),
                    )
                ],
                alignment=ft.alignment.top_center,
                rotate=math.pi * 0.15,
            ),
            cv.Circle(400, 100, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                400,
                100,
                "Rotated around top_left",
                ft.TextStyle(size=20),
                alignment=ft.alignment.top_left,
                rotate=math.pi * -0.15,
            ),
            cv.Circle(600, 200, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                600,
                200,
                "Rotated around center",
                ft.TextStyle(size=20),
                alignment=ft.alignment.center,
                rotate=math.pi / 2,
            ),
            cv.Text(
                300,
                400,
                "Limited to max_width and right-aligned.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                text_align=ft.TextAlign.RIGHT,
                max_width=400,
            ),
            cv.Text(
                200,
                200,
                "WOW!",
                ft.TextStyle(
                    weight=ft.FontWeight.BOLD,
                    size=100,
                    foreground=ft.Paint(
                        gradient=ft.PaintLinearGradient(
                            (200, 200),
                            (300, 300),
                            colors=[ft.colors.YELLOW, ft.colors.RED],
                        ),
                        stroke_join=ft.StrokeJoin.ROUND,
                        stroke_cap=ft.StrokeCap.ROUND,
                    ),
                ),
            ),
            cv.Text(
                200,
                200,
                "WOW!",
                ft.TextStyle(
                    weight=ft.FontWeight.BOLD,
                    size=100,
                    foreground=ft.Paint(
                        color=ft.colors.PINK,
                        stroke_width=6,
                        style=ft.PaintingStyle.STROKE,
                        stroke_join=ft.StrokeJoin.ROUND,
                        stroke_cap=ft.StrokeCap.ROUND,
                    ),
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### Free-hand 绘图工具 - 带有手势检测器的画布

<img src="/website/img/docs/controls/canvas/canvas-flet-brush.gif" className="screenshot-40"/>

```python
import flet as ft
import flet.canvas as cv

class State:
    x: float
    y: float

state = State()

def main(page: ft.Page):
    page.title = "Flet Brush"

    def pan_start(e: ft.DragStartEvent):
        state.x = e.local_x
        state.y = e.local_y

    def pan_update(e: ft.DragUpdateEvent):
        cp.shapes.append(
            cv.Line(
                state.x, state.y, e.local_x, e.local_y, paint=ft.Paint(stroke_width=3)
            )
        )
        cp.update()
        state.x = e.local_x
        state.y = e.local_y

    cp = cv.Canvas(
        [
            cv.Fill(
                ft.Paint(
                    gradient=ft.PaintLinearGradient(
                        (0, 0), (600, 600), colors=[ft.colors.CYAN_50, ft.colors.GREY]
                    )
                )
            ),
        ],
        content=ft.GestureDetector(
            on_pan_start=pan_start,
            on_pan_update=pan_update,
            drag_interval=10,
        ),
        expand=False,
    )

    page.add(
        ft.Container(
            cp,
            border_radius=5,
            width=float("inf"),
            expand=True,
        )
    )


ft.app(main)
```

## `Canvas` properties

### `resize_interval`

在`on_resize`事件中以毫秒为单位进行抽样间隔。 默认值为`0` - 在每个更改上调用`on_resize`。

### `shapes`

`Shape`对象的列表（请参见下文）在画布上绘制。

## `Canvas`事件

### `on_resize`

当画布的大小变化时，会发生射击。

事件对象`e`是带有以下字段的`CanvasResizeEvent`类的实例:

- `width` - 画布的新宽度。
- `height` - 画布的新高度。

## `Arc`形状属性

绘制一个弧形缩放以适合给定矩形内的弧线。

它从椭圆形周围的`start_angle`弧度开始，最高为`start_angle` + `sweep_angle` roadians 围绕椭圆形，零弧度是椭圆形的右侧的点，与矩形中心相交的水平线横穿水平线的右侧。 并以正角顺时针绕椭圆形。 如果`use_center`为`True`，则弧封闭回中心，形成一个圆形扇区。 否则，弧不会封闭，形成一个圆段。

[图片] -https://api.flutter.dev/flutter/dart-ui/canvas/drawarc.html

### `x`

电弧左上角的 X 轴坐标。

### `y`

ARC 左上角的 Y 轴坐标。

### `width`

矩形包含弧椭圆形的宽度。

### `height`

矩形的高度包含弧的椭圆形。

### `start_agnle`

弧度的起始角度从。

### `sweep_angle`绘制弧线

弧度中的弧的长度。

### `use_center`

如果`use_center`为`True`，则弧封闭回中心，形成一个圆形扇区。 否则，弧不会关闭，形成一个圆段。

### `paint`

一种绘制弧线的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Circle` shape 属性

绘制一个圆圈。

### `x`

圆圈中心点的 X 轴坐标。

### `y`

圆圈中心点的 Y 轴坐标。

### `radius`

Circle 的半径。

### `paint`

一种绘制圆圈的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Color` shape 属性

将给定的`color`涂在画布上，应用给定的`blend_mode`，而给定的颜色为源，背景为目的地。

### `color`

[颜色](/docs/guides/python/colors)涂在画布上。

### `blend_mode`

混合模式申请。

有关可能的混合模式值，请参见[`ShaderMask.blend_mode`](shadermask#blend_mode)。

## `Fill` shape 属性

用给定的`Paint`填充画布。

要用纯色和混合模式填充画布，请考虑`Color`形状。

### `paint`

一种填充画布的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Line` shape 属性

使用给定的油漆在给定点之间绘制一条线。 线条被触及，`Paint.style`的值被忽略。

### `x1`

线的起点的 X 轴坐标。

### `y1`

线的起点的 Y 轴坐标。

### `x2`

线的终点的 X 轴坐标。

### `y2`

线的终点的 Y 轴坐标。

### `paint`

与一条线的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Oval` shape 属性

绘制一个轴对准的椭圆形，该椭圆形填充给定轴对准的矩形，并带有给定的`Paint`。 椭圆形被填充还是抚摸（或两者）都由`Paint.style`控制。

### `x`

椭圆形左上角的 X 轴坐标。

### `y`

椭圆形左上角的 Y 轴坐标。

### `width`

包含椭圆形的矩形宽度。

### `height`

矩形的高度包含椭圆形。

### `paint`

一种绘制椭圆形的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Path` shape 属性

用给定的`elements`用给定的`Paint`绘制 A 路径。

该形状是否填充或触摸（或两者）都由`Paint.style`控制。 如果填充路径，则该子路径隐含地关闭（请参阅`Path.Close`）。

### `elements`

路径元素列表:

#### `path.moveto（x，y）`

在给定点(`x`,`y`)。

#### `path.lineto（x，y）

从当前点添加一个直线段到给定点(`x`,`y`)。

#### `path.quadraticto（cp1x，cp2y，cp2y，x，x，y，w）```

使用控制点(`cp1x`,`cp1y`)和权重`w`，添加了一个从当前点到给定点(`x`,`y`)的曲线段，该段从当前点到给定点(`x`,`y`)。 如果重量大于 1，则曲线为双曲线； 如果重量等于 1，那是抛物线； 如果小于 1，则是一个椭圆。

#### `path.cubicto（cp1x，cp1y，cp2x，cp2x，cp2y，x，y）``

使用控制点(`cp1x`,`cp1y`)和(`cp2x`,`cp2y`)。添加一个从当前点到给定点(`x`,`y`)的曲线的立方 bezier 段。

#### 。

将`elements`描述的子路径添加到给定点(`x`,`y`)。

#### `path.arc（x，y，width，height，height，start_angle，sweep_angle）`

添加一个新的子路径，其中一个 ARC 段由弧形组成，该弧遵循椭圆形的边缘，由给定的矩形在`x`和`y`和`y`和 dimensions `width`和`height`和`height`，`height`，`y`和`height`，从 `start_angle`椭圆形周围的弧度最高为`start_angle` + `sweep_angle`弧度周围的弧度，零弧度为椭圆形的右侧点上的点，与矩形相交的水平线交叉，并与矩形的中心相交。 围绕椭圆形顺时针的角度。

#### `path.arcto（x，y，radius，旋转，旋转，大\_arc，顺时针）

将多达四个圆锥曲线加权以描述`radius`的椭圆形，并由`rotation`旋转（以度和顺时针方向测量）。

第一条曲线从路径的最后一点开始，最后一个曲线以`x`和`y`结束。 曲线沿着由`clockwise`（bool）和`large_arc`（bool）确定的方向沿着路径，以扫描角度始终小于 360 度的方式。

如果半径为零或路径(`x`,`y`)中的最后一点，则会附加简单的线。 如果两者都大于零但太小而无法描述弧。

添加了一个由曲线组成的新子路径，该曲线形成椭圆形，该椭圆形填充给定的矩形。

#### `path.Rect（x，y，y，width，width，height，borde_radius）``''

添加一个矩形作为新的子路径。

#### `Path.Close`

关闭最后一个子路径，好像从当前点到子路径的第一个点已经绘制了一条直线。

### `paint`

一种绘制路径的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Points` shape 属性

根据给定的`point_mode`绘制一系列点。

### `points`

`ft.Offset`描述点的列表。

### `point_mode`

定义在绘制一组点时如何解释点列表。 该值是类型`ft.PointMode`的类型:

- `POINTS` - 分别绘制每个点。 如果`Paint.stroke_cap`为`StrokeCap.ROUND`，则将每个点绘制为圆形的`Paint.stroke_width`的直径，如`Paint`所述填充（忽略`Paint.style`）。 否则，将每个点作为一个轴对准的正方形，并用长度为`Paint.stroke_width`的两侧，如`Paint`所述填充（忽略`Paint.style`）。
- `LINES` - 将每个序列绘制为两个点段的每个序列。 如果点数很奇，则最后一点被忽略。 如`Paint`所述（忽略`Paint.style`），将行触及。
- `POLYGON` - 将整个点序列绘制为一行。 线条如`Paint`所述（忽略`Paint.style`）。

### `paint`

一种绘制点的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Rect` shape 属性

绘制矩形。

### `x`

矩形左上角的 X 轴坐标。

### `y`

矩形左上角的 Y 轴坐标。

### `width`

矩形的宽度。

### `height`

矩形的高度。

### `border_radius`

矩形的边界半径，类型`ft.BorderRadius`的值。

### `paint`

一种绘制矩形的样式。 该属性的值是[`ft.Paint`](#paint-properties)的实例。

## `Shadow` shape 属性

为`path`绘制代表给定 material `elevation`的阴影。

`transparent_occluder`的参数应为`True`，如果遮挡对象不是不透明的。

### `path`

描述路径的`Path.PathElement`对象的列表。

### `color`

阴影[颜色](/docs/guides/python/colors)。

### `elevation`

阴影高程。

### `transparent_occluder`

`True`如果阻塞对象不是不透明的。 默认值为`False`。

## `Text`形状属性

用`style`在给定点(`x`, `y`)中绘制`text`。

###

### `x`

文本的`alignment`点的 X 轴坐标。

### `y`

文本的`alignment`点的 y 轴坐标。

### `text`

绘制的文本。

### `style`

绘制`text`和`spans`的文本样式。 该值是[`ft.TextStyle`](text#textstyle-properties) class。

### `spans`的实例

[`ft.TextSpan`](text#textspan-properties)对象的列表构建一个丰富的文本段落。

### `alignment`

文本矩形中的一个点，以确定其位置和旋转中心。

该值是类型`ft.Alignment`类型。 默认值为`ft.alignment.top_left`。

### `text_align`

文本水平对齐。 有关支持的值，请参见[`Text.text_align`](text#text_align)属性。

### `max_lines`

绘制的最大线条数。 超出此数字的线被静静地掉落。 例如，如果最大线是 1，则仅渲染一行。 如果`max_lines`是`None`，但省略号不是`None`，则在第一个溢出宽度约束的第一个线之后。

### `max_width`

彩绘文本的最大宽度。 默认值为`None` - infinity。

### `ellipsis`

用来椭圆形溢出文本的字符串。

### `rotate`

弧度的文字旋转。 文本围绕由`alignment`确定的点旋转。 请参阅上面的代码示例。

## `Paint`属性

在画布上绘制形状时要使用的样式的描述。

### `anti_alias`

是否将抗缩放剂应用于画布上绘制的线条和图像。 默认为`True`。

### `blend_mode`

:::注意
该属性尚未实施并保留供将来使用。
:::

绘制形状或层合成时应用的混合模式。

默认为`BlendMode.SRC_OVER`。

有关可能的混合模式值，请参见[`ShaderMask.blend_mode`](shadermask#blend_mode)。

### `blur_image`

:::注意
该属性尚未实施并保留供将来使用。
:::

在画布上绘制时模糊图像。

有关更多信息，请参见[`Container.blur`](container#blur)。

### `color`

抚摸或填充形状时使用的[颜色](/docs/guides/python/colors)。 默认为不透明黑色。

### `gradient`

配置梯度油漆。 该值是以下类的实例:

- `PaintLinearGradient`
- `PaintRadialGradient`
- `PaintSweepGradient`

#### `PaintLinearGradient`

<img src="/website/img/docs/controls/canvas/paint-linear-gradient.png" className="screenshot-20" />

```python
cv.Rect(
    10,
    10,
    100,
    100,
    5,
    ft.Paint(
        gradient=ft.PaintLinearGradient(
            (0, 10), (0, 100), colors=[ft.colors.BLUE, ft.colors.YELLOW]
        ),
        style=ft.PaintingStyle.FILL,
    ),
)
```

`PaintLinearGradient`类具有以下属性:

- `begin` - `Offset`类的实例。 放置 0.0 梯度的偏移。
- `end` - `Offset`类的实例。 放置梯度的 1.0 停止的偏移。
- `colors` - 梯度应在每个停止处获得的颜色。 如果停止是非空的，则此列表必须具有与停止相同的长度。 此列表中必须至少具有两种颜色（否则，它不是渐变！）。
- `stops` - 一个 0.0 到 1.0 的值列表，表示沿梯度的分数。 如果非编号，此列表必须具有与`colors`相同的长度。 如果第一个值不是 0.0，则暗示`colors`中的颜色等于第一个颜色的颜色等于`colors`中的颜色。 如果最后一个值不是 1.0，则隐含`colors`中的最后一个颜色等于`colors`的最后一个颜色。
- `tile_mode` - 在`begin`之前和`end`之前，该梯度应如何在该区域的范围内铺平平面。 值为`GradientTileMode`枚举，具有支持值: `CLAMP`（默认），`DECAL`，`MIRROR`，`REPEATED`。 更多信息[此处](https://api.flutter.dev/flutter/dart-ui/TileMode.html)。
- `rotation` - 梯度的旋转，在[弧度](https://en.wikipedia.org/wiki/Radian)中，围绕其边界框的中心点。

更多信息:

- [线性梯度](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.linear.html)在 Flutter 文档中。
- [Radian 测量单元](https://en.wikipedia.org/wiki/Radian)在 Wikipedia 上。

#### `PaintRadialGradient`

<img src="/website/img/docs/controls/canvas/paint-radial-gradient.png" className="screenshot-20" />

```python
cv.Circle(
    60,
    170,
    50,
    ft.Paint(
        gradient=ft.PaintRadialGradient(
            (60, 170), 50, colors=[ft.colors.YELLOW, ft.colors.BLUE]
        ),
        style=ft.PaintingStyle.FILL,
    ),
)
```

`PaintRadialGradient`类具有以下属性:

- `center` - `Offset`类的实例。 梯度的中心。
- `radius` - 梯度的半径。
- `colors`，`stops`，`tile_mode`，`rotation` - 有关这些属性的描述，请参见[线性梯度](#paintlineargradient)。
- `focal` - 梯度的焦点。 如果指定，则该梯度似乎将沿向量从`center`到焦点进行聚焦。
- `focal_radius` - 梯度焦点的半径，是油漆箱最短一侧的一小部分。 例如，如果将径向梯度涂在宽 100.0 像素和 200.0 像素的盒子上，则半径为 1.0，将使 1.0 停止位于焦点的 100.0 像素。

更多信息:

- [radial 渐变](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.radial.html)在 flutter 文档中。

#### `PaintSweepGradient`

<img src="/website/img/docs/controls/canvas/paint-sweep-gradient.png" className="screenshot-20" />

```python
cv.Path(
    [
        cv.Path.MoveTo(60, 230),
        cv.Path.LineTo(110, 330),
        cv.Path.LineTo(10, 330),
        cv.Path.Close(),
    ],
    ft.Paint(
        gradient=ft.PaintSweepGradient(
            (60, 280),
            colors=[ft.colors.YELLOW, ft.colors.BLUE],
            start_angle=0,
            end_angle=math.pi * 2,
        ),
        stroke_width=5,
        stroke_join=ft.StrokeJoin.ROUND,
        style=ft.PaintingStyle.STROKE,
    ),
)
```

`PaintSweepGradient`类具有以下属性:

- `center` - 梯度的中心。
- `colors`，`stops`，`tile_mode`，`rotation` - 有关这些属性的描述，请参见[线性梯度](#paintlineargradient)。
- `start_angle` - 放置梯度 0.0 的弧度的角度。 默认为 0.0。
- `end_angle` - 放置梯度 1.0 的弧度的角度。 默认为 Math.pi \* 2。
- `rotation` - 弧度中的梯度旋转。

更多信息:

- [扫描渐变](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.sweep.html)在 flutter 文档中。

### `stroke_cap`

当`style`设置为`PaintingStyle.STROKE`时，将其放置在绘制的线的末端。

该值是`ft.StrokeCap`枚举的实例:

- `BUTT`（默认值） - 开头和结束轮廓具有平坦的边缘，没有扩展。
- `ROUND` - 带有半圆扩展的开始和结束轮廓。
- `SQUARE` - 以半平方扩展为开始和结束轮廓。 这类似于将每个轮廓延长的一半均匀宽度（如`Paint.stroke_width`给出）。

### `stroke_join`

在各个细分之间的连接上的结合。

这适用于将样式设置为`PaintingStyle.STROKE`时绘制的路径，它不适用于用`canvas.Points`的行绘制的点。

默认为`StrokeJoin.MITER`，即尖锐的角。

该值是`ft.StrokeJoin`枚举的实例:

- `MITER`（默认） - 在行段之间加入形成尖角。
- `ROUND` - 线段之间的连接是半圆形的。
- `BEVEL` - 在线段之间连接连接线段的屁股末端的角，以提供斜面的外观。

有关更多详细信息，请参见[23326} (https://api.flutter.dev/flutter/dart-ui/StrokeJoin.html)有关更多详细信息。

### `stroke_miter_limit`

将联接设置为`StrokeJoin.MITER`和样式时，在片段上绘制 Miter 的极限
此限制表示为斜切长度的限制。

默认为 4.0。 使用零作为限制将导致`StrokeJoin.BEVEL`始终使用加入。

### `stroke_width`

将样式设置为`PaintingStyle.STROKE`时，如何制作边缘。 宽度以逻辑像素为朝向路径方向正交的方向测量。

默认为 0.0，对应于发际线宽度。

### `stroke_dash_pattern`

圆形折扣和长度的圆形阵列。

例如，数组`[5, 10]`将导致破折号 5 像素长
然后是空白 10 像素长的空格。 数组`[5, 10, 5]`将
导致 5 像素破折号，10 像素间隙，5 像素破折号，5 像素间隙，
10 像素破折号等。

### `style`

是在形状，形状的边缘还是两者兼而有之。

该值是`ft.PaintingStyle`枚举的实例:

- `FILL`（默认） - 将`Paint`应用于形状的内部。 例如，当应用于`canvas.Circle`形状时，这会导致涂漆给定尺寸的形状。
- `STROKE` - 将`Paint`应用于形状的边缘。 例如，当应用于`canvas.Circle`形状时，此结果是给定尺寸绘制的箍。 边缘绘制的线将是`Paint.stroke_width`属性给出的宽度。
