---
title: GestureDetector
sidebar_label: GestureDetector
slug: gesturedetector
---

检测手势的控件。

试图识别与其非零回调相对应的手势。

如果此控件具有`content`，则为其尺寸行为辩护 child 控件。 如果它没有`content`，则它会增长以适合父。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/utility/gesturedetector)

[Solitare Game 教程](https://flet.dev/docs/tutorials/python-solitaire)

### 可拖动容器

以下示例说明了如何在堆栈中自由拖动控件。

该样本还表明，姿势可以具有 child 控件（蓝色容器），并且可以嵌套在另一个控件（黄色容器）中，得出相同的结果。

<img src="/website/img/docs/controls/gesture-detector/gesture-detector-two-containers.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def on_pan_update1(e: ft.DragUpdateEvent):
        c.top = max(0, c.top + e.delta_y)
        c.left = max(0, c.left + e.delta_x)
        c.update()

    def on_pan_update2(e: ft.DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=50,
        on_pan_update=on_pan_update1,
    )

    c = ft.Container(gd, bgcolor=ft.colors.AMBER, width=50, height=50, left=0, top=0)

    gd1 = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=10,
        on_vertical_drag_update=on_pan_update2,
        left=100,
        top=100,
        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50),
    )

    page.add( ft.Stack([c, gd1], width=1000, height=500))

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `content`

A child 控件由手势检测器包含。

### `mouse_cursor`

鼠标光标用于悬停在控件上的鼠标指针。 `MouseCursor`枚举的可能值:

- `ALIAS`
- `ALL_SCROLL`
- `BASIC`
- `CELL`
- `CLICK`
- `CONTEXT_MENU`
- `COPY`
- `DISAPPEARING`
- `FORBIDDEN`
- `GRAB`
- `GRABBING`
- `HELP`
- `MOVE`
- `NO_DROP`
- `NONE`
- `PRECISE`
- `PROGRESS`
- `RESIZE_COLUMN`
- `RESIZE_DOWN`
- `RESIZE_DOWN_LEFT`
- `RESIZE_DOWN_RIGHT`
- `RESIZE_LEFT`
- `RESIZE_LEFT_RIGHT`
- `RESIZE_RIGHT`
- `RESIZE_ROW`
- `RESIZE_UP`
- `RESIZE_UP_DOWN`
- `RESIZE_UP_LEFT`
- `RESIZE_UP_LEFT_DOWN_RIGHT`
- `RESIZE_UP_RIGHT`
- `RESIZE_UP_RIGHT_DOWN_LEFT`
- `TEXT`
- `VERTICAL_TEXT`
- `WAIT`
- `ZOOM_IN`
- `ZOOM_OUT`

### `drag_interval`

以毫秒为主进行水平阻力，垂直阻力和 PAN 更新事件。 当用户移动指针时，正在生成许多事件以进行精确跟踪。 `drag_interval`允许将拖动更新事件发送到每个 x 毫秒 Flet 程序，从而保留带宽（Web 和移动应用程序）。 默认值为`0` - 没有节流，所有事件都会发送到 Flet 程序，非常顺畅的跟踪。

### `hover_interval`

`on_hover`事件以毫秒为单位。

## 事件

### `multi_tap_touches`

触发`on_multi_tap`事件的最小指针数。

### `on_double_tap`

用户在快速连续的两次相同位置用主按钮点击了屏幕。

### `on_double_tap_down`

可能导致双击的指针已在特定位置联系了屏幕。

第二次点击事件后立即触发。

事件处理程序参数是`TapEvent`类的实例。

### `on_enter`

当鼠标指针输入此控件时触发。

事件处理程序参数是`HoverEvent`类的实例。

### `on_exit`

当鼠标指针退出此控件时，触发。

事件处理程序参数是`HoverEvent`类的实例。

### `on_horizontal_drag_end`

以前与屏幕接触的指针与主按钮接触并水平移动不再与屏幕接触，并且在停止接触屏幕时以特定速度移动。

事件处理程序参数是`DragEndEvent`类的实例，具有以下属性:

- `primary_velocity` - 当指针停止以每秒逻辑像素接触屏幕时，指针沿着主要轴移动的速度。
- `velocity_x` - 指针速度的组件停止接触屏幕。
- `velocity_y` - y 在停止与屏幕的速度的组件。

