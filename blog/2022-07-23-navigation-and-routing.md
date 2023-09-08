---
slug: navigation-and-routing
title: Navigation and Routing
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

[Flet 0.1.42](https://pypi.org/project/flet/0.1.42/)已使用导航和路由发布！

导航和路由是单页应用程序（SPA）的重要功能，该功能允许将应用程序用户界面组织到虚拟页面（视图）中，并在应用程序 URL 反映应用程序当前状态时“导航”。

对于移动应用程序，导航和路由用作[深度链接](https://docs.flutter.dev/development/ui/navigation/deep-linking)到特定的应用程序部件。

好吧，由于实现基于[Navigator 2.0](https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade) flutter API，因此需要[272}的努力](https://github.com/flet-dev/flet/pull/95/files)，而将导航和路由添加到 Flet 中预期，并需要替换 Flet 的“ page” page'page“抽象 带有“页面和视图”。 Flutter 的新导航和路由 API 具有实质性改进，例如:

1.对历史记录堆栈的程序化控制。 2.一种简单的方法，可以在 Appbar 中拦截“回”按钮的呼叫。 3.与浏览器历史记录的强大同步。

<img src="/website/img/docs/navigation-routing/routing-app-example.gif" className="screenshot-60" />

探索上面示例的[源代码](https://github.com/flet-dev/examples/blob/main/python/apps/routing-navigation/building-views-on-route-change.py)。

## 页面路由

页面路由是应用程序 URL 的一部分``＃'符号:

<img src="/website/img/docs/navigation-routing/page-address-route.png" className="screenshot-50" />

默认应用程序路由（如果不是用户在应用程序 URL 中设置的）为`/'。 所有路线以`/'开头，例如``/store'，'/authors/1/books/2`。

可以通过阅读`page.route`属性来获得应用程序路由，例如:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(f"Initial route: {page.route}"))

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

抓住应用程序 URL，打开一个新的浏览器选项卡片，粘贴 URL，在`` ＃```to `/test）''中修改其部分并命中 Enter。 您应该看到“初始路线: /测试”。

每次更改 URL 中的路由时（通过编辑 URL 或使用背面/向前按钮导航历史记录）Flet 调用`page.on_route_change`事件处理程序:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(f"Initial route: {page.route}"))

    def route_change(route):
        page.add(ft.Text(f"New route: {route}"))

    page.on_route_change = route_change
    page.update()

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

现在，尝试更新 URL 哈希几次，然后使用后/向前按钮！ 每次路由都会更改时，您应该看到一条新消息:

<img src="/website/img/docs/navigation-routing/page-route-change-event.gif" className="screenshot-60" />

可以通过更新`page.route`属性来编程更改路由:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(f"Initial route: {page.route}"))

    def route_change(route):
        page.add(ft.Text(f"New route: {route}"))

    def go_store(e):
        page.route = "/store"
        page.update()

    page.on_route_change = route_change
    page.add(ft.ElevatedButton("Go to Store", on_click=go_store))

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

单击“转到存储”按钮，您将看到应用程序 URL 已更改，并且在浏览器历史记录中按下新项目。 您可以使用浏览器“ Back”按钮导航到以前的路由。

## 页面视图

Flet 的[page](/docs/controls/page)现在不仅是一个页面，而且是[view](/docs/controls/view)的容器，就像三明治一样彼此层面:

<img src="/website/img/docs/navigation-routing/page-views.svg" className="screenshot-100" />

视图的集合代表导航器历史记录。 页面具有[`page.views`](/docs/controls/page#views)属性，可访问视图集合。

列表中的最后一个视图是当前在页面上显示的视图。 视图列表必须至少具有一个元素（根视图）。

要模拟页面之间的过渡更改`page.route`，并在`page.view`列表的末尾添加新的`View`。

在[{`page.on_view_pop`](/docs/controls/page#on_view_pop)事件处理程序中弹出最后一个视图，然后更改为“先前”的路由。

## 在路由上构建视图

要构建可靠的导航，该程序中必须有一个位置，该位置根据当前路线构建视图列表。 其他词语，导航历史记录堆栈（由视图列表表示）必须是路由的函数。

这个地方是[`page.on_route_change`](/docs/controls/page#on_route_change)事件处理程序。

让我们将所有内容放在一个完整的示例中，该示例允许在两个页之间导航:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Routes Example"

    def route_change(route):
        page.views.clear()
        page.views.append(
            ft.View(
                "/",
                [
                    ft.AppBar(title=ft.Text("Flet app"), bgcolor=ft.colors.SURFACE_VARIANT),
                    ft.ElevatedButton("Visit Store", on_click=lambda _: page.go("/store")),
                ],
            )
        )
        if page.route == "/store":
            page.views.append(
                ft.View(
                    "/store",
                    [
                        ft.AppBar(title=ft.Text("Store"), bgcolor=ft.colors.SURFACE_VARIANT),
                        ft.ElevatedButton("Go Home", on_click=lambda _: page.go("/")),
                    ],
                )
            )
        page.update()

    def view_pop(view):
        page.views.pop()
        top_view = page.views[-1]
        page.go(top_view.route)

    page.on_route_change = route_change
    page.on_view_pop = view_pop
    page.go(page.route)


ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```

尝试使用“访问商店”和“回家”按钮，背面/向前浏览器按钮，在 URL 中手动更改路线之间的“访问商店”和“ goo Home”按钮在页面之间导航 - 无论如何它都可以使用！ :)

:::注意
为了在页面之间“导航”，我们使用[`page.go(route)`](/docs/controls/page#goroute) - 一个助手方法，它更新[{`page.route`](/docs/controls/page#route)，调用[`page.on_route_change`](/docs/controls/page#on_route_change)事件处理程序更新视图并最终调用{2812 }。
:::

请注意[`page.on_view_pop`](/docs/controls/page#on_view_pop)事件处理程序的用法。 当用户单击[{`AppBar`](/docs/controls/appbar)控制中的自动“返回”按钮时，它会发射。 在处理程序中，我们从视图集合中删除了最后一个元素，然后导航到视图的根部“下方”。

## 路由模板

Flet 提供[{`TemplateRoute`](https://github.com/flet-dev/flet/blob/main/sdk/python/flet/template_route.py) - 基于[repath](https://github.com/nickcoutsos/python-repath)库的实用程序类，允许匹配类似 ExpressJS 的路由和解析其参数，例如`/account/account/: coundut_id/orders/:  `

`TemplateRoute`在路线变更事件中表现出色:

```python
troute = TemplateRoute(page.route)

if troute.match("/books/:id"):
    print("Book view ID:", troute.id)
elif troute.match("/account/:account_id/orders/:order_id"):
    print("Account:", troute.account_id, "Order:", troute.order_id)
else:
    print("Unknown route")
```

您可以阅读有关`repath`库[此处](https://github.com/nickcoutsos/python-repath#parameters)支持的有关模板语法的更多信息。

这就是今天！

[给 Flet 试试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
