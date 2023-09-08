---
title: SafeArea
sidebar_label: SafeArea
slug: safearea
---

通过足够填充以避免操作系统侵入的控件，将其`content`插入其`content`。

例如，这将足以避免屏幕顶部的状态栏缩进`content`。

它还将按照iPhone X上的缺口或显示屏的其他类似的创意物理功能所需的量来缩小`content`。

当指定`minimum`填充时，将应用`minimum`填充的较大或安全区域填充。

## 示例

```python
import flet as ft

class State:
    counter = 0

def main(page: ft.Page):
    state = State()

    def add_click(e):
        state.counter += 1
        counter.value = str(state.counter)
        counter.update()

    page.floating_action_button = ft.FloatingActionButton(
        icon=ft.icons.ADD, on_click=add_click
    )
    page.add(
        ft.SafeArea(
            ft.Container(
                counter := ft.Text("0", size=50),
                alignment=ft.alignment.center,
            ),
            expand=True,
        )
    )

ft.app(main)
``` 

##  properties 

###  `bottom`

是否避免系统入侵屏幕的底部。 默认值为`True`。

###  `content`

`Control`在安全区域内显示。

###  `left`

是否避免在左侧进行系统入侵。 默认值为`True`。

###  `maintain_bottom_view_padding`

指定`SafeArea`是否应维护底部`MediaQueryData.viewPadding`而不是底部`MediaQueryData.padding`，默认为`False`。

例如，如果在SafeArea上方显示了屏幕键盘，则可以将填充物保持在障碍物下方而不是消耗。 在布局包含灵活的控件的情况下，这可能会有所帮助，由于填充值的变化，打开软件键盘时可以明显移动。 将此设置为true将避免使用UI偏移。

###  `minimum`

此最低填充物要申请。



###  `right`

是否避免在右侧进行系统入侵。 默认值为`True`。

###  `top`

是否避免在屏幕顶部的系统入侵，通常是系统状态栏。 默认值为`True`。