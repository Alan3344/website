---
title: ShaderMask
sidebar_label: ShaderMask
slug: shadermask
---

一个将阴暗器生成的掩码应用于其 child 的控件。

例如，`ShaderMask`可以使用[`LinearGradient`](/docs/controls/container#lineargradient)掩码 child 的边缘逐渐消失。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/utility/shadermask)

### 在图像边缘添加粉红色的光芒

<img src="/img/docs/controls/shader-mask/shader-mask-pink-glow.png" className="screenshot-20" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Row(
            [
                ft.ShaderMask(
                    ft.Image(
                        src="https://picsum.photos/200/200?1",
                        width=200,
                        height=200,
                        fit=ft.ImageFit.FILL,
                    ),
                    blend_mode=ft.BlendMode.MULTIPLY,
                    shader=ft.RadialGradient(
                        center=ft.alignment.center,
                        radius=2.0,
                        colors=[ft.colors.WHITE, ft.colors.PINK],
                        tile_mode=ft.GradientTileMode.CLAMP,
                    ),
                )
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 逐渐淡出图像到底部边缘

<img src="/img/docs/controls/shader-mask/shader-mask-gradient.png" className="screenshot-20" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Row(
            [
                ft.ShaderMask(
                    ft.Image(src="https://picsum.photos/100/200?2"),
                    blend_mode=ft.BlendMode.DST_IN,
                    shader=ft.LinearGradient(
                        begin=ft.alignment.top_center,
                        end=ft.alignment.bottom_center,
                        colors=[ft.colors.BLACK, ft.colors.TRANSPARENT],
                        stops=[0.5, 1.0],
                    ),
                    border_radius=10,
                ),
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `blend_mode`

将着色器应用于`content`时使用的混合模式。

属性值为`BlendMode`枚举，`MODULATE`默认值为`MODULATE`。

支持的值:

- `CLEAR`
- `COLOR`
- `COLOR_BURN`
- `COLOR_DODGE`
- `DARKEN`
- `DIFFERENCE`
- `DST`
- `DST_A_TOP`
- `DST_IN`
- `DST_OUT`
- `DST_OVER`
- `EXCLUSION`
- `HARD_LIGHT`
- `HUE`
- `LIGHTEN`
- `LUMINOSITY`
- `MODULATE`（默认）
- `MULTIPLY`
- `OVERLAY`
- `PLUS`
- `SATURATION`
- `SCREEN`
- `SOFT_LIGHT`
- `SRC`
- `SRC_A_TOP`
- `SRC_IN`
- `SRC_OUT`
- `SRC_OVER`
- `VALUES`
- `XOR`

请参阅[BlendMode](https://api.flutter.dev/flutter/dart-ui/BlendMode.html)从 flutter 文档中进行混合模式示例。

### `border_radius`

有关边界半径的更多信息，请参见[`Container.border_radius`](container#border_radius)属性文档。

### `content`

a child `Control`将着色器应用于。

### `shader`

使用梯度作为着色器。 有关梯度的更多信息，请参见[`Container.gradient`](container#gradient)属性文档。
