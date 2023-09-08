---
title: Text
sidebar_label: Text
slug: text
---

文本是显示文本的控件。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/displays/text)

### 自定义文本样式

<img src="/website/img/docs/controls/text/custom-text-styles.gif" className="screenshot-40"/>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Text custom styles"
    page.scroll = "adaptive"

    page.add(
        ft.Text("Size 10", size=10),
        ft.Text("Size 30, Italic", size=30, color="pink600", italic=True),
        ft.Text(
            "Size 40, w100",
            size=40,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.BLUE_600,
            weight=ft.FontWeight.W_100,
        ),
        ft.Text(
            "Size 50, Normal",
            size=50,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.ORANGE_800,
            weight=ft.FontWeight.NORMAL,
        ),
        ft.Text(
            "Size 60, Bold, Italic",
            size=50,
            color=ft.colors.WHITE,
            bgcolor=ft.colors.GREEN_700,
            weight=ft.FontWeight.BOLD,
            italic=True,
        ),
        ft.Text("Size 70, w900, selectable", size=70, weight=ft.FontWeight.W_900, selectable=True),
        ft.Text("Limit long text to 1 line with ellipsis", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Proin rutrum, purus sit amet elementum volutpat, nunc lacus vulputate orci, cursus ultrices neque dui quis purus. Ut ultricies purus nec nibh bibendum, eget vestibulum metus varius. Duis convallis maximus justo, eu rutrum libero maximus id. Donec ullamcorper arcu in sapien molestie, non pellentesque tellus pellentesque. Nulla nec tristique ex. Maecenas euismod nisl enim, a convallis arcu laoreet at. Ut at tortor finibus, rutrum massa sit amet, pulvinar velit. Phasellus diam lorem, viverra vitae leo vitae, consequat suscipit lorem.",
            max_lines=1,
            overflow="ellipsis",
        ),
        ft.Text("Limit long text to 2 lines and fading", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            max_lines=2,
        ),
        ft.Text("Limit the width and height of long text", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            width=700,
            height=100,
        ),
    )

ft.app(target=main)
```

### 预定义的主题文本样式

<img src="/website/img/docs/controls/text/predefined-text-styles.png" className="screenshot-40" />

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Text theme styles"
    page.scroll = "adaptive"

    page.add(
        ft.Text("Display Large", style=ft.TextThemeStyle.DISPLAY_LARGE),
        ft.Text("Display Medium", style=ft.TextThemeStyle.DISPLAY_MEDIUM),
        ft.Text("Display Small", style=ft.TextThemeStyle.DISPLAY_SMALL),
        ft.Text("Headline Large", style=ft.TextThemeStyle.HEADLINE_LARGE),
        ft.Text("Headline Medium", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        ft.Text("Headline Small", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        ft.Text("Title Large", style=ft.TextThemeStyle.TITLE_LARGE),
        ft.Text("Title Medium", style=ft.TextThemeStyle.TITLE_MEDIUM),
        ft.Text("Title Small", style=ft.TextThemeStyle.TITLE_SMALL),
        ft.Text("Label Large", style=ft.TextThemeStyle.LABEL_LARGE),
        ft.Text("Label Medium", style=ft.TextThemeStyle.LABEL_MEDIUM),
        ft.Text("Label Small", style=ft.TextThemeStyle.LABEL_SMALL),
        ft.Text("Body Large", style=ft.TextThemeStyle.BODY_LARGE),
        ft.Text("Body Medium", style=ft.TextThemeStyle.BODY_MEDIUM),
        ft.Text("Body Small", style=ft.TextThemeStyle.BODY_SMALL),
    )

ft.app(target=main)
```

### 字体，重量可变

<img src="/website/img/docs/controls/text/variable-weight-font.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.fonts = {
        "RobotoSlab": "https://github.com/google/fonts/raw/main/apache/robotoslab/RobotoSlab%5Bwght%5D.ttf"
    }

    t = ft.Text(
        "This is rendered with Roboto Slab",
        size=30,
        font_family="RobotoSlab",
        weight=ft.FontWeight.W_100,
    )

    def width_changed(e):
        t.weight = f"w{int(e.control.value)}"
        t.update()

    page.add(
        t,
        ft.Slider(
            min=100,
            max=900,
            divisions=8,
            label="{value}",
            width=500,
            on_change=width_changed,
        ),
    )

