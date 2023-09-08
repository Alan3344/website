---
title: GridView
sidebar_label: GridView
slug: gridview
---

可滚动的 2D 控件阵列。

:::信息
GridView 对于大型列表（成千上万的项目）非常有效。 优于包装[`Column`](column)或[`Row`](row)以进行平滑滚动。 有关 GridView 用法示例，请参见[Flet 图标浏览器](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py)。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/gridview)

### 照片库

<img src="/img/docs/controls/gridview/photo-gallery.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "GridView Example"
    page.theme_mode = ft.ThemeMode.DARK
    page.padding = 50
    page.update()

    images = ft.GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing=5,
    )

    page.add(images)

    for i in range(0, 60):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/150/150?{i}",
                fit=ft.ImageFit.NONE,
                repeat=ft.ImageRepeat.NO_REPEAT,
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

  </TabItem>
</Tabs>

## properties

### `auto_scroll`

`True`如果 children 更新时，Scrollbar 应自动将其位置移至结尾。 对于`scroll_to()`的工作方法，必须是`False`。

### `child_aspect_ratio`

跨轴的比率与每个 child 的主要轴范围。

### `controls`

`Control` s 的列表，要在 GridView 中显示。

### `horizontal`

`True`以水平布局 gridview 项目。

### `max_extent`

网格项目的最大宽度或高度。

### `on_scroll_interval`

`on_scroll`事件以毫秒为单位。 默认值为`10`。

### `padding`

插入 children 的空间数量。

有关更多信息和可能的值，请参见[`Container.padding`](container#padding)属性。

### `run_spacing`

每个 child 沿横轴之间的逻辑像素数。

### `runs_count`

横轴中的 children 的数量。

### `spacing`

每个 child 沿主轴之间的逻辑像素数。

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

有关方法详细信息和示例，请参见[`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve)。

## 事件

### `on_scroll`

用户更改滚动位置时会发射。

有关事件详细信息和示例，请参见[`Column.on_scroll`](column#on_scroll)。
