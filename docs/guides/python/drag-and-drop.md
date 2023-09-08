---
title: Drag and drop
sidebar_label: Drag and drop
---

Flet 中拖动的力学非常简单 - 用户开始拖动[`Draggable`](/docs/controls/draggable)控制，并在[`DragTarget`](/docs/controls/dragtarget)上“将”它拖放。 如果拖动目标和阻力目标都具有相同的`group`拖动目标将调用`on_accept`事件处理程序，并将拖放控制 ID 作为事件数据传递。 在这种情况下，可拖动是用于拖放操作的源“数据”。

让我们来看看以下示例。 在下面的程序中，您可以拖动左控件显示“ 1”在右上角显示“ 0”，并且当拖动操作完成时，左控件将替换为“ 0”，右控件变为“ 1”: :

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Drag and Drop example"

    def drag_accept(e):
        # get draggable (source) control by its ID
        src = page.get_control(e.src_id)
        # update text inside draggable control
        src.content.content.value = "0"
        # update text inside drag target control
        e.control.content.content.value = "1"
        page.update()

    page.add(
        ft.Row(
            [
                ft.Draggable(
                    group="number",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.CYAN_200,
                        border_radius=5,
                        content=ft.Text("1", size=20),
                        alignment=ft.alignment.center,
                    ),
                ),
                ft.Container(width=100),
                ft.DragTarget(
                    group="number",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.PINK_200,
                        border_radius=5,
                        content=ft.Text("0", size=20),
                        alignment=ft.alignment.center,
                    ),
                    on_accept=drag_accept,
                ),
            ]
        )
    )

ft.app(target=main)
```

<img src="/website/img/docs/getting-started/drag-and-drop-number.gif"className="screenshot-50" />

因此，当发生`on_accept`事件发生时，确定“源”（draggable）和“目标”（拖动目标）控制的情况是开发人员的责任。

:::记录的东西
将 DragTarget 的 Group 属性更改为`number1`，并在目标上删除“ 1”时不再调用`on_accept`。
:::

还有其他属性和事件处理程序可以使拖放操作更加互动。 例如，当拖动操作正在进行时，draggable 具有`content_when_dragging`属性以显示不同的控件，而不是`content`。 还有`content_feedback`属性在指针下显示不同的控件。 默认情况下，相同的`content`控件，但是在拖动时在光标下显示了 50％的不透明度。

让我们在示例中修改可拖动，以在拖动时显示一个“孔”，以代替拖动控件，仅在光标下方“ 1”:

```python
...
                ft.Draggable(
                    group="number",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.CYAN_200,
                        border_radius=5,
                        content=ft.Text("1", size=20),
                        alignment=ft.alignment.center,
                    ),
                    content_when_dragging=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.BLUE_GREY_200,
                        border_radius=5,
                    ),
                    content_feedback=ft.Text("1"),
                ),
...
```

<img src="/website/img/docs/getting-started/drag-and-drop-number-2.gif"className="screenshot-50" />

拖动目标控件还具有`on_will_accept`和`on_leave`事件处理程序，它们在“删除”目标时有助于可视化。 在我们的示例中，让我们修改 dragtarget，以便在目标控制范围内绘制一个边框，当它准备好接受传入的阻力:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Drag and Drop example 2"

    def drag_accept(e):
        # get draggable (source) control by its ID
        src = page.get_control(e.src_id)
        # update text inside draggable control
        src.content.content.value = "0"
        # reset source group, so it cannot be dropped to a target anymore
        src.group = ""
        # update text inside drag target control
        e.control.content.content.value = "1"
        # reset border
        e.control.content.border = None
        page.update()

    def drag_will_accept(e):
        # black border when it's allowed to drop and red when it's not
        e.control.content.border = ft.border.all(
            2, ft.colors.BLACK45 if e.data == "true" else ft.colors.RED
        )
        e.control.update()

    def drag_leave(e):
        e.control.content.border = None
        e.control.update()

    page.add(
        ft.Row(
            [
                ft.Draggable(
                    group="number",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.CYAN_200,
                        border_radius=5,
                        content=ft.Text("1", size=20),
                        alignment=ft.alignment.center,
                    ),
                    content_when_dragging=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.BLUE_GREY_200,
                        border_radius=5,
                    ),
                    content_feedback=ft.Text("1"),
                ),
                ft.Container(width=100),
                ft.DragTarget(
                    group="number",
                    content=ft.Container(
                        width=50,
                        height=50,
                        bgcolor=ft.colors.PINK_200,
                        border_radius=5,
                        content=ft.Text("0", size=20),
                        alignment=ft.alignment.center,
                    ),
                    on_accept=drag_accept,
                    on_will_accept=drag_will_accept,
                    on_leave=drag_leave,
                ),
            ]
        )
    )

ft.app(target=main)
```

<img src="/website/img/docs/getting-started/drag-and-drop-number-3.gif"className="screenshot-50" />
