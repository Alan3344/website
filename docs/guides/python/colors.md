---
标题: 颜色
sidebar_label: 颜色
---

<img src="/img/docs/colors/color_palettes.png"className="screenshot-100" />

## 颜色值

有两种方法可以在 Flet 中定义颜色属性值: 十六进制和命名颜色。

### 十六进制值

十六进制值应格式“＃aarrggbb”（`0xaarrggbb`）或`＃rrggbb`（`0xeeggbb`）。 如果省略`aa`（[opacity](/docs/guides/python/colors#color-opacity)），则将其设置为`ff`（不透明）。

```python
c1 = ft.Container(bgcolor='#ff0000')
```

[live 示例](https://flet-controls-gallery.fly.dev/colors/controlcolors)

### 命名颜色

命名颜色是材料设计[主题颜色](https://m3.material.io/styles/color/the-color-system/color-roles)和[颜色调色板](https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes)。 可以使用字符串值或使用 flet.Colors 模块设置它们。

```
c1 = ft.Container(bgcolor=ft.colors.YELLOW)
c2 = ft.Container(bgcolor='yellow')
```

#### 主题颜色

<img src="/img/docs/colors/theme_colors.png"className="screenshot-100" />

[LIVE 示例](https://flet-controls-gallery.fly.dev/colors/themecolors)

[`theme.color_scheme`](/docs/controls/page#colorscheme-class)中有 30 个命名为主题颜色，这些颜色是根据`color_scheme_seed`属性生成的。 默认的种子颜色值为“蓝色”。

```
# example for generating page theme colors based on the seed color
page.theme = theme.Theme(color_scheme_seed='green')
page.update()
```

可以覆盖 30 种颜色中的任何一种，在这种情况下，它们的绝对值将不取决于种子颜色。

```
page.theme = ft.Theme(
    color_scheme=ft.ColorScheme(
        primary=ft.colors.GREEN,
        primary_container=ft.colors.GREEN_200
        # ...
    ),
)
```

<img src="/img/docs/colors/theme_colors_green.png"className="screenshot-100" />

主题颜色为 Flet 控件的大多数定义后备颜色。

#### 调色板

<img src="/img/docs/colors/color_palettes_2.png"className="screenshot-100" />

[LIVE 示例](https://flet-controls-gallery.fly.dev/colors/colorspalettes)

调色板最初是由材料设计创建的，由旨在和谐合作的颜色组成。

颜色色板（调色板）由某种颜色的不同阴影组成。 大多数色板的阴影从`100`到`900`的阴影以 100 的增量加上颜色`50`。 数字越小，颜色越苍白。 数字越大，颜色越暗。 重音色板（例如`redAccent`）只有值`100`，`200`，`400`和`700`。

此外，还有一系列具有共同缺陷的黑人和白人。 例如，`black54`是纯黑色，不透明度为 54％。

调色板颜色可用于设置单个控件颜色属性或作为生成主题颜色的种子颜色。

## 颜色不透明

您可以使用`with_opacity`方法为任何颜色（十六进制值或命名）指定不透明度。 不透明度值应在`0.0`（完全透明）和`1.0`（不透明）之间。

```python
color = ft.colors.with_opacity(0.5, ft.colors.PRIMARY)
color = ft.colors.with_opacity(0.5, '#ff6666')
```

另一种指定字符串值不透明度的方法:

```python
color = "surface,0.5"
```

对于十六进制值，您可以指定`aa`信道，例如`00`和`ff`之间的值，例如:

```python
color = "#7fff6666"
```

## 定义 Flet 控件的颜色

大多数 Flet 控件具有`color_scheme`定义的默认颜色，可以在不同级别上覆盖。

[LIVE 示例](https://flet-controls-gallery.fly.dev/colors/controlcolors)

<img src="/img/docs/colors/colors_fallback.svg"className="screenshot-80" />

### 控制级别

如果在控制级别上定义颜色，则将使用它。

```python
c = ft.Container(width=100, height=100, bgcolor=ft.colors.GREEN_200)
```

并非每个 Flet 控件都有一个可以在控制级别设置的颜色属性。 例如，`FilledButton`始终具有最近祖先的`theme`定义的默认“主”颜色。

### 控制主题级别

对于`ScrollBar`（用于可滚动控件: `Page`，`View`，`Column`，`Row`，`Row`，`ListView`和`GridView`）和`GridView`），`Tabs`和`Tabs`和`Text`对照， [最近的 Anscestor](/blog/scrolling-controls-and-theming#nested-themes)主题具有[ScrollBar 主题](/blog/scrolling-controls-and-theming#scrollbar-theme)，[TABS 主题](/blog/scrolling-controls-and-theming#tabs-theming)或[Text Theme](/blog/scrolling-controls-and-theming#text-theming)指定。

:::注意
如果您需要更改特定滚动条，文本或选项卡片控件的主题，则可以将此控件包装在容器中，并自定义`scrollbar_theme`，`text_theme`或`tabs_theme`此容器`theme`。 主题级别

Flet 将检查已定义`theme`的最近祖先，并将从`ColorScheme`中获得颜色。 在下面的示例中，`FilledButton`的最接近的 Ancestor 为`Container`，用于按钮的`primary`颜色将取自容器的`theme`。

```python
import flet as ft

def main(page: ft.Page):

    container = ft.Container(
        width=200,
        height=200,
        border=ft.border.all(1, ft.colors.BLACK),
        content=ft.FilledButton("Primary color"),
        theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.colors.YELLOW)))

    page.add(container)

ft.app(target=main)
```

如果未指定 Control 的颜色属性，特定于控制的主题或最近的祖先主题，则将使用最近的祖先，并且将使用默认页面`color_scheme`的颜色。
