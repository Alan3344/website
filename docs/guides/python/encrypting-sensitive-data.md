---
title: Encrypting sensitive data
sidebar_label: Encrypting sensitive data
---

敏感数据，例如令牌，密钥，信用卡片号和其他“秘密”，必须以加密形式存储在REST（数据库，文件，[客户端存储](/docs/guides/python/client-storage)）中，以避免数据泄露。

Flet包括使用对称算法加密和解密敏感文本数据的实用程序方法（其中相同的密钥用于加密和解密）。 他们使用[cryptography](https://pypi.org/project/cryptography/)软件包的实现[7961} (https://github.com/fernet/spec/blob/master/Spec.md)，它是AES 128带有一些额外硬化的AES，加上PBKDF2来从用户密码中得出加密密钥。

## 秘密密钥

加密秘密密钥（又称密码或密码）是由用户配置并用于加密和解密数据的任意密码的字符串。 加密算法使用秘密键来“得出”加密密钥（32个字节）。

:::危险
不要将任何秘密嵌入到源代码中，以避免意外暴露于公众！
:::

您可以通过环境变量为您的应用程序提供秘密: 

```python
import os
secret_key = os.getenv("MY_APP_SECRET_KEY")
```

在运行应用程序之前，请在命令行中设置秘密: 

```
$ export MY_APP_SECRET_KEY="<secret>"
```

:::注意
尽管通过环境变量传递秘密是开发人员和服务提供商的常见做法，但它并不能完全阻止某些环境中的秘密泄漏。 可以使用其他机制
将秘密注入您的应用程序，例如安装秘密文件或保险库服务。
:::

## 加密数据

使用`encrypt()`方法加密字符串: 

```python
import os
from flet.security import encrypt, decrypt

secret_key = os.getenv("MY_APP_SECRET_KEY")
plain_text = "This is a secret message!"
encrypted_data = encrypt(plain_text, secret_key)
```

`encrypted_data`是一个URL-SAFE Base64编码的字符串。

`encrypt`仅接受字符串，因此必须在加密之前将任何对象序列化为JSON，XML或其他基于文本的格式。

## 解密数据

使用`decrypt()`方法解密数据: 

```python
import os
from flet.security import encrypt, decrypt

secret_key = os.getenv("MY_APP_SECRET_KEY")
encrypted_data = "601llp2zpPp4QjBWe2cOwGdBQUFBQUJqTTFJbmgyWU5jblVp..."
plain_text = decrypt(encrypted_data, secret_key)
print(plain_text)
```