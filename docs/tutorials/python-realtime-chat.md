---
title: Creating realtime chat app in Python
sidebar_label: Python - Realtime Chat app
---

在本教程中，我们将创建一个琐碎的内存聊天应用程序，该应用程序将帮助您理解 Flet 框架基础知识。 该应用程序可能是创建自己更复杂和有用的项目的好起点。

在本教程中，您将学习如何:

- [创建您的第一个 Flet app](#getting-started-with-flet)
- [添加页面控件和处理事件](#adding-page-controls-and-handling-events)
- [使用内置 PubSub 库的广播消息](#broadcasting-chat-messages)
- [使用 AlertDialog 控件接受用户名](#user-name-dialog)
- [使用可重复使用控件增强用户界面](#enhancing-user-interface)
- [将应用程序部署为 Web 应用程序](#deploying-the-app)
- [作为渐进式 Web 应用程序（PWA）提供该应用程序](#progressive-web-app-pwa)

完整的应用程序看起来像这样:

<img src="/img/docs/chat-tutorial/chat.gif" className="screenshot-50" />

您可以使用实时演示[此处](https://flet-chat.fly.dev)。

可以找到聊天应用程序的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/chat/chat.py)。

## 开始使用 Flet 开始

这是从“你好，世界！”开始的传统。 应用程序！

Flet 需要 Python 3.7 或更高。 要在 Python 中创建 Flet 应用程序，您需要先安装`flet`模块:

```bash
pip install flet
```

:::NoteUpgrading Flet
升级`flet`模块运行以下命令

```bash
pip install flet --upgrade
```

:::

使用以下内容创建`hello.py`:

```python title="hello.py"
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(value="Hello, world!"))

ft.app(target=main)
```

运行此应用程序，您将看到一个带有问候的新窗口:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## 添加页面控件和处理事件

首先，我们希望能够获取用户输入（聊天消息）并在屏幕上显示消息历史记录。 此步骤的布局看起来像这样:

<img src="/img/docs/chat-tutorial/chat-layout-1.svg" className="screenshot-70" />

要实现此布局，我们将使用这些 Flet 控件:

- [列](/docs/controls/column) - 一个容器垂直显示聊天消息（文本控件）。
- [text](/docs/controls/text) - 聊天列中显示的聊天消息。
- [textfield](/docs/controls/textfield) - 用于从用户获取新消息输入的输入控件。
- [EvipedButton](/docs/controls/elevatedbutton) - “发送”按钮，将新消息添加到聊天列中。
- [row](/docs/controls/row) - 一个容器水平显示 Textfield 和抬高 to。

使用以下内容创建`chat.py`:

```python
import flet as ft

def main(page: ft.Page):
    chat = ft.Column()
    new_message = ft.TextField()

    def send_click(e):
        chat.controls.append(ft.Text(new_message.value))
        new_message.value = ""
        page.update()

    page.add(
        chat, ft.Row(controls=[new_message, ft.ElevatedButton("Send", on_click=send_click)])
    )

ft.app(main, view=ft.AppView.WEB_BROWSER)
```

当用户单击“发送”按钮时，它会触发`on_click`事件，该事件调用`send_click`方法。 `send_click`然后将新的`Text`控制到列`controls`的列表中，并清除`new_message` textfield 值。

:::注意
更新控件的任何属性后，应要求对控件的`update()`方法（或其父对控件）进行更新生效。
:::

聊天应用现在看起来像这样:
<img src="/img/docs/chat-tutorial/chat-1.png" className="screenshot-40" />

## 广播聊天消息

在上一步中，我们创建了一个简单的 Web 应用程序，该应用程序从用户中获取输入，并在屏幕上显示聊天消息。 如果您在两个 Web 浏览器选项卡片中打开此应用程序，它将创建两个应用程序会话。 每个会话都会有自己的消息列表。

要构建一个实时聊天应用程序，您需要以某种方式传递聊天应用程序会话之间的消息。 当用户发送消息时，应将其广播到所有其他应用程序会话并在其页面上显示。

Flet 提供了一个简单的内置[pubsub](/docs/guides/python/pub-sub)在页面之间的异步通信的机制。

首先，我们需要订阅用户接收广播消息:

```python
    page.pubsub.subscribe(on_message)
```

`pubsub.subsribe()`方法将将当前的应用程序会话添加到订户列表中。 它接受`handler`作为一个参数，以后将在发布者调用`pubsub.send_all()`方法的那一刻被调用。

在`handler`中，我们将在 chat `controls`的列表中添加新消息（`Text`）:

```python
    def on_message(message: Message):
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
        page.update()
```

最后，当用户单击“发送”按钮时，您需要调用`pubsub.send_all()`方法:

```python
    def send_click(e):
        page.pubsub.send_all(Message(user=page.session_id, text=new_message.value))
        new_message.value = ""
        page.update()

    page.add(chat, ft.Row([new_message, ft.ElevatedButton("Send", on_click=send_click)]))
```

`pubsub.send_all()`将调用`on_message()`，然后将消息对象传递给它。

这是此步骤的完整代码:

```python
import flet as ft

class Message():
    def __init__(self, user: str, text: str):
        self.user = user
        self.text = text

def main(page: ft.Page):

    chat = ft.Column()
    new_message = ft.TextField()

    def on_message(message: Message):
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(Message(user=page.session_id, text=new_message.value))
        new_message.value = ""
        page.update()

    page.add(chat, ft.Row([new_message, ft.ElevatedButton("Send", on_click=send_click)]))

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

<img src="/img/docs/chat-tutorial/chat-2.gif" className="screenshot-100" />

## 用户名对话框

您在上一步中创建的聊天应用具有在用户会话之间交换消息所需的基本功能。 但是，它不是很好的用户友好，因为它显示了发送消息的`session_id`，该消息并没有说明与您交流的人。

让我们改进我们的应用程序以显示每个消息的用户名而不是`session_id`。 要捕获用户名，我们将使用[`AlertDialog`](/docs/controls/alertdialog)控制。 让我们将其添加到页面:

```python
    user_name = ft.TextField(label="Enter your name")

    page.dialog = ft.AlertDialog(
        open=True,
        modal=True,
        title=ft.Text("Welcome!"),
        content=ft.Column([user_name], tight=True),
        actions=[ft.ElevatedButton(text="Join chat", on_click=join_click)],
        actions_alignment="end",
    )
```

:::注意
由于我们已经将其`open`属性设置为`True`。
:::，将在程序开始时打开一个对话框

<img src="/img/docs/chat-tutorial/username-dialog.png" className="screenshot-40" />

当用户单击“加入聊天”按钮时，它将调用`join_click`方法，该方法应向所有订户发送消息，并通知他们用户已加入聊天。 此消息应该与常规聊天消息不同，例如:
<img src="/img/docs/chat-tutorial/chat-4.png" className="screenshot-40" />

让我们将`message_type`属性添加到`Message`类中，以区分登录和聊天消息:

```python
class Message():
    def __init__(self, user: str, text: str, message_type: str):
        self.user = user
        self.text = text
        self.message_type = message_type
```

我们将在`on_message`中检查`message_type`方法:

```python
def on_message(message: Message):
    if message.message_type == "chat_message":
        chat.controls.append(ft.Text(f"{message.user}: {message.text}"))
    elif message.message_type == "login_message":
        chat.controls.append(
            ft.Text(message.text, italic=True, color=ft.colors.BLACK45, size=12)
        )
    page.update()
```

现在将在两个事件上发送“ login_message”和“ chat_message”类型的消息: 当用户加入聊天时，用户发送消息时。

让我们创建`join_click`方法:

```python
def join_click(e):
    if not user_name.value:
        user_name.error_text = "Name cannot be blank!"
        user_name.update()
    else:
        page.session.set("user_name", user_name.value)
        page.dialog.open = False
        page.pubsub.send_all(Message(user=user_name.value, text=f"{user_name.value} has joined the chat.", message_type="login_message"))
        page.update()
```

我们使用[页面会话存储](/docs/guides/python/session-storage)将 User_name 存储在`send_click`方法中以发送聊天消息的未来使用。

:::注意
用户名对话框将在我们将其`open`属性设置为`False`并调用`update()`方法后立即关闭。
:::
最后，让我们更新`send_click`方法，使用`user_name`我们使用`page.session`进行保存的`user_name`:

```python
def send_click(e):
    page.pubsub.send_all(Message(user=page.session.get('user_name'), text=new_message.value, message_type="chat_message"))
    new_message.value = ""
    page.update()
```

可以找到此步骤的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/chat/chat_3.py)。

<img src="/img/docs/chat-tutorial/chat-3.gif" className="screenshot-100" />

## 增强用户界面

您在上一步中创建的聊天应用程序已经达到了具有基本登录功能之间在用户之间交换消息的目的。

在进行[部署应用程序](#deploying-the-app)之前，我们建议在其中添加一些额外功能，以改善用户体验并使应用程序看起来更专业。

### 可重复使用的用户控件

您可能需要以不同的格式显示消息，例如:
<img src="/img/docs/chat-tutorial/chat-layout-chatmessage.svg" className="screenshot-70" />

聊天消息现在将是包含[`CircleAvatar`](/docs/controls/circleavatar)的`Row`，带有用户名缩写和`Column`，其中包含两个`Text`控件: 用户名和消息文本。

我们需要在聊天应用程序中显示很多聊天消息，因此创建自己的可重复使用的控件是有意义的。 让我们创建一个新的`ChatMessage`类，该类将从`Row`继承。

当创建`ChatMessage`类的实例时，我们将以参数为`Message`对象，然后`ChatMessage`将基于`message.user_name`和`message.text`:

```python
class ChatMessage(ft.Row):
    def __init__(self, message: Message):
        super().__init__()
        self.vertical_alignment="start"
        self.controls=[
                ft.CircleAvatar(
                    content=ft.Text(self.get_initials(message.user_name)),
                    color=ft.colors.WHITE,
                    bgcolor=self.get_avatar_color(message.user_name),
                ),
                ft.Column(
                    [
                        ft.Text(message.user_name, weight="bold"),
                        ft.Text(message.text, selectable=True),
                    ],
                    tight=True,
                    spacing=5,
                ),
            ]

    def get_initials(self, user_name: str):
        return user_name[:1].capitalize()

    def get_avatar_color(self, user_name: str):
        colors_lookup = [
            ft.colors.AMBER,
            ft.colors.BLUE,
            ft.colors.BROWN,
            ft.colors.CYAN,
            ft.colors.GREEN,
            ft.colors.INDIGO,
            ft.colors.LIME,
            ft.colors.ORANGE,
            ft.colors.PINK,
            ft.colors.PURPLE,
            ft.colors.RED,
            ft.colors.TEAL,
            ft.colors.YELLOW,
        ]
        return colors_lookup[hash(user_name) % len(colors_lookup)]

```

`ChatMessage`控件提取缩写，算法从用户名衍生了头像颜色。
稍后，如果您决定改善控制布局或其逻辑，它不会影响程序的其余部分 - 这是封装的力量！

### 布置控件

现在，您可以使用全新的`ChatMessage`为聊天应用程序构建更好的布局:

<img src="/img/docs/chat-tutorial/chat-layout-2.svg" className="screenshot-70" />

将创建`ChatMessage`的实例，而不是`on_message`中的普通`Text`聊天消息:

```python
    def on_message(message: Message):
        if message.message_type == "chat_message":
            m = ChatMessage(message)
        elif message.message_type == "login_message":
            m = ft.Text(message.text, italic=True, color=ft.colors.BLACK45, size=12)
        chat.controls.append(m)
        page.update()
```

新布局提出的其他改进是:

- [`ListView`](/docs/controls/listview)，而不是显示消息的`Column`，以便稍后浏览消息
- `Container`用于显示`ListView`周围的边框
- [`IconButton`](/docs/controls/iconbutton)而不是`ElevatedButton`发送消息
- 使用[`expand`](/docs/controls#expand)属性以填充可用空间

这是您可以实现此布局的方式:

```python
    # Chat messages
    chat = ft.ListView(
        expand=True,
        spacing=10,
        auto_scroll=True,
    )

    # A new message entry form
    new_message = ft.TextField(
        hint_text="Write a message...",
        autofocus=True,
        shift_enter=True,
        min_lines=1,
        max_lines=5,
        filled=True,
        expand=True,
        on_submit=send_message_click,
    )

    # Add everything to the page
    page.add(
        ft.Container(
            content=chat,
            border=ft.border.all(1, ft.colors.OUTLINE),
            border_radius=5,
            padding=10,
            expand=True,
        ),
        ft.Row(
            [
                new_message,
                ft.IconButton(
                    icon=ft.icons.SEND_ROUNDED,
                    tooltip="Send message",
                    on_click=send_message_click,
                ),
            ]
        ),
    )
```

可以找到此步骤的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/chat/chat.py)。

这是聊天应用程序的最终版本，目的是本教程。 下面您可以阅读有关我们所做的增强功能的更多信息。

### Keyboard 支持

#### 聚焦输入控件

所有数据输入控件具有`autofocus`属性，将其设置为`True`时，将初始焦点移至控件。 如果一个页面上有`autofocus`设置的页面上有多个控件，则添加到页面上的第一个将获得焦点。

我们在对话框内的用户名 Textfield 上设置`autofocus=True`，然后在 Textfield 上设置`autofocus=True`，以输入聊天消息，以在对话框关闭时将其设置为初始关注。

当用户单击“发送”按钮或按 Enter 提交聊天消息时，Textfield 失去了焦点。
要编程设置的控制焦点，我们使用了[`TextField.focus()`](/docs/controls/textfield#focus)方法。

#### 在`Enter`上提交表单

仅在键盘上按`Enter`按钮提交表格非常诱人！ 在对话框中键入您的名字，命中`Enter`，键入新消息，命中`Enter`，键入另一个，点击`Enter` - 根本不涉及鼠标！ 🚀

Flet 通过提供[`TextField.on_submit`]](/docs/controls/textfield#on_submit)事件处理程序来支持它，该事件处理程序在用户按`Enter`按钮时将射击`Enter`按钮，而焦点是在 TextField 上。

#### 输入多动邮件。

`Enter`必须将光标推向下一行的多行文本菲尔德呢？ 我们也涵盖了！ `TextField`控制具有[`shift_enter`](/docs/controls/textfield#shift_enter)属性，当将其设置为`True`时，该属性启用了类似于 Discord 的行为: 到达新线路用户按下`Shift` 表格。

### 动画滚动到最后一条消息

注意到在聊天窗口中滚动到最后一条消息的好动画吗？ 可以通过将[`ListView.auto_scroll`](/docs/controls/listview#auto_scroll)设置为`True`来启用。 最高的`Page`类，是可滚动容器本身，也支持[`auto_scroll`](/docs/controls/page#auto_scroll)。

### 页面标题

最终触摸 - 可以简单地更改为:

```python
page.title = "Flet Chat"
page.update()
```

## 部署应用程序

恭喜！ 您已经使用 Flet 在 Python 中创建了聊天应用程序，看起来很棒！

现在是时候与世界共享您的应用程序了！

[遵循以下说明](/docs/guides/python/deploying-web-app/hosting-providers)将您的 Flet 应用程序部署到 Fly.io 或 REPLIT。

## 接下来是什么

我们可以实现许多功能来改进此聊天应用:

- 断开，重新连接，会话超时
- 上传/下载图像
- 身份验证，化身
- 使用数据库进行存储
- 聊天频道，主题
- 全文搜索
- 表情符号，降价
- 机器人
- 移动应用

如果您想为应用程序/教程做出贡献并与其他 Flet 开发人员共享。

## 摘要

在本教程中，您已经学会了如何:

- 创建一个简单的 Flet app;
- 添加页面控件和处理事件；
- 使用在 PubSub 库中建造；
- 用于输入用户名的用户 AlertDialog；
- 使用可重复使用的控件构建页面布局；
- 将您的 Flet 应用程序部署到 Web；

为了进一步阅读，您可以探索[控件](/docs/controls)和[示例存储库](https://github.com/flet-dev/examples/tree/main/python)。
我们很乐意倾听您的反馈！ 请给我们一个[电子邮件](mailto:hello@flet.dev)，加入[Discord](https://discord.gg/dzWXP8SHG8)的讨论，请在[Twitter](https://twitter.com/fletdev)上关注。
