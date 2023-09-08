---
title: MatplotlibChart
sidebar_label: MatplotlibChart
slug: matplotlibchart
---

显示[matplotlib](https://matplotlib.org/)图表。

## 示例

### bar 颜色图表

以下示例基于[Matplotlib Docs 的原始示例](https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_colors.html#sphx-glr-gallery-lines-bars-and-markers-bar-colors-py)。

<img src="/website/img/docs/controls/charts/matplotlib-barchart.png" className="screenshot-60"/>

```python
import matplotlib
import matplotlib.pyplot as plt

import flet as ft
from flet.matplotlib_chart import MatplotlibChart

matplotlib.use("svg")


def main(page: ft.Page):

    fig, ax = plt.subplots()

    fruits = ["apple", "blueberry", "cherry", "orange"]
    counts = [40, 100, 30, 55]
    bar_labels = ["red", "blue", "_red", "orange"]
    bar_colors = ["tab:red", "tab:blue", "tab:red", "tab:orange"]

    ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

    ax.set_ylabel("fruit supply")
    ax.set_title("Fruit supply by kind and color")
    ax.legend(title="Fruit color")

    page.add(MatplotlibChart(fig, expand=True))


ft.app(target=main)
```

### 线图

以下示例基于[Matplotlib Docs 的原始示例](https://matplotlib.org/stable/gallery/lines_bars_and_markers/cohere.html#sphx-glr-gallery-lines-bars-and-markers-cohere-py)。

<img src="/website/img/docs/controls/charts/matplotlib-linechart.png" className="screenshot-60"/>

```python
import matplotlib
import matplotlib.pyplot as plt
import numpy as np

import flet as ft
from flet.matplotlib_chart import MatplotlibChart

matplotlib.use("svg")

def main(page: ft.Page):

    # Fixing random state for reproducibility
    np.random.seed(19680801)

    dt = 0.01
    t = np.arange(0, 30, dt)
    nse1 = np.random.randn(len(t))  # white noise 1
    nse2 = np.random.randn(len(t))  # white noise 2

    # Two signals with a coherent part at 10Hz and a random part
    s1 = np.sin(2 * np.pi * 10 * t) + nse1
    s2 = np.sin(2 * np.pi * 10 * t) + nse2

    fig, axs = plt.subplots(2, 1)
    axs[0].plot(t, s1, t, s2)
    axs[0].set_xlim(0, 2)
    axs[0].set_xlabel("time")
    axs[0].set_ylabel("s1 and s2")
    axs[0].grid(True)

    cxy, f = axs[1].cohere(s1, s2, 256, 1.0 / dt)
    axs[1].set_ylabel("coherence")

    fig.tight_layout()

    page.add(MatplotlibChart(fig, expand=True))

ft.app(target=main)
```

## properties

### `figure`

绘制 matplotlib 图 - `matplotlib.figure.Figure` class 的实例。

### `isolated`

每次使用`page.update()`或`Control.update()`方法更新页面或父图控件时，通过调用 Matplotlib API 重新绘制图表。 频繁重新绘制大图可能会影响整个 Flet 应用程序的性能。

将`isolated`设置为`True`以启用显式图表更新。 重新绘制图表调用其`update()`方法。 例如，此页面上的第一个示例可以如下修改:

```python
def main(page: ft.Page):

    # ...

    # set initial axis legent
    ax.legend(title="Fruit color")

    # enable explicit updates
    # and add chart to a page
    chart1 = MatplotlibChart(fig, isolated=True, expand=True)
    page.add(chart1)

    sleep(5)

    # update chart axis
    ax.legend(title="Colors")
    chart1.update()

ft.app(target=main)
```

### `original_size`

`True`以原始大小显示图表。 `False`（默认）显示适合配置边界的图表。

### `transparent`

`True`从图表中删除背景。 `False`（默认值）显示具有背景的图表。
