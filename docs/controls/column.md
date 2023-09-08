---
title: Column
sidebar_label: Column
slug: column
---

一个在垂直数组中显示其 children 的控件。

引起 child 控件以扩展和填充可用的垂直空间设置其`expand`属性。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/column)

### 列间距

<img src="/website/img/docs/controls/column/column-spacing.gif" className="screenshot-50"/>

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

    def spacing_slider_change(e):
        col.spacing = int(e.control.value)
        col.update()

    gap_slider = ft.Slider(
        min=0,
        max=100,
        divisions=10,
        value=0,
        label="{value}",
        width=500,
        on_change=spacing_slider_change,
    )

    col = ft.Column(spacing=0, controls=items(5))

    page.add(ft.Column([ ft.Text("Spacing between items"), gap_slider]), col)

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 列包装

<img src="/website/img/docs/controls/column/column-wrapping.gif" className="screenshot-70"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

HEIGHT = 400

def main(page: ft.Page):
    def items(count):
        items = []
        for i in range(1, count + 1):
            items.append(
                ft.Container(
                    content=ft.Text(value=str(i)),
                    alignment=ft.alignment.center,
                    width=30,
                    height=30,
                    bgcolor=ft.colors.AMBER,
                    border_radius=ft.border_radius.all(5),
                )
            )
        return items

    def slider_change(e):
        col.height = float(e.control.value)
        col.update()

    width_slider = ft.Slider(
        min=0,
        max=HEIGHT,
        divisions=20,
        value=HEIGHT,
        label="{value}",
        width=500,
        on_change=slider_change,
    )

    col = ft.Column(
        wrap=True,
        spacing=10,
        run_spacing=10,
        controls=items(10),
        height=HEIGHT,
    )

    page.add(
        ft.Column(
            [
                ft.Text(
                    "Change the column height to see how child items wrap onto multiple columns:"
                ),
                width_slider,
            ]
        ),
        ft.Container(content=col, bgcolor=ft.colors.AMBER_100),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 列垂直对齐

<img src="/website/img/docs/controls/column/column-alignment.png"  className="screenshot-70"/>

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

    def column_with_alignment(align: ft.MainAxisAlignment):
        return ft.Column(
            [
                ft.Text(str(align), size=10),
                ft.Container(
                    content=ft.Column(items(3), alignment=align),
                    bgcolor=ft.colors.AMBER_100,
                    height=400,
                ),
            ]
        )

    page.add(
        ft.Row(
            [
                column_with_alignment(ft.MainAxisAlignment.START),
                column_with_alignment(ft.MainAxisAlignment.CENTER),
                column_with_alignment(ft.MainAxisAlignment.END),
                column_with_alignment(ft.MainAxisAlignment.SPACE_BETWEEN),
                column_with_alignment(ft.MainAxisAlignment.SPACE_AROUND),
                column_with_alignment(ft.MainAxisAlignment.SPACE_EVENLY),
            ],
            spacing=30,
            alignment=ft.MainAxisAlignment.START,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 列水平对齐

<img src="/website/img/docs/controls/column/column-horiz-alignment.png"  className="screenshot-50" />

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

    def column_with_horiz_alignment(align: ft.CrossAxisAlignment):
        return ft.Column(
            [
                ft.Text(str(align), size=16),
                ft.Container(
                    content=ft.Column(
                        items(3),
                        alignment=ft.MainAxisAlignment.START,
                        horizontal_alignment=align,
                    ),
                    bgcolor=ft.colors.AMBER_100,
                    width=100,
                ),
            ]
        )

    page.add(
        ft.Row(
            [
                column_with_horiz_alignment(ft.CrossAxisAlignment.START),
                column_with_horiz_alignment(ft.CrossAxisAlignment.CENTER),
                column_with_horiz_alignment(ft.CrossAxisAlignment.END),
            ],
            spacing=30,
            alignment=ft.MainAxisAlignment.START,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 无限滚动列表

下面的示例演示了列表项目的添加，因为用户滚动到底部，造成了无限列表的幻觉:

```python
import threading
import flet as ft

class State:
    i = 0

s = State()
sem = threading.Semaphore()

def main(page: ft.Page):
    def on_scroll(e: ft.OnScrollEvent):
        if e.pixels >= e.max_scroll_extent - 100:
            if sem.acquire(blocking=False):
                try:
                    for i in range(0, 10):
                        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))
                        s.i += 1
                    cl.update()
                finally:
                    sem.release()

    cl = ft.Column(
        spacing=10,
        height=200,
        width=200,
        scroll=ft.ScrollMode.ALWAYS,
        on_scroll_interval=0,
        on_scroll=on_scroll,
    )
    for i in range(0, 50):
        cl.controls.append(ft.Text(f"Text line {s.i}", key=str(s.i)))
        s.i += 1

    page.add(ft.Container(cl, border=ft.border.all(1)))

ft.app(main)
```

### 滚动列以编程方式滚动列

<img src="/website/img/docs/controls/column/column-scroll-to.png"  className="screenshot-50" />

以下示例演示了各种`scroll_to()`选项，并定义了自定义滚动栏主题:

```python
import flet as ft

def main(page: ft.Page):
    page.theme = ft.Theme(
        scrollbar_theme=ft.ScrollbarTheme(
            track_color={
                ft.MaterialState.HOVERED: ft.colors.AMBER,
                ft.MaterialState.DEFAULT: ft.colors.TRANSPARENT,
            },
            track_visibility=True,
            track_border_color=ft.colors.BLUE,
            thumb_visibility=True,
            thumb_color={
                ft.MaterialState.HOVERED: ft.colors.RED,
                ft.MaterialState.DEFAULT: ft.colors.GREY_300,
            },
            thickness=30,
            radius=15,
            main_axis_margin=5,
            cross_axis_margin=10,
            # interactive=False,
        )
    )

    cl = ft.Column(
        spacing=10,
        height=200,
        width=float("inf"),
        scroll=ft.ScrollMode.ALWAYS,
    )
    for i in range(0, 100):
        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))

    def scroll_to_offset(e):
        cl.scroll_to(offset=100, duration=1000)

    def scroll_to_start(e):
        cl.scroll_to(offset=0, duration=1000)

    def scroll_to_end(e):
        cl.scroll_to(offset=-1, duration=2000, curve=ft.AnimationCurve.EASE_IN_OUT)

    def scroll_to_key(e):
        cl.scroll_to(key="20", duration=1000)

    def scroll_to_delta(e):
        cl.scroll_to(delta=40, duration=200)

    def scroll_to_minus_delta(e):
        cl.scroll_to(delta=-40, duration=200)

    page.add(
        ft.Container(cl, border=ft.border.all(1)),
        ft.ElevatedButton("Scroll to offset 100", on_click=scroll_to_offset),
        ft.Row(
            [
                ft.ElevatedButton("Scroll to start", on_click=scroll_to_start),
                ft.ElevatedButton("Scroll to end", on_click=scroll_to_end),
            ]
        ),
        ft.ElevatedButton("Scroll to key '20'", on_click=scroll_to_key),
        ft.Row(
            [
                ft.ElevatedButton("Scroll -40", on_click=scroll_to_minus_delta),
                ft.ElevatedButton("Scroll +40", on_click=scroll_to_delta),
            ]
        ),
    )

ft.app(main)
```

## properties

### `alignment`

child 控件应垂直放置。

属性值为`MainAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `END`
- `CENTER`
- `SPACE_BETWEEN`
- `SPACE_AROUND`
- `SPACE_EVENLY`

### `auto_scroll`

`True`如果 Scrollbar 应自动将其位置移至 children 更新时。 必须为`False`进行工作的方法`False`。

### `controls`

在列内显示的控件列表。

### `horizontal_alignment`

child 控件应如何水平放置。

属性值为`CrossAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `CENTER`
- `END`
- `STRETCH`
- `BASELINE`

### `on_scroll_interval`

`on_scroll`事件以毫秒为单位。 默认值为`10`。

### `scroll`

启用对列的垂直滚动，以防止其内容溢出。

属性值是默认值`None`的可选`ScrollMode`枚举。

支持的值:

- `None`（默认值） - 该列不可滚动，其内容可能会溢出。
- `AUTO` - 启用滚动，仅在滚动时显示滚动条。
- `ADAPTIVE` - 启用滚动，并在运行应用程序或桌面时始终显示滚动条。
- `ALWAYS` - 启用滚动，并始终显示滚动条。
- `HIDDEN` - 启用滚动，但滚动条总是隐藏的。

### `spacing`

列中控件之间的间距。 默认值是 10 个虚拟像素。 仅当`alignment`设置为`start`，`end`或`center`。

### `run_spacing`

`wrap=True`时运行之间的间距。 默认值为 10。

### `tight`

指定应垂直占用多少空间。 默认值为`False` - 将所有空间分配给 children。

### `wrap`

设置为`True`时，该列将如果不适合单个列，将 child 控件放入其他列（运行）中。

## 方法

### `scroll_to（offset，delta，delta，key，键，持续时间，持续时间，曲线） `

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

`offset`是可滚动控件的最小值和最大范围之间的座位值，例如:

```python
products.scroll_to(offset=100, duration=1000)
```

`offset`从可滚动的末端滚动可能是负面的。 例如，滚动到最后:

```python
products.scroll_to(offset=-1, duration=1000)
```

`delta`允许相对移动到当前位置。 使用正面`delta`向前滚动和负`delta`向后滚动。 例如，在 50 像素上向前移动滚动:

```python
products.scroll_to(delta=50)
```

`key`允许使用指定的`key`将滚动位置移至控件。 大多数 Flet 控件具有`key`属性，该属性被翻译成“全局密钥”。 `key`对于整个页面/视图，必须是唯一的。 例如:

```python
import flet as ft

def main(page: ft.Page):
    cl = ft.Column(
        spacing=10,
        height=200,
        width=200,
        scroll=ft.ScrollMode.ALWAYS,
    )
    for i in range(0, 50):
        cl.controls.append(ft.Text(f"Text line {i}", key=str(i)))

    def scroll_to_key(e):
        cl.scroll_to(key="20", duration=1000)

    page.add(
        ft.Container(cl, border=ft.border.all(1)),
        ft.ElevatedButton("Scroll to key '20'", on_click=scroll_to_key),
    )

ft.app(main)
```

:::注意
`scroll_to()`方法与`ListView`和`GridView`无法使用动态构建其物品。
:::

`duration`以毫秒为单位滚动动画持续时间。 默认为 0-无动画。

`curve`配置动画曲线。 默认为`ft.AnimationCurve.EASE`。

## 事件

### `on_scroll`

用户更改滚动位置时会发射。

事件处理程序参数是`ft.OnScrollEvent`类的实例，具有以下属性:

- `event_type`（str） - 类型滚动事件:
  - `start` - 控制已开始滚动；
  - `update` - 控制已更改其滚动位置；
  - `end` - 控制已停止滚动；
  - `user` - 用户改变了滚动的方向；
  - `over` - 控制没有更改其滚动位置，因为更改会导致其滚动位置超出其滚动边界；
- `pixels`（float） - 当前的滚动位置，在逻辑像素中。
- `min_scroll_extent`（float） - `pixels`的最小范围内值。
- `max_scroll_extent`（float） - `pixels`的最大范围内值。
- `viewport_dimension`（float） - 视口范围。
- `scroll_delta`（float） - 逻辑像素以滚动滚动的距离。 仅设置`update`事件。
- `direction`（str） - 用户滚动的方向: `idle`，`forward`，`reverse`。 仅设置`user`事件。
- `overscroll`（float） - 可滚动避免滚动的逻辑像素的数量。 仅设置`over`事件。
- `velocity`（float） - 当发生这种超滚动时，卷轴变化的速度正在发生变化。 仅设置`over`事件。

## 扩展 children

将 child 控件放入列中时，您可以“展开”其以填充可用空间。 每个控件都有`expand`属性，可以具有布尔值（`True` - 扩展控制以填充所有可用空间）或一个整数 - 一个“扩展因子”指定如何将自由空间与其他扩展的 child 控件分配 。 例如，此代码使用一个容器创建一列，以占据所有可用空间和底部的文本控件，用作状态栏:

```python
r = ft.Column([
  ft.Container(expand=True, content=ft.Text("Here is search results")),
  ft.Text("Records found: 10")
])
```

数字扩展因子的以下示例创建了一个具有 3 个容器的列，其高度为`20％（1/5）`，`60％（3/5）'和`分别为 20％（1/5）`:

```python
r = ft.Column([
  ft.Container(expand=1, content=ft.Text("Header")),
  ft.Container(expand=3, content=ft.Text("Body")),
  ft.Container(expand=1, content=ft.Text("Footer"))
])
```

通常，percents 中 child 的结果高度被计算为`expand / sum（所有扩展） * 100％`。
