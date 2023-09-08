---
slug: flet-for-ios
title: Flet for iOS
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

🎉whoo-hoo，Flet app 现在在 App Store 上！ 🎉

<a href="https://apps.apple.com/app/flet/id1624979699" target="_blank"><img src="/website/img/blog/ios/flet-1080x1080.png" className="screenshot-50 screenshot-rounded"/></a>

使用 Flet iOS 应用程序，您可以看到 Flet Python 应用在 iPhone 或 iPad 上的外观和行为时，该应用程序本身在计算机上运行。

但这不仅仅是在手机上测试 Flet 应用程序！ Flet 移动应用程序本身是用 Python 编写的，其发布到 App Store 是整个 Flet 项目的重要里程碑。 这是一个成功的证明，您只能在 Python 中创建很棒的移动应用程序并打包它们，以便它们在 App Store 中接受！

- - [遵循本指南](/docs/guides/python/testing-on-ios) \*\*开始在 iPhone 或 iPad 上测试 Flet 应用程序。 探索应用程序，浏览图库，播放示例项目和应用程序设置。

我要感谢[Kivy Project](https://kivy.org/)制作了[iOS 的工具链](https://github.com/kivy/kivy-ios)，我们用来编译 Python 解释器和 iOS 设备的依赖项。 我们发布了用于将 Python 运行时添加到任何 Flutter App 的程序。

很快。 它现在具有＃1 优先级，我们已经开始从事它。

### 如何打包我的 Flet App for App Store？

我们将为 Bootstrap Flutter 应用程序提供一个项目模板，并提供指南如何将 Flutter，`serious_python`软件包和您的 Python 应用程序组合在一起，以创建一个独立的 iOS 应用程序并将其发布到 App Store 中。

今年晚些时候，我们将创建 CI 管道以充分自动化该过程。

查看[{`serious_python`的 readme](https://github.com/flet-dev/serious-python#usage)，以获取有关如何创建 flutter bootstrap 并包装 python 应用程序以运行它的说明。 使用[flet_example](https://github.com/flet-dev/serious-python/tree/main/example/flet_example)项目作为起点。

## Flet v0.8.0 发行笔记

要在 iOS 上进行测试，您需要将安装 Flet 升级到 v0.8.0。

在 V0.8.0 中，它已经[经常更改](https://github.com/flet-dev/flet/blob/main/CHANGELOG.md#080)，并且发生了一些破裂的变化。 当您升级到 0.8.0 时，请忍受我们，如果您对此有任何麻烦，请告诉我们。

享受！
