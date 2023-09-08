---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

复选框允许从组中选择一个或多个项目，或者在两个互斥选项（已检查或未选中，打开或关闭）之间进行切换。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/checkbox)

### 基本复选框

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    def button_clicked(e):
        t.value = (
            f"Checkboxes values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}, {c5.value}."
        )
        page.update()

    t = ft.Text()
    c1 = ft.Checkbox(label="Unchecked by default checkbox", value=False)
    c2 = ft.Checkbox(label="Undefined by default tristate checkbox", tristate=True)
    c3 = ft.Checkbox(label="Checked by default checkbox", value=True)
    c4 = ft.Checkbox(label="Disabled checkbox", disabled=True)
    c5 = ft.Checkbox(
        label="Checkbox with rendered label_position='left'", label_position=ft.LabelPosition.LEFT
    )
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, c5, b, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/basic-checkbox.gif" className="screenshot-40" />

### Checkbox with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
  def checkbox_changed(e):
    t.value = f"Checkbox value changed to {c.value}"
    t.update()

  c = ft.Checkbox(label="Checkbox with 'change' event", on_change=checkbox_changed)
  t = ft.Text()

  page.add(c, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/checkbox-with-change-event.gif" className="screenshot-40" />

## properties

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `check_color`

检查此复选框时，用于检查图标的[颜色](/docs/guides/python/colors)。

### `fill_color`

在所有材料状态中填充复选框的[颜色](/docs/guides/python/colors):

- `HOVERED`
- `FOCUSED`
- `PRESSED`
- `DRAGGED`
- `SELECTED`
- `SCROLLEDUNDER`
- `DISABLED`
- `ERROR`
- `DEFAULT` - 后备状态，意思是“所有其他状态”。

为了配置所有材料状态的复选框填充颜色集`fill_color`值，例如:

```python
chk.fill_color=ft.colors.GREEN
```

为了配置特定材料状态的填充颜色，将其值设置为键是状态名称的字典。 例如，为`HOVERED`和`FOCUSED`状态配置不同的填充颜色，并为所有其他状态配置另一种颜色:

```python
chk.fill_color={
    ft.MaterialState.HOVERED: ft.colors.GREEN,
    ft.MaterialState.FOCUSED: ft.colors.RED,
    ft.MaterialState.DEFAULT: ft.colors.BLACK,
}
```

### `label`

可点击的标签显示在复选框右侧。

### `label_position`

属性值是`LabelPosition`枚举，`LabelPosition.RIGHT`默认值。

### `tristate`

如果`True`复选框的值可以为`True`，`False`或`None`（`null`）。

复选框显示仪表板时其值为 null。

### `value`

复选框的当前值。

## 事件

### `on_blur`

当控件失去焦点时发射。

### `on_change`

复选框的状态更改时发射。

### `on_focus`

当控件获得焦点时发射。
