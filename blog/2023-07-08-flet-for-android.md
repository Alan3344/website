---
slug: flet-for-android
title: Flet for Android
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

🤖Android 支持在这里！

<a href="https://play.google.com/store/apps/details?id=com.appveyor.flet" target="_blank"><img src="/img/docs/getting-started/testing-on-android/google-play-badge.png" className="screenshot-40" /></a>

使用 Flet Android 应用程序，您可以看到 Flet Python App 在应用程序本身在计算机上运行时在 Android 设备上的外观和行为。

与 iOS 相似，Flet 的 Android 是一个完全在 Python 中写入 Python 的 flutter 应用程序: [{`serious_python`](https://pub.dev/packages/serious_python)和[`flet`](https://pub.dev/packages/flet)。 生成的应用程序包在技术上符合 Google Play 的要求，因此您可以在 Pure Python 中发布出色的 Android 应用程序。

- - [遵循本指南](/docs/guides/python/testing-on-android) \*\*开始测试 Android 上的 Flet 应用程序。 探索应用程序，浏览图库，播放示例项目和应用程序设置。

## FAQ

### 如何打包我的 Google Play Flet 应用程序？

我们将为 Bootstrap Flutter 应用程序提供一个项目模板，以及如何将 Flutter，`serious_python`软件包和您的 Python 应用程序组合在一起，以创建一个独立的 Android 应用程序并将其发布到 Google Play 中。

检查[{`serious_python`的 readme](https://github.com/flet-dev/serious-python#usage)，以获取有关如何创建 flutter bootstrap 并包装 python 应用程序以运行它的说明。 使用[Flet_example](https://github.com/flet-dev/serious-python/tree/main/example/flet_example)项目作为起点。

### 您是否会为 Windows，MacOS 和 Linux 提供包装？

是的！ 目前，Flet 桌面应用程序包装了``flet pack''命令和 pyinstaller。 生产的 App Bundle 增加了性能和大小开销，并且很难自定义，因此我们将用本机扑面包装替换。

## Flet v0.9.0 发行说明

要在 Android 上进行测试，您需要将 Flet 安装升级到 v0.9.0。

有[一些更改](https://github.com/flet-dev/flet/blob/main/CHANGELOG.md#090)主要支持 Flet CLI 中的 Android。 如果您注意到一些不寻常的东西，请告诉我们。

享受！
