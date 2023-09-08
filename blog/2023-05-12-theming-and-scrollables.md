---
slug: scrolling-controls-and-theming
title: Scrolling controls and Theming
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

Flet 0.7.1 启用开发人员[更改滚动位置](#controlling-scroll-position)和[接收滚动通知](#receiving-scroll-notifications)来自`Page`，`View`，`View`，`Column`，`Column`，，`Row`，`Row` 1405}控件。

该版本还介绍了主题改进:

- [配色方案自定义](#color-scheme-customization)
- [嵌套主题](#nested-themes)
-
- [text Thewsing](#text-theming)
-
-
- [ScrollBar Theming] } [TABS 主题](#tabs-theming)

## 控制滚动位置

可滚动控件（`Page`，`View`，`Column`，`Row`，`ListView`和`GridView`）引入`scroll_to()`方法，将其滚动位置更改为绝对`offset`，相对`delta`，相对`delta`，相对`delta`， 使用指定`key`的控件。

搬到`key`特别令人兴奋，因为它允许模拟页面书签之间的导航，其中一种 html hrefs``＃'': :

<img src="/website/img/docs/controls/column/column-scroll-to-key.gif"  className="screenshot-70 screenshot-rounded" />

检查上述示例的[源代码](https://github.com/flet-dev/examples/blob/main/python/controls/column/column-scroll-to-key.py)。

有关控制滚动位置的更多详细信息，请参见[`Column.scroll_to`](/docs/controls/column#scroll_tooffset-delta-key-duration-curve)。

## 接收滚动通知

现在，所有可滚动控件都提供`on_scroll`事件处理程序，该事件处理程序在更改滚动位置时会发射。 从事件对象属性中，您可以确定滚动操作是否已开始，完成，更改方向或滚动位置落后于滚动范围（OverCroll）。 您还可以获取当前滚动位置以及滚动区域的尺寸的更新，例如:

```python
import flet as ft

def main(page: ft.Page):
    def on_column_scroll(e: ft.OnScrollEvent):
        print(
            f"Type: {e.event_type}, pixels: {e.pixels}, min_scroll_extent: {e.min_scroll_extent}, max_scroll_extent: {e.max_scroll_extent}"
        )

    cl = ft.Column(
        spacing=10,
        height=200,
        width=200,
        scroll=ft.ScrollMode.ALWAYS,
        on_scroll=on_column_scroll,
    )
    for i in range(0, 50):
        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))

    page.add(
        ft.Container(cl, border=ft.border.all(1)),
    )

ft.app(main)
```

有关滚动通知的更多详细信息，请参见[`Column.on_scroll`](/docs/controls/column#on_scroll)。

检查[无限滚动示例](https://github.com/flet-dev/examples/blob/main/python/controls/column/column-infinite-list.py)。

## 配色方案自定义

直到今天，在创建新的`ft.Theme`对象时，为您的应用程序控制配色方案的唯一方法是指定`color_scheme_seed`。

此版本使您可以根据[材料规格](https://m3.material.io/styles/color/the-color-system/color-roles)微调所有 30 种颜色，并由各种 Flet 控件使用。

<img src="/website/img/blog/theme-scrolling/material-theme-builder.png"  className="screenshot-70 screenshot-rounded" />

您甚至可以使用[材料主题构建器](https://m3.material.io/theme-builder#/dynamic)并将导出的调色板应用于您的应用:

```python
page.theme = ft.Theme(
    color_scheme=ft.ColorScheme(
        primary=ft.colors.GREEN,
        primary_container=ft.colors.GREEN_200
        # ...
    ),
)
```

有关更多详细信息，请参见[`ColorScheme` class](/docs/controls/page#colorscheme-class)。

该版本的另一个很棒的功能是嵌套主题！

您可以使用应用程序的一部分来使用其他主题或覆盖某些主题样式用于特定控件。

记得`page`对象具有`theme`和`theme_mode`属性吗？ 现在`Container`具有`theme`和`theme_mode`属性！

`Container.theme`接受相同的`ft.Theme`对象作为页面。 在容器中指定`theme_mode`意味着您不想继承父主题，但需要一个全新的独特方案，用于容器内的所有控件。 但是，如果容器没有`theme_mode`属性设置，则来自其`theme`属性的样式将覆盖父母的主题:

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

<img src="/website/img/blog/theme-scrolling/nested-themes.png"  className="screenshot-60" />

## scrollbar 主题

现在，您可以自定义应用程序中的滚动条（或具有[嵌套主题](#nested-themes)的特定 scroillbar）。

可以通过[`page.theme.scrollbar_theme`](/docs/controls/page#scrollbartheme-class)属性来完成:

```python
page.theme = ft.Theme(
    scrollbar_theme=ft.ScrollbarTheme(
        track_color={
            ft.MaterialState.HOVERED: ft.colors.AMBER,
            ft.MaterialState.DEFAULT: ft.colors.TRANSPARENT,
        },
        track_visibility=True,
        track_border_color=ft.colors.BLUE,
        thumb_visibility=True,
        thumb_color={
            ft.MaterialState.HOVERED: ft.colors.RED,
            ft.MaterialState.DEFAULT: ft.colors.GREY_300,
        },
        thickness=30,
        radius=15,
        main_axis_margin=5,
        cross_axis_margin=10,
    )
)
```

<img src="/website/img/docs/controls/column/column-scroll-to.png"  className="screenshot-60" />

## 文本主题

材料 3 设计定义了[5 组文本样式，每个组中有 3 种尺寸](/docs/controls/text#pre-defined-theme-text-styles): “显示”，“标题”，“标题”，“标签”和“正文”，这些均在 Flet 控件中使用。 现在，您可以使用`page.theme.text_theme`自定义每种样式，例如:

```python
import flet as ft

def main(page: ft.Page):
    page.theme = ft.Theme(
        text_theme=ft.TextTheme(body_medium=ft.TextStyle(color=ft.colors.GREEN))
    )

    page.add(ft.Text("Hello, green world!"))

ft.app(main)
```

<img src="/website/img/blog/theme-scrolling/text-theme.png"  className="screenshot-50" />

显然，`Text`控制用作默认样式的“身体介质”。

有关更多详细信息，请参见[`TextTheme` class](/docs/controls/page#texttheme-class)

现在，您可以控制`Tabs`控制的外观。 在此版本中`Tabs`添加了一堆新属性，并且有一个新的[`page.theme.tabs_theme`](/docs/controls/page#tabstheme-class)属性，以样式的应用程序中的所有选项卡片:

```python
page.theme = ft.Theme(
    tabs_theme=ft.TabsTheme(
        divider_color=ft.colors.BLUE,
        indicator_color=ft.colors.RED,
        indicator_tab_size=True,
        label_color=ft.colors.GREEN,
        unselected_label_color=ft.colors.AMBER,
        overlay_color={
            ft.MaterialState.FOCUSED: ft.colors.with_opacity(0.2, ft.colors.GREEN),
            ft.MaterialState.DEFAULT: ft.colors.with_opacity(0.2, ft.colors.PINK),
        },
    )
)
```

<img src="/website/img/blog/theme-scrolling/tabs-theme.png"  className="screenshot-60" />

有关更多详细信息，请参见[`TabsTheme` class](/docs/controls/page#tabstheme-class)。

## 其他更改

### Flutter 3.10

此 Flet 的发行版基于 flutter 3.10，它具有新功能，性能和大小优化](https://medium.com/flutter/whats-new-in-flutter-3-10-b21db2c38c73)。 结果，大多数 Flet 依赖项也碰到了他们的版本，因此，如果您注意到任何问题，请告诉我们。

### color color emoji 在 Web 应用程序中

Web 应用程序中的颜色表情符号支持又回来了！ 在“ canvaskit”渲染器（Flet 中默认）中，由于其字体大小（8 mb！），在颤动 3.7 颜色的表情符中被禁用，并作为选择加入 3.10 的选择。 您可以使用`use_color_emoji`参数在服务器驱动的应用中启用颜色表情符号:

```python
ft.app(main, use_color_emoji=True)
```

和[使用` -  use-color-emoji` switch](/docs/guides/python/publishing-static-website#color-emojis)在发布应用程序作为静态方面时。

这就是今天！

升级 Flet 模块到最新版本（`pip install fles -upgrade`）和[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
