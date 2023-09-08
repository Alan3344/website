---
title: DragTarget
sidebar_label: DragTarget
slug: dragtarget
---

一个控件，该控件在删除(#draggable)窗口小部件时完成拖动操作。

当将拖动拖动在拖动目标的顶部时，询问拖放目标是否会接受拖动可携带的数据。 如果阻力目标属于与拖动相同的`group`，则将接受传入的阻力。 如果用户确实将拖放目标放在拖动目标的顶部（并且拖动目标表明它将接受拖放的数据），则要求拖动目标接受拖放的数据。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/utility/draggable)

### 拖放颜色

<img src="/img/docs/controls/drag-and-drop/drag-and-drop-colors.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Drag and Drop example"

    def drag_will_accept(e):
        e.control.content.border = ft.border.all(
            2, ft.colors.BLACK45 if e.data == "true" else ft.colors.RED
        )
        e.control.update()

    def drag_accept(e):
        src = page.get_control(e.src_id)
        e.control.content.bgcolor = src.content.bgcolor
        e.control.content.border = None
        e.control.update()

    def drag_leave(e):
        e.control.content.border = None
        e.control.update()

    page.add(
        ft.Row(
            [
                ft.Column(
                    [
                        ft.Draggable(
                            group="color",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.CYAN,
                                border_radius=5,
                            ),
                            content_feedback=ft.Container(
                                width=20,
                                height=20,
                                bgcolor=ft.colors.CYAN,
                                border_radius=3,
                            ),
                        ),
                        ft.Draggable(
                            group="color",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.YELLOW,
                                border_radius=5,
                            ),
                        ),
                        ft.Draggable(
                            group="color1",
                            content=ft.Container(
                                width=50,
                                height=50,
                                bgcolor=ft.colors.GREEN,
                                border_radius=5,
                            ),
                        ),
                    ]
                ),
                ft.Container(width=100),
                ft.DragTarget(
                    group="color",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.BLUE_GREY_100,
                        border_radius=5,
                    ),
                    on_will_accept=drag_will_accept,
                    on_accept=drag_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `content`

`Control`是阻力目标的视觉表示。

### `group`

该阻力目标属于的一组。 [DragTarget](dragtarget)要接受传入`Draggable`和`DragTarget`必须在同一`group`中。

## 事件

### `on_accept`

当用户确实将拖放目标放在拖动目标顶部时（而拖放目标则在`group`的情况下使用拖动）。 事件处理程序参数是带有以下字段的`DragTargetAcceptEvent`类的实例:

- `src_id` - draggable 的唯一控制 ID。
- `x` - 当特定指针事件发生在拖动上时，全局位置的组件。
- `y` - Y 组件的组件是在拖放上发生特定指针事件时。

使用`page.get_control(e.src_id)`通过其 ID 检索控制参考。

### `on_leave`

当鼠标指针发生在正在进行的拖放事件中时发射。

### `on_will_accept`

当将拖动拖动在拖动目标的顶部时发射。 `data`事件详细信息字段包含`true`（字符串），如果`Draggable`和`DragTarget`都具有相同的`group`; 否则`false`（String）。
