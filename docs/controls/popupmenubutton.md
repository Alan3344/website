---
标题: Popupmenubutton
sidebar_label: popupmenubutton
slug: popupmenubutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

单击时显示菜单的图标按钮。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/buttons/popupmenubutton)

### popupmenubutton

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    pb = ft.PopupMenuButton(
        items=[
            ft.PopupMenuItem(text="Item 1"),
            ft.PopupMenuItem(icon=ft.icons.POWER_INPUT, text="Check power"),
            ft.PopupMenuItem(
                content=ft.Row(
                    [
                        ft.Icon(ft.icons.HOURGLASS_TOP_OUTLINED),
                        ft.Text("Item with a custom content"),
                    ]
                ),
                on_click=lambda _: print("Button with a custom content clicked!"),
            ),
            ft.PopupMenuItem(),  # divider
            ft.PopupMenuItem(
                text="Checked item", checked=False, on_click=check_item_clicked
            ),
        ]
    )
    page.add(pb)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/popup-menu-button/popup-menu-button-with-custom-content.gif" className="screenshot-30"/>

## `PopupMenuButton` properties

### `content`

将显示的`Control`而不是“更多”图标。

### `icon`

如果提供了一个图标来绘制按钮。

### `items`

`PopupMenuItem`控件的集合以在下拉菜单中显示。

## `PopupMenuButton`事件

### `on_cancelled`

当用户在不选择项目的情况下删除弹出菜单时调用。

## `PopupMenuItem` properties

### `check`

如果将设置为`True`或`False`菜单项绘制一个复选标记。

### `icon`

菜单项文本标签之前要绘制的图标。

### `text`

菜单项文本标签。

### `content`

`Control`表示菜单项的自定义内容。 如果指定了`icon`和`text`的属性。

## `PopupMenuItem`事件

### `on_click`

当用户单击弹出菜单项时，请致电。
