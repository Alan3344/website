---
title: Getting user input
sidebar_label: Getting user input
---

用 Flet 制作交互式 Web 应用程序是轻而易举的！ 它不仅限于显示数据，而且您可以从用户请求输入并响应页面控件生成的各种事件。

## 按钮

`Button`是最重要的输入控件，当按下时会生成`click`事件:

```python
btn = ft.ElevatedButton("Click me!")
page.add(btn)
```

<img src="/img/docs/getting-started/getting-user-input-elevated-button.png" className="screenshot-50" />

网页上控件生成的所有事件都连续发送回您的脚本，那么您如何响应按钮单击？

## 事件处理程序

“计数器”应用中带有事件的按钮:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    txt_number = ft.TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = str(int(txt_number.value) - 1)
        page.update()

    def plus_click(e):
        txt_number.value = str(int(txt_number.value) + 1)
        page.update()

    page.add(
        ft.Row(
            [
                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),
                txt_number,
                ft.IconButton(ft.icons.ADD, on_click=plus_click),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        )
    )

ft.app(target=main)
```

<img src="/img/docs/getting-started/getting-user-input-event-handlers.png" className="screenshot-50" />

## 文本框

Flet 为建筑形式提供了许多[Controls](/docs/controls): [TextField](/docs/controls/textfield)，[复选框](/docs/controls/checkbox)，[下拉下拉](/docs/controls/dropdown)，[8223}，[升级 Button](/docs/controls/elevatedbutton)。

让我们向用户询问名称:

```python
import flet as ft

def main(page):
    def btn_click(e):
        if not txt_name.value:
            txt_name.error_text = "Please enter your name"
            page.update()
        else:
            name = txt_name.value
            page.clean()
            page.add(ft.Text(f"Hello, {name}!"))

    txt_name = ft.TextField(label="Your name")

    page.add(txt_name, ft.ElevatedButton("Say hello!", on_click=btn_click))

ft.app(target=main)
```

<img src="/img/docs/getting-started/getting-user-input-textbox.png" className="screenshot-50" />

## 复选框

[复选框](/docs/controls/checkbox)控制为您提供各种属性和事件，以易于使用。

让我们创建一个复选框 todo:

```python
import flet as ft


def main(page):
    def checkbox_changed(e):
        output_text.value = (
            f"You have learned how to ski :  {todo_check.value}."
        )
        page.update()

    output_text = ft.Text()
    todo_check = ft.Checkbox(label="ToDo: Learn how to use ski", value=False, on_change=checkbox_changed)
    page.add(todo_check, output_text)

ft.app(target=main)
```

<img src="/img/docs/getting-started/getting-user-input-checkbox.png" className="screenshot-50" />

## 下拉

```python
import flet as ft


def main(page: ft.Page):
    def button_clicked(e):
        output_text.value = f"Dropdown value is:  {color_dropdown.value}"
        page.update()

    output_text = ft.Text()
    submit_btn = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    color_dropdown = ft.Dropdown(
        width=100,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
    )
    page.add(color_dropdown, submit_btn, output_text)

ft.app(target=main)
```

<img src="/img/docs/getting-started/getting-user-input-dropdown.png" className="screenshot-50" />
