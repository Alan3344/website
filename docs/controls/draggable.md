---
title: Draggable
sidebar_label: Draggable
slug: draggable
---

一个可以从[DragTarget](dragtarget)拖动的控件。

当拖动控件识别拖动手势的开始时，它会显示[`content_feedback`](#content_feedback)控制，该控制在整个屏幕上跟踪用户的手指。 如果用户在[DragTarget](dragtarget)上方抬起手指，则该目标有机会完成拖放流程。

当零拖动正在进行时，此控件显示[`content`](#content)。 如果[{`content_when_dragging`](#contentwhendragging)是非空的，则当一个或多个拖动正在进行中时，此控件会显示`content_when_dragging`。 否则，此小部件始终显示`content`。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/utility/draggable)

### 拖放颜色

<img src="/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Column,
    Container,
    Draggable,
    DragTarget,
    DragTargetAcceptEvent,
    Page,
    Row,
    border,
    colors,
)


def main(page: Page):
    page.title = "Drag and Drop example"

    def drag_will_accept(e):
        e.control.content.border = border.all(
            2, colors.BLACK45 if e.data == "true" else colors.RED
        )
        e.control.update()

    def drag_accept(e: DragTargetAcceptEvent):
        src = page.get_control(e.src_id)
        e.control.content.bgcolor = src.content.bgcolor
        e.control.content.border = None
        e.control.update()

    def drag_leave(e):
        e.control.content.border = None
        e.control.update()

    page.add(
        Row(
            [
                Column(
                    [
                        Draggable(
                            group="color",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.CYAN,
                                border_radius=5,
                            ),
                            content_feedback=Container(
                                width=20,
                                height=20,
                                bgcolor=colors.CYAN,
                                border_radius=3,
                            ),
                        ),
                        Draggable(
                            group="color",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.YELLOW,
                                border_radius=5,
                            ),
                        ),
                        Draggable(
                            group="color1",
                            content=Container(
                                width=50,
                                height=50,
                                bgcolor=colors.GREEN,
                                border_radius=5,
                            ),
                        ),
                    ]
                ),
                Container(width=100),
                DragTarget(
                    group="color",
                    content=Container(
                        width=50,
                        height=50,
                        bgcolor=colors.BLUE_GREY_100,
                        border_radius=5,
                    ),
                    on_will_accept=drag_will_accept,
                    on_accept=drag_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )


flet.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `content`

`Draggable`控件显示[`content`](#content)当零拖动正在进行中时。 如果[{`content_when_dragging`](#contentwhendragging)是非空的，则当一个或多个拖动正在进行中时，此控件会显示`content_when_dragging`。 否则，此控件始终显示`content`。

### `content_feedback`

`Control`在拖动开始时在指针下显示。

### `content_when_dragging`

当一个或多个拖动正在进行时，`Control`将显示而不是`content`。

如果这是`None`，则此窗口小部件将始终显示`content`（因此，在进行阻力时，拖放源表示不会更改）。

### `group`

该拖动属于的一组。 要使[DragTarget](dragtarget)接受传入`Draggable`和`DragTarget`必须在相同的`group`中。
