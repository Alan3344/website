---
title: Customizing web app
sidebar_label: Customizing web app
---

当您在浏览器中打开Flet应用程序时，Flet server（aka“ Flet daemon} daemon”或`fletd`）在浏览器中`index.html`，Flutter Engine，Favicon，Favicon，Image和其他Web应用程序资源提供服务。 这些资源与`flet` Python软件包捆绑在一起。 但是，在某些情况下，您需要修改某些文件的内容以自定义应用程序的外观或其行为的外观，例如: 

*  favicon。
* 应用程序加载动画。
* `manifest.json`带有PWA详细信息。
* `index.html`，其中包括应用程序描述和触摸图标。


您可以在`flet.app()`中指定`assets_dir`调用以设置应用程序可用的资产位置。 `assets_dir`可能是您`main.py`目录或绝对路径的相对。 例如，考虑以下程序结构: 

```
/assets
   /images/my-image.png
main.py
```

您可以在应用程序中访问您的图像如下: 

```python {4,8}
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src=f"/images/my-image.png"))

ft.app(
    target=main,
    assets_dir="assets"
)
``` 

####  favicon

用自己的put `favicon.png`文件覆盖资产目录的根。 它应该是一个PNG图像，其大小至少为32x32像素。

#### 加载动画

要覆盖Flet动画图像将`iCONS/loading-animation.png`映像带有您自己的应用徽标映射到资产目录的根目录中。

如果您想完全自定义Flutter应用程序初始化逻辑，则可以按照[Flutter Documentation中的指令](https://docs.flutter.dev/development/platform-integration/web/initialization)修改[Flet的原始`index.html`](https://github.com/flet-dev/flet/blob/main/client/web/index.html)。 必须将自定义的`index.html`放置在资产目录的根部。