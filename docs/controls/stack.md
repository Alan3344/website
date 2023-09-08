---
title: Stack
sidebar_label: Stack
slug: stack
---

一个将其 children 定位在彼此顶部的控件。

如果您想以简单的方式重叠几个 children，例如有一些文本和图像，并用梯度和一个按钮附加到底部的按钮，则此控件将很有用。

如果您要实现[5960}需要知道目标值的绝对位置，那么堆栈也很有用。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/layout/stack)

### 图像上透明标题

<img src="/website/img/docs/controls/stack/image-title.png" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    st = ft.Stack(
        [
            ft.Image(
                src=f"https://picsum.photos/300/300",
                width=300,
                height=300,
                fit=ft.ImageFit.CONTAIN,
            ),
            ft.Row(
                [
                    ft.Text(
                        "Image title",
                        color="white",
                        size=40,
                        weight="bold",
                        opacity=0.5,
                    )
                ],
                alignment=ft.MainAxisAlignment.CENTER,
            ),
        ],
        width=300,
        height=300,
    )

    page.add(st)

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 具有在线状态的头像

<img src="/website/img/docs/controls/stack/avatar-with-status.png" className="screenshot-10"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.add(
        ft.Stack(
            [
                ft.CircleAvatar(
                    foreground_image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4"
                ),
                ft.Container(
                    content=ft.CircleAvatar(bgcolor=ft.colors.GREEN, radius=5),
                    alignment=ft.alignment.bottom_left,
                ),
            ],
            width=40,
            height=40,
        )
    )

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

  </TabItem>
</Tabs>

### 绝对定位堆栈

<img src="/website/img/docs/controls/stack/absolute-positioned.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    page.add(
        ft.Container(
            ft.Stack(
                [
                    ft.Container(width=20, height=20, bgcolor=ft.colors.RED, border_radius=5),
                    ft.Container(
                        width=20,
                        height=20,
                        bgcolor=ft.colors.YELLOW,
                        border_radius=5,
                        right=0,
                    ),
                    ft.Container(
                        width=20,
                        height=20,
                        bgcolor=ft.colors.BLUE,
                        border_radius=5,
                        right=0,
                        bottom=0,
                    ),
                    ft.Container(
                        width=20,
                        height=20,
                        bgcolor=ft.colors.GREEN,
                        border_radius=5,
                        left=0,
                        bottom=0,
                    ),
                    ft.Column(
                        [
                            ft.Container(
                                width=20,
                                height=20,
                                bgcolor=ft.colors.PURPLE,
                                border_radius=5,
                            )
                        ],
                        left=35,
                        top=35,
                    ),
                ]
            ),
            border_radius=8,
            padding=5,
            width=100,
            height=100,
            bgcolor=ft.colors.BLACK,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `clip_behavior`

内容将根据此选项剪辑（或不）。

属性值是`ClipBehavior`枚举，具有支持的值:

- `NONE`
- `ANTI_ALIAS`
- `ANTI_ALIAS_WITH_SAVE_LAYER`
- `HARD_EDGE`（默认）

### `controls`

堆栈内显示的控件列表。 列表中的最后一个控件显示在顶部。
