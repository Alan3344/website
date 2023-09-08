---
title: Divider
sidebar_label: Divider
slug: divider
---

一条薄的水平线，两侧都有填充。

在 material design 语言中，这代表一个分隔线。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/divider)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Column(
            [
                ft.Container(
                    bgcolor=ft.colors.AMBER,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                ft.Divider(),
                ft.Container(bgcolor=ft.colors.PINK, alignment=ft.alignment.center, expand=True),
                ft.Divider(height=1, color="white"),
                ft.Container(
                    bgcolor=ft.colors.BLUE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                ft.Divider(height=9, thickness=3),
                ft.Container(
                    bgcolor=ft.colors.DEEP_PURPLE_200,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/divider/divider.png" className="screenshot-40" />

## properties

### `color`

绘画行时要使用的[颜色](/docs/guides/python/colors)。

### `height`

分隔线的身高范围。 分隔线本身总是将其作为水平线绘制，该水平线以该值指定的高度为中心。 如果这为 null，则默认为`16.0`。

### `thickness`

分层内绘制的线的厚度。 厚度为`0.0`的分隔线始终被绘制为一条线，其高度正好为一个设备像素。 如果这是空的，则默认为`0.0`。
