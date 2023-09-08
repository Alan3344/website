---
title: PlotlyChart
sidebar_label: PlotlyChart
slug: plotlychart
---

显示[plotly](https://plotly.com/python/)图表。

## 示例

### 线图

以下示例基于[plotly docs 的原始示例](https://plotly.com/python/line-charts/)。

<img src="/img/docs/controls/charts/plotly-linechart.png" className="screenshot-60"/>

```python
import plotly.express as px

import flet as ft
from flet.plotly_chart import PlotlyChart

def main(page: ft.Page):

    df = px.data.gapminder().query("continent=='Oceania'")
    fig = px.line(df, x="year", y="lifeExp", color="country")

    page.add(PlotlyChart(fig, expand=True))

ft.app(target=main)
```

### 条形图

以下示例基于[Plotly Docs 的原始示例](https://plotly.com/python/bar-charts/)。

<img src="/img/docs/controls/charts/plotly-barchart.png" className="screenshot-60"/>

```python
import plotly.express as px

import flet as ft
from flet.plotly_chart import PlotlyChart

def main(page: ft.Page):

    df = px.data.gapminder().query("continent == 'Oceania'")
    fig = px.bar(
        df,
        x="year",
        y="pop",
        hover_data=["lifeExp", "gdpPercap"],
        color="country",
        labels={"pop": "population of Canada"},
        height=400,
    )

    page.add(PlotlyChart(fig, expand=True))

ft.app(target=main)
```

### 饼图

以下示例基于[plotly docs 的原始示例](https://plotly.com/python/pie-charts/)。

<img src="/img/docs/controls/charts/plotly-piechart.png" className="screenshot-60"/>

```python
import plotly.graph_objects as go

import flet as ft
from flet.plotly_chart import PlotlyChart

def main(page: ft.Page):

    labels = ["Oxygen", "Hydrogen", "Carbon_Dioxide", "Nitrogen"]
    values = [4500, 2500, 1053, 500]

    fig = go.Figure(data=[go.Pie(labels=labels, values=values)])

    page.add(PlotlyChart(fig, expand=True))

ft.app(target=main)
```

### 框图

以下示例基于[plotly docs 的原始示例](https://plotly.com/python/box-plots/)。

<img src="/img/docs/controls/charts/plotly-boxchart.png" className="screenshot-70"/>

```python
import plotly.graph_objects as go

import flet as ft
from flet.plotly_chart import PlotlyChart


def main(page: ft.Page):

    x = ['day 1', 'day 1', 'day 1', 'day 1', 'day 1', 'day 1',
        'day 2', 'day 2', 'day 2', 'day 2', 'day 2', 'day 2']

    fig = go.Figure()

    fig.add_trace(go.Box(
        y=[0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
        x=x,
        name='kale',
        marker_color='#3D9970'
    ))
    fig.add_trace(go.Box(
        y=[0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
        x=x,
        name='radishes',
        marker_color='#FF4136'
    ))
    fig.add_trace(go.Box(
        y=[0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
        x=x,
        name='carrots',
        marker_color='#FF851B'
    ))

    fig.update_layout(
        yaxis_title='normalized moisture',
        boxmode='group' # group together boxes of the different traces for each value of x
    )

    page.add(PlotlyChart(fig, expand=True))

ft.app(target=main)
```

## properties

### `figure`

绘制绘制的图 - `plotly.graph_objects.Figure`类的实例。

### `original_size`

`True`以原始大小显示图表。 `False`（默认）显示适合配置边界的图表。

### `isolated`

每次使用`page.update()`或`Control.update()`方法更新页面或父图控件时，通过调用 plotly api 重新绘制图表。 频繁重新绘制大图可能会影响整个 Flet 应用程序的性能。

将`isolated`设置为`True`以启用显式图表更新。 重新绘制图表调用其`update()`方法。
