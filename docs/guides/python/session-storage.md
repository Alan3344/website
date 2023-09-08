---
title: Session storage
sidebar_label: Session storage
---

 Flet提供了用于在服务器端将键值数据存储在用户会话中的API。

将数据写入会话: 

```python
# strings
page.session.set("key", "value")

# numbers, booleans
page.session.set("number.setting", 12345)
page.session.set("bool_setting", True)

# lists
page.session.set("favorite_colors", ["read", "green", "blue"])
```

:::谨慎
在当前Flet实现中，存储在会话存储中的数据是瞬态的，并且在应用程序重新启动之间未保留。
:::

阅读数据: 

```python
# The value is automatically converted back to the original type
value = page.session.get("key")

colors = page.session.get("favorite_colors")
# colors = ["read", "green", "blue"]
```

检查密钥是否存在: 

```python
page.session.contains_key("key") # True if the key exists
```

获取所有钥匙: 

```python
page.session.get_keys()
```

删除一个值: 

```python
page.session.remove("key")
```

清除会话存储: 

```python
page.session.clear()
```