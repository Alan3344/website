---
title: Slider
sidebar_label: Slider
slug: slider
---

滑块提供了可调内容的视觉指示以及总内容范围内的当前设置。

当您希望人们设置定义值（例如音量或亮度），或者当人们会从即时反馈中受益于设置更改的效果时，请使用滑块。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/slider)

### 基本滑块

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.add(
        ft.Text("Default slider:"),
        ft.Slider(),
        ft.Text("Default disabled slider:"),
        ft.Slider(disabled=True))

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 带值的滑块

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.add(
        ft.Text("Slider with value:"),
        ft.Slider(value=0.3),
        ft.Text("Slider with a custom range and label:"),
        ft.Slider(min=0, max=100, divisions=10, label="{value}%"))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/slider/slider-with-custom-content.gif" className="screenshot-30"/>

### Slider with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):

    def slider_changed(e):
        t.value = f"Slider changed to {e.control.value}"
        page.update()

    t = ft.Text()
    page.add(
        ft.Text("Slider with 'on_change' event:"),
        ft.Slider(min=0, max=100, divisions=10, label="{value}%", on_change=slider_changed), t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/slider/slider-with-change-event.gif" className="screenshot-30"/>

## properties

### `active_color`

[颜色](/docs/guides/python/colors)用于活跃的滑块轨道部分。

滑块的“主动”侧是拇指和最小值之间的一侧。

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `divisions`

离散部门的数量。

通常与`label`一起用于显示当前离散值。

如果未设置，滑块是连续的。

### `inactive_color`

滑块轨道不活动部分的[颜色](/docs/guides/python/colors)。

滑块的“不活动”侧是拇指和最大值之间的一侧。

### `label`

格式使用`{value}`。

当滑块处于活动状态时，标签显示在滑块上方。 `label`的值必须包含`{value}`将被当前的滑块值替换。

它用于显示离散滑块的值，并显示为值指示灯形状的一部分。

如果未设置，则不会显示值指示器。

### `max`

用户可以选择的最大值。

默认为`1.0`。 必须大于或等于`min`。

如果`max`等于`min`，则禁用滑块。

### `min`

用户可以选择的最小值。

默认为`0.0`。 必须小于或等于`max`。

如果`max`等于`min`，则禁用滑块。

### `thumb_color`

拇指的[颜色](/docs/guides/python/colors)。

### `value`

此滑块的当前选择值。

滑块的拇指在与此值相对应的位置上绘制。

## 事件

### `on_blur`

当控件失去焦点时会发射。

### `on_change`

### `on_change_end`更改滑块状态时会发射。

当用户完成后，为滑块选择一个新值。

### `on_change_start`

当用户开始为滑块选择新值时发射。

### `on_focus`

当控件获得焦点时发射。
