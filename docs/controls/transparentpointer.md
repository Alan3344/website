---
title: TransparentPointer
sidebar_label: TransparentPointer
slug: transparentpointer
---

透明pointer是[如何通过堆栈中两个小部件之间的所有手势传递所有手势的解决方案](https://stackoverflow.com/questions/65269190/pass-trough-all-gestures-between-two-widgets-in-stack)问题。

例如，如果带有`Container`内部的`ElevatedButton` `Container`}，则在其背后的手势检测器上敲击按钮不会“可见”。 使用`TransparentPointer`敲击事件不会在按钮上停止，而是向父母上升，类似于在html/js中冒泡的事件。

## 示例

```python
import flet as ft

def main(page):
    page.add(
        ft.Stack(
            [
                ft.GestureDetector(
                    on_tap=lambda _: print("TAP!"),
                    multi_tap_touches=3,
                    on_multi_tap=lambda e: print(
                        "MULTI TAP:", e.correct_touches
                    ),
                    on_multi_long_press=lambda _: print("Multi tap long press"),
                ),
                ft.TransparentPointer(ft.Container(
                    ft.ElevatedButton("Test button"),
                    padding=50
                )),
            ],
            expand=True,
        )
    )

ft.app(target=main)
``` 

##  properties 

###  `content`

`Control`应在透明pointer内部显示的`Control`。