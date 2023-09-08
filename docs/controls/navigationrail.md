---
title: NavigationRail
sidebar_label: NavigationRail
slug: navigationrail
---

a material 小部件，该小部件应在应用程序的左侧或右侧显示，以在少数视图之间导航，通常在三到五个之间。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/navigation/navigationrail)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    rail = ft.NavigationRail(
        selected_index=0,
        label_type=ft.NavigationRailLabelType.ALL,
        # extended=True,
        min_width=100,
        min_extended_width=400,
        leading=ft.FloatingActionButton(icon=ft.icons.CREATE, text="Add"),
        group_alignment=-0.9,
        destinations=[
            ft.NavigationRailDestination(
                icon=ft.icons.FAVORITE_BORDER, selected_icon=ft.icons.FAVORITE, label="First"
            ),
            ft.NavigationRailDestination(
                icon_content=ft.Icon(ft.icons.BOOKMARK_BORDER),
                selected_icon_content=ft.Icon(ft.icons.BOOKMARK),
                label="Second",
            ),
            ft.NavigationRailDestination(
                icon=ft.icons.SETTINGS_OUTLINED,
                selected_icon_content=ft.Icon(ft.icons.SETTINGS),
                label_content=ft.Text("Settings"),
            ),
        ],
        on_change=lambda e: print("Selected destination:", e.control.selected_index),
    )

    page.add(
        ft.Row(
            [
                rail,
                ft.VerticalDivider(width=1),
                ft.Column([ ft.Text("Body!")], alignment=ft.MainAxisAlignment.START, expand=True),
            ],
            expand=True,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/navigation-rail/custom-navrail.png" className="screenshot-50" />

## `NavigationRail` properties

### `bgcolor`

设置容器的[颜色](/docs/guides/python/colors)，该容器容纳所有导航式内容。

### `destinations`

定义导航导轨中数组的按钮项的外观。

该值必须是两个或多个`NavigationRailDestination`实例的列表。

### `extended`

表示导航栏应处于扩展状态。

扩展状态具有更宽的导轨容器，标签位于图标旁边。 `min_extended_width`可用于在该状态下设置导轨的最小宽度。

该导轨将隐含在扩展状态和正常状态之间进行动画。

如果导轨将处于扩展状态，则必须将`label_type`设置为`none`。

默认值为`False`。

### `group_alignment`

铁轨中目的地的垂直对齐。

leading 小部件和导轨底部之间的导航式登机与落后小部件组合在一起。

该值必须在`-1.0`和`1.0`之间。

如果`group_alignment`为`-1.0`，则将项目对齐到顶部。 如果`group_alignment`为`0.0`，则将项目对齐到中心。 如果`group_alignment`为`1.0`，则将项目对齐到底部。

默认值为`-1.0`。

### `label_type`

定义标签的布局和行为，用于默认，未扩展的导航栏。

当延长导航导轨时，始终显示标签。

属性值是`NavigationRailLabelType`枚举，具有以下值: `NONE`（默认），`ALL`，`SELECTED`。

### `leading`

放置在目的地上方的导轨中的可选 leading 控制。

它的位置不受`group_alignment`的影响。

这通常是[`FloatingActionButton`](floatingactionbutton)，但也可能是非按钮，例如徽标。

### `min_extended_width`

当动画完成时，将`extended`设置为`True`时的最终宽度。

默认值为`256`。

### `min_width`

无论目的地的图标或标签尺寸如何，导轨的最小宽度。

默认值为`72`。

该值还定义了目的地的最小宽度和最小高度。

要制作紧凑的导轨，请将其设置为`56`并使用`label_type ='none''。

### `selected_index`

如果未选择目的地，则为当前选择`NavigationRailDestination`或`None`的索引 in `destinations`。

### `trailing`

放置在目的地下方的导轨中的可选尾随控件。

它的位置受`group_alignment`的影响。

这通常是通常仅在`extended`为`True`的其他选项或目的地的列表。

##

## `NavigationRail`事件

###

当选择目标更改时发射。

## `NavigationRailDestination`属性

### `icon`

目的地图标的名称。

### `icon_content`

目的地的图标`Control`。 通常，图标是[`Icon`](icon)控制。 使用而不是`icon`属性。

如果提供了`selected_icon_content`，则只有在未选择目标时才显示这一点。

为了使导航拖船更容易访问，请考虑选择具有触发和填充版本的图标，例如`icons.CLOUD`和`icons.CLOUD_QUEUE`。 该图标应设置为“触发”版本，并将`selected_icon`设置为填充版本。

### `label`

###

### `label_content`

目的地的标签`Control`。

与 NavigationRail 一起使用时，必须提供标签。 当`label_type ='none''时，标签仍用于语义，如果`extended`为`True`。

### `padding`

插入目标项目的空间数量。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `selected_icon`

选择此目标时显示的替代图标的名称。

### `selected_icon_content`

当选择此目标时，显示了一个替代图标`Control`。

如果未提供此图标，则 NavigationRail 将在任一状态下显示`icon_content`。
