---
title: Image
sidebar_label: Image
slug: image
---

图像是某物的图形表示（例如照片或插图）。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/displays/image)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Images Example"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.padding = 50
    page.update()

    img = ft.Image(
        src=f"/icons/icon-512.png",
        width=100,
        height=100,
        fit=ft.ImageFit.CONTAIN,
    )
    images = ft.Row(expand=1, wrap=False, scroll="always")

    page.add(img, images)

    for i in range(0, 30):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/200/200?{i}",
                width=200,
                height=200,
                fit=ft.ImageFit.NONE,
                repeat=ft.ImageRepeat.NO_REPEAT,
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/image/custom-images.gif" className="screenshot-50"/>

## properties

### `border_radius`

剪辑图像具有圆角。 有关更多信息和示例，请参见[`Container.border_radius`](container#border_radius)。

### `color`

如果设置，则使用`color_blend_mode`。

用于将`color`与图像相结合。

默认值为`BlendMode.COLOR`。 在混合模式方面，颜色是源，此图像是目的地。

有关可能的混合模式值，请参见[`ShaderMask.blend_mode`](shadermask#blend_mode)。

### `error_content`

后备`Control`显示如果无法从源头加载图像。

### `fit`

如何将图像刻在布局期间分配的空间中。

属性值为`ImageFit`枚举，具有支持值: `NONE`（默认值），`CONTAIN`，`COVER`，`FILL`，`FIT_HEIGHT`，`FIT_HEIGHT`，`FIT_WIDTH`，`SCALE_DOWN`，`SCALE_DOWN`。

是在图像提供商更改时，是继续显示旧图像（`True`），还是短暂显示什么（`False`）。 默认值为`False`。

### `height`

如果设置，则需要图像具有此高度。

如果未设置，则图像将选择最能保留其内在长宽比的尺寸。

:::注意
强烈建议指定宽度和高度，或将图像放置在设置紧密布局约束的上下文中，以使图像不会随着加载而更改大小。 考虑使用`fit`调整图像的渲染以适合给定的宽度和高度，如果确切的图像尺寸未提前知道。
:::

###

### `src`

图像 URL。 这可能是外部 URL，例如 `https://picsum.photos/200/200` or internal URL to reference app assets, e.g. `/my-image.png`。

您可以在`flet.app()`中指定`assets_dir`调用以设置应用程序应提供的资产的位置。 `assets_dir`可能是您`main.py`目录或绝对路径的相对。 例如，考虑以下程序结构:

```
/assets
   /images/my-image.png
main.py
```

您可以在应用程序中访问您的图像如下:

```python {5,9}
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src=f"/images/my-image.png"))

flet.app(
    target=main,
    assets_dir="assets"
)
```

### `src_base64`

例如，从 base-64 编码字符串中显示图像:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src_base64="iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAACXBIWXMAAAORAAADkQFnq8zdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA6dJREFUSImllltoHFUYx3/fzOzm0lt23ZrQ1AQbtBehNpvQohgkBYVo410RwQctNE3Sh0IfiiBoIAjqi6TYrKnFy4O3oiiRavDJFi3mXomIBmOxNZe63ay52GR3Zj4f2sTEzmx3m//TYf7/c35zvgPnO6KqrESXqpq3muocAikv6m+/zytj3ejik1VN21G31YA9CgJ6xC+bMyQZPVCuarciPAMYC99V6Vw5pLbFSibHmlVoRVj9P3cmPBM8tSJI/M6mzabpfoAQ9fIF7WK4bd5vvuFnLGgy2vi0abg94A0AcJGvMq3hDxGRyar9r4F+iLAm0yIiRk8m37tctS1WsrIhhrI30+Srmg+J87OXUf3lWGS1q89dC6ltsSanxk4Aj2QBABii96300g87P/rtlrWr8l+vyDMfdlXSyyEikqxsiOUAQJCBhfHdXRfCq1LSsSlcWG+KBAGStvvrMkgiuv8lUc2mREukPwLUfHG+uTQv8Eown7VL3XlbBxYhf1c17hbVF3MDwA9bts280TnaU1YYqPby07aeFlUlHt27wSQ4CLo+F8AvoTCvHmyKF+ZbEb/M77P2LgvAwmrTHAHflN3KZxVbMC2jMFNOpgPnrMSOhvvFkMezXdwV4ePbtvHtxnJAMQ0j4JtVnO+eLb5oiSlt5HDbv7t1O90lpYCCCKbhfzW5kAIwUAazR0BlfII8Ow0I6uoVmI9MyAMwbMs8CExmDbk4zgu931MyO4OI4KrYflkRjOoTI+uM9d1vjotwKPu9QMk/sxzuO8POiVFcdZ1M2YBVsMEAKOqLvaPIe7mACuw0z/80SMH58SMplxlfiDhVi7dw2pltRhjKBQTQdrSja2KKTfE551NHuaZ0QVPvWYQUn31/Vm2nDvgjF4grVJx6suSvrvrSJ/6cSW2Oz9mf264uNrB806xZ1k/CZ49dUKgDEtlCROX2hfHpx8pGuuo3PpqYulw8fjndOp1yhgtNKRevJ1FyR2Ola+jXAjdnwTkZ6o896GdWdxDw7IxFg+0DpmXchTKSBWQnIuJn9u4j7dt+13UfHXEkXQOcuQ4kMhVtqsgUyPiQiPQfHw1NB2sRjmXKuTg1NwwBYLhtPtQX26eqTwGXPDOqvmcC4Hnwfrrad94GrVsOYTqUTkQY+iTlNe/6O1miSP/x0VB/+wMIDwHn/vtV1iQC4Xv95uUEWVCoL9Y5Z+gdovoyMHUFJHv88jmVy0vTuw7cZNv2YaA61Bfb7ZX5F8SaUv2xwZevAAAAAElFTkSuQmCC"))

ft.app(target=main)
```

使用`base64`命令（Linux，MacOS，WSL）将文件转换为 base64 格式，例如:

```
base64 -i <image.png> -o <image-base64.txt>
```

在 Windows 上，您可以使用 PowerShell 将字符串编码为 base64 格式:

```posh
[convert]::ToBase64String((Get-Content -path "your_file_path" -Encoding byte))
```

### `repeat`

如何绘制图像未覆盖的布局边界的任何部分。

属性值为`ImageRepeat`枚举，具有支持值: `NO_REPEAT`（默认值），`REPEAT`，`REPEAT_X`，`REPEAT_Y`。

### `semantics_label`

此图像的语义标签。

### `tooltip`

悬停在图像上时显示的文本。

### `width`

如果设置，则需要图像具有此宽度。

如果未设置，则图像将选择最能保留其内在长宽比的尺寸。

:::注意
强烈建议指定宽度和高度，或将图像放置在设置紧密布局约束的上下文中，以使图像不会随着加载而更改大小。 考虑使用`fit`调整图像的渲染以适合给定的宽度和高度，如果确切的图像尺寸未提前知道。
:::
