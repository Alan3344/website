---
title: CircleAvatar
sidebar_label: CircleAvatar
slug: circleavatar
---

代表用户的圆圈。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

通常与用户的个人资料图像一起使用，或者在没有这样的图像的情况下使用用户的缩写。 给定用户的缩写应始终与相同的背景颜色配对，以保持一致性。

如果`foreground_image_url`失败，则使用`background_image_url`。 如果`background_image_url`也失败，则使用`bgcolor`。

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/displays/circleavatar)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    # a "normal" avatar with background image
    a1 = ft.CircleAvatar(
        foreground_image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4",
        content=ft.Text("FF"),
    )
    # avatar with failing foreground image and fallback text
    a2 = ft.CircleAvatar(
        foreground_image_url="https://avatars.githubusercontent.com/u/_5041459?s=88&v=4",
        content=ft.Text("FF"),
    )
    # avatar with icon, aka icon with inverse background
    a3 = ft.CircleAvatar(
        content=ft.Icon(ft.icons.ABC),
    )
    # avatar with icon and custom colors
    a4 = ft.CircleAvatar(
        content=ft.Icon(ft.icons.WARNING_ROUNDED),
        color=ft.colors.YELLOW_200,
        bgcolor=ft.colors.AMBER_700,
    )
    # avatar with online status
    a5 = ft.Stack(
        [
            ft.CircleAvatar(
                foreground_image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4"
            ),
            ft.Container(
                content=ft.CircleAvatar(bgcolor=ft.colors.GREEN, radius=5),
                alignment=ft.alignment.bottom_left,
            ),
        ],
        width=40,
        height=40,
    )
    page.add(a1, a2, a3, a4, a5)


ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/circle-avatar/circle-avatar.png" className="screenshot-10" />

## properties

### `background_image_url`

圆的背景图像。 更改背景图像将导致化身对新图像进行动画。 通常用作`foreground_image_url`的后备图像。 如果 CircleAvatar 要具有用户的姓名缩写，请使用`content`。

### `bgcolor`

填充圆的[颜色](/docs/guides/python/colors)。 更改背景颜色会导致化身对新颜色进行动画。

### `color`

circle 中的文本的默认文本[color](/docs/guides/python/colors)。 如果未指定`bgcolor`，则默认为主要文本主题颜色。

### `content`

通常是`Text`控件。 如果要具有图像，请改用`background_image_url`。

### `foreground_image_url`

圆的前景图像。 通常用作配置文件图像。 为后备使用`background_image_url`。

### `max_radius`

头像的最大尺寸为半径（直径一半）。 如果指定了 Maxradius，则不得指定半径。 默认为“无限”。

### `min_radius`

头像的最小尺寸表示为半径（直径一半）。 如果指定了 Minradius，则不得指定半径。 默认为零。

### `radius`

头像的大小表示为半径（直径一半）。 如果指定了半径，则不能指定 Minradius 和 Maxradius。

### `tooltip`

将鼠标悬停在按钮上时显示的文本。
