---
title: Animations
sidebar_label: Animations
---

##隐式动画

使用隐式动画，您可以通过设置目标值来为控制属性进行动画动画。 每当目标值变化时，控件都会使属性从旧值到新值动画。 动画在给定的 *持续时间 *上产生旧值和新值之间的插值。 默认情况下，动画是 *线性 *增加动画值，但是，可以将 *曲线 *应用于动画，该动画根据提供的曲线更改值。 例如，`easeOutCubic`曲线在动画开始时迅速增加动画值，然后放慢脚步直到达到目标值:

<video controls>
  <source src="https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_cubic.mp4"/>
</video>

每个`Control`提供了许多``animate\_ {somets}'属性，以下所述，以启用其外观的隐式动画:

- `animate_opacity`
- `animate_rotation`
- `animate_scale`
- `animate_offset`
- `animate_position`
- `animate`（容器）

`animate_*`属性可以具有以下值之一:

- `animation.Animation` class 的实例 - 允许配置持续时间（以毫秒为单位）和动画的曲线，例如'animate_rotation = ft.animation.animation.animation.animation.animation.animation = arimation = arimation = amimation = amimation = artion = 300，曲线=“弹跳”）`。 有关可能的值，请参见flutter Doc中的[曲线](https://api.flutter.dev/flutter/animation/Curves-class.html)。 默认值为`linear`。
- `int`值 - 在毫秒和`linear`曲线的指定持续时间的动画中启用动画。
- `bool` value-启用 1000 毫秒和`linear`曲线的吞咽。

### 不透明动画

将控件的`animate_opacity`设置为`True`，数字或`animation.Animation` class（请参见上文）的实例启用[`Control.opacity`](/docs/controls#opacity)属性的隐式动画。

<img src="/img/docs/getting-started/animations/animate-opacity.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=150,
        height=150,
        bgcolor="blue",
        border_radius=10,
        animate_opacity=300,
    )

    def animate_opacity(e):
        c.opacity = 0 if c.opacity == 1 else 1
        c.update()

    page.add(
        c,
        ft.ElevatedButton(
            "Animate opacity",
            on_click=animate_opacity,
        ),
    )

ft.app(target=main)
```

### 旋转动画

将控件的`animate_rotation`设置为`True`，数字或`animation.Animation` class（请参见上文）的实例启用[`Control.rotate`](/docs/controls#rotate)属性的隐式动画。

<img src="/img/docs/getting-started/animations/animate-rotation.gif" className="screenshot-20" />

```python
from math import pi
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=100,
        height=70,
        bgcolor="blue",
        border_radius=5,
        rotate=ft.transform.Rotate(0, alignment=ft.alignment.center),
        animate_rotation=ft.animation.Animation(300, ft.AnimationCurve.BOUNCE_OUT),
    )

    def animate(e):
        c.rotate.angle += pi / 2
        page.update()

    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.spacing = 30
    page.add(
        c,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```

### 缩放动画

将控件的`animate_scale`设置为`True`，number 或`animation.Animation` class（请参见上文）的实例启用[`Control.scale`](/docs/controls#scale)属性的隐式动画。

<img src="/img/docs/getting-started/animations/animate-scale.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=100,
        height=100,
        bgcolor="blue",
        border_radius=5,
        scale=ft.transform.Scale(scale=1),
        animate_scale=ft.animation.Animation(600, ft.AnimationCurve.BOUNCE_OUT),
    )

    def animate(e):
        c.scale = 2
        page.update()

    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.spacing = 30
    page.add(
        c,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```

### 偏移动画

将控件的`animate_offset`设置为`True`，数字或`animation.Animation`类的实例（请参见上文）启用`Control.offset`属性的隐式动画。

`offset`属性是`transform.Offset`类的实例，该实例指定水平`x`和垂直`y`的垂直`y`偏移控制缩放到控制大小。 例如，一个偏移`transfore.frons.offset（-0.25，0）`将导致对控件宽度的四分之一的水平翻译。

偏移动画用于各种滑动效果:

<img src="/img/docs/getting-started/animations/animate-offset.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=150,
        height=150,
        bgcolor="blue",
        border_radius=10,
        offset=ft.transform.Offset(-2, 0),
        animate_offset=ft.animation.Animation(1000),
    )

    def animate(e):
        c.offset = ft.transform.Offset(0, 0)
        c.update()

    page.add(
        c,
        ft.ElevatedButton("Reveal!", on_click=animate),
    )

