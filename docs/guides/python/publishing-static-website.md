---
title: Publishing a static website with Pyodide
sidebar_label: Publishing static website
---

Flet 应用程序可以以独立的静态网站（SPA）的形式发布，并完全在[Pyodide](https://pyodide.org/en/stable/index.html)的浏览器中运行。

Pyodide 是 Cpython 到 WebAssembly（WASM）的港口，该技术是一项具有[某些局限性](https://pyodide.org/en/stable/usage/wasm-constraints.html)的新兴技术。 Pyodide 带有大量的[内置软件包](https://pyodide.org/en/stable/usage/packages-in-pyodide.html)。 但是，要使用 PYPI 的 Python 软件包，它必须是纯 Python 软件包，或提供带有二进制文件的轮子[为 Emscripten 构建](https://pyodide.org/en/stable/development/new-packages.html)。

## Flet Flet 静态与服务器端

Flet 静态优点:

- 用户生成的事件（单击，文本字段更改，拖动）和页面更新之间的零延迟。 没有 Flet D 服务器，没有 Websockets -Python 程序直接通过 JavaScript 与 Flutter Web 客户端进行通信。
- 便宜的托管 - Flet 静态应用不需要在服务器上运行任何代码，因此可以在任何地方托管: github 页面，cloudflare 页面，replocit，reply，vercel，vercel，共享托管或您自己的 VPS。
- 更高的可扩展性 - Flet 静态应用程序完全在浏览器中运行，如果不使用任何服务器端 API，则可以将其缩放到任何仅使用 CDN 的用户。

Flet 静态缺点:

- 加载时间较慢 - 它需要额外的时间下载 Python Engine（Pyodide），内置和“ Flet-Pyodide”软件包以及用户程序。 此外，毕迪德引擎的初始化本身需要大约 2-4 秒，而团队将来将[8834}在将来得到改进。
- 有限的 Python 兼容性 - 并非每个与本机 Python 一起使用的程序[可以使用 Pyodide](https://pyodide.org/en/stable/usage/wasm-constraints.html)。
- 较低的性能 - 当前比本机 Python 慢 3x-5x，因此 Flet 应用程序具有重型处理的应用程序将更好地部署为服务器端。
- 用户可以以`tar.gz`存档的形式下载浏览器，访问程序代码。

## 异步是否异步？

[Asyncio](/docs/guides/python/async-apps)和“常规”同步 Flet 应用程序都可以作为静态网站发布。 在并发方面，网站将仅具有一个线程，只有一个用户 - 您。 如果您的应用具有 CPU 密集型逻辑，则无论该应用程序是否异型，都可能会影响 UI 响应性。

但是，如果您的应用程序包含 I/O 逻辑（例如[pyodide 的[8837}包装器），该包含在浏览器中是异能的，那么您的应用程序必须呈异步。

## 发布作为静态网站的应用程序

运行以下命令以发布 Flet 应用程序到独立网站:

```
flet publish <your-flet-app.py>
```

静态网站已发表在“。/dist”目录中。

命令可选参数:

- `-pre`-允许 MicroPIP 安装预释放的 Python 软件包。
- `-a -a Assets_dir`，`-Assets Assets_dir`-资产目录的路径。
- `-App-title App_title`-应用程序标题。
- `-App-Description App_Description`-应用程序描述。
- `-base-url base_url`-应用程序的基本 URL。
- `-web-Renderer {Canvaskit，html}` - 用于使用的 Web 渲染器。
- ` -  route-url-strategy {path，hash}`-URL 路由策略。

## 测试网站

您可以使用 Python 的内置[`http.server`模块](https://docs.python.org/3/library/http.server.html):

```
python -m http.server --directory dist
```

在您的浏览器中打开`http://localhost:8000`检查已发布的应用程序。

## 加载软件包

您可以在应用程序期间从 PYPI 加载自定义软件包，从`requirements.txt`中列出它们。 `requirements.txt`必须使用`<your-flet-app.py>`在同一目录中创建。

`requirements.txt`的每一行都包含一个软件包名称，然后包含一个可选版本规范符。

:::信息

要安装自定义软件包，Pyodide 使用[MicroPIP](https://pypi.org/project/micropip/) - 在浏览器中起作用的`pip`的轻巧版本。

您可以直接在 Flet app 中直接使用[MicroPIP API](https://micropip.pyodide.org/en/stable/project/api.html):

```python
import sys

if sys.platform == "emscripten": # check if run in Pyodide environment
    import micropip
    await micropip.install("regex")
```

:::

### 预释放 Python 软件包

您可以通过向 flet Publish`命令添加`-pre`'''来允许加载 PYPI 软件包的预释放版本:

```
flet publish <your-flet-app.py> --pre
```

## 资产

如果您的应用需要资产（图像，字体等），则可以通过使用`– assets <dir iCtory>`带有`flet prusper`命令:

```
flet publish <your-flet-app.py> --assets assets
```

:::谨慎
如果您的应用程序目录中有`assets`目录，并且不指定``-Assets`选项''，则将与 Python 应用程序一起包装`assets`的内容，而不是复制到`dist`。
:::

## {8870 } URL 策略

Flet 应用程序支持两种配置基于 URL 的路由的方法:

- ** PATH **（默认） - 读取和编写没有哈希的路径。 例如，`fletapp.dev/path/to/view'。
- **哈希** - 路径被读取并写入[Hash Fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)。 例如，`fletapp.dev/＃/path/to/view'。

如果托管提供商支持[单页应用程序（SPA）渲染](https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-application-spa-rendering)，则可以留下默认的“路径” URL 策略，因为它提供了漂亮的 URL。

但是，如果托管提供商（例如 GitHub 页面）不支持 SPA 模式，则需要使用“哈希” URL 策略发布您的应用程序。

在静态应用程序发布过程中指定“哈希” URL 策略`` - route-url-strategy'选项:

```
flet publish <your-flet-app.py> --route-url-strategy hash
```

## Web 渲染器

您可以将默认的“ Canvaskit” Web 渲染器（[有关渲染器的更多信息](/docs/controls/text#using-system-fonts)）使用`html''，然后使用`html'' - web-renderer`选项:

```
flet publish <your-flet-app.py> --web-renderer html
```

## 颜色表情符号

为了减少应用尺寸默认的“ canvaskit”渲染器不使用彩色表情符号，因为带有 CO 的字体文件
但是，您可以选择使用` -  use-color-emoji`标志选择彩色表情符号:

```
flet publish <your-flet-app.py> --use-color-emoji
```

或者，切换到使用浏览器字体的`html`渲染器。

## 在子目录中托管网站

多个 Flet 应用程序可以托管在单个域上 - 它自己的子目录中的每个应用程序。

要使已发布的 Flet 应用程序在子目录中工作，您必须使用``` -  base-url`选项''发布它:

```
flet publish <your-flet-app.py> --base-url <sub-directory>
```

例如，如果应用程序的 URL 为`https://mywebsite.com/myapp` then it must be published with `--base-url myapp`。

## 部署网站

将静态网站部署到任何免费托管，例如 github 页面，cloudflare 页面或 vercel！

### cloudflare 页面

在我们进行部署之前，您将需要一个帐户。 从[此处](https://dash.cloudflare.com/sign-up/pages)中获取一个，或者如果您已经有一个，则只需登录即可。 注册后，您必须通过单击电子邮件中收到的链接来验证您的电子邮件地址。 如果您没有在收件箱中获取垃圾邮件，请检查垃圾邮件。

在您的帐户中，从侧菜单中，选择“页面”，如下所示:

<img src="/img/docs/cloudflare-pages-deploy/pages-from-sidebar.png"/>

从那里，选择“创建项目”按钮:

<img src="/img/docs/cloudflare-pages-deploy/project-creation.png"/>

CloudFlare 提出了创建项目的三种方法。 只有前两个将在这里暴露:

- 连接到 git 提供商
- 直接上传

<img src="/img/docs/cloudflare-pages-deploy/deployment-methods.png"/>

#### 连接到 git 提供商

为此，您需要拥有一个[github](https://github.com/)或[gitlab](https://gitlab.com/)帐户。 在此帐户中，应该是您计划使用的存储库。 可以在此[repo](https://github.com/ndonkoHenri/Flutter-Counter-Clone)中找到一个示例。

单击“连接到 Git”蓝色按钮:

<img src="/img/docs/cloudflare-pages-deploy/git-account-selection.png"/>

从那里，选择包含您存储库的服务的选项卡片。 然后，连接您的帐户。 选择建议的选项之一，然后单击“安装和授权”。

<img src="/img/docs/cloudflare-pages-deploy/git-auth.png"/>

选择要使用的存储库，然后按“开始设置”按钮。

<img src="/img/docs/cloudflare-pages-deploy/repo-selection.png"/>

继续前进之前，在您的存储库中添加`runtime.txt`文件。 它应包含要使用的 Python 版本。 在文件中输入 3.7，这是最新的 Python 版本 CloudFlare 在编写时使用。

[此处](https://github.com/ndonkoHenri/Flutter-Counter-Clone/blob/master/runtime.txt)是上面回购中的一个示例。

完成此操作后，我们现在可以转到下一步，这将是为您的网站配置某些构建和部署设置。

设置项目的名称，并使用要使用的生产分支。 生产分支仅仅是您存储库的分支机构，该分支将自动触发您的生产环境的部署。 推送到其他分支机构会触发部署到您的预览环境。

设置这两个设置后，跳到“构建设置”部分，我们将在其中设置构建指令。

跳过“框架预设”（允许无），因为 Flet 既不在列表中，也不是 JavaScript 框架:)

“构建命令”取决于您应用程序的结构。 遵循上面部分中的指南提出您的自定义构建命令。

<img src="/img/docs/cloudflare-pages-deploy/flet-publish-help.png"/>

当构建命令由 Flet 运行时，将创建一个名为“ Dist”的文件夹，该文件夹将包含 CloudFlare 页面所需的所有 Web 文件。 将其设置为您的输出目录。 请注意，此文件不会添加到您的存储库中，因为 CloudFlare 仅具有对代码的读取访问。

<img src="/img/docs/cloudflare-pages-deploy/build-settings.png"/>

您可以选择指定高级参数: 根目录（CloudFlare 运行构建命令的目录）和环境变量（在构建时间期间要使用的变量）。
现在，单击“保存和部署”按钮，让 CloudFlare 为您完成剩余的工作。

<img src="/img/docs/cloudflare-pages-deploy/successful-deployment.png"/>

单击将显示移至部署的网站的 URL。

<img src="/img/docs/cloudflare-pages-deploy/app-link-1.png"/>

如果打开网站时，您会看到 Cloudflare 错误，则意味着他们尚未完全完成设置。 因此，只需等待一分钟，然后刷新页面即可，您将看到您的应用程序正在运行。
测试上述部署的站点[此处](https://flet-counter.pages.dev/)。

#### 直接上传

单击“上传资产”。 在第一步中，给您的项目一个名字。 请记住，您将提供的名称将用于确定将要部署到的项目的链接。

第二步要求您将项目的资产上传为文件夹或邮政编码（其中所有资产）。 如果您已经有一个，请使用拖放或使用文件夹选择器选择它们。

如果您还没有这些资产，但是已经构建了一个应用程序，请在包含应用程序文件的目录中使用`flet Publish`命令，并且将创建一个`dist`文件夹，然后将其上传到 Cloudflare 如上所述。

上传后，按下底部的“部署站点”按钮。

<img src="/img/docs/cloudflare-pages-deploy/assets-upload.png"/>

然后，您将看到一条成功消息，其中包含指向您已部署的网站的链接。 测试一个已部署的站点[此处](https://todo-2.pages.dev/)的示例。

<img src="/img/docs/cloudflare-pages-deploy/app-link-2.png"/>

如果打开网站时，您会看到 Cloudflare 错误，则意味着他们尚未完全完成设置。 因此，只需等待一分钟，然后刷新页面即可，您将看到您的应用程序正在运行。
现在，您可以单击“继续项目”按钮以监视您的部署，或按照上述相同的步骤创建新按钮。

## 故障排除

当 Flet 在 Web 浏览器中运行时，其所有`print()`语句都显示在浏览器中开发人员工具的“控制台”选项卡片中。 `print()`可以用作简单的调试工具。

您也可以使用`logging`模块和输出消息以不同的严重性进行控制。

要启用详细的 Flet 记录将其添加到您的程序中:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```