### `on_horizontal_drag_start`

指针已使用主按钮与屏幕联系，并开始水平移动。

事件处理程序参数是带有以下属性的`DragStartEvent`类的实例:

- `local_x` - X 局部位置的组件，该位置在该位置上与屏幕联系。
- `local_y` - 指针联系屏幕的本地位置的组件。
- `global_x` - 指针联系屏幕的全局位置的组件。
- `global_y` - 指针联系屏幕的全局位置的组件。
- `timestamp` - 记录了触发拖动事件的源指针事件的时间戳。

### `on_horizontal_drag_update`

与屏幕接触的指针带有主按钮并水平移动的指针已沿水平方向移动。

事件处理程序参数是`DragUpdateEvent`类的实例，具有以下属性:

- `delta_x` - 自从上一个更新以来，指针已在事件接收器的坐标空间中移动的数量的 X 组件。
- `delta_y` - y 组件以来指针已在事件接收器的坐标空间中移动的数量以来。
- `local_x` -x 局部位置在事件接收器的坐标系统中的 X 组件，该坐标接收器与屏幕联系。
- `local_y` - Y 组件的局部位置在事件接收器的坐标系中，该坐标接收器与屏幕联系。
- `global_x` - 触发此更新时，指针全局位置的组件。
- `global_y` - Y 触发此更新时，指针全局位置的组件。
- `primary_delta` - 自上一个更新以来，指针已沿事件接收器的坐标空间的主轴移动的数量。
- `timestamp` - 记录了触发拖动事件的源指针事件的时间戳。

### `on_hover`

当鼠标指针输入此控件时触发。

事件处理程序参数是`HoverEvent`类的实例，具有以下属性:

