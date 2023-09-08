---
title: Async apps
sidebar_label: Async apps
---

Flet 应用程序可以写为异步应用程序，并使用`asyncio`和其他 Python async 库。 在 Flet 中自然支持呼叫 Coroutines，因此您无需包装它们即可同步运行。

默认情况下，Flet 使用`threading`库在单独的线程中运行用户会话并执行事件处理程序，但是有时这可能是 CPU 的无效用法，因为它在等待 HTTP 响应或执行`sleep()`时无能为力。

另一方面，Asyncio 允许通过在“ Coroutines”之间切换执行上下文在单个线程中实现并发。 对于使用[Pyodide](https://pyodide.org/en/stable/)的应用程序(/docs/guides/python/publishing-static-website)的应用程序尤其重要。 Pyodide 是一个 python 运行时，构建了 WebAssembly（WASM）并在浏览器中运行。 在写作时，它不支持[螺纹](https://github.com/pyodide/pyodide/issues/237)。

要开始使用异步 Flet 应用程序，您应该制作`main()`方法`async`:

```python
import flet as ft

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, async world!"))

ft.app(main)
```

您可以使用`等待ft.app_async（main）`如果 Flet 应用是较大应用的一部分，并且从`async`代码中调用。

请注意`等待页面的用法.add_async（...）`将新控件添加到页面上。 在 ASYNC 应用中，您不能再使用`page.add()`或其他同步页方法 - 您必须使用代码中`_async`到处结尾的 Async 对应物:

-

- `page.add()`→`等待 Page.addd_async（）
- `page.update()`→`等待页面.update_async（）``
- `page.clean()`→`等待 Page.clean_async（）``
- 等

控制事件处理程序既可以同步，又可以是`async`。

如果处理程序不调用任何异步方法，则可能是常规的同步方法:

```python
def page_resize(e):
    print("New page size:", page.window_width, page.window_height)

page.on_resize = page_resize
```

但是，如果处理程序称异步逻辑也必须是异步:

```python
async def button_click(e):
    page.controls.append(ft.Text("Hello!"))
    await page.update_async()

ft.ElevatedButton("Say hello!", on_click=button_click)
```

### async lambdas

Python 没有异步 lambdas。 在异步应用程序中使用 lambda 事件处理程序的简单事项非常好:

```python
page.on_error = lambda e: print("Page error:", e.data)
```

但是您不能有异步 lambda，因此必须使用异步事件处理程序。

## 睡觉

要延迟在 async Flet 应用程序中执行代码，您应该使用[`asyncio.sleep()`](https://docs.python.org/3/library/asyncio-task.html#asyncio.sleep)而不是`time.sleep()`，例如:

```python
import asyncio
import flet as ft

async def main(page: ft.Page):
    async def button_click(e):
        await asyncio.sleep(1)
        await page.add_async(ft.Text("Hello!"))

    await page.add_async(
        ft.ElevatedButton("Say hello with delay!", on_click=button_click)
    )

ft.app(main)
```

## 线程

从技术上讲，没有人会阻止您在异步应用程序中使用`threading`库，但这是一个坏主意。 `asyncio`由 Flet api 使用的锁，队列和任务的版本不是线程安全，例如，从多个线程调用`等待`等待 page.update_async（）`将导致不可预测的结果。 另外，如果您决定[将应用程序作为静态网站部署](/docs/guides/python/publishing-static-website)，则`threading`库不受 Pyodide 的支持。

在后台运行某些内容[`asyncio.create_task()`](https://docs.python.org/3/library/asyncio-task.html#asyncio.create_task)。 例如，来自[用户控件](/docs/guides/python/user-controls)指南的“倒计时”控件的异步版本是:

```python
import asyncio
import flet as ft

class Countdown(ft.UserControl):
    def __init__(self, seconds):
        super().__init__()
        self.seconds = seconds

    async def did_mount_async(self):
        self.running = True
        asyncio.create_task(self.update_timer())

    async def will_unmount_async(self):
        self.running = False

    async def update_timer(self):
        while self.seconds and self.running:
            mins, secs = divmod(self.seconds, 60)
            self.countdown.value = "{:02d}:{:02d}".format(mins, secs)
            await self.update_async()
            await asyncio.sleep(1)
            self.seconds -= 1

    def build(self):
        self.countdown = ft.Text()
        return self.countdown

async def main(page: ft.Page):
    await page.add_async(Countdown(120), Countdown(60))

ft.app(target=main)
```

<img src="/website/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />
