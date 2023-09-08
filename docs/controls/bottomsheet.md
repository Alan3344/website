---
title: BottomSheet
sidebar_label: BottomSheet
slug: bottomsheet
---

显示模态材料设计底部。

模态底部表是菜单或对话框的替代方案，可防止用户与应用程序的其余部分进行交互。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/dialogs/bottomsheet)

### 简单的底部表格

<img src="/website/img/docs/controls/bottom-sheet/bottom-sheet-sample.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    def bs_dismissed(e):
        print("Dismissed!")

    def show_bs(e):
        bs.open = True
        bs.update()

    def close_bs(e):
        bs.open = False
        bs.update()

    bs = ft.BottomSheet(
        ft.Container(
            ft.Column(
                [
                    ft.Text("This is sheet's content!"),
                    ft.ElevatedButton("Close bottom sheet", on_click=close_bs),
                ],
                tight=True,
            ),
            padding=10,
        ),
        open=True,
        on_dismiss=bs_dismissed,
    )
    page.overlay.append(bs)
    page.add(ft.ElevatedButton("Display bottom sheet", on_click=show_bs))

ft.app(target=main)
```

## properties

### `content`

底部纸的内容。

### `dismissible`

指定当用户在 scrim 上的用户点击时是否会删除底部表。

### `enable_drag`

指定底面是否可以上下拖动并通过向下滑动来解散。

### `open`

设置为`True`以显示底部表。

### `show_drag_handle`

是否在表格顶部显示拖动句柄。

### `use_safe_area`

指定表是否会避免在顶部，左和右侧的系统入侵。 默认为`False`。

## 事件

### `on_dismiss`

当底面被解雇时发火。
