---
title: Switch
sidebar_label: Switch
slug: switch
---

a 切换代表一个物理开关，允许某人在两个相互排斥的选项之间进行选择。

例如，“开/关”，“显示/隐藏”。 选择选项应立即产生结果。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/switch)

### 基本交换机

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    def button_clicked(e):
        t.value = (
            f"Switch values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}."
        )
        page.update()

    t = ft.Text()
    c1 = ft.Switch(label="Unchecked switch", value=False)
    c2 = ft.Switch(label="Checked switch", value=True)
    c3 = ft.Switch(label="Disabled switch", disabled=True)
    c4 = ft.Switch(
        label="Switch with rendered label_position='left'", label_position=ft.LabelPosition.LEFT
    )
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, b, t)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/basic-switch.gif" className="screenshot-30"/>

### Switch with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def theme_changed(e):
        page.theme_mode = (
            ft.ThemeMode.DARK
            if page.theme_mode == ft.ThemeMode.LIGHT
            else ft.ThemeMode.LIGHT
        )
        c.label = (
            "Light theme" if page.theme_mode == ft.ThemeMode.LIGHT else "Dark theme"
        )
        page.update()

    page.theme_mode = ft.ThemeMode.LIGHT
    c = ft.Switch(label="Light theme", on_change=theme_changed)
    page.add(c)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/switch-with-change-event.gif" className="screenshot-30"/>

## properties

### `active_color`

此开关打开时使用的[颜色](/docs/guides/python/colors)。

### `active_track_color`

当此开关打开时，[颜色](/docs/guides/python/colors)将在轨道上使用。

如果`track_color`返回`selected`状态中的非无颜色，则将使用该颜色代替这种颜色。

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `inactive_thumb_color`

当此开关关闭时，[颜色](/docs/guides/python/colors)将在拇指上使用。

如果`thumb_color`在默认状态下返回非无彩色，则将其代替这种颜色。

### `inactive_track_color`

当此开关关闭时，[颜色](/docs/guides/python/colors)将在轨道上使用。

如果`track_color`在默认状态下返回非无效的颜色，则将使用该颜色代替这种颜色。

### `label`

可点击标签显示在交换机右侧。

### `label_position`

属性值是`LabelPosition`枚举，`LabelPosition.RIGHT`默认值。

### `thumb_color`

此开关拇指的[颜色](/docs/guides/python/colors)。

在以下`MaterialState`状态下解决:

- `SELECTED`
- `HOVERED`
- `FOCUSED`
- `DISABLED`
- `DEFAULT` - 后备状态，意思是“所有其他状态”。

为所有材料状态配置拇指颜色，例如:

```python
sw.thumb_color=ft.colors.GREEN
```

为特定材料状态配置拇指颜色，将其值设置为键是状态名称的字典。 例如，为`HOVERED`和`FOCUSED`状态配置不同的填充颜色，以及所有其他状态的另一种颜色:

```python
sw.thumb_color={
    ft.MaterialState.HOVERED: ft.colors.GREEN,
    ft.MaterialState.FOCUSED: ft.colors.RED,
    ft.MaterialState.DEFAULT: ft.colors.BLACK,
}
```

### `track_color`

此开关轨道的[颜色](/docs/guides/python/colors)。

在以下`MaterialState`状态下解决:

- `SELECTED`
- `HOVERED`
- `FOCUSED`
- `DISABLED`
- {`DEFAULT` - 后备状态，意思是“所有其他状态”。

### `value`

开关的当前值。

## 事件

### `on_blur`

当控件失去焦点时发射。

### `on_change`

当更改开关状态时会发射。

### `on_focus`

当控件获得焦点时发射。
