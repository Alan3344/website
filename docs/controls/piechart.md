---
title: PieChart
sidebar_label: PieChart
slug: piechart
---

绘制饼图。

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/charts/piechart)

### PieChart 1

<img src="/website/img/docs/controls/charts/piechart-sample-1.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_border = ft.BorderSide(0, ft.colors.with_opacity(0, ft.colors.WHITE))
    hovered_border = ft.BorderSide(6, ft.colors.WHITE)

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            section.border_side = (
                hovered_border if idx == e.section_index else normal_border
            )
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                25,
                color=ft.colors.BLUE,
                radius=80,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.colors.YELLOW,
                radius=65,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.colors.PINK,
                radius=60,
                border_side=normal_border,
            ),
            ft.PieChartSection(
                25,
                color=ft.colors.GREEN,
                radius=70,
                border_side=normal_border,
            ),
        ],
        sections_space=1,
        center_space_radius=0,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### PieChart 2

<img src="/website/img/docs/controls/charts/piechart-sample-2.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_radius = 50
    hover_radius = 60
    normal_title_style = ft.TextStyle(
        size=16, color=ft.colors.WHITE, weight=ft.FontWeight.BOLD
    )
    hover_title_style = ft.TextStyle(
        size=22,
        color=ft.colors.WHITE,
        weight=ft.FontWeight.BOLD,
        shadow=ft.BoxShadow(blur_radius=2, color=ft.colors.BLACK54),
    )

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            if idx == e.section_index:
                section.radius = hover_radius
                section.title_style = hover_title_style
            else:
                section.radius = normal_radius
                section.title_style = normal_title_style
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                40,
                title="40%",
                title_style=normal_title_style,
                color=ft.colors.BLUE,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                30,
                title="30%",
                title_style=normal_title_style,
                color=ft.colors.YELLOW,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.colors.PURPLE,
                radius=normal_radius,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.colors.GREEN,
                radius=normal_radius,
            ),
        ],
        sections_space=0,
        center_space_radius=40,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

### PieChart 3

<img src="/website/img/docs/controls/charts/piechart-sample-3.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    normal_radius = 100
    hover_radius = 110
    normal_title_style = ft.TextStyle(
        size=12, color=ft.colors.WHITE, weight=ft.FontWeight.BOLD
    )
    hover_title_style = ft.TextStyle(
        size=16,
        color=ft.colors.WHITE,
        weight=ft.FontWeight.BOLD,
        shadow=ft.BoxShadow(blur_radius=2, color=ft.colors.BLACK54),
    )
    normal_badge_size = 40
    hover_badge_size = 50

    def badge(icon, size):
        return ft.Container(
            ft.Icon(icon),
            width=size,
            height=size,
            border=ft.border.all(1, ft.colors.BROWN),
            border_radius=size / 2,
            bgcolor=ft.colors.WHITE,
        )

    def on_chart_event(e: ft.PieChartEvent):
        for idx, section in enumerate(chart.sections):
            if idx == e.section_index:
                section.radius = hover_radius
                section.title_style = hover_title_style
            else:
                section.radius = normal_radius
                section.title_style = normal_title_style
        chart.update()

    chart = ft.PieChart(
        sections=[
            ft.PieChartSection(
                40,
                title="40%",
                title_style=normal_title_style,
                color=ft.colors.BLUE,
                radius=normal_radius,
                badge=badge(ft.icons.AC_UNIT, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                30,
                title="30%",
                title_style=normal_title_style,
                color=ft.colors.YELLOW,
                radius=normal_radius,
                badge=badge(ft.icons.ACCESS_ALARM, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.colors.PURPLE,
                radius=normal_radius,
                badge=badge(ft.icons.APPLE, normal_badge_size),
                badge_position=0.98,
            ),
            ft.PieChartSection(
                15,
                title="15%",
                title_style=normal_title_style,
                color=ft.colors.GREEN,
                radius=normal_radius,
                badge=badge(ft.icons.PEDAL_BIKE, normal_badge_size),
                badge_position=0.98,
            ),
        ],
        sections_space=0,
        center_space_radius=0,
        on_chart_event=on_chart_event,
        expand=True,
    )

    page.add(chart)

ft.app(main)
```

## `PieChart`属性

<img src="/website/img/docs/controls/charts/piechart-diagram.svg" className="screenshot-40"/>

### `animate`

控制图表隐式动画。 有关更多信息和可能的值，请参见[`LineChart.animate`](linechart#animate)属性。

### `center_space_color`

自由空间[颜色](/docs/guides/python/colors)在图表中间。

### `center_space_radius`

图表中间的自由空间半径。

### `sections_space`

`sections`。

### `start_degree_offset`之间的差距

默认情况下，`sections`顺时针从零度（圆的右侧）绘制。
您可以通过设置`start_degree_offset`（以度为单位）来更改起点。

### `sections`

`PieChartSection`控制绘制的列表。

## `PieChart`事件

### `on_chart_event`

当图表部分悬停或单击时，会发射。

事件数据是具有以下属性的实例`ft.PieChartEvent`类:

- `type`事件类型，例如`PointerHoverEvent`，`PointerExitEvent`，等等。
- `section_index` - 截面的索引或`-1`如果没有部分悬停。

## `PieChartSection` properties

### `value`

确定该部分应占用多少。 这取决于所有部分的总和，每个部分都应占据（`value` / sumvalues） \* 360 度。

### `radius`

部分的外部半径。

### `color`

背景[颜色](/docs/guides/python/colors)部分。

### `border_side`

截面周围的边界。 该值是`ft.BorderSide`类的实例。

### `title`

在本节中心绘制的标题。 如果`title`为空，则无标题。

### `title_style`

用`title`绘制的样式。 该值是[`ft.TextStyle`](text#textstyle-properties) `ft.TextStyle`类的实例。

### `title_position`

默认标题在本节的中间绘制，但可以更改其位置
使用`title_position`属性，其值必须在`0.0`和`1.0`之间:

- `0.0` `0.0`意味着在中心附近；
- `1.0`表示饼图外部附近。

### `badge`

在部分中间绘制的可选`Control`。

### `badge_position`

默认情况下，徽章是在本节中间绘制的，但是可以使用`badge_position`属性更改其位置，该属性必须在`0.0`和`1.0`之间，而`1.0`:

- `0.0`意味着在中心附近；
- `1.0`表示饼图外部附近。
