---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 什么是 Flet

Flet 是一个框架，它允许以您喜欢的语言构建交互式多用户网络，桌面和移动应用程序，而无需先前的前端开发经验。

您可以使用 Flet [Controls](/docs/controls)为程序构建 UI，该(/docs/controls)基于 Google 的[Flutter](https://flutter.dev)。 Flet 不仅是“包装”颤音小部件，而且还通过结合较小的小部件，隐藏复杂性，实现 UI 最佳实践，应用合理的默认值来添加自己的“意见”，以确保您的应用程序看起来很酷，而无需额外努力。

## Flet 应用示例

目前，您可以用 Python 编写 Flet 应用程序，而其他语言将很快添加。

这是一个示例“计数器”应用:

```python title="counter.py"
import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    txt_number = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)

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

运行应用程序安装`flet`模块:

```bash
pip install flet
```

并运行程序:

```bash
python counter.py
```

该应用将在本机 OS 窗口中启动 - 电子的替代品！

<div className="row">
   <div className ="col-col-6" style = {{textAlign: 'center'}}>
     <h3> macOS </h3>
     <img src="/img/docs/getting-started/flet-counter-macos.png" className="screenshot-70" />
   </div>
   <div className ="col-col-6" style = {{textAlign: 'center'}}>
     <h3> Windows </h3>
     <img src="/img/docs/getting-started/flet-counter-windows.png" className="screenshot-60" />
   </div>
</div>

现在，如果您想以 Web 应用程序运行该应用程序，只需将最后一行替换为以下方式:

```python
ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

再次运行，现在您立即获得 Web 应用程序:

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

## 教程

想学习如何构建真实的应用吗？ 跳到您的语言的入门指南:

- [Python](/docs/guides/python/getting-started)
