---
title: LineChart
sidebar_label: LineChart
slug: linechart
---

绘制一个线图。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/charts/linechart)

### linechart 1

<img src="/img/docs/controls/charts/linechart-sample-1.gif" className="screenshot-50"/>

```python
import flet as ft

class State:
    toggle = True

s = State()

def main(page: ft.Page):
    data_1 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 1.5),
                ft.LineChartDataPoint(5, 1.4),
                ft.LineChartDataPoint(7, 3.4),
                ft.LineChartDataPoint(10, 2),
                ft.LineChartDataPoint(12, 2.2),
                ft.LineChartDataPoint(13, 1.8),
            ],
            stroke_width=8,
            color=ft.colors.LIGHT_GREEN,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 2.8),
                ft.LineChartDataPoint(7, 1.2),
                ft.LineChartDataPoint(10, 2.8),
                ft.LineChartDataPoint(12, 2.6),
                ft.LineChartDataPoint(13, 3.9),
            ],
            color=ft.colors.PINK,
            below_line_bgcolor=ft.colors.with_opacity(0, ft.colors.PINK),
            stroke_width=8,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 2.8),
                ft.LineChartDataPoint(3, 1.9),
                ft.LineChartDataPoint(6, 3),
                ft.LineChartDataPoint(10, 1.3),
                ft.LineChartDataPoint(13, 2.5),
            ],
            color=ft.colors.CYAN,
            stroke_width=8,
            curved=True,
            stroke_cap_round=True,
        ),
    ]

    data_2 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 4),
                ft.LineChartDataPoint(5, 1.8),
                ft.LineChartDataPoint(7, 5),
                ft.LineChartDataPoint(10, 2),
                ft.LineChartDataPoint(12, 2.2),
                ft.LineChartDataPoint(13, 1.8),
            ],
            stroke_width=4,
            color=ft.colors.with_opacity(0.5, ft.colors.LIGHT_GREEN),
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 1),
                ft.LineChartDataPoint(3, 2.8),
                ft.LineChartDataPoint(7, 1.2),
                ft.LineChartDataPoint(10, 2.8),
                ft.LineChartDataPoint(12, 2.6),
                ft.LineChartDataPoint(13, 3.9),
            ],
            color=ft.colors.with_opacity(0.5, ft.colors.PINK),
            below_line_bgcolor=ft.colors.with_opacity(0.2, ft.colors.PINK),
            stroke_width=4,
            curved=True,
            stroke_cap_round=True,
        ),
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(1, 3.8),
                ft.LineChartDataPoint(3, 1.9),
                ft.LineChartDataPoint(6, 5),
                ft.LineChartDataPoint(10, 3.3),
                ft.LineChartDataPoint(13, 4.5),
            ],
            color=ft.colors.with_opacity(0.5, ft.colors.CYAN),
            stroke_width=4,
            stroke_cap_round=True,
        ),
    ]

    chart = ft.LineChart(
        data_series=data_1,
        border=ft.Border(
            bottom=ft.BorderSide(4, ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE))
        ),
        left_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=1,
                    label=ft.Text("1m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Text("2m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=3,
                    label=ft.Text("3m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=4,
                    label=ft.Text("4m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Text("5m", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=6,
                    label=ft.Text("6m", size=14, weight=ft.FontWeight.BOLD),
                ),
            ],
            labels_size=40,
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Container(
                        ft.Text(
                            "SEP",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=7,
                    label=ft.Container(
                        ft.Text(
                            "OCT",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=12,
                    label=ft.Container(
                        ft.Text(
                            "DEC",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
            ],
            labels_size=32,
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.8, ft.colors.BLUE_GREY),
        min_y=0,
        max_y=4,
        min_x=0,
        max_x=14,
        # animate=5000,
        expand=True,
    )

    def toggle_data(e):
        if s.toggle:
            chart.data_series = data_2
            chart.data_series[2].point = True
            chart.max_y = 6
            chart.interactive = False
        else:
            chart.data_series = data_1
            chart.max_y = 4
            chart.interactive = True
        s.toggle = not s.toggle
        chart.update()

    page.add(ft.IconButton(ft.icons.REFRESH, on_click=toggle_data), chart)

ft.app(main)
```

### linechart 2

<img src="/img/docs/controls/charts/linechart-sample-2.gif" className="screenshot-50"/>

