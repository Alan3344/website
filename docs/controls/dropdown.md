---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

a material design 按钮用于从项目列表中选择。

下拉列表使用户可以从许多项目中选择。 下拉列表显示了当前选择的项目以及打开菜单以选择另一个项目的箭头。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/dropdown)

### 基本下拉

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def button_clicked(e):
        t.value = f"Dropdown value is:  {dd.value}"
        page.update()

    t = ft.Text()
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    dd = ft.Dropdown(
        width=100,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
    )
    page.add(dd, b, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/basic-dropdown.gif" className="screenshot-30"/>

### Dropdown with label and hint

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Dropdown(
            label="Color",
            hint_text="Choose your favourite color?",
            options=[
                ft.dropdown.Option("Red"),
                ft.dropdown.Option("Green"),
                ft.dropdown.Option("Blue"),
            ],
            autofocus=True,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-custom-content.gif" className="screenshot-30"/>

### Dropdown with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def dropdown_changed(e):
        t.value = f"Dropdown changed to {dd.value}"
        page.update()

    t = ft.Text()
    dd = ft.Dropdown(
        on_change=dropdown_changed,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
        width=200,
    )
    page.add(dd, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-change-event.gif" className="screenshot-30" />

### Change items in dropdown options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def find_option(option_name):
        for option in d.options:
            if option_name == option.key:
                return option
        return None

    def add_clicked(e):
        d.options.append(ft.dropdown.Option(option_textbox.value))
        d.value = option_textbox.value
        option_textbox.value = ""
        page.update()

    def delete_clicked(e):
        option = find_option(d.value)
        if option != None:
            d.options.remove(option)
            # d.value = None
            page.update()

    d = ft.Dropdown()
    option_textbox = ft.TextField(hint_text="Enter item name")
    add = ft.ElevatedButton("Add", on_click=add_clicked)
    delete = ft.OutlinedButton("Delete selected", on_click=delete_clicked)
    page.add(d, ft.Row(controls=[option_textbox, add, delete]))

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-add-and-delete.gif" className="screenshot-40"/>

## `Dropdown` properties

### `alignment`

定义提示或所选项目的定位在下拉列表中。

有关可能的值，请参见[`Container.alignment`](/docs/controls/container#alignment)属性。

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `bgcolor`

下拉背景[颜色](/docs/guides/python/colors)。

### `border`

输入周围的边界 - `InputBorder`枚举具有一个值之一: `OUTLINE`（默认），`UNDERLINE`，`NONE`。

### `border_color` `border_color`

边框[颜色](/docs/guides/python/colors)。 可以是`transparent`隐藏边框。

### `border_radius`

有关边界半径的更多信息，请参见[`Container.border_radius`]属性文档。

### `border_width`

在虚拟像素中边界的宽度。 默认值为 1。设置为 0 以完全删除边框。

### `color`

文本[颜色](/docs/guides/python/colors)。

### `content_padding`

输入装饰容器的填充。

### `counter_style`

用于`counter_text`的样式。

### `counter_text`

可选的文本以作为角色数作为字符计数下方。

如果未指定空字符串和计数器，则在计数器的位置中不会出现任何内容。

### `dense`

Textfield 是否是密集形式的一部分（即使用较少的垂直空间）。

### `error_style`

用于`error_text`的样式。

### `error_text`

出现在输入边框下方的文本。

如果非无效，则边框的颜色为红色动画，未显示`helper_text`。

### `filled`

如果`True`装饰的容器充满了主题填充。

### `focused_bgcolor`

背景[颜色](/docs/guides/python/colors)在聚焦状态下的下拉菜单。

### `focused_border_color`

边框[颜色](/docs/guides/python/colors)以聚焦状态。

### `focused_border_width`

重点状态的边框宽度。

### `focused_color`

文本[颜色](/docs/guides/python/colors)当下拉集中时。

### `helper_style`

用于`helper_text`的样式。

### `helper_text`

提供有关输入值的上下文的文本，例如如何使用该值。

如果非编号，则文本在输入装饰器下方显示在与`error_text`同一位置。 如果指定了非 null `error_text`值，则未显示辅助文本。

### `hint_style`

用于`hint_text`的样式。

### `hint_text`

暗示该字段接受的输入的文本。

在输入为空时显示在输入的顶部，并且（a）`label`为 null 或（b）输入具有焦点。

### `icon`

在输入字段之前和装饰容器外部显示的图标名称。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `label`

描述输入字段的可选文本。

当输入字段为空且未关注时，标签将显示在输入字段的顶部（即，在屏幕上可以在输入字段中输入文本的同一位置）。 当输入字段接收到焦点（或如果字段是非空的）时，标签在上方移动，则垂直相邻或转移到输入字段的中心。

### `label_style`

用于`label`的样式。

### `options`

`Option`控件的列表表示下拉中的项目。

### `prefix`

可选`Control`将输入前放在线上。

例如，可以将其添加到文本中添加一些填充，否则将使用`prefix_text`指定，或在输入前面添加自定义控件。 控件的基线与输入基线对齐。

只能指定`prefix`和`prefix_text`之一。

`prefix`在`prefix_icon`之后出现，如果两者都指定。

### `prefix_icon`

出现在`prefix`或`prefix_text`之前的图标，以及在装饰容器中的文本字段的可编辑部分。

### `prefix_style`

用于`prefix_text`的样式。

### `prefix_text`

可选文本`prefix`将输入前放在线上。

### `suffix`

可选`Control`将输入后放置在线上。

例如，可以将其用于在文本中添加一些填充，否则将使用`suffix_text`指定，或在输入后添加自定义控件。 控件的基线与输入基线对齐。

只能指定`suffix`和`suffix_text`之一。

`suffix`如果指定了`suffix_icon`之前出现在`suffix_icon`之前。

### `suffix_icon`

在文本字段的可编辑部分以及`suffix`或`suffix_text`之后出现的图标。

### {317771}

用于`suffix_text`的样式。

### `suffix_text`

可选文本`suffix`将输入之后放在线上。

### `text_size`

虚拟像素中的文本大小。

### `text_style`

在下拉按钮中使用文本的文本样式和点击按钮时出现的下拉菜单。

### `value`

`key`所选选项的值。

## `Dropdown`方法

### `focus()`

将重点放在下拉列表中。

## `Dropdown`事件

### `on_blur`

当控件失去焦点时会发射。

### `on_change`

### `on_focus`的选定项目发生变化时会发射。

当控件已接收到焦点时发射。

## `Option`属性

### `key`

选项的键。 如果未指定`key`，则将使用`text`值。

###

### `text`

选项的显示文本。 如果未指定`text`，则将使用`key`值。
