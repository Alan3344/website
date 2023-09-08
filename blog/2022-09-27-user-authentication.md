---
slug: user-authentication
title: User authentication
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

从'@them/tocinline'导入 tocinline;

Flet 中的用户身份验证在这里！ 🎉

现在，您可以在 Flet 应用中使用第三方身份提供者（例如 Github，Google，Azure，Auth0，auth0，LinkedIn 等）在 Flet 应用中实现用户身份验证（“使用 X”按钮）:

<img src="/website/img/docs/getting-started/authentication/github-oauth-authorize.png" className="screenshot-40" />

传统上，此版本不仅与身份验证有关，而且还增加了大量随附功能和小改进:

<tocinline toc = {toc} maxheadinglevel = {2} />

## authentication

Flet 身份验证功能:

- 与 Flet 桌面，Web 和移动应用程序一起使用。
- 在一个应用程序中使用多个身份验证提供商。
- 带有自动用户详细信息的内置 OAuth 提供商获取:
  - github
  - azure
  - 谷歌
  - auth0
- 可选组提取。
- 自动令牌刷新。
- 使用保存的令牌登录（“记住我”）。
- 自定义 OAuth 提供商。

关于如何在 Flet app:

```python
import os

import flet as ft
from flet.auth.providers.github_oauth_provider import GitHubOAuthProvider

def main(page: ft.Page):

    provider = GitHubOAuthProvider(
        client_id=os.getenv("GITHUB_CLIENT_ID"),
        client_secret=os.getenv("GITHUB_CLIENT_SECRET"),
        redirect_url="http://localhost:8550/api/oauth/redirect",
    )

    def login_click(e):
        page.login(provider)

    def on_login(e):
        print("Access token:", page.auth.token.access_token)
        print("User ID:", page.auth.user.id)

    page.on_login = on_login
    page.add(ft.ElevatedButton("Login with GitHub", on_click=login_click))

ft.app(target=main, port=8550, view=ft.AppView.WEB_BROWSER)
```

:::注意
在运行应用程序之前，请在命令行中设置秘密环境变量:

```
$ export GITHUB_CLIENT_ID="<client_id>"
$ export GITHUB_CLIENT_SECRET="<client_secret>"
```

:::

[阅读身份验证指南以获取更多信息和示例](/docs/guides/python/authentication)。

## 客户端存储

Flet 的客户端存储 API 允许将键值数据存储在持续存储中的客户端。 Flet 实现使用[`shared_preferences`](https://pub.dev/packages/shared_preferences) flutter 软件包。

将数据写入存储:

```python
page.client_storage.set("key", "value")
```

阅读数据:

```python
value = page.client_storage.get("key")
```

[读取客户存储指南以获取更多信息和示例](/docs/guides/python/client-storage)。

## 会话存储

Flet 在服务器端引入了用于将键值数据存储在用户会话中的 API。

将数据写入会话:

```python
page.session.set("key", "value")
```

阅读数据:

```python
value = page.session.get("key")
```

[读取会话存储指南以获取更多信息和示例](/docs/guides/python/session-storage)

## 加密 API

在此版本中，Flet 将使用对称算法（其中相同的密钥用于加密和解密）引入实用方法来对敏感的文本数据进行加密和解密敏感文本数据。 它使用[cryptography](https://pypi.org/project/cryptography/)软件包的[Fernet](https://github.com/fernet/spec/blob/master/Spec.md)实现，它是 AES 128 带有一些额外硬化的 AES，加上 PBKDF2 来从用户密码中得出加密密钥。

加密数据:

```python
from flet.security import encrypt, decrypt
secret_key = "S3CreT!"
plain_text = "This is a secret message!"
encrypted_data = encrypt(plain_text, secret_key)
```

解密数据:

```python
from flet.security import encrypt, decrypt
secret_key = "S3CreT!"
plain_text = decrypt(encrypted_data, secret_key)
print(plain_text)
```

[继续阅读以获取更多信息和示例](/docs/guides/python/encrypting-sensitive-data)。

## 其他改进

- svg Image 支持（[example](https://github.com/flet-dev/examples/blob/main/python/controls/image/svg-image.py)）和新图像属性:
  - [`Image.color`](/docs/controls/image#color)
  - [`Image.color_blend_mode`](/docs/controls/image#color_blend_mode)
  - [`Image.semantics_label`](/docs/controls/image#semantics_label)
  - [`Image.gapless_playback`](/docs/controls/image#gapless_playback)
- [`on_animation_end`回调](/docs/guides/python/animations#animation-end-callback)到链动画。
- [`Container.clip_behavior`属性](/docs/controls/container#clip_behavior)。
- [`page.window_bgcolor`](/docs/controls/page#window_bgcolor)以使透明透明应用程序窗口:

```python
import flet as ft
def main(page: ft.Page):
    page.window_bgcolor = ft.colors.TRANSPARENT
    page.bgcolor=ft.colors.TRANSPARENT
    page.window_title_bar_hidden = True
    page.window_frameless = True
    page.window_left = 400
    page.window_top = 400
    page.add(ft.ElevatedButton("I'm a floating button!"))
ft.app(target=main)
```

- [`page.get_clipboard()`](/docs/controls/page#get_clipboard)
- [`page.launch_url()`](/docs/controls/page#launch_urlurl) - 更好地控制其他参数:
  - `web_window_name` - 窗口选项卡片/名称要打开 url: `_self` - 相同的选项卡片，`_blank` - 一个新的选项卡片或`<your name>` - 一个命名的选项卡片。
  - `web_popup_window` - 设置为`True`以在浏览器弹出窗口中显示 URL。 默认值为`False`。
  - `window_width` - 可选，弹出窗口宽度。
  - `window_height` - 可选，弹出窗口高度。
- [`page.window_to_front()`](/docs/controls/page#window_to_front)
- [`page.close_in_app_web_view()`](/docs/controls/page#close_in_app_web_view)

升级 Flet 模块到最新版本（`pip install fles -upgrade`），将 auth 集成在您的应用中，并[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

享受！
