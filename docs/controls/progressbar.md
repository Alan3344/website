---
title: ProgressBar
sidebar_label: ProgressBar
slug: progressbar
---

a material design 线性进度指示器，也称为进度栏。

显示沿线进展的控件。

线性进度指标有两种:

- _确定_。 确定的进度指标在每个时间点具有一个特定的值，并且该值应单调从`0.0`到`1.0`，届时指示器完成。 要创建确定的进度指示器，请在`0.0`和`1.0`之间使用非 NULL 值。
- _不确定 _。 不确定的进度指标在每个时间点都没有特定的值，而是指出进度是在没有指示进度的情况下进行的。 要创建不确定的进度指标，请使用空值。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/displays/progressbar)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep

import flet as ft

def main(page: ft.Page):
    pb = ft.ProgressBar(width=400)

    page.add(
        ft.Text("Linear progress indicator", style="headlineSmall"),
        ft.Column([ ft.Text("Doing something..."), pb]),
        ft.Text("Indeterminate progress bar", style="headlineSmall"),
        ft.ProgressBar(width=400, color="amber", bgcolor="#eeeeee"),
    )

    for i in range(0, 101):
        pb.value = i * 0.01
        sleep(0.1)
        page.update()

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/progress-bar/custom-progress-bars.gif" className="screenshot-30"/>

## properties

### `value`

该进度指标的价值。 值为 0.0 表示没有进度，而 1.0 表示进度已经完成。 该值将被夹在 0.0-1.0 范围内。 如果无效，则此进度指示器是不确定的，这意味着指示器显示一个预定的动画，该动画并未指示正在取得多少实际进度。

### `bar_height`

用于绘制线性指示器的线的最小高度。 默认值为 4。

### `color`

进度指示器的[颜色](/docs/guides/python/colors)。

### `bgcolor`

[颜色](/docs/guides/python/colors)线性指示器填充的曲目。

### `tooltip`

将鼠标悬停在控件上时显示的文本。
