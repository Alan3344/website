---
title: Accessibility
sidebar_label: Accessibility
---

Flet 是基于颤音，除了基础操作系统提供的范围外，还包括一流的框架支持可访问性。

## 屏幕读取器

对于移动设备，屏幕读取器（[Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=en)，[VoiceOver](https://www.apple.com/lae/accessibility/iphone/vision/)）使视力障碍的用户能够获得有关屏幕内容的反馈，并通过移动和键盘上的手势通过桌面上的手势与 UI 进行交互。 打开移动设备上的配音或对话，然后浏览您的应用程序。

对于 Web，目前支持以下屏幕读取器:

移动浏览器:

- ios-旁白
- Android-对讲

桌面浏览器:

- MacOS-旁白
- Windows -Jaws＆NVDA

网络上的屏幕读取器用户需要切换“启用可访问性”按钮以构建语义树。

### 文本

使用`Text.semantics_label`属性覆盖默认文本控制语义。

### 按钮

所有带有文本的按钮都会生成适当的语义。

使用`tooltip`属性为`IconButton`，`FloatingActionButton`和`PopupMenuButton`按钮添加屏幕读取器语义。

###

### `TextField`和`Dropdown`

使用`TextField.label`和`Dropdown.label`属性将屏幕读取器语义添加到这些控件中。

### 自定义语义

对于任何特定要求，使用[`Semantics`](/docs/controls/semantics)控制。

### 调试语义

将`page.show_semantics_debugger`设置为`True`显示覆盖层，该覆盖层显示框架报告的可访问性信息。

您可以实现特定的[键盘快捷键](/docs/guides/python/keyboard-shortcuts)，以方便地切换应用程序开发过程:

<img src="/img/docs/getting-started/debug-accessibility-toggle.gif" className="screenshot-50" />

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def on_keyboard(e: ft.KeyboardEvent):
        print(e)
        if e.key == "S" and e.ctrl:
            page.show_semantics_debugger = not page.show_semantics_debugger
            page.update()

    page.on_keyboard_event = on_keyboard

    txt_number = ft.Text("0", size=40)

    def button_click(e):
        txt_number.value = str(int(txt_number.value) + 1)
        page.update()

    page.add(
        txt_number,
        ft.Text("Press CTRL+S to toggle semantics debugger"),
        ft.FloatingActionButton(
            icon=ft.icons.ADD, tooltip="Increment number", on_click=button_click
        ),
    )

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```
