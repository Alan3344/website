---
title: Create Calculator app in Python with Flet
sidebar_label: Python - Calculator app
slug: python-calculator
---

在本教程中，我们将逐步向您展示如何使用 Flet 框架在 Python 中创建计算器应用程序，并将其部署为 Web 应用程序。 该应用程序是[简单的控制台程序](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc.py)，但它是一个多平台应用程序，其类似于 iPhone Calculator App UI:

<img src="/img/docs/calc-tutorial/calc-app.gif" className="screenshot-40" />

您可以找到实时演示[此处](https://gallery.flet.dev/calculator/)。

在本教程中，我们将介绍创建 Web 应用程序的所有基本概念: 构建页面布局，添加控件，可重复使用的 UI 组件，处理事件和部署选项。

该教程包括以下步骤:

import TOCInline from '@theme/TOCInline';

<tocinline toc = {toc} maxheadingLevel = {2} />

## 从 Flet 开始

要编写 Flet Web 应用程序，您不需要了解 HTML，CSS 或 JavaScript，但是您确实需要有关 Python 和面向对象的编程的基本知识。

Flet 需要 Python 3.7 或更高。 要使用 Flet 在 Python 中创建 Web 应用程序，您需要先安装`flet`模块:

```bash
pip install flet
```

首先，让我们创建一个简单的 Hello-World 应用程序。

使用以下内容创建`hello.py`:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(value="Hello, world!"))

ft.app(target=main)
```

运行此应用程序，您将看到一个带有问候的新窗口:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## 添加页面控件

现在，您准备创建一个计算器应用程序。

首先，您需要一个[text](/docs/controls/text)控件来显示计算结果，以及几个[升高的 Buttons](/docs/controls/elevatedbutton)，其中所有数字和动作上的所有数字和动作。

使用以下内容创建`calc.py`:

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Calc App"
    result = ft.Text(value="0")

    page.add(
        result,
        ft.ElevatedButton(text="AC"),
        ft.ElevatedButton(text="+/-"),
        ft.ElevatedButton(text="%"),
        ft.ElevatedButton(text="/"),
        ft.ElevatedButton(text="7"),
        ft.ElevatedButton(text="8"),
        ft.ElevatedButton(text="9"),
        ft.ElevatedButton(text="*"),
        ft.ElevatedButton(text="4"),
        ft.ElevatedButton(text="5"),
        ft.ElevatedButton(text="6"),
        ft.ElevatedButton(text="-"),
        ft.ElevatedButton(text="1"),
        ft.ElevatedButton(text="2"),
        ft.ElevatedButton(text="3"),
        ft.ElevatedButton(text="+"),
        ft.ElevatedButton(text="0"),
        ft.ElevatedButton(text="."),
        ft.ElevatedButton(text="="),
    )


ft.app(target=main)
```

运行该应用程序，您应该看到这样的页面:

<img src="/img/docs/calc-tutorial/calc-app-1.png" className="screenshot-10" />

## 建筑页面布局

现在，让我们将文本和按钮安排在 6 个水平[行](/docs/controls/row)中。

用以下内容替换`calc.py`内容:

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Calc App"
    result = ft.Text(value="0")

    page.add(
        ft.Row(controls=[result]),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="AC"),
                ft.ElevatedButton(text="+/-"),
                ft.ElevatedButton(text="%"),
                ft.ElevatedButton(text="/"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="7"),
                ft.ElevatedButton(text="8"),
                ft.ElevatedButton(text="9"),
                ft.ElevatedButton(text="*"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="4"),
                ft.ElevatedButton(text="5"),
                ft.ElevatedButton(text="6"),
                ft.ElevatedButton(text="-"),
            ]
        ),
        ft.Row(
            controls=[
                ft.ElevatedButton(text="1"),
                ft.ElevatedButton(text="2"),
                ft.ElevatedButton(text="3"),
                ft.ElevatedButton(text="+"),
            ]
        ),
        ft.Row(
             controls=[
                ft.ElevatedButton(text="0"),
                ft.ElevatedButton(text="."),
                ft.ElevatedButton(text="="),
            ]
        ),
    )


