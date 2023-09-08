---
slug: flet-for-fastapi
title: Flet for FastAPI
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

我们刚刚发布了 Flet 0.10.0，并获得了 FastApi 支持！

<img src="/img/blog/fastapi/fastapi-logo-teal.png" className="screenshot-60" />

[FastApi](https://fastapi.tiangolo.com/)与 Uvicorn，HyperCorn，Gunicorn 或其他 Web 服务器相结合，替换了内置的 Flet Web Server（Flet D），以可靠地运行生产 Flet 工作负载。

另一方面，经验丰富的 FastAPI 开发人员可以使用 Flet 轻松添加交互式，实时仪表板和管理 UI，并在其现有或新的 FastApi 服务中添加。

## 一个最小的应用程序示例

```python
import flet as ft
import flet_fastapi

async def main(page: ft.Page):
    await page.add_async(
        ft.Text("Hello, Flet!")
    )

app = flet_fastapi.app(main)
```

这是一个简单的应用程序，它只是输出“您好，Flet！” 在网页上。

为了运行 Fastapi 和 Uvicorn 的应用程序安装 Flet:

```
pip install flet-fastapi
pip install uvicorn
```

将上述代码保存到`hello.py`，然后启动 Uvicorn 作为:

```
uvicorn hello:app
```

打开浏览器并导航到http://127.0.0.1:8000以查看应用程序运行。

:::注意
Flet 应用程序必须是[async](/docs/guides/python/async-apps)才能与 FastApi WebSocket 处理程序一起工作。
:::

##

- [1600} [多个 Flet 应用程序在一个域中] 根和/或子路径。
- 简单[单行映射](/docs/guides/python/deploying-web-app/running-flet-with-fastapi#how-it-works)或[单个端点配置](/docs/guides/python/deploying-web-app/running-flet-with-fastapi#configuring-individual-flet-endpoints)。
- 围绕 FastApi Websocket 连接的轻量级异步包装器，以获得更大的并发。
- 使用用户资产和应用元信息自定义提供 Flet 静态文件。
- 上传处理程序以`FilePicker`控制。
- oauth 回调处理程序用于身份验证流。

检查[指南](/docs/guides/python/deploying-web-app/running-flet-with-fastapi)，以获取有关使用 FastApi 的 Flet 的完整信息。

通过加入[Flet Discord Server](https://discord.gg/dzWXP8SHG8)或在[Flet github 讨论](https://github.com/flet-dev/flet/discussions)上创建一个新线程，让我们知道您的想法。
