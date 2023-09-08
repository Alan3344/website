---
title: Card
sidebar_label: Card
slug: card
---

a material design 卡片: 一个面板略微圆角和高程阴影。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/card)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.title = "Card Example"
    page.add(
        ft.Card(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.ALBUM),
                            title=ft.Text("The Enchanted Nightingale"),
                            subtitle=ft.Text(
                                "Music by Julie Gable. Lyrics by Sidney Stein."
                            ),
                        ),
                        ft.Row(
                            [ft.TextButton("Buy tickets"), ft.TextButton("Listen")],
                            alignment=ft.MainAxisAlignment.END,
                        ),
                    ]
                ),
                width=400,
                padding=10,
            )
        )
    )

ft.app(target=main)

```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/card/card.gif" className="screenshot-40" />

## properties

### `color`

卡片的背景[颜色](/docs/guides/python/colors)。

### `content`

应在卡片中显示的`Control`。

此控件只能有一个 child。 要布置多个 children，让此控件的 child 为[{`Row`](row)，[`Column`](column)或[`Stack`] `Stack`](stack) children 属性，然后向该控件提供 children。

### `elevation`

控制卡片下阴影的大小。 默认值为`1.0`。

### `margin`

围绕卡片的空白空间。

有关更多信息和可能的值，请参见[`Container.margin`](container#margin)属性。

### `shadow_color`

[颜色](/docs/guides/python/colors)将阴影绘制在卡片下的阴影。

### `surface_tint_color`

[颜色](/docs/guides/python/colors)用作`color`上的覆盖层，以表示高程。

如果这是`None`，则不会应用覆盖层。 否则，该颜色将在`color`顶部与与`elevation`相关的不透明度合成，并用于绘制卡片的背景。

默认值为`None`。
