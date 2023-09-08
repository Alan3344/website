---
title: Keyboard shortcuts
sidebar_label: Keyboard shortcuts
---

可靠的键盘支持是使用网络（尤其是桌面应用程序）时用户生产力的关键。 确实，在鼠标和键盘之间不断切换可能真的很烦人。

除了形式控制'`.autofocus`属性和[`TextField.focus()`](/docs/controls/textfield#focus)方法 Flet 允许处理“全局”键盘事件。

要捕获所有击键，实现`page.on_keyboard_event`处理程序。 事件处理程序参数`e`是带有以下属性的`KeyboardEvent`类的实例:

- `key` - 按下键的文本表示，例如。 `A`，`Enter`或`F5`。
- `shift` - `True`如果按下“ shift”键。
- `ctrl` - `True`如果按下“控制”键。
- `alt` - `True`如果按下“ alt”（“ option”）键。
- `meta` - `True`如果按下“命令”键。

这是一个简单的用法示例:

```python
import flet as ft

def main(page: ft.Page):
    def on_keyboard(e: ft.KeyboardEvent):
        page.add(
            ft.Text(
                f"Key: {e.key}, Shift: {e.shift}, Control: {e.ctrl}, Alt: {e.alt}, Meta: {e.meta}"
            )
        )

    page.on_keyboard_event = on_keyboard
    page.add(
        ft.Text("Press any key with a combination of CTRL, ALT, SHIFT and META keys...")
    )

ft.app(target=main)
```

<img src="/website/img/docs/getting-started/keyboard-shortcuts.png" className="screenshot-100" />

这是[更高级的示例](https://github.com/flet-dev/examples/blob/main/python/controls/page/keyboard-events.py)。
