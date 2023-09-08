---
title: Creating Flet apps in Python
description: Learn how to build Flet apps in Python.
sidebar_label: Getting started
---

要编写一个 Flet 应用程序，您不需要成为前端大师，但是建议对 Python 和面向对象的编程具有基本知识。

在本指南中，我们将研究 Flet 应用程序的结构，学习如何使用 Flet 控件输出数据，从用户请求数据并构建基本页面布局。 我们还将介绍一些包装和部署选项，以向您的用户交付现成的应用程序。

## 安装`flet`模块

Flet 需要 Python 3.7 或更高。 要从 Flet 开始，您需要先安装`flet`模块:

```bash
pip install flet
```

:::注意
升级`flet`模块运行以下命令

```bash
pip install flet --upgrade
```

:::

要安装 Flet 预释放（对于高级用户）运行以下命令

```bash
pip install flet --pre
```

:::谨慎
我们建议在虚拟环境中安装预释放的构建。
:::

### linux

在 Linux 和 WSL 上运行 Flet 应用程序需要[GSTREAMER](https://gstreamer.freedesktop.org/)库已安装。 很可能您已经在系统中已经有它们了，但是如果您在加载共享库时遇到错误: libgstapp-1.0.so.0: 无法打开共享对象文件: no use files 或 directory`在运行 Flet app 时， 需要安装 Gstreamer。

要在 Ubuntu/Debian 上安装 GStreamer，请运行以下命令:

```
sudo apt-get update
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

请参阅[本指南](https://gstreamer.freedesktop.org/documentation/installing/on-linux.html?gi-language=c)以在其他 Linux 发行仪上安装。

### WSL

Flet 应用程序可以在 WSL2 上运行。 如果您获得了“无法打开显示”错误[遵循本指南](https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg)进行故障排除。

## 基本应用程序结构

一个非常最小的 Flet 应用具有以下结构:

```python
import flet as ft

def main(page: ft.Page):
    # add/update controls on Page
    pass

ft.app(target=main)
```

<img src="/img/docs/getting-started/basic-app-structure.png" className="screenshot-50" />

:::注意
本节故意称为“基本”，因为本指南的稍后，我们将查看具有可重复使用控件的应用程序结构的更多实际方法。
:::

典型的 Flet 程序以呼叫`flet.app()`的呼叫结束，该应用程序开始等待新的用户会话。 函数`main()`是 Flet 应用程序中的入口点。 每个用户会话都将其调用，其中`Page`实例传递到其中。 在浏览器中运行 Flet 应用程序时，每个打开的选项卡片或页面都会启动新的用户会话。 当作为桌面应用程序运行时，只会创建一个会话。

`Page`就像用户特定的“画布”，用户会话的视觉状态。 要构建应用程序 UI，您将控件添加并删除到页面上，请更新其属性。 上面的代码示例将仅向每个用户显示一个空白页。

默认情况下，Flet 应用程序从本机 OS 窗口开始，这对于开发非常方便。 但是，您可以通过对`flet.app`的调用进行修改如下:

```python
ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

:::信息
在内部，每个 Flet 应用程序都是一个 Web 应用程序，即使它在本机 OS 窗口中打开，内置的 Web 服务器仍在背景上启动。 Flet Web 服务器称为“ Flet D”，默认情况下它在随机 TCP 端口上侦听。 您可以指定自定义 TCP 端口，然后在浏览器中与桌面视图一起打开该应用程序:

```python
flet.app(port=8550, target=main)
```

在您的浏览器中打开`http://localhost:<port>`，查看 Flet app 的 Web 版本。
:::

## Controls

用户界面由**控件**（又称小部件）组成。 为了使用户可见的控件必须添加到`Page`或其他控件内部。 页面是最高的控制。 嵌套控件彼此可以表示为具有页面的树。

控件只是常规的 Python 课程。 通过具有匹配其属性的参数的构造函数创建控制实例，例如:

```python
t = ft.Text(value="Hello, world!", color="green")
```

要在页面上显示控件，将其添加到`controls`页面列表中，然后调用`page.update()`以将页面更改发送到浏览器或桌面客户端:

```python
import flet as ft

def main(page: ft.Page):
    t = ft.Text(value="Hello, world!", color="green")
    page.controls.append(t)
    page.update()

ft.app(target=main)
```

<img src="/img/docs/getting-started/controls-text.png" className="screenshot-50" />

:::注意
在以下示例中，我们将仅显示`main`函数的内容。
:::

您可以修改控制属性，UI 将在下一个`page.update()`上更新:

```python
t = ft.Text()
page.add(t) # it's a shortcut for page.controls.append(t) and then page.update()

for i in range(10):
    t.value = f"Step {i}"
    page.update()
    time.sleep(1)
```

一些控件是“容器”控件（例如页面），其中可能包含其他控件。 例如，`Row`控件允许一行排列其他控件:

```python
page.add(
    ft.Row(controls=[
        ft.Text("A"),
        ft.Text("B"),
        ft.Text("C")
    ])
)
```

或`TextField`和`ElevatedButton`旁边:

```python
page.add(
    ft.Row(controls=[
        ft.TextField(label="Your name"),
        ft.ElevatedButton(text="Say my name!")
    ])
)
```

`page.update()`足够聪明，只能发送自上次呼叫以来所做的更改，因此您可以在页面上添加一些新控件，删除其中一些，更改其他控件的属性，然后致电`page.update()`进行批处理 更新，例如:

```python
for i in range(10):
    page.controls.append(ft.Text(f"Line {i}"))
    if i > 4:
        page.controls.pop(0)
    page.update()
    time.sleep(0.3)
```

某些控件（例如按钮）可能会使事件处理程序在用户输入上做出反应，例如`ElevatedButton.on_click`:

```python
def button_clicked(e):
    page.add(ft.Text("Clicked!"))

page.add(ft.ElevatedButton(text="Click me", on_click=button_clicked))
```

更高级的示例，用于简单的待办事项:

```python
import flet as ft

def main(page):
    def add_clicked(e):
        page.add(ft.Checkbox(label=new_task.value))
        new_task.value = ""
        new_task.focus()
        new_task.update()

    new_task = ft.TextField(hint_text="Whats needs to be done?", width=300)
    page.add(ft.Row([new_task, ft.ElevatedButton("Add", on_click=add_clicked)]))

ft.app(target=main)
```

<img src="/img/docs/getting-started/simple-ToDo.png" className="screenshot-50" />

:::信息
Flet 实现 _命令 _ UI 模型，其中您“手动”构建具有状态控件的应用程序 UI，然后通过更新控制属性将其突变。 Flutter 实现 *声明 *模型，其中 UI 自动在应用程序数据更改上重新构建。
在现代前端应用程序中管理应用程序状态本质上是复杂的任务，Flet 的“老式”方法可能对没有前端经验的程序员更具吸引力。
:::

### `visible` `visible`

每个控件都有`visible`属性，该属性为`true`，默认情况下 - 控件在页面上呈现。 将`visible`设置为`false`完全防止控件（及其所有 children（如果有）（如果有），则无法在页面上渲染。 隐藏的控件不能专注或使用键盘或鼠标选择，并且它们不会发出任何事件。

### `disabled`属性

每个控件都具有`disabled`属性，该属性为`false`默认情况下 - 控制及其所有 children 均已启用。
`disabled`属性主要用于`TextField`，`Dropdown`，`Checkbox`，按钮之类的数据输入控件。
但是，`disabled`可以设置为父控件，其值将递归递归到所有 children。

例如，如果您的表单具有多个输入控件，则可以单独设置`disabled`属性`disabled`属性:

```python
first_name = ft.TextField()
last_name = ft.TextField()
first_name.disabled = True
last_name.disabled = True
page.add(first_name, last_name)
```

或者，您可以将表单控件放入容器中，例如 `Column`，然后为列设置`disabled`:

```python
first_name = ft.TextField()
last_name = ft.TextField()
c = ft.Column(controls=[
    first_name,
    last_name
])
c.disabled = True
page.add(c)
```

## 控制 refs

Flet 控件是对象，要访问其属性，我们需要将引用（变量）保留到这些对象。

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

<img src="/img/docs/getting-started/control-refs.png" className="screenshot-50" />

在`main()`方法的开头，我们创建了三个控件，我们将在按钮的`on_click`处理程序中使用: 两个`TextField`的名称和姓氏两个`TextField`，以及一个`Column` - 容器来迎接消息。 我们使用其所有属性集创建控件，并在`main()`方法的末尾，在`page.add()`调用中，我们使用其引用（变量）。

当添加越来越多的控件和事件处理程序时，将所有控制定义保持在一个地方变得具有挑战性，因此它们散布在`main()`主体上。 瞥了一眼`page.add()`参数，很难想象（不持续跳到 IDE 中的可变定义），最终形式会是什么样:

```python {2-5}
    page.add(
        first_name,
        last_name,
        ft.ElevatedButton("Say hello!", on_click=btn_click),
        greetings,
    )
```

`first_name` textfield，它是否设置自动对焦？ 问候是`Row`还是`Column`？

Flet 提供`Ref`实用程序类，该类允许定义对控件的引用，在事件处理程序中使用该引用，并在构建树时将其引用以后对真实控件进行设置。 这个想法来自[React](https://reactjs.org/docs/refs-and-the-dom.html)。

定义一个新的键入控制参考:

```python
first_name = ft.Ref[ft.TextField]()
```

要访问引用的控件（控制脱线）使用`Ref.current`属性:

```python
# empty first name
first_name.current.value = ""
```

要将控件分配给参考，请将`Control.ref`属性设置为参考:

```python {2}
page.add(
    ft.TextField(ref=first_name, label="First name", autofocus=True)
)
```

:::注意
所有 Flet 控件具有`ref`属性。
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

<img src="/img/docs/getting-started/control-refs-rewritten.png" className="screenshot-50" />

现在，我们可以清楚地看到`page.add()`页面的结构及其构建的所有控件。

是的，逻辑变得更加详细，因为您需要添加`.current.`才能访问 REF 的控件，但这是个人喜好的问题:)
