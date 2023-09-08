---
title: NavigationBar
sidebar_label: NavigationBar
slug: navigationbar
---

材料 3 导航栏组件。

导航栏提供了一种持久和方便的方式，可以在应用程序中的主要目的地之间切换。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/navigation/navigationbar)

### 一个简单的导航栏

<img src="/img/docs/controls/navigation-bar/navigation-bar-sample.gif" className="screenshot-40"/>

```python
import flet as ft

def main(page: ft.Page):

    page.title = "NavigationBar Example"
    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationDestination(icon=ft.icons.EXPLORE, label="Explore"),
            ft.NavigationDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationDestination(
                icon=ft.icons.BOOKMARK_BORDER,
                selected_icon=ft.icons.BOOKMARK,
                label="Explore",
            ),
        ]
    )
    page.add(ft.Text("Body!"))

ft.app(target=main)
```

## `NavigationBar` properties

### `bgcolor`

导航栏本身的[颜色](/docs/guides/python/colors)。

### `destinations`

定义导航栏中数组的按钮项的外观。

该值必须是两个或多个`NavigationDestination`实例的列表。

### `elevation`

导航栏本身的高程。

### `label_behavior`

定义如何布置目的地的标签以及何时显示。

可用于显示所有标签，仅显示选定的标签或隐藏所有标签。

属性值为`NavigationBarLabelBehavior`枚举，具有以下值:

- `ALWAYS_SHOW`（默认值） - 始终显示每个导航栏目标下的所有标签，选择和未选择。
- `ALWAYS_HIDE` - 切勿在导航栏目的地下显示任何标签，而不论所选与未选择的选择。
- `ONLY_SHOW_SELECTED` - 仅显示所选导航栏目的地的标签。 当未选择目的地时，标签将褪色，图标将被居中。 当选择目的地时，标签将逐渐消失，标签和图标将滑动以使它们都居中。

### `selected_index`

如果未选择目的地，则为当前选择`NavigationDestination`或`None`的索引中的索引。

## `NavigationBar`事件

##

当选择目标更改时发射。

## `NavigationDestination`属性

### `icon`

目的地图标的名称。

### `icon_content`

目的地的图标`Control`。 通常，图标是[`Icon`](icon)控制。 使用而不是`icon`属性。

如果提供了`selected_icon_content`，则仅在未选择目标时才显示。

要使 NavigationBar 更容易访问，请考虑选择具有触发和填充版本的图标，例如`icons.CLOUD`和`icons.CLOUD_QUEUE`。 该图标应设置为“触发”版本，`selected_icon` `selected_icon`将其设置为填充版本。

### `label`

`NavigationDestination`的图标下方出现的文本标签。

### `selected_icon`

选择此目标时显示的替代图标的名称。

### `selected_icon_content`

选择此目的地时显示了替代图标`Control`。

如果未提供此图标，则 NavigationBar 将在任何一个状态下显示`icon_content`。