ft.app(target=main)
```

### 丰富的文本基础知识

<img src="/website/img/docs/controls/text/richtext.png" className="screenshot-70" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text("Plain text with default style"),
        ft.Text(
            "Some text",
            size=30,
            spans=[
                ft.TextSpan(
                    "here goes italic",
                    ft.TextStyle(italic=True, size=20, color=ft.colors.GREEN),
                    spans=[
                        ft.TextSpan(
                            "bold and italic",
                            ft.TextStyle(weight=ft.FontWeight.BOLD),
                        ),
                        ft.TextSpan(
                            "just italic",
                            spans=[
                                ft.TextSpan("smaller italic", ft.TextStyle(size=15))
                            ],
                        ),
                    ],
                )
            ],
        ),
        ft.Text(
            disabled=False,
            spans=[
                ft.TextSpan(
                    "underlined and clickable",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    on_click=lambda e: print(f"Clicked span: {e.control.uid}"),
                    on_enter=lambda e: print(f"Entered span: {e.control.uid}"),
                    on_exit=lambda e: print(f"Exited span: {e.control.uid}"),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "underlined red wavy",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.UNDERLINE,
                        decoration_color=ft.colors.RED,
                        decoration_style=ft.TextDecorationStyle.WAVY,
                    ),
                    on_enter=lambda e: print(f"Entered span: {e.control.uid}"),
                    on_exit=lambda e: print(f"Exited span: {e.control.uid}"),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "overlined blue",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.OVERLINE, decoration_color="blue"
                    ),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "overlined and underlined",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.OVERLINE
                        | ft.TextDecoration.UNDERLINE
                    ),
                ),
                ft.TextSpan(" "),
                ft.TextSpan(
                    "line through thick",
                    ft.TextStyle(
                        decoration=ft.TextDecoration.LINE_THROUGH,
                        decoration_thickness=3,
                    ),
                ),
            ],
        ),
    )

    def highlight_link(e):
        e.control.style.color = ft.colors.BLUE
        e.control.update()

    def unhighlight_link(e):
        e.control.style.color = None
        e.control.update()

    page.add(
        ft.Text(
            disabled=False,
            spans=[
                ft.TextSpan("AwesomeApp 1.0 "),
                ft.TextSpan(
                    "Visit our website",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    url="https://google.com",
                    on_enter=highlight_link,
                    on_exit=unhighlight_link,
                ),
                ft.TextSpan(" All rights reserved. "),
                ft.TextSpan(
                    "Documentation",
                    ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE),
                    url="https://google.com",
                    on_enter=highlight_link,
                    on_exit=unhighlight_link,
                ),
            ],
        ),
    )

ft.app(main)
```

### 带有边界和中风的丰富文字

<img src="/website/img/docs/controls/text/richtext-borders-stroke.png" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Stack(
            [
                ft.Text(
                    spans=[
                        ft.TextSpan(
                            "Greetings, planet!",
                            ft.TextStyle(
                                size=40,
                                weight=ft.FontWeight.BOLD,
                                foreground=ft.Paint(
                                    color=ft.colors.BLUE_700,
                                    stroke_width=6,
                                    stroke_join=ft.StrokeJoin.ROUND,
                                    style=ft.PaintingStyle.STROKE,
                                ),
                            ),
                        ),
                    ],
                ),
                ft.Text(
                    spans=[
                        ft.TextSpan(
                            "Greetings, planet!",
                            ft.TextStyle(
                                size=40,
                                weight=ft.FontWeight.BOLD,
                                color=ft.colors.GREY_300,
                            ),
                        ),
                    ],
                ),
            ]
        )
    )

ft.app(main)
```

### 带有渐变的丰富文本

<img src="/website/img/docs/controls/text/richtext-gradient.png" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text(
            spans=[
                ft.TextSpan(
                    "Greetings, planet!",
                    ft.TextStyle(
                        size=40,
                        weight=ft.FontWeight.BOLD,
                        foreground=ft.Paint(
                            gradient=ft.PaintLinearGradient(
                                (0, 20), (150, 20), [ft.colors.RED, ft.colors.YELLOW]
                            )
                        ),
                    ),
                ),
            ],
        )
    )

ft.app(main)
```

## properties

### `bgcolor`

文本背景[颜色](/docs/guides/python/colors)。

### `color`

文本前景[颜色](/docs/guides/python/colors)。

### `font_family`

系统或自定义字体系列呈现文本。 检查[`page.fonts`](/docs/controls/page#fonts)以获取有关如何在应用程序中导入和使用自定义字体的说明。

#### 使用 System Fonts

您可以使用计算机上安装的字体，例如 “ Consolas”，“ Arial”，“ Verdana”，“ Tahoma”等。例如:

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Text("This text is rendered with Consolas font", font_family="Consolas")
    )

