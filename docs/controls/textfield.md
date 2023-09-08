---
title: TextField
sidebar_label: TextField
slug: textfield
---

a material design 文本字段。

文本字段可让用户使用硬件键盘或屏幕键盘输入文本。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/input/textfield)

### 基本 textfields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def button_clicked(e):
        t.value = f"Textboxes values are:  '{tb1.value}', '{tb2.value}', '{tb3.value}', '{tb4.value}', '{tb5.value}'."
        page.update()

    t = ft.Text()
    tb1 = ft.TextField(label="Standard")
    tb2 = ft.TextField(label="Disabled", disabled=True, value="First name")
    tb3 = ft.TextField(label="Read-only", read_only=True, value="Last name")
    tb4 = ft.TextField(label="With placeholder", hint_text="Please enter text here")
    tb5 = ft.TextField(label="With an icon", icon=ft.icons.EMOJI_EMOTIONS)
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(tb1, tb2, tb3, tb4, tb5, b, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/basic-textfield.gif" className="screenshot-40"/>

### TextField with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def textbox_changed(e):
        t.value = e.control.value
        page.update()

    t = ft.Text()
    tb = ft.TextField(
        label="Textbox with 'change' event:",
        on_change=textbox_changed,
    )

    page.add(tb, t)

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/textfield-with-change-event.gif" className="screenshot-40"/>

### Password with reveal button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.TextField(
            label="Password with reveal button", password=True, can_reveal_password=True
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/textfield-with-password.gif" className="screenshot-40"/>

### Multiline TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.TextField(label="standard", multiline=True),
        ft.TextField(
            label="disabled",
            multiline=True,
            disabled=True,
            value="line1\nline2\nline3\nline4\nline5",
        ),
        ft.TextField(
            label="Auto adjusted height with max lines",
            multiline=True,
            min_lines=1,
            max_lines=3,
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/textfield-with-multiline.gif" className="screenshot-40"/>

### Underlined and borderless TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.TextField(label="Underlined", border="underline", hint_text="Enter text here"),
        ft.TextField(
            label="Underlined filled",
            border=ft.InputBorder.UNDERLINE,
            filled=True,
            hint_text="Enter text here",
        ),
        ft.TextField(label="Borderless", border="none", hint_text="Enter text here"),
        ft.TextField(
            label="Borderless filled",
            border=ft.InputBorder.NONE,
            filled=True,
            hint_text="Enter text here",
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/textfield-with-underline-and-borderless.gif" className="screenshot-40"/>

### TextFields with prefixes and suffixes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.TextField(label="With prefix", prefix_text="https://"),
        ft.TextField(label="With suffix", suffix_text=".com"),
        ft.TextField(
            label="With prefix and suffix", prefix_text="https://", suffix_text=".com"
        ),
        ft.TextField(
            label="My favorite color",
            icon=ft.icons.FORMAT_SIZE,
            hint_text="Type your favorite color",
            helper_text="You can type only one color",
            counter_text="0 symbols typed",
            prefix_icon=ft.icons.COLOR_LENS,
            suffix_text="...is your color",
        ),
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/textfield/textfield-with-prefix-and-suffix.gif" className="screenshot-40"/>

## properties

### `autocorrect`

是否启用自动校正。 默认值为`True`。

### `autofocus`

如果将控件选择作为初始焦点，则为 thus。 如果一个带有自动对焦集的页面上有多个控件，则添加到页面的第一个将获得焦点。

### `bgcolor`

textfield 背景[颜色](/docs/guides/python/colors)。

### `border`

输入周围的边界 - `InputBorder`枚举具有一个值之一: `OUTLINE`（默认），`UNDERLINE`，`NONE`。

### `border_color`

边框[颜色](/docs/guides/python/colors)。 可以是`transparent`隐藏边框。

### `border_radius`

有关边界半径的更多信息，请参见[`Container.border_radius`]属性文档。

### `border_width`

在虚拟像素中边界的宽度。 默认值为 1。设置为 0 以完全删除边框。

### `can_reveal_password`

显示一个允许显示输入密码的切换图标按钮。

### `capitalization`

启用输入文本的自动自动资本化。

属性值为`TextCapitalization`枚举，具有以下值:

- `NONE`（默认） - 请勿更改输入的文本。
- `CHARACTERS` - 每个输入的符号都大写。
- `WORDS` - 大写每个单词的第一个字母。
- `SENTENCES` - 大写每个句子的第一个字母。

### `color`

文本[颜色](/docs/guides/python/colors)。

### `content_padding`

输入装饰容器的填充。

有关填充和可能的值的更多信息，请参见[`Container.padding`](container#padding)。

### `counter_style`

用于`counter_text`的样式。

### `counter_text`

可选的文本以作为角色数作为字符计数下方。

如果未指定空字符串和计数器，则在计数器的位置中不会出现任何内容。

### `cursor_color`

Textfield Cursor 的[COLOR](/docs/guides/python/colors)。

### `cursor_height`

设置光标高度。

### `cursor_radius`

集光标半径。

### `cursor_width`

设置光标宽度。

### `dense`

TextField 是否是密集形式的一部分（即使用较少的垂直空间）。

### `enable_suggestions`

是否将输入建议显示为用户类型。

该标志只会影响 Android。 在 iOS 上，建议直接绑定到`autocorrect`，因此仅在`autocorrect`为`True`时才显示建议。 在 Android 自动校正和建议上分别控制。 默认值为`True`。

### `error_style`

用于`error_text`的样式。

### `error_text`

出现在输入边框下方的文本。

如果非效果，则边框的颜色为红色动画，未显示`helper_text`。

### `filled`

如果`True`装饰的容器充满了主题填充。

### `focused_bgcolor`

textfield 的背景[颜色](/docs/guides/python/colors)在聚焦状态下。

### `focused_border_color`

边框[颜色](/docs/guides/python/colors)以聚焦状态。

### `focused_border_width`

重点状态的边界宽度。

### `focused_color`

text [color](/docs/guides/python/colors)当 textfield 聚焦时。

### `helper_style`

用于`helper_text`的样式。

### `helper_text`

提供有关输入值的上下文的文本，例如如何使用该值。

如果非编号，则文本显示在输入装饰器下方，位于`error_text`的位置。 如果指定了非 null `error_text`值，则未显示辅助文本。

### `hint_style`

用于`hint_text`的样式。

### `hint_text`

暗示该字段接受的输入的文本。

当输入为空时显示在输入的顶部，并且（a）`label`为 null 或（b）输入具有焦点。

### `icon`

在输入字段之前和装饰容器之外显示的图标的名称。

### `keyboard_type`

用于编辑文本的键盘类型。 属性值为`KeyboardType`枚举，具有以下值:

- `TEXT`（默认）
- `MULTILINE`
- `NUMBER`
- `PHONE`
- `DATETIME`
- `EMAIL`
- `URL`
- `VISIBLE_PASSWORD`
- `NAME`
- `STREET_ADDRESS`
- `NONE`

### `label`

描述输入字段的可选文本。

当输入字段为空且未关注时，标签将显示在输入字段的顶部（即，在屏幕上可以在输入字段中输入文本的同一位置）。 当输入字段接收到焦点（或如果字段是非空的）时，标签在上方移动，则垂直相邻或转移到输入字段的中心。

### `label_style`

用于`label`的样式。

### `max_length`

限制可以输入 TextField 的最大字符。

### `max_lines`

一次显示的最大线路数，如有必要。

这会影响字段本身的高度，并且不会限制可以输入现场的线数。

如果这是`1`（默认），则文本不会包装，而是水平滚动。

### `min_lines`

当内容跨越较少的线条时，要占据的最小线数。

这会影响字段本身的高度，并且不会限制可以输入现场的线数。

默认值为`1`。

### `multiline`

`True`如果 Textfield 可以包含多个文本行。

### `password`

是否隐藏要编辑的文本。 默认值为`False`。

### `prefix`

可选`Control`将输入前放在线上。

例如，可以将其添加到文本中，否则可以使用`prefix_text`指定的文本，或在输入前面添加自定义控件。 控件的基线与输入基线对齐。

只能指定`prefix`和`prefix_text`之一。

`prefix`在`prefix_icon`之后出现，如果两者都指定。

### `prefix_icon`

在`prefix`或`prefix_text`之前出现的图标，以及在装饰容器中的文本字段的可编辑部分之前出现的图标。

### `prefix_style`

用于`prefix_text`的样式。

### `prefix_text`

可选的文本`prefix`以在输入之前放在线上。

### `read_only`

是否可以更改文本。

将其设置为`True`时，无法通过任何快捷方式或键盘操作对文本进行修改。 文本仍然可以选择。

默认为`False`。

### `selection_color`

textfield 选择的[颜色](/docs/guides/python/colors)。

### `shift_enter`

在`multiline`中更改`Enter`按钮的行为，例如聊天，即可以使用`Shift`+`Enter`添加新行，并仅按`Enter`触发`on_submit` event `on_submit` event。 }

是否允许平台自动格式破折号。

此标志仅影响 iOS 版本 11 及更高版本。 作为这样做的一个例子，将自动用一个连续的连续连续性字符替换为一个 en dash，而三个连续的连字符将成为一个 EM 破折号。 默认值为`True`。

### `smart_quotes_type`

是否允许平台自动格式化引号。

此标志仅影响 iOS。 作为做什么的示例，标准的垂直双引号字符将自动被左或右双引号替换，具体取决于其在单词中的位置。 默认值为`True`。

### `suffix`

可选`Control`在输入之后放在线上。

例如，可以将其用于在文本中添加一些填充，否则将使用`suffix_text`指定，或在输入后添加自定义控件。 控件的基线与输入基线对齐。

只能指定`suffix`和`suffix_text`之一。

`suffix`出现在`suffix_icon`之前，如果两者都指定。

### `suffix_icon`

在文本字段的可编辑部分以及`suffix`或`suffix_text`之后出现的图标。

### `suffix_style`

用于`suffix_text`的样式。

### `suffix_text`

可选的文本`suffix`将输入之后放在线上。

### `text_align`

文本应如何水平对齐。

属性值为`TextAlign`枚举，具有以下值:

- `LEFT`（默认）
- `RIGHT`
- `CENTER`
- `JUSTIFY`
- `START`
- `END`

### `text_size`

虚拟像素中的文本大小。

### `text_style`

用于编辑文本的样式。

### `value`

textfield 的当前值。

## 方法

### `focus()`

将重点移至 Textfield。

## 事件

### `on_blur`

当控件失去焦点时发射。

### `on_change`

当 Textfield 的键入输入发生变化时，请发射。

### `on_focus`

当控件收到焦点时发射。

### `on_submit`

当用户按 Enter 在 TextField 上的焦点时，请发射。
