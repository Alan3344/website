---
title: Packaging desktop app
sidebar_label: Packaging desktop app
---

Flet Python 应用程序及其所有依赖项都可以打包到可执行文件中，并且用户可以在其计算机上运行它，而无需安装 Python Instrapter 或任何模块。

Flet 包装[Pyinstaller](https://pyinstaller.org/en/stable/index.html) api to togage Flet Python App 及其所有依赖项及其所有依赖项添加到 Windows，MacOS 和 Linux 的单个软件包中。 要创建 Windows 软件包，必须在 Windows 上运行 Pyinstaller； 要构建 Linux 应用程序，必须在 Linux 上运行； 并在 MacOS 上构建 MacOS 应用程序。

从安装 Pyinstaller 开始:

```
pip install pyinstaller
```

导航到您`.py`文件所在的目录，并使用以下命令构建您的应用程序:

```
flet pack your_program.py
```

您的捆绑 Flet 应用程序现在应在`dist`文件夹中可用。 尝试运行程序以查看是否有效。

在 MacOS 上:

```
open dist/your_program.app
```

在 Windows 上:

```
dist\your_program.exe
```

在 Linux 上:

```
dist/your_program
```

现在，您只需将`dist`文件夹的内容汇总并分配给您的用户！ 他们不需要安装 Python 或 Flet 来运行您的包装程序 - 这是电子的绝佳选择！

默认情况下，可执行/捆绑包的名称与 Python 脚本相同。 您可以通过``` - name''''来更改它:

```
flet pack your_program.py --name bundle_name
```

## 自定义软件包图标

默认的捆绑包应用图标是磁盘，对于年轻开发人员来说可能会造成混淆，当时[floppy Disks](https://en.wikipedia.org/wiki/Floppy_disk)被用来存储计算机数据。

您可以通过添加`–icon'参数来替换图标:

```
flet pack your_program.py --icon <your-image.png>
```

Pyinstaller 将为 Windows 的 PNG 转换为平台的特定格式（`.ico`和 MacOS 的`.icns`），但是您需要安装[Pillow](https://pillow.readthedocs.io/en/stable/)模块。

```
pip install pillow
```

## 包装资产

您的 Flet 应用程序可以包括[资产](/docs/controls/image#src)。 如果应用程序资产在`assets` `your_program.py`旁边的`assets`文件夹中，可以将它们添加到 MacOS/linux 上的``-Add-data`参数''中的应用程序包中:

```
flet pack your_program.py --add-data "assets:assets"
```

在 Windows`资产;资产上都必须用`;`:::

```
flet pack your_program.py --add-data "assets;assets"
```

## 自定义 MacOS 捆绑包

可以使用以下“ flet pack”特定参数来自定义 MacOS 捆绑详细信息:

- ` -  Profoduct-name`-显示 MacOS 捆绑包的名称，dock，Activity Monitor 中显示了有关对话框的活动。
- `-prouduct-versh`-bundle bundle 版本在“关于”对话框中。
- ` -  opyright`-关于“关于”对话中所示的版权通知。
- `-bundle-id`唯一捆绑包 ID。

<img src="/img/docs/getting-started/package-desktop/flet-app-bundle-about.png" className="screenshot-50" />

## 自定义 Windows 可执行元数据

Windows 可执行的“详细信息”属性对话框可以通过以下`flet pack'参数自定义:

- ` -  product-name`-“ product name”字段。
- `-product-version`-“产品版本”字段。
- `-file-version`-“文件版本”字段。
- `-file-description`-“文件描述”字段，也在 Task Manager 中进行程序显示名称。
- `-popyright`-“版权”字段。

## 使用 CI 用于多平台包装

要使用 PyInstaller 创建一个应用程序软件包以用于特定操作系统，必须在该操作系统上运行。

如果您无法访问 Mac 或 PC，则可以使用[AppVeyor](https://www.appveyor.com) - Windows，Linux 和 MacOS 的连续集成服务将所有三个平台的应用程序捆绑在一起。 简而言之，连续集成（CI）是在每次推送到存储库中建立，测试和部署（连续交付-CD）应用程序的自动化过程。

Appveyor 可以免费使用 Github，Gitlab 和 Bitbucket 上的开源项目。 要使用 Appveyor，请将您的应用程序推到其中一个源控制提供商中的存储库。

:::注意
AppVeyor 是 Flet 的背后的公司。
:::

要开始使用 AppVeyor [注册免费帐户](https://ci.appveyor.com/signup)。

单击“新项目”按钮，授权 Appveyor 访问您的 GitHub，Gitlab 或 Bitbucket 帐户，请选择带有程序的存储库，然后创建一个新项目。

现在，要为 Windows，Linux 和 MacOS 配置包装，请在存储库的根中添加[8676}的文件`appveyor.yml`的根。 `appveyor.yml`是一个构建配置文件或 CI 工作流，描述了必须在每个提交上运行的构建，测试，包装和部署命令。

:::注意
您只能为[8677}存储库提供[flet-dev/python-ci-example]并根据您的需求进行自定义。
:::

当您将任何更改推向 GitHub 存储库时，Appveyor 将自动启动新的构建:

<img src="/img/docs/getting-started/appveyor-ci-flet-python-project.png" className="screenshot-70" />

[CI Workflow](https://ci.appveyor.com/project/flet-dev/python-ci-example)在每个推送库中都有什么作用:

- 克隆将存储库克隆到干净的虚拟机上。
- 使用`pip`安装应用依赖项。
- 将`flet pack`运行到 python 应用程序中的捆绑包中** Windows **，** macos **和** ubuntu **。
- zip/tar 应用程序捆绑并将它们上传到[“伪像”](https://ci.appveyor.com/project/flet-dev/python-ci-example/build/job/g2j2lhstv04eyxcm/artifacts)。
- 当按下新标签时，将应用程序捆绑包上载应用程序捆绑包。 只需推开一个新标签即可发布！

:::notegithub_token
`GITHUB_TOKEN`在`appveyor.yml`中是 Appveyor 使用的 GitHub 个人访问令牌（PAT），以将创建的软件包发布给存储库“发行”。 您需要生成自己的令牌并将其替换为`appveyor.yml`。 登录到您的 github 帐户，然后导航到[个人访问令牌](https://github.com/settings/tokens)页面。 单击“生成新令牌”，然后为公共或私人存储库选择“ public_repo”或“ repo”范围。 副本生成的令牌给 CLI
为您的 Python 项目配置 Appveyor，将新标签推向存储库，然后“自动”获取 GitHub 版本中所有三个平台的桌面捆绑包！ 🎉

<img src="/img/docs/getting-started/appveyor-ci-flet-github-releases.png" className="screenshot-70" />

除了[github 释放](https://www.appveyor.com/docs/deployment/github/)外，您还可以将伪像释放到[Amazon S3 桶](https://www.appveyor.com/docs/deployment/amazon-s3/)或[Azure Blob Storage](https://www.appveyor.com/docs/deployment/azure-blob/)。
