---
title: Create To-Do app in Python with Flet
sidebar_label: Python - To-Do app
slug: python-todo
---

在本教程中，我们将逐步向您展示如何使用 Flet 框架在 Python 中创建一个 TODO Web 应用程序，然后在 Internet 上共享。 该应用程序是一个单文件控制台程序，仅[Python Code 的 180 行（格式化！）](https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py)，但它是一个具有丰富，响应式 UI 的多条文，现代的单页应用程序:

<img src="/website/img/docs/tutorial/todo-complete-demo-web.gif" className="screenshot-70" />

您可以看到实时演示[此处](https://gallery.flet.dev/todo/)。

我们为教程选择了一个 TODO 应用程序，因为它涵盖了创建任何 Web 应用所需的所有基本概念: 构建页面布局，添加控件，处理事件，显示和编辑列表，可重复使用的 UI 组件以及部署选项以及部署选项 。

该教程由以下步骤组成:

- [以 Flet 的入门 Flet](#getting-started-with-flet)
- [添加页面控件和处理事件](#adding-page-controls-and-handling-events)
- [查看，编辑和删除列表项目](#view-edit-and-delete-list-items)
- [过滤列表项目](#filtering-list-items)
- [最终触摸](#final-touches)
- [部署应用程序](#deploying-the-app)

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

<img src="/website/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## 添加页面控件和处理事件

现在，我们已经准备好创建一个多用户 TODO 应用。

首先，我们需要一个[textfield](/docs/controls/textfield)来输入任务名称，并带有一个事件处理程序，将显示一个新任务，并将显示[复选框](/docs/controls/checkbox)。

使用以下内容创建`todo.py`:

```python
import flet as ft

def main(page: ft.Page):
    def add_clicked(e):
        page.add(ft.Checkbox(label=new_task.value))
        new_task.value = ""
        page.update()

    new_task = ft.TextField(hint_text="Whats needs to be done?")

    page.add(new_task, ft.FloatingActionButton(icon=ft.icons.ADD, on_click=add_clicked))

ft.app(target=main)
```

运行该应用程序，您应该看到这样的页面:

<img src="/website/img/docs/tutorial/todo-app-1.png" className="screenshot-40" />

### 页面布局

现在，让我们的应用看起来不错！ 我们希望整个应用程序位于页面的顶部中心，占用 600 个 PX 宽度。 TextField 和“+”按钮应水平对齐，并占用完整的应用程序宽度:

<img src="/website/img/docs/tutorial/todo-diagram-1.svg" className="screenshot" />

[`Row`](/docs/controls/row)是用于将其 children 放置在页面上的控件。 [`Column`](/docs/controls/column)是用于将其 children 放置在页面上的控件。

用以下内容替换`todo.py`内容:

```python
import flet as ft


def main(page: ft.Page):
    def add_clicked(e):
        tasks_view.controls.append(ft.Checkbox(label=new_task.value))
        new_task.value = ""
        view.update()

    new_task = ft.TextField(hint_text="Whats needs to be done?", expand=True)
    tasks_view = ft.Column()
    view=ft.Column(
        width=600,
        controls=[
            ft.Row(
                controls=[
                    new_task,
                    ft.FloatingActionButton(icon=ft.icons.ADD, on_click=add_clicked),
                ],
            ),
            tasks_view,
        ],
    )

    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.add(view)

ft.app(target=main)
```

运行该应用程序，您应该看到这样的页面:

<img src="/website/img/docs/tutorial/todo-app-2.png" className="screenshot-50" />

### 可重复使用的 UI 组件

虽然我们可以继续在`main`函数中编写应用程序，但最好的做法是创建可重复使用的 UI 组件。 想象一下，您正在使用应用程序标头，侧面菜单或 UI，这将成为大型项目的一部分。 即使您现在无法想到这种用途，我们仍然建议您牢记合成性和可重复使用性创建所有 Web 应用程序。

为了使可重复使用的 todo 应用程序组件，我们将在单独的类中封装其状态和演示逻辑:

```python
import flet as ft

class TodoApp(ft.UserControl):
    def build(self):
        self.new_task = ft.TextField(hint_text="Whats needs to be done?", expand=True)
        self.tasks = ft.Column()

        # application's root control (i.e. "view") containing all other controls
        return ft.Column(
            width=600,
            controls=[
                ft.Row(
                    controls=[
                        self.new_task,
                        ft.FloatingActionButton(icon=ft.icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                self.tasks,
            ],
        )

    def add_clicked(self, e):
        self.tasks.controls.append(ft.Checkbox(label=self.new_task.value))
        self.new_task.value = ""
        self.update()


def main(page: ft.Page):
    page.title = "ToDo App"
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.update()

    # create application instance
    todo = TodoApp()

    # add application's root control to the page
    page.add(todo)

ft.app(target=main)
```

:::注意
尝试将两个`TodoApp`组件添加到页面:

```python
# create application instance
app1 = TodoApp()
app2 = TodoApp()

# add application's root control to the page
page.add(app1, app2)
```

:::

## 查看，编辑和删除列表项目

在[上一个步骤](#adding-page-controls-and-handling-events)中，我们创建了一个基本的 TODO 应用，其中显示为复选框。 让我们通过在任务名称旁边添加“编辑”和“删除”按钮来改进应用程序。 “编辑”按钮将将任务项切换为编辑模式。

<img src="/website/img/docs/tutorial/todo-diagram-2.svg" className="screenshot" />

每个任务项由两个行表示: `display_view`与复选框，“编辑”和“删除”按钮和`edit_view`行带有 TextField 和“ Save”按钮。 `view`列用作`display_view`和`edit_view`行的容器。

在此步骤之前，该代码足够简短，可以将其完全包含在教程中。 展望未来，我们将仅强调一步中引入的更改。

从[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/todo/to-do-4.py)复制此步骤的整个代码。 在下面，我们将解释为实现视图，编辑和删除任务所做的更改。

为了封装任务项的视图和操作，我们引入了一个新的`Task`类:

```python
class Task(ft.UserControl):
    def __init__(self, task_name):
        super().__init__()
        self.task_name = task_name

    def build(self):
        self.display_task = ft.Checkbox(value=False, label=self.task_name)
        self.edit_name = ft.TextField(expand=1)

        self.display_view = ft.Row(
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
            vertical_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                self.display_task,
                ft.Row(
                    spacing=0,
                    controls=[
                        ft.IconButton(
                            icon=ft.icons.CREATE_OUTLINED,
                            tooltip="Edit To-Do",
                            on_click=self.edit_clicked,
                        ),
                        ft.IconButton(
                            ft.icons.DELETE_OUTLINE,
                            tooltip="Delete To-Do",
                            on_click=self.delete_clicked,
                        ),
                    ],
                ),
            ],
        )

        self.edit_view = ft.Row(
            visible=False,
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
            vertical_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                self.edit_name,
                ft.IconButton(
                    icon=ft.icons.DONE_OUTLINE_OUTLINED,
                    icon_color=ft.colors.GREEN,
                    tooltip="Update To-Do",
                    on_click=self.save_clicked,
                ),
            ],
        )
        return ft.Column(controls=[self.display_view, self.edit_view])

    def edit_clicked(self, e):
        self.edit_name.value = self.display_task.label
        self.display_view.visible = False
        self.edit_view.visible = True
        self.update()

    def save_clicked(self, e):
        self.display_task.label = self.edit_name.value
        self.display_view.visible = True
        self.edit_view.visible = False
        self.update()
```

此外，我们更改了`TodoApp`类以创建并保持`Task`实例，当“添加”按钮单击时:

```python
class TodoApp(ft.UserControl):
    def build(self):
        self.new_task = ft.TextField(hint_text="Whats needs to be done?", expand=True)
        self.tasks = ft.Column()
        # ...

    def add_clicked(self, e):
        task = Task(self.new_task.value, self.task_delete)
        self.tasks.controls.append(task)
        self.new_task.value = ""
        self.update()
```

对于“删除”任务操作，我们在`TodoApp`类中实现了`task_delete()`方法，该方法接受任务控制实例为参数:

```python
class TodoApp(ft.UserControl):
    # ...
    def task_delete(self, task):
        self.tasks.controls.remove(task)
        self.update()
```

然后，我们将对`task_delete`方法的引用传递到任务构造器中，并在“删除”按钮事件处理程序上称其为:

```python
class Task(ft.UserControl):
    def __init__(self, task_name, task_delete):
        super().__init__()
        self.task_name = task_name
        self.task_delete = task_delete

        # ...

    def delete_clicked(self, e):
        self.task_delete(self)
```

运行应用程序并尝试编辑和删除任务:

<img src="/website/img/docs/tutorial/view-edit-delete.gif" className="screenshot-50" />

## 过滤列表项目

我们已经拥有一个功能性的托尔德应用程序，可以在其中创建，编辑和删除任务。 为了提高生产力，我们希望能够通过其状态过滤任务。

从[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/todo/to-do-5.py)复制此步骤的整个代码。 下面我们将解释我们为实施过滤所做的更改。

`Tabs`控件用于显示过滤器:

```python

# ...

class TodoApp(ft.UserControl):
    def __init__(self):
        self.tasks = []
        self.new_task = ft.TextField(hint_text="Whats needs to be done?", expand=True)
        self.tasks = ft.Column()

        self.filter = ft.Tabs(
            selected_index=0,
            on_change=self.tabs_changed,
            tabs=[ft.Tab(text="all"), ft.Tab(text="active"), ft.Tab(text="completed")],
        )

        self.view = ft.Column(
            width=600,
            controls=[
                ft.Row(
                    controls=[
                        self.new_task,
                        ft.FloatingActionButton(icon=ft.icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                ft.Column(
                    spacing=25,
                    controls=[
                        self.filter,
                        self.tasks,
                    ],
                ),
            ],
        )
```

要显示任务的不同列表，根据其状态，我们可以使用“全部”，“ Active”和“已完成”任务维护三个列表。 但是，我们选择了一种更简单的方法，即我们维护相同的列表，并且仅根据其状态更改任务的可见性。
在`TodoApp`类中，我们覆盖了`update()`方法，该方法通过所有任务迭代并根据任务的状态更新其`visible`属性:

```python
class TodoApp(ft.UserControl):

    # ...

    def update(self):
        status = self.filter.tabs[self.filter.selected_index].text
        for task in self.tasks.controls:
            task.visible = (
                status == "all"
                or (status == "active" and task.completed == False)
                or (status == "completed" and task.completed)
            )
        super().update()
```

当我们单击选项卡片或更改任务状态时，应进行过滤。 {96523 \_

```python
class TodoApp(ft.UserControl):

    # ...

    def tabs_changed(self, e):
        self.update()

class Task(ft.UserControl):
    def __init__(self, task_name, task_status_change, task_delete):
        super().__init__()
        self.completed = False
        self.task_name = task_name
        self.task_status_change = task_status_change
        self.task_delete = task_delete

    def build(self):
        self.display_task = ft.Checkbox(
            value=False, label=self.task_name, on_change=self.status_changed
        )
        # ...

    def status_changed(self, e):
        self.completed = self.display_task.value
        self.task_status_change(self)
```

运行应用程序并通过单击选项卡片: 尝试过滤任务:

<img src="/website/img/docs/tutorial/todo-app-filtering.gif" className="screenshot-50" />

## 最终触摸

我们的 TODO 应用程序现在几乎完成了。 作为最后的触摸，我们将添加一个页脚（`Column`控件），以显示不完整的任务（`Text`控制）和“清除完成”按钮。

从[此处](https://github.com/flet-dev/examples/blob/main/python/apps/todo/todo.py)复制此步骤的整个代码。 下面我们强调了我们为实施页脚所做的更改:

```python
class TodoApp():
    def __init__(self):
        # ...

        self.items_left = ft.Text("0 items left")

        self.view = ft.Column(
            width=600,
            controls=[
                ft.Row([ ft.Text(value="Todos", style="headlineMedium")], alignment=ft.MainAxisAlignment.CENTER),
                ft.Row(
                    controls=[
                        self.new_task,
                        ft.FloatingActionButton(icon=ft.icons.ADD, on_click=self.add_clicked),
                    ],
                ),
                ft.Column(
                    spacing=25,
                    controls=[
                        self.filter,
                        self.tasks,
                        ft.Row(
                            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,
                            vertical_alignment=ft.CrossAxisAlignment.CENTER,
                            controls=[
                                self.items_left,
                                ft.OutlinedButton(
                                    text="Clear completed", on_click=self.clear_clicked
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        )

    # ...

    def clear_clicked(self, e):
        for task in self.tasks.controls[:]:
            if task.completed:
                self.task_delete(task)

    def update(self):
        status = self.filter.tabs[self.filter.selected_index].text
        count = 0
        for task in self.tasks.controls:
            task.visible = (
                status == "all"
                or (status == "active" and task.completed == False)
                or (status == "completed" and task.completed)
            )
            if not task.completed:
                count += 1
        self.items_left.value = f"{count} active item(s) left"
        super().update()
```

运行应用程序:

<img src="/website/img/docs/tutorial/todo-app-4.png" className="screenshot-50" />

## 部署应用程序

恭喜！ 您已经使用 Flet 创建了第一个 Python 应用程序，看起来很棒！

现在是时候与世界共享您的应用程序了！

[遵循以下说明](/docs/guides/python/deploying-web-app)将您的 Flet 应用程序部署到 Fly.io 或 REPLIT。

## 摘要

在本教程中，您已经学会了如何:

- 创建一个简单的 Flet app;
- 使用可重复使用的 UI 组件；
- 使用`Column`和`Row`控件设计 UI 布局；
- 使用列表: 查看，编辑和删除项目，过滤；
- 将您的 Flet 应用程序部署到 Web；

为了进一步阅读，您可以探索[控件](/docs/controls)和[示例存储库](https://github.com/flet-dev/examples/tree/main/python)。

我们很乐意倾听您的反馈！ 请给我们一个[电子邮件](mailto:hello@flet.dev)，加入[Discord](https://discord.gg/dzWXP8SHG8)的讨论，请在[Twitter](https://twitter.com/fletdev)上关注。
