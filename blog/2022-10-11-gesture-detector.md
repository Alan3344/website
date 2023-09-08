---
slug: gesture-detector
title: Gesture detector
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

我们刚刚发布了[Flet 0.1.62](https://pypi.org/project/flet/0.1.62/)，并支持手势处理！

有一个新的控件 - [GETUREDETECTOR](/docs/controls/gesturedetector)，它允许处理各种手势: 带有左侧（主）和右（次级）鼠标（指针）按钮的单个和双龙头，垂直，水平和双向阻力， 变焦（捏合和捏）手势以及悬停事件。 现在，通过将其包裹到`GestureDetector`中，您可以制作任何 Flet 控制“可单击”和“拖动”！

这是一个应用程序的简单示例，它允许您将容器拖到堆栈中:

<img src="/website/img/blog/gesture-detector/gesture-detector-demo.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    def on_pan_update(e: ft.DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        on_vertical_drag_update=on_pan_update,
        left=100,
        top=100,
        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50, border_radius=5),
    )

    page.add( ft.Stack([gd], expand=True))

ft.app(target=main)
```

手势探测器是 Flet 基本集合集合的又一个很好的补充，它使您能够仅受到想象力限制的应用程序。 本月晚些时候到来的 2D 绘图将完成该合奏！

该版本不仅仅是手势 - 这也是“稳定”的发布。 我们修复了许多错误，并添加了许多其他小功能，您可以[请参见此处](https://github.com/flet-dev/flet/issues?q=is%3Aissue+milestone%3AControls-S2+is%3Aclosed)。

升级 Flet 模块到最新版本（`pip install install flet -upgrade`），将 auth 集成在您的应用中，并[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

享受！
