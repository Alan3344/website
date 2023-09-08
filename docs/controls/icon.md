---
title: Icon
sidebar_label: Icon
slug: icon
---

显示一个材料图标。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[图标浏览器](https://gallery.flet.dev/icons-browser/)

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/displays/icon)

### 不同颜色和大小的图标

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Row(
            [
                ft.Icon(name=ft.icons.FAVORITE, color=ft.colors.PINK),
                ft.Icon(name=ft.icons.AUDIOTRACK, color=ft.colors.GREEN_400, size=30),
                ft.Icon(name=ft.icons.BEACH_ACCESS, color=ft.colors.BLUE, size=50),
                ft.Icon(name="settings", color="#c1c1c1"),
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon/custom-icons.png" className="screenshot-20" />

## properties

### `color`

图标[颜色](/docs/guides/python/colors)。

### `name`

图标的名称。 您可以使用开源[ICONS 浏览器](https://gallery.flet.dev/icons-browser/) app [写在 Flet](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py)。

### `size`

图标大小。 默认值为 24。

### `tooltip`

悬停在图标上时显示鼠标时显示的文本。