```python
import flet as ft

class State:
    toggle = True

s = State()

def main(page: ft.Page):
    data_1 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(0, 3),
                ft.LineChartDataPoint(2.6, 2),
                ft.LineChartDataPoint(4.9, 5),
                ft.LineChartDataPoint(6.8, 3.1),
                ft.LineChartDataPoint(8, 4),
                ft.LineChartDataPoint(9.5, 3),
                ft.LineChartDataPoint(11, 4),
            ],
            stroke_width=5,
            color=ft.colors.CYAN,
            curved=True,
            stroke_cap_round=True,
        )
    ]

    data_2 = [
        ft.LineChartData(
            data_points=[
                ft.LineChartDataPoint(0, 3.44),
                ft.LineChartDataPoint(2.6, 3.44),
                ft.LineChartDataPoint(4.9, 3.44),
                ft.LineChartDataPoint(6.8, 3.44),
                ft.LineChartDataPoint(8, 3.44),
                ft.LineChartDataPoint(9.5, 3.44),
                ft.LineChartDataPoint(11, 3.44),
            ],
            stroke_width=5,
            color=ft.colors.CYAN,
            curved=True,
            stroke_cap_round=True,
        )
    ]

    chart = ft.LineChart(
        data_series=data_1,
        border=ft.border.all(3, ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE)),
        horizontal_grid_lines=ft.ChartGridLines(
            interval=1, color=ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE), width=1
        ),
        vertical_grid_lines=ft.ChartGridLines(
            interval=1, color=ft.colors.with_opacity(0.2, ft.colors.ON_SURFACE), width=1
        ),
        left_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=1,
                    label=ft.Text("10K", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=3,
                    label=ft.Text("30K", size=14, weight=ft.FontWeight.BOLD),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Text("50K", size=14, weight=ft.FontWeight.BOLD),
                ),
            ],
            labels_size=40,
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=2,
                    label=ft.Container(
                        ft.Text(
                            "MAR",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=5,
                    label=ft.Container(
                        ft.Text(
                            "JUN",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
                ft.ChartAxisLabel(
                    value=8,
                    label=ft.Container(
                        ft.Text(
                            "SEP",
                            size=16,
                            weight=ft.FontWeight.BOLD,
                            color=ft.colors.with_opacity(0.5, ft.colors.ON_SURFACE),
                        ),
                        margin=ft.margin.only(top=10),
                    ),
                ),
            ],
            labels_size=32,
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.8, ft.colors.BLUE_GREY),
        min_y=0,
        max_y=6,
        min_x=0,
        max_x=11,
        # animate=5000,
        expand=True,
    )

    def toggle_data(e):
        if s.toggle:
            chart.data_series = data_2
            chart.interactive = False
        else:
            chart.data_series = data_1
            chart.interactive = True
        s.toggle = not s.toggle
        chart.update()

    page.add(ft.ElevatedButton("avg", on_click=toggle_data), chart)

ft.app(main)
```

## `LineChart`属性

<img src="/img/docs/controls/charts/linechart-diagram.svg" className="screenshot-100"/>

### `data_series`

