---
title: Row
sidebar_label: Row
slug: row
---

一个在水平数组中显示其 children 的控件。

引起 child 控件以展开并填充可用的水平空间设置`expand`属性。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/layout/row)

### 行间距

<img src="/img/docs/controls/row/row-spacing.gif" className="screenshot" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                ft.Container(
                    content=ft.Text(value=str(i)),
                    alignment=ft.alignment.center,
                    width=50,
                    height=50,
                    bgcolor=ft.colors.AMBER,
                    border_radius=ft.border_radius.all(5),
                )
            )
        return items

    def gap_slider_change(e):
        row.spacing = int(e.control.value)
        row.update()

    gap_slider = ft.Slider(
        min=0,
        max=50,
        divisions=50,
        value=0,
        label="{value}",
        on_change=gap_slider_change,
    )

    row = ft.Row(spacing=0, controls=items(10))

    page.add(ft.Column([ ft.Text("Spacing between items"), gap_slider]), row)

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 行包裹

<img src="/img/docs/controls/row/row-wrap.gif" className="screenshot" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                ft.Container(
                    content=ft.Text(value=str(i)),
                    alignment=ft.alignment.center,
                    width=50,
                    height=50,
                    bgcolor=ft.colors.AMBER,
                    border_radius=ft.border_radius.all(5),
                )
            )
        return items

    def slider_change(e):
        row.width = float(e.control.value)
        row.update()

    width_slider = ft.Slider(
        min=0,
        max=page.window_width,
        divisions=20,
        value=page.window_width,
        label="{value}",
        on_change=slider_change,
    )

    row = ft.Row(
        wrap=True,
        spacing=10,
        run_spacing=10,
        controls=items(30),
        width=page.window_width,
    )

    page.add(
        ft.Column(
            [
                ft.Text(
                    "Change the row width to see how child items wrap onto multiple rows:"
                ),
                width_slider,
            ]
        ),
        row,
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 行水平对齐

<img src="/img/docs/controls/row/row-alignment.png" className="screenshot" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                ft.Container(
                    content=ft.Text(value=str(i)),
                    alignment=ft.alignment.center,
                    width=50,
                    height=50,
                    bgcolor=ft.colors.AMBER_500,
                )
            )
        return items

    def row_with_alignment(align: ft.MainAxisAlignment):
        return ft.Column(
            [
                ft.Text(str(align), size=16),
                ft.Container(
                    content=ft.Row(items(3), alignment=align),
                    bgcolor=ft.colors.AMBER_100,
                ),
            ]
        )

    page.add(
        row_with_alignment(ft.MainAxisAlignment.START),
        row_with_alignment(ft.MainAxisAlignment.CENTER),
        row_with_alignment(ft.MainAxisAlignment.END),
        row_with_alignment(ft.MainAxisAlignment.SPACE_BETWEEN),
        row_with_alignment(ft.MainAxisAlignment.SPACE_AROUND),
        row_with_alignment(ft.MainAxisAlignment.SPACE_EVENLY),
    )


ft.app(target=main)
```

  </TabItem>
</Tabs>

### 行垂直

<img src="/img/docs/controls/row/row-vertical-alignment.png" className="screenshot-70" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                ft.Container(
                    content=ft.Text(value=str(i)),
                    alignment=ft.alignment.center,
                    width=50,
                    height=50,
                    bgcolor=ft.colors.AMBER_500,
                )
            )
        return items

    def row_with_vertical_alignment(align: ft.CrossAxisAlignment):
        return ft.Column(
            [
                ft.Text(str(align), size=16),
                ft.Container(
                    content=ft.Row(items(3), vertical_alignment=align),
                    bgcolor=ft.colors.AMBER_100,
                    height=150,
                ),
            ]
        )

    page.add(
        row_with_vertical_alignment(ft.CrossAxisAlignment.START),
        row_with_vertical_alignment(ft.CrossAxisAlignment.CENTER),
        row_with_vertical_alignment(ft.CrossAxisAlignment.END),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `alignment`

child 控件应如何水平放置。

例如，`MainAxisAlignment.START`，默认值，将 children 放在一行的左侧。

属性值为`MainAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `END`
- `CENTER`
- `SPACE_BETWEEN`
- `SPACE_AROUND`
- `SPACE_EVENLY`

### `auto_scroll`

`True`如果 children 更新时，滚动栏应自动将其位置移至结尾。 对于{555513}工作的方法必须为`False`。

### {555514}

在行内显示的控件列表。

### `run_spacing`

`wrap=True`时运行之间的间距。 默认值为 10。

### `scroll`

启用该行的水平滚动以防止其内容溢出。

属性值是默认值`None`的可选`ScrollMode`枚举。

支持的值:

- `None`（默认值） - 该行不可滚动，其内容可能会溢出。
- `AUTO` - 启用滚动，并且仅在滚动时显示滚动条。
- `ADAPTIVE` - 启用滚动，并在运行应用程序或桌面时始终显示滚动条。
- `ALWAYS` - 启用滚动，并始终显示滚动条。
- `HIDDEN` - 启用滚动，但滚动条总是隐藏的。

### {555525}

连续对控件之间的间距。 默认值是 10 个虚拟像素。 仅当`alignment`设置为`start`，`end`或{555529}。

`on_scroll`事件以毫秒为单位。 默认值为`10`。

### `tight`

指定应水平占用多少空间。 默认值为`False` - 将所有空间分配给 children。

### `vertical_alignment`

child 控件应垂直放置。

属性值为`CrossAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `CENTER`
- `END`
- `STRETCH`
- `BASELINE`

### `wrap`

设置为`True`时，如果不适合单行，则行将将 child 控制在其他行（运行）中。

### {555531}

用户更改行滚动位置时会发射。

有关事件详细信息和示例，请参见[`Column.on_scroll`](column#on_scroll)。

## 方法

### `scroll_to（offset，offset，delta，key，键，持续时间，持续时间，曲线）``

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

有关方法详细信息和示例，请参见[`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve)。

## 事件

### `on_scroll`

用户更改滚动位置时会发射。

有关事件详细信息和示例，请参见[`Column.on_scroll`](column#on_scroll)。

## 扩展 children

将 child 控件放入行中时，您可以“展开”它以填充可用空间。 每个控件都有`expand`属性，可以具有布尔值（`True` - 扩展控件以填充所有可用空间）或一个整数 - 一个“扩展因子”，指定如何用其他扩展的 child 控件将自由空间分配 。 例如，此代码与 Textfield 一起创建一行，并在其旁边占据所有可用空间和一个高架丁字。

```python
r = ft.Row([
  ft.TextField(hint_text="Enter your name", expand=True),
  ft.ElevatedButton(text="Join chat")
])
```

数字扩展因子的以下示例将在其中包含 3 个容器，其宽度为 20％（1/5）` ，``60％（3/5）'和 `分别为 20％（1/5）`:

```python
r = ft.Row([
  ft.Container(expand=1, content=ft.Text("A")),
  ft.Container(expand=3, content=ft.Text("B")),
  ft.Container(expand=1, content=ft.Text("C"))
])
```

通常，percents 中 child 的结果宽度被计算为`expand / sum（所有扩展） * 100％`。
