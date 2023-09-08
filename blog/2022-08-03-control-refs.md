---
slug: control-refs
title: Control Refs
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [how-to]
---

 Flet控件是对象，要访问其属性，我们需要将引用（变量）保留到这些对象。

考虑以下示例: 

```python {6-8,18,19,21}
import flet as ft

def main(page):

    first_name = ft.TextField(label="First name", autofocus=True)
    last_name = ft.TextField(label="Last name")
    greetings = ft.Column()

    def btn_click(e):
        greetings.controls.append(ft.Text(f"Hello, {first_name.value} {last_name.value}!"))
        first_name.value = ""
        last_name.value = ""
        page.update()
        first_name.focus()

    page.add(
        first_name,
        last_name,
        ft.ElevatedButton("Say hello!", on_click=btn_click),
        greetings,
    )

ft.app(target=main)
```

在`main()`方法的开头，我们创建了三个控件，我们将在按钮的`on_click`处理程序中使用: 两个`TextField`的名称和姓氏和一个`Column`  - 用于问候消息的容器。 我们使用其所有属性集创建控件，并在`main()`方法的末尾，在`page.add()`调用中，我们使用其引用（变量）。

当更多和模式控制和事件处理程序添加时，将所有控制定义保持在一个地方变得具有挑战性，因此它们散布在`main()`主体上。 瞥了一眼`page.add()`参数，很难想象（没有不断跳到IDE中的可变定义）终端形式会是什么样: 

```python {2-5}
    page.add(
        first_name,
        last_name,
        ft.ElevatedButton("Say hello!", on_click=btn_click),
        greetings,
    )
```

`first_name`文本场是否有自动对焦集？ 问候是`Row`还是`Column`？

##  `Ref` class

Flet提供`Ref`实用程序类，该类允许定义对控件的引用，在事件处理程序中使用该参考，并在室内构建树时将其引用以后对真实控件进行设置。 这个想法来自[React](https://reactjs.org/docs/refs-and-the-dom.html)。

定义一个新的键入控制参考: 

```python
first_name = ft.Ref[ft.TextField]()
```

要访问引用的控件（控制脱线）使用`Ref.current`属性: 

```python
# empty first name
first_name.current.value = ""
```

将控件分配给参考集`Control.ref`属性到参考: 

```python {2}
page.add(
    ft.TextField(ref=first_name, label="First name", autofocus=True)
)
```

:::注意
所有Flet控件具有`ref`属性。
:::

我们可以重写我们的程序以使用参考: 

```python {7-9,21-24}
import flet as ft


def main(page):

    first_name = ft.Ref[ft.TextField]()
    last_name = ft.Ref[ft.TextField]()
    greetings = ft.Ref[ft.Column]()

    def btn_click(e):
        greetings.current.controls.append(
            ft.Text(f"Hello, {first_name.current.value} {last_name.current.value}!")
        )
        first_name.current.value = ""
        last_name.current.value = ""
        page.update()
        first_name.current.focus()

    page.add(
        ft.TextField(ref=first_name, label="First name", autofocus=True),
        ft.TextField(ref=last_name, label="Last name"),
        ft.ElevatedButton("Say hello!", on_click=btn_click),
        ft.Column(ref=greetings),
    )

ft.app(target=main)
```

现在，我们可以清楚地看到`page.add()`页面的结构及其构建的所有控件。

是的，逻辑变得更加详细，因为您需要添加`.current.`才能访问ref的控制，但这是个人喜好的问题:)

[给Flet尝试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！