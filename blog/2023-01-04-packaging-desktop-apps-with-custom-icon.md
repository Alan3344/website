---
slug: packaging-desktop-apps-with-custom-icon
title: Packaging desktop apps with a custom icon
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

新年快乐！ [Flet project](https://github.com/flet-dev/flet)已经在 github 上达到了 3.3k 星星 ⭐️⭐️⭐️，这是非常令人兴奋和令人鼓舞的！ 谢谢大家的支持！

我们将从今年开始[Flet 0.3.2](https://pypi.org/project/flet/)带来期待已久的功能: 使用自定义图标创建独立的桌面捆绑包！

`flet`命令已用于使用[Hot Reload](/docs/guides/python/hot-reload)运行 Flet 程序，但是我们最近重新设计了 Flet CLI 以支持多个操作。

有一个新的“ flet pack”命令将[pyinstaller]包装(https://github.com/pyinstaller/pyinstaller) api 将您的 Flet python 应用程序包装到独立的 Windows 可执行文件或 MacOS App Bundle 中，该应用程序可以由无需安装 python 安装的用户运行。

命令的`-icon`参数现在都在更改可执行文件的图标，而且更改 Flet 的 App Window 图标以及 MacOS Dock，Windows Taskesbar，MacOS 中显示的图标，关于“对话框，任务管理器和活动监视器:

<img src="/website/img/docs/getting-started/package-desktop/macos-dock.png" className="screenshot-20 screenshot-rounded" />

捆绑名称，版本和版权也可以更改:

<img src="/website/img/docs/getting-started/package-desktop/flet-app-bundle-about-clean.png" className="screenshot-50" />

在[更新指南](/docs/guides/python/packaging-desktop-app)中找到包装桌面应用程序的所有可用选项。

将 Flet 模块升级到最新版本（`pip install flet -upgrade`），尝试`flet pack`命令''命令，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
