
---
title: Running Flet with FastAPI
sidebar_label: Running Flet with FastAPI
---

 Flet用于FastAPI替换内置Flet Web Server（Flet D）部署Flet Web Apps到生产中时。
[FastApi](https://fastapi.tiangolo.com/) App由[UVICORN](https://www.uvicorn.org/)，[HyperCorn](https://pgjones.gitlab.io/hypercorn/)或行业 -  leading [Gunicorn](https://gunicorn.org/) Web服务器使您能够构建可靠的，高的Flet应用程序。

现有的FastAPI开发人员可以使用Flet轻松地将交互式的实时仪表板添加到其FastApi应用程序中。

## 安装

要安装`flet-fastapi`运行以下命令: 

```
pip install flet-fastapi
``` 

## 示例应用程序

:::谨慎至关重要

Flet app（及其依赖库）必须是异步的，才能在FastAPI中运行。
[查看本文](/docs/guides/python/async-apps)学习如何编写async Flet应用程序
我们还建议阅读[Fastapi关于异步/等待的文章](https://fastapi.tiangolo.com/async/)，以更好地了解并发和并行性之间的差异。

:::

使用以下内容创建`counter.py`: 

```python
import flet as ft
import flet_fastapi

async def main(page: ft.Page):
    counter = ft.Text("0", size=50, data=0)

    async def add_click(e):
        counter.data += 1
        counter.value = str(counter.data)
        await counter.update_async()

    page.floating_action_button = ft.FloatingActionButton(
        icon=ft.icons.ADD, on_click=add_click
    )
    await page.add_async(
        ft.Container(counter, alignment=ft.alignment.center, expand=True)
    )

app = flet_fastapi.app(main)
```

这是一个简单的应用程序，显示页面右下方的计数器和按钮以增加对抗。

## 本地运行该应用程序

安装[UVICORN](https://www.uvicorn.org/) Web服务器: 

```
pip install uvicorn
```

从: 开始`uvicorn`。

```
uvicorn counter:app
```

打开浏览器并导航到http://127.0.0.1:8000以查看应用程序运行。

## 它如何工作

`flet_fastapi.app()`使用`main()`会话处理程序和以下端点配置一个Flet应用

Flet应用程序的``/ws'（WS） -  Websocket处理程序。 当建立新的WebSocket连接并创建新的应用程序会话时，它调用`main()`函数。

`/upload`（put） - 文件上传处理程序。

`/oauth_callback`（get） -  oauth flow回调处理程序。

`/`（get） -  Flet带有spa catch -all处理程序的应用静态文件。

`flet_fastapi.app()`参数: 

*  `fastapi_app`（fastapi） -  fastAPI应用程序实例。
* `session_handler`（coroutine） - 应用程序输入点 - 一种异步方法，呼吁新连接的用户。 处理程序Coroutine必须具有1个参数: `page`  -  `Page`实例。
* `assets_dir`（STR，可选） - 通往App Assets目录的绝对路径。
* `app_name`（str，可选）-PWA应用程序名称。
* `app_short_name`（str，可选）-PWA应用程序简称。
* `app_description`（str，可选） -  PWA应用程序描述。
* `web_renderer`（Webrenderer） -  Web渲染器默认为`WebRenderer.CANVAS_KIT`。
* `use_color_emoji`（bool） - 是否用颜色表情符号加载字体。 默认值为`False`。
* `route_url_strategy`（str） - 路由URL策略: `path`（默认）或`hash`。
* `upload_dir`（str） - 具有上传文件的目录的绝对路径。
* `max_upload_size`（str，int） - 单个上传的最大大小，字节。 如果`None`，则无限。
* `secret_key`（str，可选） - 签名和验证上传请求的秘密键。
* `session_timeout_seconds`（INT，可选） - 在用户断开连接后，会话寿命，几秒钟。
* `oauth_state_timeout_seconds`（int，可选） -  oauth状态寿命，秒，这是启动oauth flow和重定向到oauth callback url之间的最大允许时间。

## 托管多个Flet应用程序

```python
import flet as ft
import flet_fastapi


async def root_main(page: ft.Page):
    await page.add_async(ft.Text("This is root app!"))


async def sub_main(page: ft.Page):
    await page.add_async(ft.Text("This is sub app!"))


app = flet_fastapi.FastAPI()


app.mount("/sub-app", flet_fastapi.app(sub_main))
app.mount("/", flet_fastapi.app(root_main))
```

必须在root Flet应用程序之前映射子应用程序，因为它为spa配置了catch-all `index.html`。

使用`uvicorn`运行该应用程序，然后访问http://127.0.0.0.1:8000，然后http://127.0.0.1:8000/sub-app/都可以看到Flet apps运行。 请注意`/sub -app/`url中的尾斜线 - 没有斜杠，请求将路由到root应用程序。

## 将Flet添加到现有的fastapapi应用

```python
from contextlib import asynccontextmanager

import flet as ft
import flet_fastapi
from fastapi import FastAPI

@asynccontextmanager
async def lifespan(app: FastAPI):
    await flet_fastapi.app_manager.start()
    yield
    await flet_fastapi.app_manager.shutdown()

app = FastAPI(lifespan=lifespan)

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, Flet!"))

app.mount("/flet-app", flet_fastapi.app(main))
```

将Flet应用程序添加到现有的FastApi应用程序时，您需要在App Start上调用`flet_fastapi.app_manager.start()`，在关闭时`flet_fastapi.app_manager.shutdown()`。 使用最适合您的方式: 使用寿命（在上面的示例中）或应用程序事件。

`app_manager.start()`方法启动背景任务清理过期的会话和OAuth流量状态。

`app_manager.shutdown()`方法删除Flet app。

## 配置个人Flet endpoints 

### 静态文件的任何临时文件。

## 

一个用于服务静态Flet应用程序文件（index.html，subtest.json，Flutter JS应用等）和用户资产的fastapi应用程序。

```python
from flet_fastapi import FastAPI, FletStaticFiles

app = FastAPI()

# mount to the root of web app
app.mount(path="/", app=FletStaticFiles())
```

`FletStaticFiles`构造函数的参数: 

*  `app_mount_path`（str） -  Flet app的绝对URL。 默认值为`/`。
* `assets_dir`（STR，可选） - 通往App Assets目录的绝对路径。
* `app_name`（str，可选）-PWA应用程序名称。
* `app_short_name`（str，可选）-PWA应用程序简称。
* `app_description`（str，可选） -  PWA应用程序描述。
* `web_renderer`（Webrenderer） -  Web渲染器默认为`WebRenderer.CANVAS_KIT`。
* `use_color_emoji`（bool） - 是否用颜色表情符号加载字体。 默认值为`False`。
* `route_url_strategy`（str） - 路由URL策略: `path`（默认）或`hash`。
* `websocket_endpoint_path`（str，可选） -  Flet App WebSocket处理程序的绝对URL。 默认值是`{app_mount_path}/ws`。

###  websocket处理程序

Flet客户端应用程序在浏览器中运行的Flet客户端连接。 WebSocket Channel用于将事件从浏览器发送到Flet后端代码，并接收页面实时增量更新。

```python
from flet_fastapi import FletApp

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, Flet!"))

@app.websocket("/app1/ws")
async def flet_app(websocket: WebSocket):
    await FletApp(main).handle(websocket)
``` 

*  `session_handler`（coroutine） - 应用程序输入点 - 一种用于新连接的用户的异步方法。 处理程序Coroutine必须具有1个参数: `page`  -  `Page`实例。
* `session_timeout_seconds`（INT，可选） - 在用户断开连接后，会话寿命，几秒钟。
* `oauth_state_timeout_seconds`（int，可选） -  oauth状态寿命，以秒为单位，这是启动oauth flow和重定向到oauth callback url之间的最大允许时间。
* `upload_endpoint_path`（str，可选） - 上传端点的绝对URL，例如 `/upload`。
* `secret_key`（str，可选） - 注册上传请求的秘密键。

### 上传处理程序

处理文件上传，通过[FilePicker](/docs/controls/filepicker)控制。 此端点是可选的 - 如果您的应用不使用[FilePicker](/docs/controls/filepicker)，则不需要。

```python
from flet_fastapi import FletUpload

@app.put("/upload")
async def flet_uploads(request: Request):
    await FletUpload("/Users/feodor/Downloads/123").handle(request)
``` 

###  oauth回调处理程序

处理OAuth流回调请求。 如果您的应用不使用[身份验证](/docs/guides/python/authentication)，则不需要此端点。

```python
from flet_fastapi import FletOAuth

@app.get("/oauth_callback")
async def flet_oauth(request: Request):
    return await FletOAuth().handle(request)
``` 

## 在生产中运行该应用

###  uvicorn

[UVICORN](https://www.uvicorn.org/)，这是建立在Uvloop和httptools上的闪电快速的ASGI服务器。

安装Uvicorn: 

```
pip install uvicorn
```

在所有NIC IP和端口`8000`上聆听时，使用Uvicorn运行该应用程序: 

```
uvicorn --host 0.0.0.0 --port 8000 main:app
``` 

###  hypercorn

[HyperCorn](https://github.com/pgjones/hypercorn/)是另一台受Gunicorn启发的ASGI Web服务器。

安装HyperCorn: 

```
pip install hypercorn
```

使用HyperCorn运行该应用: 

```
hypercorn --bind 0.0.0.0:8000 main:app
``` 

###  gunicorn

[Gunicorn](https://gunicorn.org/)是运行Python Web应用程序的流行Web服务器。 尽管实现WSGI规范，但可以使用UVicorn提供的[工作过程类](https://fastapi.tiangolo.com/deployment/server-workers/)运行ASGI FastApi应用程序。

安装枪支: 

```
pip install gunicorn
```

从: 开始`gunicorn`以: 

```
gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker counter:app
```