ft.app(target=main)
```

### 位置动画

将控件的`animate_position`设置为`True`，数字或`animation.Animation` class（请参见上文）的实例（请参见上文）启用[Control's `left`，`left`，`top`，`top`，`top`，`right`和`right`和`bottom` properties and `bottom` properties] 。

请注意，控制位置仅在`Stack`控制内部。

<img src="/img/docs/getting-started/animations/animate-position.gif" className="screenshot-30" />

```python
import flet as ft

def main(page: ft.Page):

    c1 = ft.Container(width=50, height=50, bgcolor="red", animate_position=1000)

    c2 = ft.Container(
        width=50, height=50, bgcolor="green", top=60, left=0, animate_position=500
    )

    c3 = ft.Container(
        width=50, height=50, bgcolor="blue", top=120, left=0, animate_position=1000
    )

    def animate_container(e):
        c1.top = 20
        c1.left = 200
        c2.top = 100
        c2.left = 40
        c3.top = 180
        c3.left = 100
        page.update()

    page.add(
        ft.Stack([c1, c2, c3], height=250),
        ft.ElevatedButton("Animate!", on_click=animate_container),
    )

ft.app(target=main)
```

### 动画容器

设置[`Container.animate`](/docs/controls/container#animate)到`True`，数字或`animation.Animation` class（请参见上文）的实例（请参见上文）启用容器属性的隐式动画，例如大小，背景颜色，边框样式，渐变，渐变。

<img src="/img/docs/getting-started/animations/animate-container.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=150,
        height=150,
        bgcolor="red",
        animate=ft.animation.Animation(1000, ft.AnimationCurve.BOUNCE_OUT),
    )

    def animate_container(e):
        c.width = 100 if c.width == 150 else 150
        c.height = 50 if c.height == 150 else 150
        c.bgcolor = "blue" if c.bgcolor == "red" else "red"
        c.update()

    page.add(c, ft.ElevatedButton("Animate container", on_click=animate_container))

ft.app(target=main)
```

### 动画内容切换器

[{`AnimatedSwitcher`](/docs/controls/animatedswitcher)允许在新的控件与先前在动画旋转器上设置的控件之间的动画过渡为`content`。

<img src="/img/docs/getting-started/animations/animated-switcher-images.gif" className="screenshot-20" />

```python
import time

import flet as ft

def main(page: ft.Page):

    i = ft.Image(src="https://picsum.photos/150/150", width=150, height=150)

    def animate(e):
        sw.content = ft.Image(
            src=f"https://picsum.photos/150/150?{time.time()}", width=150, height=150
        )
        page.update()

    sw = ft.AnimatedSwitcher(
        i,
        transition=ft.AnimatedSwitcherTransition.SCALE,
        duration=500,
        reverse_duration=500,
        switch_in_curve=ft.AnimationCurve.BOUNCE_OUT,
        switch_out_curve=ft.AnimationCurve.BOUNCE_IN,
    )

    page.add(
        sw,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```

### 动画结束回调

所有具有`animate_*`属性的控件具有`on_animation_end`事件处理程序，称为
当动画完成并使用驾驶室来链接多个动画时。

事件的对象`data`字段包含动画的名称:

- `opacity`
- `rotation`
- `scale`
- `offset`
- `position`
- `container`

例如:

```python
 c = ft.Container(
        ft.Text("Animate me!"),
        # ...
        animate=ft.animation.Animation(1000, "bounceOut"),
        on_animation_end=lambda e: print("Container animation end:", e.data)
    )
```
