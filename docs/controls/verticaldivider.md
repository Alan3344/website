---
title: VerticalDivider
sidebar_label: VerticalDivider
slug: verticaldivider
---

一条细的垂直线，两侧都有填充。

在 material design 语言中，这代表一个分隔线。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/verticaldivider)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Row(
            [
                ft.Container(
                    bgcolor=ft.colors.ORANGE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(),
                ft.Container(
                    bgcolor=ft.colors.BROWN_400,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(width=1, color="white"),
                ft.Container(
                    bgcolor=ft.colors.BLUE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                 ft.VerticalDivider(width=9, thickness=3),
                ft.Container(
                    bgcolor=ft.colors.GREEN_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/vertical-divider/vertical-divider.png" className="screenshot-40" />

## properties

### `color`

绘画行时要使用的[颜色](/docs/guides/python/colors)。

### `thickness`

分层内绘制的线的厚度。 厚度为`0.0`的分隔线始终被绘制为具有一个宽度为一个设备像素的线。 如果这为 null，则默认为`0.0`。

### `width`

分隔线的宽度。 分隔线本身总是将其绘制为垂直线，该垂直线位于该值指定的宽度内。 如果这是空的，则默认为`16.0`。
