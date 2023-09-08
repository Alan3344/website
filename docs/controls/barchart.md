---
title: BarChart
sidebar_label: BarChart
slug: barchart
---

绘制条形图。

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/charts/barchart)

### Barchart 1

<img src="/website/img/docs/controls/charts/barchart-sample-1.png" className="screenshot-50"/>

```python
import flet as ft

def main(page: ft.Page):
    chart = ft.BarChart(
        bar_groups=[
            ft.BarChartGroup(
                x=0,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=40,
                        width=40,
                        color=ft.colors.AMBER,
                        tooltip="Apple",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=1,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=100,
                        width=40,
                        color=ft.colors.BLUE,
                        tooltip="Blueberry",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=2,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=30,
                        width=40,
                        color=ft.colors.RED,
                        tooltip="Cherry",
                        border_radius=0,
                    ),
                ],
            ),
            ft.BarChartGroup(
                x=3,
                bar_rods=[
                    ft.BarChartRod(
                        from_y=0,
                        to_y=60,
                        width=40,
                        color=ft.colors.ORANGE,
                        tooltip="Orange",
                        border_radius=0,
                    ),
                ],
            ),
        ],
        border=ft.border.all(1, ft.colors.GREY_400),
        left_axis=ft.ChartAxis(
            labels_size=40, title=ft.Text("Fruit supply"), title_size=40
        ),
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(
                    value=0, label=ft.Container(ft.Text("Apple"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=1, label=ft.Container(ft.Text("Blueberry"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=2, label=ft.Container(ft.Text("Cherry"), padding=10)
                ),
                ft.ChartAxisLabel(
                    value=3, label=ft.Container(ft.Text("Orange"), padding=10)
                ),
            ],
            labels_size=40,
        ),
        horizontal_grid_lines=ft.ChartGridLines(
            color=ft.colors.GREY_300, width=1, dash_pattern=[3, 3]
        ),
        tooltip_bgcolor=ft.colors.with_opacity(0.5, ft.colors.GREY_300),
        max_y=110,
        interactive=True,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### Barchart 2

<img src="/website/img/docs/controls/charts/barchart-sample-2.gif" className="screenshot-50"/>

```python
import flet as ft

class SampleRod(ft.BarChartRod):
    def __init__(self, y: float, hovered: bool = False):
        super().__init__()
        self.hovered = hovered
        self.y = y

    def _before_build_command(self):
        self.to_y = self.y + 1 if self.hovered else self.y
        self.color = ft.colors.YELLOW if self.hovered else ft.colors.WHITE
        self.border_side = (
            ft.BorderSide(width=1, color=ft.colors.GREEN_400)
            if self.hovered
            else ft.BorderSide(width=0, color=ft.colors.WHITE)
        )
        super()._before_build_command()

    def _build(self):
        self.tooltip = str(self.y)
        self.width = 22
        self.color = ft.colors.WHITE
        self.bg_to_y = 20
        self.bg_color = ft.colors.GREEN_300


def main(page: ft.Page):
    def on_chart_event(e: ft.BarChartEvent):
        for group_index, group in enumerate(chart.bar_groups):
            for rod_index, rod in enumerate(group.bar_rods):
                rod.hovered = e.group_index == group_index and e.rod_index == rod_index
        chart.update()

    chart = ft.BarChart(
        bar_groups=[
            ft.BarChartGroup(
                x=0,
                bar_rods=[SampleRod(5)],
            ),
            ft.BarChartGroup(
                x=1,
                bar_rods=[SampleRod(6.5)],
            ),
            ft.BarChartGroup(
                x=2,
                bar_rods=[SampleRod(5)],
            ),
            ft.BarChartGroup(
                x=3,
                bar_rods=[SampleRod(7.5)],
            ),
            ft.BarChartGroup(
                x=4,
                bar_rods=[SampleRod(9)],
            ),
            ft.BarChartGroup(
                x=5,
                bar_rods=[SampleRod(11.5)],
            ),
            ft.BarChartGroup(
                x=6,
                bar_rods=[SampleRod(6)],
            ),
        ],
        bottom_axis=ft.ChartAxis(
            labels=[
                ft.ChartAxisLabel(value=0, label=ft.Text("M")),
                ft.ChartAxisLabel(value=1, label=ft.Text("T")),
                ft.ChartAxisLabel(value=2, label=ft.Text("W")),
                ft.ChartAxisLabel(value=3, label=ft.Text("T")),
                ft.ChartAxisLabel(value=4, label=ft.Text("F")),
                ft.ChartAxisLabel(value=5, label=ft.Text("S")),
                ft.ChartAxisLabel(value=6, label=ft.Text("S")),
            ],
        ),
        on_chart_event=on_chart_event,
        interactive=True,
    )

    page.add(
        ft.Container(
            chart, bgcolor=ft.colors.GREEN_200, padding=10, border_radius=5, expand=True
        )
    )

