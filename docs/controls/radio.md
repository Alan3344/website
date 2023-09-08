---
title: Radio
sidebar_label: Radio
slug: radio
---

无线电按钮让人们从两个或多个选择中选择一个选项。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/radio)

### 基本 radiogroup

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
  def button_clicked(e):
    t.value = f"Your favorite color is:  {cg.value}"
    page.update()

  t = ft.Text()
  b = ft.ElevatedButton(text='Submit', on_click=button_clicked)
  cg = ft.RadioGroup(content=ft.Column([
    ft.Radio(value="red", label="Red"),
    ft.Radio(value="green", label="Green"),
    ft.Radio(value="blue", label="Blue")]))

  page.add(ft.Text("Select your favorite color:"), cg, b, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/radio/basic-radio.gif" className="screenshot-30"/>

### RadioGroup with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
  def radiogroup_changed(e):
    t.value = f"Your favorite color is:  {e.control.value}"
    page.update()

  t = ft.Text()
  cg = ft.RadioGroup(content=ft.Column([
    ft.Radio(value="red", label="Red"),
    ft.Radio(value="green", label="Green"),
    ft.Radio(value="blue", label="Blue")]), on_change=radiogroup_changed)

  page.add(ft.Text("Select your favorite color:"), cg, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/radio/radio-with-change-event.gif" className="screenshot-30"/>

## `RadioGroup` properties

### `value`

radiogroup 的当前值。

## `RadioGroup`事件

### `on_change`

## `Radio`属性

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个控件将获得焦点。

### `fill_color`

在所有`MaterialState`状态中填充收音机的[颜色](/docs/guides/python/colors):

- `HOVERED`
- `FOCUSED`
- `PRESSED`
- `DRAGGED`
- `SELECTED`
- `SCROLLED_UNDER`
- `DISABLED`
- `ERROR`
- `DEFAULT` - 后备状态，意思是“所有其他状态”。

为所有材料状态配置无线电填充颜色集`fill_color`值，例如:

```python
rd.fill_color=ft.colors.GREEN
```

为了配置特定材料状态的填充颜色，将其值设置为键是状态名称的字典。 例如，为`HOVERED`和`FOCUSED`状态配置不同的填充颜色，并为所有其他状态配置另一种颜色:

```python
rd.fill_color={
    ft.MaterialState.HOVERED: ft.colors.GREEN,
    ft.MaterialState.FOCUSED: ft.colors.RED,
    ft.MaterialState.DEFAULT: ft.colors.BLACK,
}
```

### `label`

可单击的标签显示在收音机右侧。

### `label_position`

属性值是`LabelPosition`枚举，`LabelPosition.RIGHT`默认值。

### `value`

选择无线电时设置为包含`RadioGroup`的值。

## `Radio`事件

### `on_blur`

当控件失去焦点时会发射。

### `on_focus`

当控件获得焦点时发射。
