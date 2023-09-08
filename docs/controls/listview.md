---
title: ListView
sidebar_label: ListView
slug: listview
---

线性排列的控件滚动列表。

ListView 是最常用的滚动控件。 它在滚动方向上显示其 children。 在横轴中，children 需要填充列表视图。

:::信息
ListView 对于大列表（成千上万个项目）非常有效。 优于[`Column`](column)或[`Row`](row)用于平滑滚动。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/listview)

### 自动滚动 ListView

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    page.title = "Auto-scrolling ListView"

    lv = ft.ListView(expand=1, spacing=10, padding=20, auto_scroll=True)

    count = 1

    for i in range(0, 60):
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1

    page.add(lv)

    for i in range(0, 60):
        sleep(1)
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1
        page.update()

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/listview/custom-listview.gif" className="screenshot-40"/>

## properties

### `auto_scroll`

`True`如果 children 更新时，滚动栏应自动将其位置移至结尾。 对于`scroll_to()`的工作方法，必须是`False`。

### `controls`

`Control` s 的列表，要在 ListView 中显示。

### `divider_thickness`

如果大于`0`，则将分隔器用作列表视图项目之间的间距。

### `first_item_prototype`

`True`如果应将第一个项目的尺寸用作所有其他项目的“原型”，即它们的高度或宽度将与第一个项目相同。 默认值为`False`。

### `horizontal`

`True`从水平布局列表视图项目。

### `item_extent`

一个项目的固定高度或宽度（用于`horizontal` listView），以优化渲染。

### `on_scroll_interval`

`on_scroll`事件以毫秒为单位。 默认值为`10`。

### `padding`

插入 children 的空间量。

有关更多信息和可能的值，请参见[`Container.padding`](container#padding)属性。

### `spacing`

ListView 项目之间的分隔线高度。 如果未指定，则在项目之间没有间距。

## 方法

### `scroll_to（offset，delta，key，key，distration，duration，curve）``

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

有关方法详细信息和示例，请参见[`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve)。

## 事件

### `on_scroll`

用户更改滚动位置时会发射。

有关事件详细信息和示例，请参见[`Column.on_scroll`](column#on_scroll)。