[`LineChartData`](#linechartdata-properties)控制绘制为图表上的单独行的列表。

### `animate`

控制图表隐式动画。

`animate`属性的值可能是以下类型之一:

- `bool` - `True`以使用`linear`曲线和`1000` MILLISECONDS 的持续时间启用图表动画。
- `int` - 启用使用`linear`曲线和指定的毫秒数的图表动画。
- `ft.animation（持续时间: int，曲线: str）` - 启用具有指定持续时间和过渡曲线的图表动画。

如果`animate`为`None`，则`linear`用`150` milliseconds 持续时间默认启用。

### `interactive` `interactive`

在悬停在图表上时，启用自动工具提示和点突出显示。

### `bgcolor`

图表的背景[颜色](/docs/guides/python/colors)。

### `tooltip_bgcolor`

工具提示的背景[颜色](/docs/guides/python/colors)。

### `border`

图表周围的边界。 该值是`ft.Border`类的实例。

### `point_line_start`

垂直线在选定点下绘制的垂直线的开始。 默认值是图表的底部边缘。

### `point_line_end`

垂直线在选定点位置绘制的末端。 默认值是数据点的`y`值。

### `horizontal_grid_lines`

控制图表的水平线图。 该值是[`ChartGridLines`](#chartgridlines) class。

### `vertical_grid_lines`的实例

控制图表垂直线的图形。 该值是[`ChartGridLines`](#chartgridlines) class。

### `left_axis`的实例

配置左轴的外观，其标题和标签。 该值是[`ChartAxis`](#chartaxis-properties)类的实例。

### `top_axis`

配置顶轴的外观，其标题和标签。 该值是[`ChartAxis`](#chartaxis-properties)类的实例。

### `right_axis`

配置右轴的外观，其标题和标签。 该值是[`ChartAxis`](#chartaxis-properties)类的实例。

### `bottom_axis`

配置底轴的外观，其标题和标签。 该值是[`ChartAxis`](#chartaxis-properties) class。

### `baseline_x`的实例

X 轴的基线值。 默认值为`0`。

### `min_x`

配置 X 轴的最小显示值。

### `max_x`

配置 X 轴的最大显示值。

### `baseline_y`

Y 轴的基线值。 默认值为`0`。

### `min_y`

配置 Y 轴的最小显示值。

### `max_y`

配置 Y 轴的最大显示值。

## `LineChart`事件

### `on_chart_event`

当图表线悬停或单击时会发射。

事件数据是具有以下属性的实例`ft.LineChartEvent`类:

- `type`事件类型，例如`PointerHoverEvent`，`PointerExitEvent`，等。
- `bar_index` - 如果没有线路，则行索引或`-1`。
- `spot_index` - 线点的索引或`-1`如果没有点悬停。

## `LineChartData` properties

### `data_points`

[{`LineChartDataPoint`](#linechartdatapoint-properties)的点（点）列表（点）} type 代表单个图表行。

### `curved`

设置为`True`以绘制图表线作为曲线。 默认值为`False`。

### `color`

图表线的 A [颜色](/docs/guides/python/colors)。

### `gradient`

绘制线路背景的梯度。 有关更多信息和可能的值，请参见[`Container.gradient`](container#gradient)属性。

### `stroke_width`

图表线的宽度。

### `stroke_cap_round`

设置为`True`以绘制圆形线盖。 默认值为`False`。

### `dash_pattern`

定义行的破折号效应。 该值是仪表板偏移和长度的圆形列表。 例如，列表`[5, 10]`将导致虚线长 5 像素，然后是空白空间长 10 像素长。 默认情况下，绘制一条实线。

### `shadow`

阴影以图表线掉落。 该值是`ft.Shadow`类的实例。

### `above_line_bgcolor`

用指定的[color](/docs/guides/python/colors)填充图表上方的区域。

### `above_line_gradient`

用指定的梯度填充图表线上的区域。

### `above_line_cutoff_y`

切断以特定 y 值的线图上方的填充区域。

### `above_line`

线点和图表顶部边缘之间绘制的垂直线。 该值是[`ChartPointLine`](#chartpointline-properties) class。

### `below_line_bgcolor`的实例

用指定的[颜色](/docs/guides/python/colors)填充图下图以下区域。

### `below_line_gradient`

用指定的梯度填充图表线下方的区域。

### `below_line_cutoff_y`

切断以特定 y 值的截止区域图下的填充区域。

### `below_line`

在图表的底部和图表的底部边缘之间绘制的垂直线。 该值是[`ChartPointLine`](#chartpointline-properties) class。

### `selected_below_line`的实例

在选定的线点和图表的底部绘制的垂直线。 该值是`True` - 用默认样式绘制一条线，`False` - 请勿在选定点下绘制一条线，或者[`ChartPointLine`]的实例{`ChartPointLine`](#chartpointline-properties)类以指定绘制的行样式。{4191 } `point`

配置线点（点）的外观和形状。 该属性的值是`True` - 用默认样式绘制一个点，`False` - 请勿绘制线路，或者是`ChartPointShape`类的实现之一:

- `ChartCirclePoint` - 圆点点
- `ChartSquarePoint` - 平方点
- `ChartCrossPoint` - 跨点

### `selected_point`

配置选定的线点的外观和形状。 有关支持的属性值，请参见[`LineChartData.point`](#point)。

## `LineChartDataPoint` properties

### `x`

`X`轴的点位置。

### `y`

`Y`轴的点位置。

### `selected`

`LineChart.interactive`设置为 false 时，将点绘制为选择的点。

### `show_tooltip`

`True`（默认）如果应在盘旋数据点的顶部显示工具提示。

### `tooltip`

自定义工具提示值。 默认值为`y`。

### `tooltip_style`

带有文本样式，以显示工具提示。 该值是[`ft.TextStyle`](text#textstyle-properties) class。

### `tooltip_align`的实例

该工具提示的对齐。 该值是`ft.TextAlign`枚举的实例。

### `point`

配置线点的外观和形状。 有关支持的属性值，请参见[`LineChartData.point`](#point)。

### `selected_point`

配置选定的线点的外观和形状。 有关支持的属性值，请参见[`LineChartData.point`](#point)。

### `show_above_line`

`True`在数据点上方显示一行。 默认值为`True`。

### `show_below_line`

`True`在数据点下方显示一行。 默认值为`True`。

### `selected_below_line`

在选定的线点和图表的底部绘制的垂直线。 该值是`True` - 绘制默认样式的线，`False` - 请勿在选定点下绘制一条线，或者[`ChartPointLine`]的实例{`ChartPointLine`](#chartpointline-properties) class class class class class class to draw。{4190 } `ChartGridLines`属性

在图表中配置水平和垂直网格线的外观。

### `interval`

网格线之间的间隔。 默认值为`1`。

### `color`

[颜色](/docs/guides/python/colors)网格线的。

### `width`

网格线的宽度。 默认值为`1`。

### `dash_pattern`

定义行的破折号效应。 该值是仪表板偏移和长度的圆形列表。 例如，列表`[5, 10]`将导致虚线长 5 像素，然后是空白空间长 10 像素长。 默认情况下，绘制一条实线。

## `ChartAxis`属性

配置图表轴。

### `title`

`Control`显示为轴标题。

### `title_size`

标题区域的宽度或高度。

### `show_labels`

`True`沿轴显示标签。 如果`labels`为空，则显示自动标签。

### `labels`

[`ft.ChartAxisLabel`](#chartaxislabel-properties)对象的列表仅设置特定值的自定义轴标签。

### `labels_interval`

自动标签之间的间隔。

### `labels_size`

标签区域的宽度或高度。

## `ChartAxisLabel`属性

为特定值配置自定义标签。

### `value`

绘制标签的值。

### `label`

`Control`作为标签绘制。

## `ChartPointLine` properties

### `color`

[颜色](/docs/guides/python/colors)行。

### `width`

线的宽度。

### `dash_pattern`

线的破折号图案。
