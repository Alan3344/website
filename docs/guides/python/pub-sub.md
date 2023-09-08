---
title: PubSub
sidebar_label: PubSub
---

如果使用 Flet 构建聊天应用程序，则需要以某种方式在会话之间传递用户消息。 当用户发送消息时，应将其广播到所有其他应用程序会话并在其页面上显示。

Flet 提供了一种简单的内置 PubSub 机制，用于页面会话之间的异步通信。

Flet PubSub 允许向所有应用程序会话广播消息或仅发送到特定的“主题”（或“频道”）订户。

典型的 PubSub 用法将是:

- [subscribe](/docs/controls/page#subscribehandler)以在应用程序会话开始上广播消息或[订阅一个主题](/docs/controls/page#subscribe_topictopic-handler)。
- [发送](/docs/controls/page#send_allmessage)广播消息或[发送到一个主题](/docs/controls/page#send_all_on_topictopic-message)在某些事件上，例如单击“发送”按钮。
- [unsubscribe](/docs/controls/page#unsubscribe)在某些事件上从广播消息中或[删除主题退缩](/docs/controls/page#unsubscribe_topictopic)，例如单击“离开”按钮。
- [`page.on_close`](#on_close)上的所有内容。

这是一个简单聊天应用程序的示例:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Flet Chat"

    # subscribe to broadcast messages
    def on_message(msg):
        messages.controls.append(ft.Text(msg))
        page.update()

    page.pubsub.subscribe(on_message)

    def send_click(e):
        page.pubsub.send_all(f"{user.value}: {message.value}")
        # clean up the form
        message.value = ""
        page.update()

    messages = ft.Column()
    user = ft.TextField(hint_text="Your name", width=150)
    message = ft.TextField(hint_text="Your message...", expand=True)  # fill all the space
    send = ft.ElevatedButton("Send", on_click=send_click)
    page.add(messages, ft.Row(controls=[user, message, send]))

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

<img src="/website/img/docs/getting-started/chat-app-example.gif" className="screenshot-70" />
