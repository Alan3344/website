---
title: Testing Flet app on iOS
sidebar_label: Testing on iOS
---

从'@themy/tabs'导入选项卡片;
import TabItem from '@theme/TabItem';

仅使用您的计算机和手机就开始在 Python 中构建出色的移动应用程序！

在 iOS 设备上安装[Flet](https://apps.apple.com/app/flet/id1624979699)应用程序。 您将使用此应用程序查看 Flet 项目如何在 iPhone 或 iPad 上工作。

<a href="https://apps.apple.com/app/flet/id1624979699" target="_blank"><img src="/website/img/docs/getting-started/testing-on-ios/qr-code.jpg" className="screenshot-30" /></a>

要开始使用计算机，您需要安装 Python 3.7 或更高的安装。

:::谨慎
您的 iOS 设备和计算机必须连接到同一 Wi-Fi 或本地网络。
:::

建议从创建新的虚拟环境开始:

<Tabs groupId="language">
  <TabItem value="macOS" label="macOS" default>

```
python3 -m venv .venv
source .venv/bin/activate
```

  </TabItem>
  <TabItem value="Linux" label="Linux">

```
python3 -m venv .venv
source .venv/bin/activate
```

  </TabItem>
  <TabItem value="Windows" label="Windows">

```
python.exe -m venv .venv
.venv\Scripts\activate.bat
```

  </TabItem>
</Tabs>

接下来，安装最新的`flet`软件包:

```
pip install flet --upgrade
```

确保 Flet 已成功安装，并且 Flet CLI 在`PATH`中可通过运行以下命令

```
flet --version
```

创建一个新的 Flet 项目:

```
flet create my-app
cd my-app
```

运行以下命令使用您的应用程序启动 Flet 开发服务器:

```
flet run --ios
```

带有编码项目 URL 的 QR 码将显示在终端中:

<img src="/website/img/docs/getting-started/testing-on-ios/app-qr-code.png" className="screenshot-30 screenshot-rounded" />

在 iOS 设备上打开**相机**应用程序，指向 QR 码，然后单击**在 Flet **链接中打开。

一个对话框要求访问本地网络的权限将弹出:

<img src="/website/img/docs/getting-started/testing-on-ios/flet-local-network.png" className="screenshot-30 screenshot-rounded" />

单击**允许**，您应该看到 Flet 应用程序运行。

尝试更新`main.py`（例如，替换`Text`控件的问候） - 该应用将在您的 iOS 设备上立即刷新。

您可以尝试使用[简介](/docs/#flet-app-example)的模式复杂 Flet 示例。

要么返回“家”选项卡片:

- 用 3 个手指或
- 在屏幕上的任何地方长按下。

您还可以通过单击**“+” **按钮“手动”添加一个新项目并输入其 URL。

:::Infoquick 测试
在 Internet 上托管的“ counter” Flet 项目可以添加到 Flet 应用程序，以确保一切正常:

```
https://flet-counter-test-ios.fly.dev
```

:::

检查“画廊”选项卡片，以获取一些很好的示例，介绍 Flet 可以完成哪种项目。

探索[Flet 示例](https://github.com/flet-dev/examples/tree/main/python)以获取更多示例。
