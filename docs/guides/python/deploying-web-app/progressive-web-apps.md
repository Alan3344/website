---
title: Progressive web apps (PWA)
sidebar_label: Progressive web apps (PWA)
---

渐进式 Web 应用程序（PWAS）提供了一种将类似应用程序的网站变成类似网站的应用程序的方法。

检查[PWAS 将网站变成应用: 这就是 PWA 简介的方式](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps)。

支持 PWA 的浏览器（[安装指令](#pwa-installation-instructions)）:

- ** Chrome **在所有平台上
- **边缘**在所有平台上
- ** firefox **在 Android 上
- ** Safari ** iOS 和 iPados

## 自定义 PWA

:::信息
本节中的信息基于以下资源（查看它们以获取更多详细信息）:

- [有关 PWAS 的常规信息](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [PWA 清单](https://developer.mozilla.org/en-US/docs/Web/Manifest)
  :::

### 清单

您可以在`manifest.json`中更改 PWA 的名称，描述，颜色和其他信息，这些信息必须放在[Assets Directory](/docs/guides/python/deploying-web-app/customizing-web-app)的根源中。

以下是您要自定义的最常见清单项目的链接:

- [`name`](https://developer.mozilla.org/en-US/docs/Web/Manifest/name) - 通常显示给用户的 Web 应用程序的名称。
- [`short_name`](https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name) - 如果没有足够的空间显示`name`，则显示给用户的 Web 应用程序的名称。
- [`description`](https://developer.mozilla.org/en-US/docs/Web/Manifest/description) - 说明应用程序的作用。
- [`theme_color`](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) - 定义应用程序的默认主题颜色。
- [`background_color`](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color) - 定义了占位符的背景颜色，用于在加载样式图之前显示应用程序页面。

### iCONS

自定义图标放在`icons`目录中的资产目录中:

- `iCON-1192.png`，`iCon-512.png`- Windows Taskbar 中显示的应用程序图标。
- ```Icon baskable-192.png`，`iCON-maskable-512.png`-在 Android 中显示的应用图标。
- ``apple-touch-icon-192.png`- iOS 中显示的应用图标。

## PWA 安装说明

以下是允许在台式机或主屏幕上安装 Flet Web 应用程序的浏览器列表，以及有关如何执行此操作的说明。 允许您使用这些说明以及图像来教育您的应用程序的用户。

### Safari

要将 PWA 安装到 iOS 和 iPados 上的主屏幕上:

- 在屏幕底部点击<img src="/img/docs/getting-started/ios-share-icon.svg" className="icon-button" />。
- 点击**添加到主屏幕<img src="/img/docs/getting-started/add-box-icon.svg" className="icon-button" /> **打开安装应用程序对话框。

### chrome

Chrome 在可用的所有平台上支持 PWA。

#### 桌面

Chrome for Desktop 在地址栏中显示一个按钮以打开“安装应用程序”对话框:

<img src="/img/docs/getting-started/chrome-pwa-install.png" className="screenshot-60" />

#### 移动

要在 Chrome 的移动版本上安装应用程序:

- 点击<img src="/img/docs/getting-started/more-vert-icon.svg" className="icon-button" />菜单按钮以打开 Chrome 主菜单。
- 点击**安装应用程序**打开应用程序安装对话框。

### edge

Edge 在可用的所有平台上支持 PWA。 与 Chrome 类似，地址栏中有一个按钮可以打开“安装应用程序”对话框:

<img src="/img/docs/getting-started/edge-pwa-install.png" className="screenshot-60" />

### Android 上的 Firefox

- 点击<img src="/img/docs/getting-started/more-vert-icon.svg" className="icon-button" />菜单按钮以打开 Firefox 主菜单。
- 点击**安装**打开应用程序安装对话框。
