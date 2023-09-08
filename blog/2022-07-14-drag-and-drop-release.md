---
slug: drag-and-drop-release
title: 'New release: Drag and Drop, absolute positioning and clickable container'
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

我们刚刚发布[Flet 0.1.41](https://pypi.org/project/flet/0.1.41/)，具有拖放支持和其他整洁功能，例如在堆栈内的控件的绝对定位和可单击的容器！

## drag and Drope

在 Flet 中制作拖放是一种真正的喜悦 - 借助扑来中的智能拖放实现！ 您只有“可拖动”控件可以将其拖动到“拖动目标”，该控件在删除拖放时调用`on_accept`事件处理程序。

<img src="/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif" className="screenshot-50" />

看看[拖放示例](https://github.com/flet-dev/examples/blob/main/python/controls/drag-and-drop/drag-drop-colors.py)。

探索[{`Draggable`](/docs/controls/draggable)和[`DragTarget`](/docs/controls/dragtarget)控制，它们的属性和事件。

## 绝对定位堆栈内

现在，所有可见的控件都具有`left` `top`，`right`和`bottom`属性，使它们绝对放置在[{`Stack`](/docs/controls/stack)中，例如:

```python {13-17}
import flet as ft

def main(page: ft.Page):

    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    page.add(
        ft.Container(
            ft.Stack(
                [
                    ft.Text("1", color=ft.colors.WHITE),
                    ft.Text("2", color=ft.colors.WHITE, right=0),
                    ft.Text("3", color=ft.colors.WHITE, right=0, bottom=0),
                    ft.Text("4", color=ft.colors.WHITE, left=0, bottom=0),
                    ft.Text("5", color=ft.colors.WHITE, left=40, top=35),
                ]
            ),
            border_radius=8,
            padding=5,
            width=100,
            height=100,
            bgcolor=ft.colors.BROWN_700,
        )
    )

ft.app(target=main)
```

<img src="/img/blog/drag-and-drop/absolute-positioned-numbers.png" className="screenshot-30" />

## 可单击的容器

[`Container`](/docs/controls/container)控件已有`on_click`事件，该事件使您可以从任何控件中制作一个按钮，并在设置为`ink`设置为`True`时具有美丽的 material 波纹效果！

<img src="/img/docs/controls/container/clickable-container.gif" className="screenshot-70" />

有关上述示例，请参见[源代码](https://github.com/flet-dev/examples/blob/main/python/controls/container/clickable-container.py)。

[给 Flet 尝试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
