---
title: ProgressRing
sidebar_label: ProgressRing
slug: progressring
---

a material design 圆形进度指示器，它旋转以表明应用程序很忙。

显示沿圆圈进展的控件。

有两种循环进度指标:

- _确定_。 确定的进度指标在每个时间点具有一个特定的值，并且该值应单调从`0.0`到`1.0`，在此期间完成指示器已完成。 要创建确定的进度指示器，请在`0.0`和`1.0`之间使用非 NULL 值。
- _不确定 _。 不确定的进度指标在每个时间点都没有特定的值，而是指出进度是在没有指示进度的情况下进行的。 要创建不确定的进度指标，请使用空值。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/displays/progressring)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    pr = ft.ProgressRing(width=16, height=16, stroke_width = 2)

    page.add(
        ft.Text("Circular progress indicator", style="headlineSmall"),
        ft.Row([pr, ft.Text("Wait for the completion...")]),
        ft.Text("Indeterminate cicrular progress", style="headlineSmall"),
        ft.Column(
            [ft.ProgressRing(), ft.Text("I'm going to run for ages...")],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        ),
    )

    for i in range(0, 101):
        pr.value = i * 0.01
        sleep(0.1)
        page.update()

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/progress-ring/custom-progress-rings.gif" className="screenshot-30"/>

## properties

### `bgcolor`

圆形轨道的[颜色](/docs/guides/python/colors)由圆形指示器填充。

### `color`

进度指示器的[颜色](/docs/guides/python/colors)。

### `stroke_width`

该行的宽度用于绘制圆圈。

### `tooltip`

将鼠标悬停在控件上时显示的文本。

### `value`

该进度指标的价值。 值为 0.0 表示没有进度，而 1.0 表示进度已经完成。 该值将被夹在 0.0-1.0 范围内。 如果无效，则此进度指标是不确定的，这意味着指标显示一个预定的动画，该动画并未指示正在取得多少实际进度。