ft.app(main)
```

## `BarChart`属性

<img src="/website/img/docs/controls/charts/barchart-diagram.svg" className="screenshot-100"/>

### `bar_groups`

`ft.BarChartGroup`绘制的列表。

### `groups_space`

条形组之间的差距。

### `animate`

控制图表隐式动画。 有关更多信息和可能的值，请参见[{`LineChart.animate`](linechart#animate)属性。

### `interactive`

在悬停图表栏时启用自动工具提示。

### `bgcolor`

图表的背景[颜色](/docs/guides/python/colors)。

### `tooltip_bgcolor`

工具提示的背景[颜色](/docs/guides/python/colors)。

### `border`

图表周围的边界。 该值是`ft.Border`类的实例。

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

配置底轴的外观，其标题和标签。 该值是[`ChartAxis`](#chartaxis-properties)类的实例。

### `baseline_y`

Y 轴的基线值。 默认值为`0`。

### `min_y`

配置 Y 轴的最小显示值。

### `max_y`

配置 Y 轴的最大显示值。

## `BarChart`事件

### `on_chart_event`

悬停或单击酒吧时发射。

事件数据是具有以下属性的实例`ft.BarChartEvent`类:

- `type`事件类型，例如`PointerHoverEvent`，`PointerExitEvent`，等。
- `bar_index` - 栏的索引或`-1`如果图表被悬停或在任何栏外单击。
- `rod_index` - 如果将图表悬停在任何条形外，则 ROD 的索引或`-1`。
- {`stack_item_index` - 堆栈项目的索引或`-1`如果图表悬停或单击任何条形外。

## `BarChartGroup` `BarChartGroup` properties

### `x`

x 轴上的组位置。

### `bar_rods`

[`BarChartRod`](#barchartrod-properties)对象的列表要在组中显示。

### `group_vertically`

如果设置为`True`杆杆，则彼此绘制； 否则，将杆杆彼此绘制。 默认值为`False`。

### `bars_space`

条杆之间的差距。

## `BarChartRod`属性

### `rod_stack_items`

[`BarChartRodStackItem`](#barchartrodstackitem-properties)对象绘制堆叠栏的可选列表。

### `from_y`

指定杆在 Y 轴上的起始位置。 默认值为`0`。

### `to_y`

指定杆在 y 轴上的结尾位置。

### `width`

杆的宽度。 默认值为`8`。

### `color`

杆[颜色](/docs/guides/python/colors)。 默认值为`cyan`。

### `gradient`

梯级吸引杆的背景。 有关更多信息和可能的值，请参见[`Container.gradient`](container#gradient)属性。

### `border_radius`

杆杆的边界半径。 默认值为`4`。

### `border_side`

边界在杆上绘制。 该值是`ft.BorderSide`类的实例。

### `bg_from_y`

背景背后的可选起始位置。

### `bg_to_y`

背景背后的可选结尾位置。

### `bg_color`

杆背后的背景的可选[颜色](/docs/guides/python/colors)。

### `bg_gradient`

可选梯度，绘制带有的背景。

### `selected`

如果将`BarChart.interactive`设置为`False` `False`时，请始终显示在`True` `True`。

### `show_tooltip`

`True`（默认）如果应在悬停栏的顶部显示工具提示。

### `tooltip`

自定义工具提示值。 默认值为`to_y`。

### `tooltip_style`

带有文本样式，以显示工具提示。 该值是[`ft.TextStyle`](text#textstyle-properties) class。

### `tooltip_align`的实例

该工具提示的对齐。 该值是`ft.TextAlign` enum。

杆杆中堆栈项目的起始位置。

### `to_y`

杆杆中堆栈项目的结尾位置。

### `color`

a [color](/docs/guides/python/colors)堆栈项目。

### `border_side`

堆栈项目周围的边界。 该值是`ft.BorderSide`类的实例。

## `ChartGridLines`属性

在图表中配置水平和垂直网格线的外观。

### `interval`

网格线之间的间隔。 默认值为`1`。

### `color`

[颜色](/docs/guides/python/colors)网格线。

### `width`

网格线的宽度。 默认值为`1`。

### `dash_pattern`

定义行的破折号效应。 该值是仪表板偏移和长度的圆形列表。 例如，列表`[5, 10]`将导致破折号长 5 像素，然后是空白空格长 10 像素。 默认情况下，绘制一条实线。

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
