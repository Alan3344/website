---
slug: standalone-flet-web-apps-with-pyodide
title: Standalone Flet web apps with Pyodide
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

import Card from '@site/src/components/card';

我们刚刚发布了具有超级令人兴奋的新功能的[Flet 0.4.0](https://pypi.org/project/flet/) - [包装 Flet 应用程序中的独立静态网站](/docs/guides/python/publishing-static-website)，可以完全在浏览器中运行！ 该应用程序可以发布给静态网站的任何免费托管，例如 GitHub 页面或 CloudFlare 页面。 感谢[Pyodide](https://pyodide.org/en/stable/) - WebAssembly 的 Python 端口！

<img src="/img/blog/pyodide/pyodide-logo.png" className="screenshot-50" />

You can quickly build awesome single-page applications (SPA) entirely in Python and host them everywhere! No HTML, CSS or JavaScript required!

## Quick Flet with Pyodide demo

Install the latest Flet package:

```
pip install flet --upgrade
```

Create a simple `counter.py` app:

```python title="counter.py"
import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    txt_number = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)

    def minus_click(e):
        txt_number.value = str(int(txt_number.value) - 1)
        page.update()

    def plus_click(e):
        txt_number.value = str(int(txt_number.value) + 1)
        page.update()

    page.add(
        ft.Row(
            [
                ft.IconButton(ft.icons.REMOVE, on_click=minus_click),
                txt_number,
                ft.IconButton(ft.icons.ADD, on_click=plus_click),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        )
    )

ft.app(main)
```

Run a brand-new `flet publish` command to publish Flet app as a static website:

```
flet publish counter.py
```

The website will be published to `dist` directory next to `counter.py`.
Give website a try using built-in Python web server:

```
python -m http.server --directory dist
```

Open `http://localhost:8000` in your browser to check the published app.

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

Here are a few live Flet apps hosted at Cloudflare Pages:

export const ImageCard = ({title, href, imageUrl}) => (
<div className="col col--4 margin-bottom--lg">
<Card href={href}>
<img src={"/img/gallery/" + imageUrl} className="screenshot-100"/>
<h2>{title}</h2>
</Card>
</div>
);

<div className="margin-top--lg">
  <section className="row">
    <ImageCard title="To-Do" href="https://gallery.flet.dev/todo/" imageUrl="todo.png" />
    <ImageCard title="Icons browser" href="https://gallery.flet.dev/icons-browser/" imageUrl="icons-browser.png" />
    <ImageCard title="Calc" href="https://gallery.flet.dev/calculator/" imageUrl="calc.png" />
    <ImageCard title="Solitaire" href="https://gallery.flet.dev/solitaire/" imageUrl="solitaire.png" />
    <ImageCard title="Trolli" href="https://gallery.flet.dev/trolli/" imageUrl="trolli.png" />
  </section>
</div>

[检查指南](/docs/guides/python/publishing-static-website)以获取有关发布 Flet 应用程序的更多信息。

## 内置 Flet d 服务器

Flet 0.4.0 还实现了[新 Flet 桌面架构](https://flet.dev/blog/flet-mobile-update#flet-new-desktop-architecture)。

它取代了 Flet d 服务器用 python 编写的轻巧垫片编写的 Flet d 服务器，并带有许多优点:

1.运行 Flet 应用程序只需要 2 个系统进程: Python 解释器和 Flutter 客户端。 2.较少的通信开销（减去 Python 和 Flet D 之间的两个网络啤酒花）和 Lower Latency（Shim 在 MacOS/Linux 上使用 Windows 和 Unix 域插座上使用 TCP）。 3. Shim 默认情况下在 Windows 上绑定`127.0.0.1`，这更安全。 4.由'flet Pack 生成的独立应用程序捆绑包的大小减小了〜8 MB。

还需要实现来支持毕可能（我们不能在浏览器中运行 GO Web 服务器，对吗？ `Image.src`，`Audio.src`，`Page.fonts`，`Container.image_src`）现在也能够通过在文件系统中提供完整的路径，以及通过提供相对路径来从本地文件加载它们。 对于桌面应用，`src`属性中的路径可能是以下一个:

- 相对于`assets`目录的路径，例如或没有启动斜线，例如: `/image.png`或`image.png`。 不应包括文物的名称。
- 计算机文件系统中的绝对路径，例如 `c: \ projects \ app \ Assets \ image.png`或`/users/john/images/picture.png`。
- 一个完整的 URL，例如 `https://mysite.com/images/pic.png`。
- 添加`page.on_error = lambda e: print（“页面错误: ”，e.data）`查看失败的图像。
- `flet` Python 软件包已分为两个软件包: `flet-core'和`flet`。
- PDM 替换为诗歌。
- `beartype`无处不在。

### 💥 破碎更改

- 默认路由方案从“ hash”更改为“路径”（在应用程序 URL 的末尾没有`/＃/`）。 使用`ft.app（main，route_url_strategy =“ hash”）
- 在独立桌面 Flet 应用程序中不再支持 OAuth 身份验证。

## 异步支持

Flet 应用程序现在可以写为异步应用程序，并将`asyncio`与其他 python async 库一起使用。 在 Flet 中自然支持调用 Coroutines，因此您无需包装它们即可同步运行。

要开始使用异步 Flet 应用程序，您应该制作`main()`方法`async`:

```python
import flet as ft

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, async world!"))

ft.app(main)
```

[读取指南](/docs/guides/python/async-apps)有关编写 async Flet 应用程序的更多信息。

## 结论

Flet 0.4.0 带来以下令人兴奋的功能:

- 独立的 Web 应用程序在浏览器中运行 Pyodide 并托管在廉价的托管上。
- 使用内置 Flet D 服务器更快，更安全的体系结构。
- 异步应用程序支持。

将 Flet 模块升级到最新版本（`pip install flet -upgrade`），尝试`flet publish`命令尝试一下，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

嘿，顺便说一句，[Flet project](https://github.com/flet-dev/flet)已经到达 ⭐️4.2k 星星 ⭐️（仅一个月内+1k） - 继续前进！
