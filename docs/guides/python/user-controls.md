---
title: User controls
sidebar_label: User controls
---

用户控制（`UserControl`）允许通过组合现有 Flet 控件来构建隔离的可重复使用组件。 用户控制的行为就像`Control`，可以具有方法和属性。

以下是用户控制的最小示例:

```python
import flet as ft

class GreeterControl(ft.UserControl):
    def build(self):
        return ft.Text("Hello!")

def main(page):
    page.add(GreeterControl())

ft.app(target=main)
```

UserControl 必须实现`build()`的方法，该方法被称为构建控件的 UI，并且应返回一个`Control`实例或控件的`List`。 `UserControl`是从[`Stack`](/docs/controls/stack)继承的，因此多个 children 将彼此安排。 如果您需要以不同的方式安排 Control 的 UI 使用[`Row`](/docs/controls/row)，[`Column`](/docs/controls/column)或其他[Layout Controls](/docs/controls/layout)例如: :

```python
class GreeterControl(ft.UserControl):
    def build(self):
        return ft.Column([
            ft.TextField(label="Your name"),
            ft.ElevatedButton("Login")
        ])
```

UserControl 与外部布局隔离，即，当`update()`方法称为父对照时，USERCONTROL 内部的任何更改都不包含在更新摘要中。 UserControl 应该致电`self.update()`将其更改推向 Flet 页面，例如:

```python
import flet as ft

class Counter(ft.UserControl):
    def add_click(self, e):
        self.counter += 1
        self.text.value = str(self.counter)
        self.update()

    def build(self):
        self.counter = 0
        self.text = ft.Text(str(self.counter))
        return ft.Row([self.text, ft.ElevatedButton("Add", on_click=self.add_click)])

def main(page):
    page.add(Counter(), Counter())

ft.app(target=main)
```

<img src="/img/docs/getting-started/user-control-counter.gif" className="screenshot-40" />

您可以将事件处理程序（例如`def add_click（self，e）`）和控制引用（例如`self.text`）称为类成员，也可以使用本地变量和内部功能实现所有 USERCONTROL 的逻辑。 例如，以上代码可以重写为:

```python
class Counter(ft.UserControl):
    def build(self):

        self.counter = 0
        text = ft.Text(str(self.counter))

        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return ft.Row([text, ft.ElevatedButton("Add", on_click=add_click)])
```

:::注意
`counter`不能将其声明为局部变量，因为它在`add_click`方法内看不到它，因此必须将其声明为类字段`self.counter`。
:::

用户控件可以具有传递自定义数据的构造函数，例如:

```python
import flet as ft

class Counter(ft.UserControl):
    def __init__(self, initial_count):
        super().__init__()
        self.counter = initial_count

    def build(self):
        text = ft.Text(str(self.counter))
        def add_click(e):
            self.counter += 1
            text.value = str(self.counter)
            self.update()

        return ft.Row([text, ft.ElevatedButton("Add", on_click=add_click)])

# then use the control
def main(page):
    page.add(
        Counter(100),
        Counter(200))

ft.app(target=main)
```

:::注意
`super().__init__()`必须始终在您自己的构造函数中调用。
:::

用户控件提供生命周期“钩”方法:

- `did_mount()` - 在`UserControl`添加到页面并分配的瞬态`id`后调用。
- `will_unmount()` - 在从页面上删除`UserControl`之前调用。

使用这些方法，我们可以实现一个简单的“倒计时”控制:

```python
import flet as ft
import time, threading

class Countdown(ft.UserControl):
    def __init__(self, seconds):
        super().__init__()
        self.seconds = seconds

    def did_mount(self):
        self.running = True
        self.th = threading.Thread(target=self.update_timer, args=(), daemon=True)
        self.th.start()

    def will_unmount(self):
        self.running = False

    def update_timer(self):
        while self.seconds and self.running:
            mins, secs = divmod(self.seconds, 60)
            self.countdown.value = "{:02d}:{:02d}".format(mins, secs)
            self.update()
            time.sleep(1)
            self.seconds -= 1

    def build(self):
        self.countdown = ft.Text()
        return self.countdown

def main(page: ft.Page):
    page.add(Countdown(120), Countdown(60))

ft.app(target=main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />
