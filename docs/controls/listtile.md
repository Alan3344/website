---
title: ListTile
sidebar_label: ListTile
slug: listtile
---

一个通常包含一些文本以及 leading 或尾随图标的单个固定高行。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[LIVE 示例](https://flet-controls-gallery.fly.dev/layout/listtile)

<img src="/website/img/docs/controls/listtile/listtiles.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.title = "ListTile Examples"
    page.add(
        ft.Card(
            content=ft.Container(
                width=500,
                content=ft.Column(
                    [
                        ft.ListTile(
                            title=ft.Text("One-line list tile"),
                        ),
                        ft.ListTile(title=ft.Text("One-line dense list tile"), dense=True),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.SETTINGS),
                            title=ft.Text("One-line selected list tile"),
                            selected=True,
                        ),
                        ft.ListTile(
                            leading=ft.Image(src="/icons/icon-192.png", fit="contain"),
                            title=ft.Text("One-line with leading control"),
                        ),
                        ft.ListTile(
                            title=ft.Text("One-line with trailing control"),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.ALBUM),
                            title=ft.Text("One-line with leading and trailing controls"),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.SNOOZE),
                            title=ft.Text("Two-line with leading and trailing controls"),
                            subtitle=ft.Text("Here is a second title."),
                            trailing=ft.PopupMenuButton(
                                icon=ft.icons.MORE_VERT,
                                items=[
                                    ft.PopupMenuItem(text="Item 1"),
                                    ft.PopupMenuItem(text="Item 2"),
                                ],
                            ),
                        ),
                    ],
                    spacing=0,
                ),
                padding=ft.padding.symmetric(vertical=10),
            )
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `autofocus`

`True`如果将选择控件作为初始焦点。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `content_padding`

瓷砖的内部填充。 插入 ListTile 的内容: 其`leading`，`title`，`subtitle`和`trailing`控件。

如果未设置，则使用`padding.symmetric(horizontal=16)`。

有关更多信息和可能的值，请参见[`Container.padding`](container#padding)属性。

### `dense`

该列表瓷砖是否是垂直密集列表的一部分。 密度列表图块默认为较小的高度。

### `is_three_line`

该列表瓷砖是否旨在显示三行文本。

如果`True`，则副标题必须是非编号（因为预计将提供第二行和第三行的文本）。

如果`False`，则将列表瓷砖视为具有一行，如果字幕为无效，如果字幕不为无效，则将其视为具有两行。

使用文本控件用于标题和字幕时，您可以使用[text.max_lines](text#max_lines)执行线路限制。

### `leading`

`Control`要在标题之前显示。

### `selected`

如果还启用了此图块，则以相同的颜色呈现图标和文本。 默认情况下，选定的颜色是主题的主要颜色。

### `subtitle`

标题下方显示的其他内容。 通常是[Text](text)窗口小部件。

如果`is_three_line`为`False`，则不应包装。 如果`is_three_line`为`True`，则应将其配置为最多两行。 例如，您可以使用[text.max_lines](text#max_lines)执行行数。

### `title`

`Control`以显示列表图块的主要内容。 通常是[Text](text)控件。 这不应该包裹。 要执行单行限制，请使用[text.max_lines](text#max_lines)。

### `toggle_inputs`

是否单击列表图块应切换`Radio`的状态，`Checkbox`或`Switch`在瓷砖内。 默认值为`False`。

### `trailing`

`Control`标题后显示。 通常是[Icon](icon)控制。

### `url`

单击列表瓷砖时打开的 URL。 如果已注册，则在此之后发射`on_click`事件。

### `url_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新 Tab/window。
- `_self` - 当前的选项卡片/窗口。

## 事件

### `on_click`

当用户单击或点击列表瓷砖时发射。

### `on_long_press`

当用户在此列表瓷砖上长压时发射。
