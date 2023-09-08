---
title: AlertDialog
sidebar_label: AlertDialog
slug: alertdialog
---

a material design 警报对话框。

警报对话框通知用户需要确认的情况。 警报对话框具有可选标题和可选的操作列表。 标题显示在内容上方，操作显示在内容下方。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/dialogs/alertdialog)

### 基本和模态对话框

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "AlertDialog examples"

    dlg = ft.AlertDialog(
        title=ft.Text("Hello, you!"), on_dismiss=lambda e: print("Dialog dismissed!")
    )

    def close_dlg(e):
        dlg_modal.open = False
        page.update()

    dlg_modal = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to delete all those files?"),
        actions=[
            ft.TextButton("Yes", on_click=close_dlg),
            ft.TextButton("No", on_click=close_dlg),
        ],
        actions_alignment=ft.MainAxisAlignment.END,
        on_dismiss=lambda e: print("Modal dialog dismissed!"),
    )

    def open_dlg(e):
        page.dialog = dlg
        dlg.open = True
        page.update()

    def open_dlg_modal(e):
        page.dialog = dlg_modal
        dlg_modal.open = True
        page.update()

    page.add(
        ft.ElevatedButton("Open dialog", on_click=open_dlg),
        ft.ElevatedButton("Open modal dialog", on_click=open_dlg_modal),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/alertdialog/alertdialog-with-custom-content.gif" className="screenshot-50" />

## properties

### `actions`

在对话框底部显示的（可选）操作集。

通常，这是[`TextButton`](textbutton)控制的列表。

### `actions_alignment`

根据[`Row.alignment`](row#alignment)的规则，根据相同规则定义动作的水平布局。

属性值是`MainAxisAlignment`用`MainAxisAlignment.END`作为默认值的枚举。

### `actions_padding`

围绕对话框底部的一组动作填充。

通常用于在按钮栏和对话框边缘之间的按钮栏上提供填充。

如果没有动作，则不会包括填充。 按钮栏周围的填充默认为零。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `content`

对话框的（可选）内容显示在对话框的中心中，以较轻的心态显示。 通常，这是一个[`Column`](column)，其中包含对话框的[`Text`](text)消息。

### `content_padding`

围绕内容填充。

如果没有内容，则不会提供填充。 否则，在内容上方提供 20 个像素的填充物，以将内容与标题分开，并在左，右和底部提供 24 像素的填充，以将内容与对话框的其他边缘分开。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `modal`

是否可以通过单击其外部区域来忽略对话框。

### `open`

设置为`True`显示对话框。

### `shape`

对话框边界的形状。

该值是以下实现之一的实例:

- `StadiumBorder`
- `RoundedRectangleBorder`
  - `radius` - 边界半径，`BorderRadius`类或一个数字的实例。
- `CircleBorder`
- `BeveledRectangleBorder`
  - `radius` - 边界半径，一个`BorderRadius`类或数字的实例。
- `ContinuousRectangleBorder`
  - `radius` - 边框半径，`BorderRadius`类或数字的实例。

默认形状为`RoundedRectangleBorder`，半径为 4.0。

### `title`

对话框的（可选）标题显示在对话框顶部的大字体中。

通常是[`Text`](text)控制。

### `title_padding`

围绕标题填充。

如果没有标题，则不会提供填充。 否则，使用此填充物。

该属性默认为标题的顶部，左和右提供 24 个像素。 如果内容不是零，则没有提供底部填充（但请参见`content_padding`）。 如果未设置，则添加额外的 20 像素底部填充以将标题与动作分开。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

## 事件

### `on_dismiss`

对话框时发生射击。
