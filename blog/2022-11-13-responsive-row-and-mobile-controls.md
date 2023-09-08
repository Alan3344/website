---
slug: responsive-row-and-mobile-controls
title: ResponsiveRow and mobile controls
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

我们刚刚发布[Flet 0.1.65](https://pypi.org/project/flet/0.1.65/)，它添加了一堆移动优化的控件，修复了一些错误并引入了新的布局控件 - `ResponsiveRow`。

`ResponsiveRow`从[Bootstrap](https://getbootstrap.com/docs/5.2/layout/grid/) Web Framework 借用网格布局的想法。

`ResponsiveRow`允许对齐 child 控件与虚拟列。 默认情况下，虚拟网格具有 12 列，但可以使用`ResponsiveRow.columns`属性自定义。

类似于`expand`属性，每个控件现在都有`col`属性，该属性允许指定控件应跨度多少列。 对于审查员，要制作一个由两个横跨 6 个虚拟列组成的布局:

```python
import flet as ft

ft.ResponsiveRow([
    ft.Column(col=6, controls=ft.Text("Column 1")),
    ft.Column(col=6, controls=ft.Text("Column 2"))
])
```

`ResponsiveRow`是“响应式”，因为它可以将其 children 的大小调整到更改的屏幕（页面，窗口）大小。 `col`属性上面的属性是一个常数数字，这意味着 child 将跨越任何屏幕大小的 6 列。

如果`ResponsiveRow`'s child 没有指定的`col`属性，则跨度最大列数。

`col`可以配置为特定的“断点”具有不同的值。 断点命名尺寸范围:

| 断点 | 维度    |
| ---- | ------- |
| XS   | <576px  |
| SM   | ≥576px  |
| MD   | ≥768px  |
| LG   | ≥992px  |
| XL   | ≥1200px |
| xxl  | ≥1400px |

例如，以下示例将内容折叠成移动设备上的单列中，并在较大屏幕上进行两列:

```python
import flet as ft

ft.ResponsiveRow([
    ft.Column(col={"sm": 6}, controls=ft.Text("Column 1")),
    ft.Column(col={"sm": 6}, controls=ft.Text("Column 2"))
])
```

这是响应式布局的更详细的示例:

<img src="/website/img/docs/controls/responsive-row/responsive-layout.gif" className="screenshot-100"/>

```python
import flet as ft

def main(page: ft.Page):
    def page_resize(e):
        pw.value = f"{page.width} px"
        pw.update()

    page.on_resize = page_resize

    pw = ft.Text(bottom=50, right=50, style="displaySmall")
    page.overlay.append(pw)
    page.add(
        ft.ResponsiveRow(
            [
                ft.Container(
                    ft.Text("Column 1"),
                    padding=5,
                    bgcolor=ft.colors.YELLOW,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 2"),
                    padding=5,
                    bgcolor=ft.colors.GREEN,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 3"),
                    padding=5,
                    bgcolor=ft.colors.BLUE,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 4"),
                    padding=5,
                    bgcolor=ft.colors.PINK_300,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
            ],
        ),
        ft.ResponsiveRow(
            [
                ft.TextField(label="TextField 1", col={"md": 4}),
                ft.TextField(label="TextField 2", col={"md": 4}),
                ft.TextField(label="TextField 3", col={"md": 4}),
            ],
            run_spacing={"xs": 10},
        ),
    )
    page_resize(None)

ft.app(target=main)
```

`ResponsiveRow` [docs](/docs/controls/responsiverow)，[example](https://github.com/flet-dev/examples/blob/main/python/controls/responsive-row/responsive-layout.py)。

## 其他新控件

此版本添加了 Flet 社区要求的新的视觉和非视觉控件，也需要构建即将到来的[Flet Studio](/docs/guides/python/mobile-support#flet-studio-for-ios-and-android)的 UI。

显示模态材料设计底部:

<img src="/website/img/docs/controls/bottom-sheet/bottom-sheet-sample.gif" className="screenshot-30"/>

`BottomSheet` [docs](/docs/controls/bottomsheet)，[example](https://github.com/flet-dev/examples/blob/main/python/controls/bottom-sheet/modal-bottom-sheet.py)。

### navigationbar

底部导航栏，提供了一种持久和方便的方式，可以在应用程序中的主要目的地之间切换:

<img src="/website/img/docs/controls/navigation-bar/navigation-bar-sample.gif" className="screenshot-40"/>

`NavigationBar` [docs](/docs/controls/navigationbar)，[example](https://github.com/flet-dev/examples/blob/main/python/controls/navigation-bar/navigation-bar-sample.py)。

### tooltip

工具提示控件:

<img src="/website/img/docs/controls/tooltip/custom-tooltip.gif" className="screenshot-30"/>

`Tooltip` [docs](/docs/controls/tooltip)，[example](https://github.com/flet-dev/examples/blob/main/python/controls/tooltip/custom-tooltip.py)。

### hapticFeedback

允许访问设备上的触觉反馈（点击和振动）接口。

`HapticFeedback` [docs](/docs/controls/hapticfeedback)。

### shakedetector

检测手机摇动的控件。 基于[shake](https://pub.dev/packages/shake)小部件。

`ShakeDetector` [docs](/docs/controls/shakedetector)。

## 其他改进

### markdown 代码语法突出显示

[示例代码](https://github.com/flet-dev/examples/blob/main/python/controls/markdown/markdown-code-highlight.py)。

<img src="/website/img/docs/controls/markdown/markdown-highlight.png" className="screenshot-60"/>

### 变量字体支持

Flutter 最终支持[可变字体](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts)，我们也将其带入 Flet！

[示例代码](https://github.com/flet-dev/examples/blob/main/python/controls/text/variable-weight-font.py)。

<img src="/website/img/docs/controls/text/variable-weight-font.gif" className="screenshot-50" />

升级 Flet 模块到最新版本（`pip install install flet -upgrade`）和[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

享受！
