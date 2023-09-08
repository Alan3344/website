---
title: Banner
sidebar_label: Banner
slug: banner
---

横幅显示一个重要的，简洁的消息，并为用户提供了诉讼（或删除横幅）。 需要驳回用户行动。

横幅显示在屏幕顶部的顶部应用程序栏下方。 它们是持久的和非模式的，使用户可以随时忽略它们或与它们进行交互。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/dialogs/banner)

### 带有 leading 图标和动作的横幅

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    def close_banner(e):
        page.banner.open = False
        page.update()

    page.banner = ft.Banner(
        bgcolor=ft.colors.AMBER_100,
        leading=ft.Icon(ft.icons.WARNING_AMBER_ROUNDED, color=ft.colors.AMBER, size=40),
        content=ft.Text(
            "Oops, there were some errors while trying to delete the file. What would you like me to do?"
        ),
        actions=[
            ft.TextButton("Retry", on_click=close_banner),
            ft.TextButton("Ignore", on_click=close_banner),
            ft.TextButton("Cancel", on_click=close_banner),
        ],
    )

    def show_banner_click(e):
        page.banner.open = True
        page.update()

    page.add(ft.ElevatedButton("Show Banner", on_click=show_banner_click))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/banner/banner-with-custom-content.gif" className="screenshot-40"/>

## properties

### `actions`

在横幅的底部或后侧显示的一组动作。

通常，这是[`TextButton`](textbutton)控件的列表。

### `bgcolor`

该横幅的表面的[颜色](/docs/guides/python/colors)。

### `content`

横幅的内容。 通常是[`Text`](text)控制。

### `content_padding`

插入内容的空间数量。

如果操作低于内容，则默认为`padding.ly（左= 16.0，top = 24.0，右= 16.0，底部= 4.0）`。

如果操作落后于内容，则默认为`padding.ly（左= 16.0，top = 2.0）``。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `force_actions_below`

不管有多少，替代行动都迫使行动低于内容。

如果这是`True`，则操作将放在内容下方。 如果这是`False`，则如果操作的长度大于 1，则操作将放在内容的后面。

默认为`False`。

### `leading`

横幅的（可选）leading `Control`。

通常是[`Icon`](icon)控制。

### `leading_padding`

插入 leading 控件的空间量。 这默认为 16 个虚拟像素。 有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `open`

设置为`True`以显示横幅。