ft.app(target=main)
```

运行该应用程序，您应该看到这样的页面:

<img src="/img/docs/calc-tutorial/calc-app-2.png" className="screenshot-40" />

### 使用容器进行装饰

要在计算器周围添加带有圆形边框的黑色背景，我们将使用[容器](/docs/controls/container)控制。 容器只能装饰一个控件，因此我们需要将所有 6 行包裹在一个垂直[列](/docs/controls/container)中，该(/docs/controls/container)将用作容器的`content`:
<img src="/img/docs/calc-tutorial/container-layout.svg" className="screenshot" />

要完成程序的 UI 部分，请更新文本的`color`和`size`属性，以及`color`和`bgcolor`属性的`bgcolor`属性。 为了使行内的按钮对齐，我们将使用`expand`属性，如上图所示。

由于该程序现在太长了，无法将其完全包含在本教程中，请从[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc3.py)复制此步骤的整个代码。 运行该应用程序，您应该看到这样的页面:
<img src="/img/docs/calc-tutorial/calc-app.png" className="screenshot-40" />

正是我们想要的！

## 可重复使用的 UI 组件

虽然您可以继续在`main`函数中编写应用程序，但最好的做法是创建可重复使用的 UI 组件。

想象一下，您正在使用应用程序标头，侧菜单或 UI，该应用程序将成为较大项目的一部分（例如，在 Flet}我们将在较大的“画廊”应用中使用此计算器应用 Flet 框架的示例）。

即使您现在无法想到这种用途，我们仍然建议您牢记合成性和可重复使用性创建所有 Web 应用程序。

为了制作可重复使用的计算应用程序组件，我们将将其状态和演示逻辑封装在单独的`CalculatorApp`类中。 从[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc4.py)复制此步骤的整个代码。

阅读有关[创建用户控件](/docs/guides/python/getting-started#user-controls)的更多信息。

:::noteTry 的东西
尝试将两个`CalculatorApp`组件添加到页面:

```python
# create application instance
calc1 = CalculatorApp()
calc2 = CalculatorApp()

# add application's root control to the page
page.add(calc1, calc2)
```

:::

## 处理事件

现在让我们让计算器完成工作。 我们将对所有按钮使用同一事件处理程序，并使用`data`属性来区分操作，具体取决于单击的按钮。 对于每个`ElevatedButton`控件，指定`on_click=self.button_clicked`事件并设置`data`属性等于按钮的文本，例如:

```python
ft.ElevatedButton(
    text="AC",
    bgcolor=ft.colors.BLUE_GREY_100,
    color=ft.colors.BLACK,
    expand=1,
    on_click=self.button_clicked,
    data="AC",
)
```

以下是`on_click`事件处理程序，当单击“ AC”按钮时将重置文本值:

```python
def button_clicked(self, e):
    if e.data == "AC":
        self.result.value = "0"
```

使用类似的方法，指定`on_click`事件和每个按钮的`data`属性，并根据`e.data`值添加预期操作。 从[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/calc/calc.py)复制此步骤的整个代码。

运行该应用程序并在操作中查看它:
<img src="/img/docs/calc-tutorial/calc-app.gif" className="screenshot-40" />

## 包装作为桌面应用

恭喜！ 您已经使用 Flet 创建了计算器应用程序，看起来很棒！ 现在是时候与世界共享您的应用程序了！

Flet Python 应用程序及其所有依赖项都可以包装到可执行文件中，并且用户可以在其计算机上运行它，而无需安装 Python 解释器或任何模块。

[按照以下说明](/docs/guides/python/getting-started#packaging-a-desktop-app)将计算器应用程序包装到可执行文件中。

## 部署 Web 应用程序

[遵循以下说明](/docs/guides/python/getting-started#deploying-a-web-app)将您的 Flet 应用程序部署为 web 应用程序，以 Fly.io 或 repland。

## summary

在本教程中，您学会了如何:

- 创建一个简单的 Flet app;
- 使用可重复使用的 UI 组件；
- 使用`Column`，`Row`和`Container` Controls 设计 UI 布局；
- 处理事件；
- 将您的 Flet 应用程序包装到可执行文件中；
- 将您的 Flet 应用程序部署到 Web；

为了进一步阅读，您可以探索[控件](/docs/controls)和[示例存储库](https://github.com/flet-dev/examples/tree/main/python)。
我们很乐意倾听您的反馈！ 请给我们放置一个[电子邮件](mailto:hello@flet.dev)，加入[Discord](https://discord.gg/dzWXP8SHG8)的讨论，请在[Twitter](https://twitter.com/fletdev)上关注。