ft.app(target=main)
```

但是，有一个限制 - 系统字体不能在 Flet Web 应用程序中使用“ Canvaskit”渲染器。

Flet Web 应用程序可以使用以下一个渲染器之一渲染其 UI:

- ** HTML 渲染器** - 使用 HTML 元素，CSS，Canvas 元素和 SVG 元素的组合。 该渲染器的下载尺寸较小。
- ** canvaskit 渲染器** - 该渲染器完全与 Flutter Mobile 和 Desktop 完全一致，具有更高的小部件密度的性能更快，但下载尺寸的大约 2MB。

默认情况下，Flet 使用`CanvasKit`渲染器用于桌面和移动浏览器。

您可以明确设置运行 Flet 程序时要使用的渲染器:

```python
# ...
ft.app(target=main, view=ft.AppView.WEB_BROWSER, web_renderer=ft.WebRenderer.HTML)
```

现在，当您运行相同的程序时，您会看到“ consolas”字体。

支持的`web_renderer`值:

- `canvaskit`（默认） - 优先考虑台式机和移动浏览器上的性能和像素完美的一致性。
- `html` - 优化桌面和移动浏览器上的性能下载大小。
- `auto` - 在移动浏览器上的下载大小优化，并在桌面浏览器上进行性能优化。

### `italic`

`True`使用斜体字体。

### `max_lines`

文本范围的最大最大行数，如有必要。 如果文本超过给定数量的行，则将根据`overflow`截断。

如果这是 1，则文字不会包装。 否则，文本将包裹在框的边缘。

### `no_wrap`

如果`False`（默认）文本应在软线路中断。

如果`True`，文字中的字形将被定位，就好像有无限的水平空间。

### `overflow`

属性值为`TextOverflow`枚举，具有以下值:

- `FADE`（默认）
- `ELLIPSIS`
- `CLIP`
- `VISIBLE`

### `selectable`

`True`如果应该选择文本。

### `semantics_label`

本文的替代语义标签。

如果存在，此控件的语义将包含此值，而不是实际文本。

这对于用全文价值替换缩写或速记很有用:

```python
ft.Text("$$", semantics_label="Double dollars")
```

### `size`

虚拟像素中的文本大小。 默认值为`14`。

### `spans`

[`ft.TextSpan`](#textspan-properties)对象构建丰富的文本段落的列表。

### `style`

属性值是`TextThemeStyle`枚举，其中一个值之一:

- `DISPLAY_LARGE`
- `DISPLAY_MEDIUM`
- `DISPLAY_SMALL`
- `HEADLINE_LARGE`
- `HEADLINE_MEDIUM`
- `HEADLINE_SMALL`
- `TITLE_LARGE`
- `TITLE_MEDIUM`
- `TITLE_SMALL`
- `LABEL_LARGE`
- `LABEL_MEDIUM`
- `LABEL_SMALL`
- `BODY_LARGE`
- `BODY_MEDIUM`
- `BODY_SMALL`

### `text_align`

文本水平对齐。

属性值为`TextAlign`枚举，具有以下值:

- `LEFT`（默认）
- `RIGHT`
- `CENTER`
- `JUSTIFY`
- `START`
- `END`

### `value`

显示的文字。

### `weight`

字体重量。

属性值为`FontWeight`枚举，具有以下值:

- `NORMAL`（默认）
- `BOLD`
- `W_100`
- `W_200`
- `W_300`
- `W_400`
- `W_500`
- `W_600`
- `W_700`
- `W_800`
- `W_900`

## `TextStyle`属性

描述如何格式和绘制文本的样式。

### `bgcolor`

参见[`Text.bgcolor`](#bgcolor)。

### `color`

参见[`Text.color`](#color)。

### `decoration`

在文本附近绘画的装饰品（例如下划线）。

该值是`ft.TextDecoration`枚举的实例:

- `NONE`（默认值） - 请勿绘制装饰。
- `UNDERLINE` - 在每行文本下方绘制一条线。
- `OVERLINE` - 在每条文本行上方画一条线。
- `LINE_THROUGH` - 通过每条文本行绘制一条线。

枚举是旗帜，因此可以将多个装饰组合在一起:

```python
style = ft.TextStyle(decoration=ft.TextDecoration.UNDERLINE | ft.TextDecoration.OVERLINE)
```

### `decoration_color`

[颜色](/docs/guides/python/colors)在其中绘制文本装饰。

### `decoration_style`

绘制文本装饰的风格（例如，虚线）。

该值是`ft.TextDecorationStyle`枚举的实例:

- `SOLID`（默认） - 绘制一个实线。
- `DOUBLE` - 画两行。
- `DOTTED` - 绘制虚线。
- `DASHED` - 画一条虚线。
- `WAVY` - 绘制正弦线。

### `decoration_thickness`

装饰中风的厚度是字体定义的厚度的乘数。

### `font_family`

请参阅[`Text.font_family`](#font_family)。

### `foreground`

油漆作为文本的前景绘制。

该值的值是[`ft.Paint`](canvas#paint) class。

### `italic`

`True`使用斜体字体。

### `shadow`

参见[`Container.shadow`](container#shadow)。

### `size`

绘画文本时要使用的字形（以逻辑像素）的大小。 默认值为 14。

### `weight`

字体重量 - 有关可能的值。

## `TextSpan`属性

文本的跨度。

### `spans`

附加跨度为 children。

如果定义了`text`和`spans`，则`text`将在`spans`之前。

### `style`

[`TextStyle`](#textstyle-properties)应用于此跨度。

### `text`

此跨度包含的文本。

如果定义了`text`和`spans`，则`text`将在`spans`之前。

### `url`

单击跨度时要打开的 URL。 如果已注册，`on_click`事件是在此之后发射的。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前的选项卡片/窗口。

## `TextSpan`事件

### `on_click`

单击跨度时发射。

### `on_enter`

鼠标指针进入跨度时触发。

### `on_exit`

当鼠标指针退出跨度时触发。