- {3716
- `local_y` - 指针本地位置的组件。
- `global_x` - 指针全局位置的组件。
- `global_y` - 指针全局位置的组件。
- `delta_x` - 距离逻辑像素的距离的组件自上次悬停事件以来移动的逻辑像素。
- `delta_x` - y 距离逻辑像素的组件自上次悬停事件以来移动的逻辑像素中。
- `timestamp` - 事件的时间戳。

### `on_long_press_end`

用主按钮触发长压的指针已停止与屏幕联系。

事件处理程序参数是带有以下属性的`LongPressEndEvent`类的实例:

- `local_x` - X 局部位置的组件，该位置在该位置上与屏幕联系。
- `local_y` - 指针联系屏幕的本地位置的组件。
- `global_x` - 指针联系屏幕的全局位置的组件。
- `global_y` - 指针联系屏幕的全局位置的组件。
- `velocity_x` - 指针速度的组件停止接触屏幕。
- `velocity_y` - y 在停止与屏幕的速度的组件。

### `on_long_press_start`

当已经识别出带有主按钮的长按手势时被打电话。

当指针保持在同一位置长时间与屏幕接触时触发。

事件处理程序参数是带有以下属性的`LongPressStartEvent`类的实例:

- `local_x` - x 局部位置的组件，该位置在该位置上与屏幕联系。
- `local_y` - 指针联系屏幕的本地位置的组件。
- `global_x` - 指针联系屏幕的全局位置的组件。
- `global_y` - y 在该全局位置的组件，指针与屏幕联系。

### `on_pan_end`

以前与屏幕接触的指针与主按钮接触并移动不再与屏幕接触，并且在停止接触屏幕时以特定速度移动。

事件处理程序参数是`DragEndEvent`类的实例。

### `on_pan_start`

指针通过主按钮与屏幕联系，并开始移动。

事件处理程序参数是`DragStartEvent`类的实例。

### `on_pan_update`

与屏幕接触的指针带有主按钮和移动再次移动。

事件处理程序参数是`DragUpdateEvent`类的实例。

### `on_scale_end`

事件处理程序参数是`ScaleEndEvent`类的实例，具有以下属性:

- `pointer_count` - 手势识别器跟踪的指针数。
- `velocity_x` - 最后一个指针的速度的组件要从屏幕上抬起。
- `velocity_y` - Y 的 Y 组件是最后一个要从屏幕上抬起的指针的速度。

### `on_scale_start`

与屏幕接触的指针已经建立了 1.0 的焦点和初始比例。

事件处理程序参数是带有以下属性的`ScaleStartEvent`类的实例:

- `focal_point_x` - x 与屏幕接触的指针的初始焦点的组件。
- `focal_point_y` - y 与屏幕接触的指针的初始焦点的组件。
- `local_focal_point_x` - 与屏幕接触的指针的初始焦点的组件。
- `local_focal_point_y` - y 与屏幕接触的指针的初始焦点的组件。
- `pointer_count` - 手势识别器跟踪的指针数。

### `on_scale_update`

事件处理程序参数是带有以下属性的`ScaleUpdateEvent`类的实例:

- `focal_point_x` - X 焦点的焦点的组件与屏幕接触。
- `focal_point_y` - 指针焦点的组件与屏幕接触。
- `focal_point_delta_x` - x 组件以来，手势焦点的焦点已移动到事件接收器的坐标空间以来。
- `focal_point_delta_y` - y 组件以来，手势焦点的焦点已移动到事件接收器的坐标空间以来。
- `local_focal_point_x` - 指针焦点的组件与屏幕接触。
- `local_focal_point_y` - 指针焦点的组件与屏幕接触。
- `pointer_count` - 手势识别器跟踪的指针数。
- `horizontal_scale` - 与屏幕接触的指针之间的平均距离所暗示的比例。
- `vertical_scale` - 与屏幕接触的指针之间的平均距离所暗示的比例。
- `scale` - 与屏幕接触的指针之间的平均距离所暗示的比例。

### `on_secondary_long_press_end`

用辅助按钮触发长压的指针已停止与屏幕联系。

事件处理程序参数是`LongPressEndEvent`类的实例。

### `on_secondary_long_press_start`

当已识别带有次要按钮的长按手势时，请打电话。

当指针保持在同一位置与屏幕接触时触发
事件处理程序参数是`LongPressStartEvent`类的实例。

### `on_secondary_tap`

带有辅助按钮的点击。

### `on_secondary_tap_down`

可能会导致使用辅助按钮的点击的指针已在特定位置与屏幕联系。

事件处理程序参数是`TapEvent`类的实例。

### `on_secondary_tap_up`

一个将触发用辅助按钮触发水龙头的指针已停止在特定位置接触屏幕。

事件处理程序参数是`TapEvent`类的实例。

### `on_tap`

带有主按钮的点击。

### `on_tap_down`

可能会导致带有主按钮的点击的指针已在特定位置与屏幕联系。

事件处理程序参数是带有以下属性的`TapEvent`类的实例:

- `local_x` - x 局部位置的 X 组件，该位置在该位置上与屏幕联系。
- `local_y` - 指针联系屏幕的本地位置的组件。
- `global_x` - 指针联系屏幕的全局位置的组件。
- `global_y` - 指针联系屏幕的全局位置的组件。
- `kind` - 启动事件的设备的种类。

### `on_tap_up`

将用主按钮触发水龙头的指针已停止在特定位置接触屏幕。

事件处理程序参数是`TapEvent`类的实例。

### `on_vertical_drag_end`

以前与屏幕接触的指针与主按钮接触并垂直移动，不再与屏幕接触，并且在停止接触屏幕时以特定速度移动。

事件处理程序参数是`DragEndEvent`类的实例。

### `on_vertical_drag_start`

指针已使用主按钮联系屏幕，并开始垂直移动。

事件处理程序参数是`DragStartEvent`类的实例。

### `on_vertical_drag_update`

与屏幕接触的指针，带有主按钮并垂直移动的指针已沿垂直方向移动。

事件处理程序参数是`DragUpdateEvent`类的实例。

### `on_multi_long_press`

识别带有多个指针的长按手势时，请打电话给。

### `on_multi_tap`

当多个指针与屏幕联系时触发。

事件处理程序参数是带有以下属性的`MultiTapEvent`类的实例:

- `correct_touches` - `True` a `multi_tap_touches`触摸屏幕的指针数; 否则`False`。

### `on_scroll`

事件处理程序参数是`ScrollEvent`类的实例，具有以下属性:

- `local_x` - 指针本地位置的组件。
- `local_y` - 指针本地位置的组件。
- `global_x` - 指针全局位置的组件。
- `global_y` - 指针全局位置的组件。
- `scroll_delta_x` - 逻辑像素中要滚动的数量的组件。
- `scroll_delta_y` - y 在逻辑像素中滚动的数量的组件。
