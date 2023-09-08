---
title: AnimatedSwitcher
sidebar_label: AnimatedSwitcher
slug: animatedswitcher
---

一个控件，默认情况下，在新的控件和先前在 AnimatedSwitcher 上设置为`content`的控制。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/animations/animated_switcher)

### 动画切换两个具有比例效果的容器

<img src="/img/docs/controls/animated-switcher/animated-switcher.gif" className="screenshot-20" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    c1 = ft.Container(
        ft.Text("Hello!", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.GREEN,
    )
    c2 = ft.Container(
        ft.Text("Bye!", size=50),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.YELLOW,
    )
    c = ft.AnimatedSwitcher(
        c1,
        transition=ft.AnimatedSwitcherTransition.SCALE,
        duration=500,
        reverse_duration=100,
        switch_in_curve=ft.AnimationCurve.BOUNCE_OUT,
        switch_out_curve=ft.AnimationCurve.BOUNCE_IN,
    )

    def animate(e):
        c.content = c2 if c.content == c1 else c1
        c.update()

    page.add(
        c,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `duration`

从旧`content`的过渡到新的，以毫秒为单位。 默认值为`1000`毫秒。

### `reverse_duration`

从新的`content`过渡到旧值的过渡，以毫秒为单位。 默认值为`1000`毫秒。

### `switch_in_curve`

在新的`content`中过渡时要使用的动画曲线。 有关可能的值，请参见[曲线](https://api.flutter.dev/flutter/animation/Curves-class.html)。 属性值为`AnimationCurve`枚举，`AnimationCurve.LINEAR`作为默认值。

### `switch_out_curve`

在过渡以前的`content` Out 时要使用的动画曲线。 有关可能的值，请参见[曲线](https://api.flutter.dev/flutter/animation/Curves-class.html)。 属性值为`AnimationCurve`枚举，`AnimationCurve.LINEAR`默认值。

### `transition`

新`content`之间过渡的动画类型。 属性值为`AnimatedSwitcherTransition`枚举，`AnimatedSwitcherTransition.FADE`默认值为`AnimatedSwitcherTransition.FADE`。
