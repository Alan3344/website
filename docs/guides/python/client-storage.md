---
title: Client storage
sidebar_label: Client storage
---

 Flet的客户端存储API允许将键值数据存储在持续存储中的客户端。 Flet实现使用[`shared_preferences`](https://pub.dev/packages/shared_preferences) flutter软件包。

实际的存储机制取决于Flet应用程序正在运行的平台: 

*  Web- [本地存储](https://developer.mozilla.org/en-US/docs/Web/API/Storage)。
* 桌面-JSON文件。
* ios- [nsuserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults)。
* Android- [共享Preferences](https://developer.android.com/reference/android/content/SharedPreferences)。

将数据写入存储: 

```python
# strings
page.client_storage.set("key", "value")

# numbers, booleans
page.client_storage.set("number.setting", 12345)
page.client_storage.set("bool_setting", True)

# lists
page.client_storage.set("favorite_colors", ["read", "green", "blue"])
```

:::注意
使用`shared_preferences`插件的每个扑动应用程序都有其自己的首选项集。 由于使用相同的Flet client（这是一个flutter应用程序）用于运行ui ui Flet应用程序，因此可见一个Flet应用程序中存储的任何值可见/可用于另一个用户运行的另一个Flet应用程序。

为了区分一个应用程序设置，建议将所有唯一的前缀用于所有存储密钥，例如`{company}。{prod}。 例如，要将auth令牌存储在一个应用中，您可以使用`acme.one_app.auth_token`键，在另一个应用程序中使用`acme.second_app.auth_token`。
:::

:::谨慎
Flet应用程序开发人员的责任在将其发送到客户端存储之前加密敏感数据，因此不会由另一个应用程序或应用程序用户读取/篡改。
:::

阅读数据: 

```python
# The value is automatically converted back to the original type
value = page.client_storage.get("key")

colors = page.client_storage.get("favorite_colors")
# colors = ["read", "green", "blue"]
```

检查密钥是否存在: 

```python
page.client_storage.contains_key("key") # True if the key exists
```

获取所有钥匙: 

```python
page.client_storage.get_keys("key-prefix.")
```

删除一个值: 

```python
page.client_storage.remove("key")
```

清除存储空间: 

```python
page.client_storage.clear()
```

:::谨慎
`clear()`是一个危险的功能，它删除了由同一用户运行的所有Flet应用程序的所有首选项，并且用作头部，即不应将永久应用数据存储在客户端存储中。
:::