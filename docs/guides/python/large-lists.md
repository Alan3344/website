---
title: Large lists
sidebar_label: Large lists
---

您可以使用[`Column`](/docs/controls/column)和[`Row`](/docs/controls/row)控件在大多数情况下以显示列表，但是如果列表包含数百或数千个项目`Column`和`Row`，将会和`Row`将会 无效的 UI 效率低下，因为它们即使在当前的滚动位置也不可见所有项目，它们也会立即渲染所有项目。

在下面的示例中，我们将 5,000 个文本控件添加到页面。 页面使用`Column`作为默认布局容器:

```python
import flet as ft

def main(page: ft.Page):
    for i in range(5000):
        page.controls.append(ft.Text(f"Line {i}"))
    page.scroll = "always"
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

运行该程序并注意，最初加载并渲染页面上的所有文本行不仅需要几秒钟，而且滚动也很慢，也很懒惰:

<img src="/website/img/docs/getting-started/scroll-column.gif" className="screenshot-50" />

用于显示很多项目的显示列表，请使用[`ListView`](/docs/controls/listview)和[`GridView`](/docs/controls/gridview)控件按需渲染项目，仅在当前滚动位置可见。

## listView listView

[`ListView`](/docs/controls/listview)可以是垂直（默认）或水平的。 ListView 项目在滚动方向上一个接一个地显示。

ListView 已经实现了有效的按需渲染其 children，但是如果您可以为所有项目设置相同的固定高度或宽度（对于`horizontal` listView），则可以进一步提高滚动性能（“范围”）。 这可以通过用`item_extent`属性设置绝对范围或使所有 children 的范围等于第一个 child 的范围，从而完成这一点。

让我们使用 ListView 控件输出 5,000 个项目的列表:

```python
import flet as ft

def main(page: ft.Page):
    lv = ft.ListView(expand=True, spacing=10)
    for i in range(5000):
        lv.controls.append(ft.Text(f"Line {i}"))
    page.add(lv)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

现在，滚动的光滑且速度足够快，可以遵循鼠标的运动:

<img src="/website/img/docs/getting-started/scroll-listview.gif" className="screenshot-50" />

:::注意
我们在 ListView 构造函数中使用了`expand=True`。 为了正常运行，如果指定了`horizontal`），ListView 必须具有高度（或宽度）。 您可以设置绝对大小，例如 `listView（高度= 300，间距= 10）`但是在上面的示例中，我们使 listView 在页面上占用所有可用空间，即展开。 阅读有关[`Control.expand`](/docs/controls#expand)属性的更多信息。
:::

## gridView

[`GridView`](/docs/controls/gridview)允许将控件安排到可滚动的网格中。

您可以用`ft.Column(wrap=True)`或`ft.Row(wrap=True)`制作“网格”，例如:

```python
import os
import flet as ft

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: ft.Page):
    r = ft.Row(wrap=True, scroll="always", expand=True)
    page.add(r)

    for i in range(5000):
        r.controls.append(
            ft.Container(
                ft.Text(f"Item {i}"),
                width=100,
                height=100,
                alignment=ft.alignment.center,
                bgcolor=ft.colors.AMBER_100,
                border=ft.border.all(1, ft.colors.AMBER_400),
                border_radius=ft.border_radius.all(5),
            )
        )
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

<img src="/website/img/docs/getting-started/row-wrap-as-grid.png" className="screenshot-50" />

尝试滚动和调整浏览器窗口的大小 - 一切正常，但是很懒惰。

:::注意
在程序的开头，我们将`FLET_WS_MAX_MESSAGE_SIZE`环境变量的值设置为`8000000` - 这是字节中的 WebSocket 消息的最大大小，可以通过 Flet 服务器呈现页面接收。 默认尺寸为 1 MB，但是描述 5,000 个容器控件的 JSON 消息的大小将超过 1 MB，因此我们将允许的尺寸增加到 8 MB。

通常，通过 WebSocket 频道挤压大消息不是一个好主意，因此请使用[批处理更新](#batch-updates) ableach 控制频道加载。
:::

类似于 ListView 的 GridView 非常有效地渲染许多 children。 让我们使用 GridView 实现上面的示例:

```python
import os
import flet as ft

os.environ["FLET_WS_MAX_MESSAGE_SIZE"] = "8000000"

def main(page: ft.Page):
    gv = ft.GridView(expand=True, max_extent=150, child_aspect_ratio=1)
    page.add(gv)

    for i in range(5000):
        gv.controls.append(
            ft.Container(
                ft.Text(f"Item {i}"),
                alignment=ft.alignment.center,
                bgcolor=ft.colors.AMBER_100,
                border=ft.border.all(1, ft.colors.AMBER_400),
                border_radius=ft.border_radius.all(5),
            )
        )
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

<img src="/website/img/docs/getting-started/grid-view.png" className="screenshot-50" />

随着 GridView 滚动和窗口调整的调整，响应良好！

您可以使用`runs_count`属性指定固定数量的行或列（运行），或带有`max_extent`属性的“瓷砖”的最大大小，因此运行次数可以自动变化。 在我们的示例中，我们将最大图块大小设置为 150 像素，并将其形状设置为`child_aspect_ratio=1`的“正方形”。 `child_aspect_ratio`是横轴与每个 child 的主要轴范围的比率。 尝试将其更改为`0.5`或`2`。

## 批处理更新

自上一个`page.update()`以来，当`page.update()`称为 Flet 服务器上的 Flet 服务器时。 发送带有数千个控件的大型消息可能会使用户等待几秒钟，直到完全接收到消息并控制渲染为止。

为了提高程序的可用性并尽快将结果呈现给用户，您可以批量发送页面更新。 例如，以下程序将 5,100 个 child 控件添加到 500 个项目的批处理列表视图中:

```python
import flet as ft

def main(page: ft.Page):

    # add ListView to a page first
    lv = ft.ListView(expand=1, spacing=10, item_extent=50)
    page.add(lv)

    for i in range(5100):
        lv.controls.append(ft.Text(f"Line {i}"))
        # send page to a page
        if i % 500 == 0:
            page.update()
    # send the rest to a page
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

<img src="/website/img/docs/getting-started/sending-page-updates-in-batches.png" className="screenshot-50" />
