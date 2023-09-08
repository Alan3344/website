---
title: Authentication
sidebar_label: Authentication
---

您可以在 Flet 应用中使用第三方身份提供者，例如 Github，Google，Google，Azure，Auth0，LinkedIn 等，在您的 Flet 应用中实现用户身份验证（“使用 X”按钮）。

身份提供商必须支持[OAUTH 2.0 授权代码流](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)才能检索 API 访问令牌。

内置 Flet 登录具有凭据和用户管理的登录计划以未来发行。
如果您需要在应用程序中创建和管理用户帐户，则可以实现它
通过您自己或使用[auth0](https://auth0.com/user-management)身份提供商
慷慨的自由层。

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

## 登录过程概述

- 配置 OAuth Provider（内置或通用），带有客户端 ID，客户端秘密，重定向 URL。
- 调用`page.login(provider)`启动 OAuth Web 流。
- 用户正在重定向到 OAuth 提供商网站。
- 在提供商网站上，用户登录并同意使用请求的范围访问服务 API。
- 提供商网站将带有授权代码的 oauth 回调 URL 重定向到 Flet 的 OAuth 回调 URL。
- Flet 将授权代码换成令牌，并调用`page.on_login`事件处理程序。
- Flet 应用程序可以从`page.auth.token`属性和用户详细信息中检索`page.auth.user`的用户详细信息。

## 配置 Oauth Provider

Flet 具有以下内置的 OAuth 提供商:

- github
- azure
- 谷歌
- auth0

此外，您可以配置通用的 OAuth 提供商并提供授权，令牌和用户信息终点。

在本指南中，我们将使用 GitHub 帐户配置 Flet 登录页面。

要与 github 集成 Flet 身份验证，应首先注册新的[GitHub Oauth App](https://github.com/settings/developers)（**配置文件设置**→**开发人员设置**→** OAuth Apps **）。

- \*授权回调 URL \*\*应采用格式:

```
{application-url}/api/oauth/redirect
```

<img src="/img/docs/getting-started/authentication/github-new-oauth-app.png" className="screenshot-40" />

On OAuth app details page click "Generate a new client secret" button.
Copy "Client ID" and "Client secret" values to a safe place - you'll need them in a Flet app.

<img src="/img/docs/getting-started/authentication/github-oauth-app-details.png" className="screenshot-40" />

## Sign in with OAuth provider

```python
import os

import flet as ft
from flet.auth.providers import GitHubOAuthProvider

GITHUB_CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
assert GITHUB_CLIENT_ID, "set GITHUB_CLIENT_ID environment variable"
GITHUB_CLIENT_SECRET = os.getenv("GITHUB_CLIENT_SECRET")
assert GITHUB_CLIENT_SECRET, "set GITHUB_CLIENT_SECRET environment variable"

def main(page: ft.Page):
    provider = GitHubOAuthProvider(
        client_id=GITHUB_CLIENT_ID,
        client_secret=GITHUB_CLIENT_SECRET,
        redirect_url="http://localhost:8550/api/oauth/redirect",
    )

    def login_click(e):
        page.login(provider)

    def on_login(e):
        print("Login error:", e.error)
        print("Access token:", page.auth.token.access_token)
        print("User ID:", page.auth.user.id)

    page.on_login = on_login
    page.add(ft.ElevatedButton("Login with GitHub", on_click=login_click))

ft.app(target=main, port=8550, view=ft.WEB_BROWSER)
```

:::caution
Notice, we are fetching OAuth app client ID and client secret from an environment variables.
Do not embed any secrets into source code to avoid accidential exposure to a public!
:::

Before running the app set the secret environment variables in a command line:

```
$ export GITHUB_CLIENT_ID="<client_id>"
$ export GITHUB_CLIENT_SECRET="<client_secret>"
```

Run the program and click "Login with GitHub" button. GitHub authorize app page will be opened in:

- **Desktop** app - a new browser window or tab.
- **Web** app - a new popup window (make sure popup blocker is off).
- **Mobile** app - an in-app web browser.

<img src="/img/docs/getting-started/authentication/github-oauth-authorize.png" className="screenshot-40" />

### Redirect URL

We used `http://localhost:8550/api/oauth/redirect` as a redirect URL while registering GitHub OAuth app.
Notice it has a fixed port `8550`. To run your Flet app on a fixed port use `port` argument in `flet.app` call:

```python
ft.app(target=main, port=8550)
```

### Scope

Most of OAuth providers allows applications to request one or more scopes to limit application's access to a
user's account.

Built-in Flet providers, by default, request scopes to access user profile, but you can request additional scopes in login method, like `public_repo` in the example above:

```python
page.login(
    provider,
    scope=["public_repo"])
```

`page.login()` method has a number of arguments to control authentication process:

- `fetch_user` (bool) - whether to fetch user details into `page.auth.user`. Default is `True`.
- `fetch_groups` (bool) - whether to fetch user groups into `page.auth.user.groups`. Default is `False`.
- `scope` - a list of scopes to request.
- `saved_token` - a JSON snapshot of `page.auth.token` to restore authorization from. Token can be serialized with `page.auth.token.to_json()`, enscrypted and saved in [`page.client_storage`](/docs/guides/python/client-storage). See below.
- `on_open_authorization_url` - a callback to open a browser with authorization URL. See below.
- `complete_page_html` - a custom HTML contents of "You've been successfully authenticated. Close this page now" page.
- `redirect_to_page` (bool) - used with Flet web app only when authorization page is opened in the same browser tab.

The result of `page.login()` call is an instance of `Authorization` class with the following fields:

- **`token`** - OAuth token used to access provider's API. See below.
- **`user`** - user details with a mandatory `id` field and other fields specific to OAuth provider.
- **`provider`** - an instance of OAuth provider used for authorization.

A reference to the last authorization is saved in `page.auth` property.

If you app allows authorizations with multiple OAuth providers you can save authorizations in a session,
for example:

```python
page.session["github_auth"] = page.login(github_provider)
page.session["google_auth"] = page.login(google_provider)
```

### Checking authentication results

Upon successful or failed authorization `page.on_login` event handler is called.

Event handler argument `e` is an instance of `LoginEvent` class with the following properties:

- `error` (str) - OAuth error.
- `error_description` (str) - OAuth error description.

Authorization was successful if `error` is an empty string.

You can use this event handler to toggle signed in/out UI, for example:

```python
import os

import flet
from flet import ElevatedButton, LoginEvent, Page
from flet.auth.providers import GitHubOAuthProvider

def main(page: Page):
    provider = GitHubOAuthProvider(
        client_id=os.getenv("GITHUB_CLIENT_ID"),
        client_secret=os.getenv("GITHUB_CLIENT_SECRET"),
        redirect_url="http://localhost:8550/api/oauth/redirect",
    )

    def login_button_click(e):
        page.login(provider, scope=["public_repo"])

    def on_login(e: LoginEvent):
        if not e.error:
            toggle_login_buttons()

    def logout_button_click(e):
        page.logout()

    def on_logout(e):
        toggle_login_buttons()

    def toggle_login_buttons():
        login_button.visible = page.auth is None
        logout_button.visible = page.auth is not None
        page.update()

    login_button = ElevatedButton("Login with GitHub", on_click=login_button_click)
    logout_button = ElevatedButton("Logout", on_click=logout_button_click)
    toggle_login_buttons()
    page.on_login = on_login
    page.on_logout = on_logout
    page.add(login_button, logout_button)

flet.app(target=main, port=8550, view=flet.WEB_BROWSER)
```

## Accessing user details

If `page.login()` method is called with `fetch_user=True` (default) a user profile will
be assigned to `page.auth.user`.

All built-in OAuth providers implement `user.id` property - unique user identifier - which value depends
on the provider (a number, Guid or email) and can be used in your app as a user key.

The rest of user profile properties depends on provider and can be accessed with an indexer.
For example, to print some properties of GitHub user:

```python
print("Name:", page.auth.user["name"])
print("Login:", page.auth.user["login"])
print("Email:", page.auth.user["email"])
```

## Using OAuth token

Upon successful authorization `page.auth.token` will contain OAuth token that can be used to access providers's API. Token object has the following properties:

- `access_token` - access token used as an authorization token in API request header.
- `scope` - token's scope.
- `token_type` - access token type, e.g. `Bearer`.
- `expires_in` - optional number of seconds when access token expires.
- `expires_at` - optional time (`time.time()` + `expires_in`) when access token expires.
- `refresh_token` - optional refresh token which is used to get a new access token, when the old one expires.

Usually, only `page.auth.token.access_token` is needed to call provider's API,
for example to list user's GitHub repositories:

```python
import requests
headers = {"Authorization": "Bearer {}".format(page.auth.token.access_token)}
repos_resp = requests.get("https://api.github.com/user/repos", headers=headers)
user_repos = json.loads(repos_resp.text)
for repo in user_repos:
    print(repo["full_name"])
```

:::note
Do not save a reference to `page.auth.token` somewhere in your code, but rather call `page.auth.token`
every time you need to grab access token. `page.auth.token` is a property which automatically refreshes
OAuth token if/when it expires.

Correct code:

```python
access_token = page.auth.token.access_token
```

Wrong code:

```python
token = page.auth.token
# some other code
access_token = token.access_token # token could expire by this moment
```

:::

## Saving and restoring an auth token

To implement persistent login ("Remember me" checkbox on login page) you can save auth token in a [client storage](/docs/guides/python/client-storage) and use it to login next time a user opens your Flet app.

To serialize auth token to JSON:

```python
jt = page.auth.token.to_json()
```

:::caution
Encrypt sensitive data before sending it to a client storage.
:::

Flet includes utility methods for encrypting text data using symmetric algorithm (where the same key is used for encryption and decryption). They use [Fernet](https://github.com/fernet/spec/blob/master/Spec.md) implementation from [cryptography](https://pypi.org/project/cryptography/) package, which is AES 128 with some additional hardening, plus PBKDF2 to derive encryption key from a user passphrase.

To encrypt JSON token:

```python
import os
from flet.security import encrypt, decrypt

secret_key = os.getenv("MY_APP_SECRET_KEY")
# returns base64-encoded string
ejt = encrypt(jt, secret_key)
```

:::caution
Notice, we are fetching a secret key (aka passphrase, password, etc.) from an environment variable.
Do not embed any secrets into source code to avoid accidential exposure to a public!
:::

Before running the app set the secret in a command line:

```
$ export MY_APP_SECRET_KEY="<secret>"
```

Now, encrypted value can be stored in a client storage:

```python
page.client_storage.set("myapp.auth_token", ejt)
```

Next time a user opens the app you can read encrypted token from a client storage and, if it exists,
decrypt it and use in `page.login()` method:

```python
ejt = page.client_storage.get("myapp.auth_token")
if ejt:
    jt = decrypt(ejt, secret_key)
    page.login(provider, saved_token=jt)
```

[See complete app example](https://github.com/flet-dev/examples/blob/main/python/apps/authentication/github-oauth-with-listing-repos.py).

## Signing out

Calling `page.logout()` resets `page.auth` reference and triggers `page.on_logout` event handlers.

You can remove saved token in logout method, for example:

```python
def logout_button_click(e):
    page.client_storage.remove(AUTH_TOKEN_KEY)
    page.logout()
```

[See complete app example](https://github.com/flet-dev/examples/blob/main/python/apps/authentication/github-oauth-with-listing-repos.py).

## Customizing authorization flow

By default, OAuth authorization flow is happening in either new browser window/tab (desktop app), browser popup window (web) or in-app web view (mobile).

Upon completion of authorization flow a user is redirected to Flet's OAuth callback page (`/api/oauth/redirect`) which tries to close a browser window/tab with JavaScript and provides user with instructions to close the window manually if JavaScript close didn't work.

This section is applicable to Flet desktop and web apps only as in-app web view in mobile apps can be closed by Flet without relying on JavaScript.

You can customize the contents of "Authorization complete" page in `page.login()` method, for example:

```python
complete_page_html = """
<!DOCTYPE html>
<html>
  <head>
    <title>Signed in to MyApp</title>
  </head>
<body>
  <script type="text/javascript">
      window.close();
  </script>
  <p>You've been successfully signed in! You can close this tab or window now.</p>
</body>
</html>
”“”

page.login（
     提供者，
     完整_page_html =完整_page_html，
）
```

You can also change web app to open provider's authorization page in the same tab which might be more familiar to your users and save them from dealing with popup blockers:

```Python
page.login（
     提供者，
     on_open_authorization_url = lambda url: page.launch_url（url，web_window_name =“ _ self”），
     redirect_to_page = true
）
```

To open flow in a new tab (notice `_self` replaced with `_blank`):

```Python
page.login（
     提供者，
     on_open_authorization_url = lambda url: page.launch_url（url，web_window_name =“ _ blank”）
）
```

## Configuring a custom OAuth provider

You can configure any OAuth-compatible authentication provider in your app with `flet.auth.oauth_provider.OAuthProvider` class.

Following the instructions in [LinkedIn Authorization Code Flow guide](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fcontext&tabs=HTTPS) we are able
to get all required parameters to configure LinkedIn OAuth provider to allow users of your Flet app to login
with their LinkedIn accounts:

```Python {9-16}
import os

import flet
来自Flet Import EvipatedButton，页面
来自flet.auth import oauthprovider

DEF主（页面: 页面）:
     提供者= oauthprovider（
         client_id = os.getEnv（“ linkedin_client_id”），
         client_secret = os.getEnv（“ linkedin_client_secret”），
         授权_endpoint =“ https://www.linkedin.com/oauth/v2/authorization”，
         token_endpoint =“ https://www.linkedin.com/oauth/v2/accesstoken”，
         user_endpoint =“ https://api.linkedin.com/v2/me”，
         user_scopes = [“ r_liteprofile”，“ r_emailaddress”]，
         user_id_fn = lambda u: u [“ id”]，
         redirect_url =“ http: // localhost: 8550/api/oauth/redirect”，
     ）

    def login_click(e):
        page.login(provider)

    def on_login(e):
        if e.error:
            raise Exception(e.error)
        print("User ID:", page.auth.user.id)
        print("Access token:", page.auth.token.access_token)

    page.on_login = on_login
    page.add(ElevatedButton("Login with LinkedIn", on_click=login_click))

flet.app（target = main，port = 8550，view = flet.web_browser）
```

强制提供者设置:

- `client_id`
- `client_secret`
- `authorization_endpoint`
- `token_endpoint`
- `redirect_url`

与其他示例类似的客户 ID 和客户端秘密是从环境变量中获取的。
