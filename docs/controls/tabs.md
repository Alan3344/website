---
title: Tabs
sidebar_label: Tabs
slug: tabs
---

TABS 控件用于导航经常访问的不同内容类别。 标签允许在两个或多个内容视图之间进行导航，并依赖文本标头来阐明内容的不同部分。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/layout/tabs)

### tabs

<img src="/website/img/docs/controls/tabs/tabs-simple.gif" className="screenshot-60"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    t = ft.Tabs(
        selected_index=1,
        animation_duration=300,
        tabs=[
            ft.Tab(
                text="Tab 1",
                content=ft.Container(
                    content=ft.Text("This is Tab 1"), alignment=ft.alignment.center
                ),
            ),
            ft.Tab(
                tab_content=ft.Icon(ft.icons.SEARCH),
                content=ft.Text("This is Tab 2"),
            ),
            ft.Tab(
                text="Tab 3",
                icon=ft.icons.SETTINGS,
                content=ft.Text("This is Tab 3"),
            ),
        ],
        expand=1,
    )

    page.add(t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

## `Tabs` properties

### `animation_duration`

在选项卡片之间的千分之一的动画持续时间。 默认值为`50`。

### `divider_color`

分隔器的[颜色](/docs/guides/python/colors)。

### `indicator_border_radius`

指示器角的半径。

### `indicator_border_side`

在选定选项卡片下方绘制的水平线的[颜色](/docs/guides/python/colors)和重量。

### `indicator_color`

所选选项卡片下方的行的[颜色](/docs/guides/python/colors)。

### `indicator_padding`

找到相对于选项卡片的边界的选定选项卡片的下划线。 `indicator_tab_size`属性可用于根据`False`的（中心）选项卡片窗口小部件来定义标签指示器的界限，或带有`True`的整个选项卡片。

###

### `indicator_tab_size`

`True`用于取指示器的整个选项卡片。

### `label_color`

选定标签标签的[颜色](/docs/guides/python/colors)。

### `overlay_color`

定义墨水响应焦点，悬停和飞溅[颜色](/docs/guides/python/colors)。 如果指定，则可以根据`MaterialState.FOCUSED`，`MaterialState.HOVERED`和`MaterialState.PRESSED`的一个解决方案。

### `selected_index`

当前选择选项卡片的索引。

### `scrollable`

是否可以水平滚动此选项卡片栏。

如果`scrollable`为`True`，则每个选项卡片的标签所需的宽度，并且整个选项卡片控件都可以滚动。 否则每个选项卡片都将获得可用空间的平等份额。

### `tabs`

`Tab`控件的列表。

### `unselected_label_color`

未选中的标签标签的[颜色](/docs/guides/python/colors)。

## `Tabs` evest

### `on_change`

`selected_index`更改时发射。

## `Tab` properties

### `content`

`Control`选择时显示在标签下方。

### `icon`

一个图标，要在标签文本的左侧显示。

### `tab_content`

A `Control`表示自定义选项卡片内容替换`text`和`icon`。

### `text`

标签的显示名称。
