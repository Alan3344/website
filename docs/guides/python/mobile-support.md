---
title: Mobile support
sidebar_label: Mobile support
---

本文涵盖了 Flet 的移动愿景并提供路线图。

## 服务器驱动的 UI

Flet 是服务器驱动的 UI（SDUI）框架。 SDUI 是一种新兴技术，是[技术雷达邮报](https://www.thoughtworks.com/en-ca/radar/techniques/server-driven-ui)中最好的描述:

> 服务器驱动的 UI 将渲染分离为移动应用中的通用容器，而服务器提供了每个视图的结构和数据。 这意味着现在可以通过简单的更改服务器发送的响应来完成一度需要往返 App Store 的更改。

[Doordash](https://doordash.engineering/2021/08/24/improving-development-velocity-with-generic-server-driven-ui-components/)，[Airbnb](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5)，[Lyft](https://podcasts.apple.com/us/podcast/server-driven-ui-with-kevin-fang-jeff-hurray/id1453587931?i=1000509742062)等公司都成功地在其移动应用程序中成功实现了服务器驱动的 UI，以减少上市时间。

### Flet Flet Flet Flet 方法

Flet 将要在服务器上以 Python 或其他语言编写的程序来实现服务器驱动的 UI 方法，并且仅在 App Store 中运行薄的客户端（`.apk`或`.ipa` package），或者 Flutter 小部件作为另一个应用程序的一部分 - 已交付到手机:

<img src="/website/img/docs/getting-started/flet-highlevel-diagram.svg" className="screenshot-100" />

一旦准备就绪 SDUI 经验，我们将开始处理[独立移动包](#standalone-mobile-package-for-flet-app)。

为了在移动平台上为 Flet 应用提供最佳体验，我们计划在今年年底之前发布以下项目:

### Flet for Flutter 的小部件

我们要做的第一步是将 Flet 客户端分为 flutter 小部件，并在https://pub.dev上发布软件包。
然后，移动开发人员可以将小部件集成到现有或新的 Flutter 应用程序中，以将动态服务器驱动的 UI 体验添加到核心应用程序功能中。 还可以使用单个 Flet 窗口小部件创建一个新的 Flutter 应用程序，仅仅是为了托管一个完整的 Flet 应用程序。

开发人员将遵循 Flutter 指南，以将其应用程序包装，签名和分发到[Android](https://docs.flutter.dev/deployment/android)，[IOS](https://docs.flutter.dev/deployment/ios)，[Linux](https://docs.flutter.dev/deployment/linux)，[MacOS](https://docs.flutter.dev/deployment/macos)或[Windows](https://docs.flutter.dev/deployment/windows)平台。

Flet 团队将提供样品 CI 管道来自动包装，签名和发布 flutter 应用程序。

下一步是一个独立的“ Flet studio”应用程序（名称不是最终）和 Google Play，用于“测试使用 Flet 框架开发的移动体验”。 开发人员或 Beta 测试人员将能够在 Flet studio 中“注册”其托管 Flet 应用程序的 URL，并立即查看其在移动设备上的性能。

### 白色标记 Flet 移动应用程序

我们将为用户应用商店或 Google Play 帐户提供自动发布白标 Flet 应用程序的指南和 CI 管道。 该应用程序将被“固定”到特定的应用程序 URL，并且可以额外捆绑应用程序资产（媒体，字体）以最大程度地减少网络使用情况。

### Flet 应用程序的独立移动软件包

我们将调查方式并开发一个原型，以将 Flet 框架，用户程序，语言运行时和所有依赖项捆绑在一起，以进入独立的移动软件包（`.apk`或`.ipa`软件包），因此 Flet 程序不在 需要 Web 服务器。

### 将 Flet 嵌入到本机应用中

我们将使用[Flutter add-to-app](https://docs.flutter.dev/development/add-to-app)功能提供指南，示例应用程序和 CI 管道，以将 Flet 小部件集成到现有的本机 Android 和 iOS 应用程序中（未使用 Flutter 开发）。 [将 Flutter 上班](https://medium.com/flutter/put-flutter-to-work-95f5fdcc592e)文章给出了一个现实世界中的示例，介绍了如何将 Flutter 集成到现有移动应用程序中。
