---
title: HapticFeedback
sidebar_label: HapticFeedback
slug: hapticfeedback
---

允许访问设备上的触觉反馈接口。

它是非视觉的，应添加到`page.overlay`列表中。

## 示例

### 触觉反馈样本

```python
import flet as ft

def main(page: ft.Page):
    hf = ft.HapticFeedback()
    page.overlay.append(hf)

    page.add(
        ft.ElevatedButton("Heavy impact", on_click=lambda _: hf.heavy_impact()),
        ft.ElevatedButton("Medium impact", on_click=lambda _: hf.medium_impact()),
        ft.ElevatedButton("Light impact", on_click=lambda _: hf.light_impact()),
        ft.ElevatedButton("Vibrate", on_click=lambda _: hf.vibrate()),
    )

ft.app(target=main)
``` 

## 方法

###  `heavy_impact()`

提供触觉反馈对应着碰撞的撞击。

###  `light_impact()`

提供触觉反馈对应于碰撞的影响，并带有轻质质量。

###  `medium_impact()`

提供了与中等质量相对的碰撞影响的触觉反馈。

###  `vibrate()`

在短时间内向用户提供振动触觉反馈。