---
title: ShakeDetector
sidebar_label: ShakeDetector
slug: shakedetector
---

检测手机摇动。

它是非视觉的，应添加到`page.overlay`列表中。

## 示例

### 摇动检测器样本

```python
import flet as ft

def main(page: ft.Page):
    shd = ft.ShakeDetector(
        minimum_shake_count=2,
        shake_slop_time_ms=300,
        shake_count_reset_time_ms=1000,
        on_shake=lambda _: print("SHAKE DETECTED!"),
    )
    page.overlay.append(shd)

    page.add(ft.Text("Program body"))

ft.app(target=main)
``` 

##  properties 

###  `minimum_shake_count`

触发摇动之前所需的摇动数量。 默认值为`1`。

###  `shake_count_reset_time_ms`

时间，以毫秒为单位，然后摇动计数重置。 默认值为`3000` MS。

###  `shake_slop_time_ms`

摇动之间的最短时间，以毫秒为单位。 默认值为`500` MS。

###  `shake_threshold_gravity`

摇动检测阈值，gs。 默认值为`2.7`G。

## 事件

###  `on_shake`

检测到摇动时触发。