---
slug: flet-mobile-update
title: Flet mobile update
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [news]
---

这篇文章是几个月前出版的[Flet 移动策略](/blog/flet-mobile-strategy)的延续。

我们在移动设备上运行 Flet 的原始方法是服务器驱动的 UI。 尽管 SDUI 具有其自身的好处（例如，绕过应用程序更新的应用商店），但在所有情况下都不起作用，需要 Web 服务器托管应用程序的 Python，因此增加了延迟，这对需要用户操作并不是很好 几乎实例 UI 响应，例如绘制应用程序。

我一直在考虑如何使 Python 运行时嵌入 Flutter IOS 或 Android 应用程序以运行用户 Python 程序。 毫无疑问，这在技术上是可能的，就像 Kivy 和 Beeware 项目已经这样做。

## 当前 Flet 架构

Flet 桌面应用的当前架构显示在下图:

<img src="/website/img/blog/mobile-update/flet-desktop-architecture.svg" className="screenshot-100" />

在桌面上运行 Flet 程序涉及三个应用程序（进程）一起工作:

- ** Python Runtime **（`python3`） - Python 解释器运行 Python 脚本。 这是您从命令行开始的。 Python 启动 Flet D 服务器，并通过 WebSockets 连接到它。
- ** Flet D 服务器**（`fletd`） - Flet Web 服务器写在 GO 中，在 TCP 端口上侦听。 Flet d 保留所有用户会话的状态（对于桌面应用，只有一个会话），并且在 Python 程序和 Flet 客户端之间派遣页面更新和用户生成的事件。
- ** Flet client **（`flet`） - 桌面应用程序用扑朔迷离，并在本机 OS 窗口中显示 UI。 Flet 客户端通过 Websocket 连接到 Flet D 服务器。

上面的体系结构非常适合 Flet Web 应用程序，其中 Web 服务器是必不可少的部分，但是对于桌面来说，它似乎是多余的:

- 如果在同一计算机 Websockets 上运行的所有三个进程都可以用插座或命名的管道替换为较少的开销。
- Flet d 服务器没有太多意义

Flet 桌面应用程序架构可以通过用 Python 编写的“存根”替换 Flet d 来简化，并通过 sockets（Windows）和名为 Pipes（MacOS and Linux）与 Flet 桌面客户端进行通信。

<img src="/website/img/blog/mobile-update/flet-desktop-architecture-v2.svg" className="screenshot-70" />

## Flet 移动体系结构

移动应用程序在非常严格的上下文中运行，并具有许多限制。 例如，在 iOS 上，应用程序无法产生新的过程。 其他单词，Flet flutter 应用程序不能仅仅启动“ python.exe”，然后将您的脚本作为参数传递。

对我们来说幸运的是，[Python 可以被嵌入](https://docs.python.org/3/extending/embedding.html)作为 C 库和 DART（编写 Flutter Apps 的语言）允许通过[FFI](https://dart.dev/guides/libraries/c-interop)（exourtal Function 接口）调用 C 库。

此外，虽然 Android 允许加载动态链接的库 iOS iOS 需要静态链接到应用程序可执行文件的所有库。 [本文](https://blog.logrocket.com/dart-ffi-native-libraries-flutter/)如果您很好奇，请提供更多详细信息。

Flet 移动体系结构看起来像这样:

<img src="/website/img/blog/mobile-update/flet-mobile-architecture-v2.svg" className="screenshot-40" />

Python 运行时将与 Flutter Client 应用程序静态或动态链接，并通过 FFI 和/或命名的管道致电。

不过，在移动设备上运行 Python 将有一些限制。 最值得注意的是，必须使用专门为移动 ARM64 体系结构编译的本机代码使用“纯” Python 模块或模块。

## asyncio 支持

[asyncio](https://docs.python.org/3/library/asyncio.html)是 Python 3 的一部分，我们开始看到越来越多的库赶上异步/等待编程模型，这对于 I/O-Bound 和 UI 逻辑更有效。

当前，Flet 正在用新线程产生所有 UI 事件处理程序，并且看到`threading.sleep()`在这里和那里调用 Hogging 线程也很痛苦，只是为了做一些 UI 动画。 所有看起来都很昂贵。

使用同步代码的 ASYNC 库是[可能的](https://github.com/flet-dev/flet/issues/128)，但看起来很骇人听闻且效率低下，因为它使 CPU 保持忙碌只是等待异步方法完成。 因此，我们希望在 Flet 应用中对异步代码的一流支持。

异步/等待模型是一个状态机，在单个线程中的任务之间切换。 通过使用 Async Flet 将能够利用套接字服务器的[Streams](https://docs.python.org/3/library/asyncio-stream.html)并使用 Async [WebSockets Library](https://pypi.org/project/websockets/)库。 可以在单个 Flet 应用中同时使用同步和异步事件处理程序，而无需任何妥协或黑客攻击。

更令人兴奋的是，异步 Flet 将能够完全在[Pyodide](https://pyodide.org/) - 基于 WebAssembly（WASM）的 python 分发中运行。 WebAssembly 还没有多线程支持，因此必须在单个线程中运行。 试想一下，Flet Web 应用程序带有 trully Offline Flet PWA，不需要 Web 服务器运行 Python 代码！

## 开发计划

我们将在一些迭代中处理上面的范围:

1.与异步 Websockets 库的异步 API 支持。 在 Go 中使用相同的 Flet d。 2. Flet D 服务器（“ stub”）与桌面一起使用。 3.将 python 嵌入 Flet d“ stub”和用户程序中的 python 中。 4.将 Python 嵌入 Android 中。 5.包装 iOS 和 Android 的移动应用程序。

:::WautionHelp 想要
🙏 我正在寻找帮助
跳到[Discord](https://discord.gg/dzWXP8SHG8)讨论计划，提供帮助，提出问题！
