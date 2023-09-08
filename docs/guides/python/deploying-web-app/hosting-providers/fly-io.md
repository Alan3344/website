---
title: Fly.io
sidebar_label: Fly.io
slug: fly-io
---

 [Fly.io](https://fly.io)具有强大的Websocket支持，并且可以将应用程序部署到靠近用户的[数据中心](https://fly.io/docs/reference/regions/)。 他们具有非常有吸引力的价格，并具有[慷慨的免费层](https://fly.io/docs/about/pricing/#free-allowances)，可让您免费托管最多3个应用程序。

要开始使用Fly Install [FlyCtl](https://fly.io/docs/getting-started/installing-flyctl/)，然后进行身份验证: 

    flyctl auth login

要使用`flyctl`部署该应用程序，您必须使用Python应用程序将以下3个文件添加到文件夹中。

使用应用程序依赖项列表创建`requirements.txt`。 至少应包含`flet`模块: 

```txt title="requirements.txt"
flet
```

创建`fly.toml`描述飞行应用程序: 

```toml title="fly.toml" {1,8}
app = "<your-app-name>"

kill_signal = "SIGINT"
kill_timeout = 5
processes = []

[env]
  FLET_SERVER_PORT = "8080"
  FLET_FORCE_WEB_VIEW = "true"

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 8080
  processes = ["app"]
  protocol = "tcp"
  script_checks = []

  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

将`<your-app-name>`替换为所需的应用程序名称，该名称也将在应用程序URL中使用，例如`https://<your-app-name>.fly.dev`。

请注意，我们将`FLET_SERVER_PORT`环境变量的值设置为`8080`，这是一个内部TCP端口Flet Web应用程序将继续运行。

创建`Dockerfile`包含命令以构建应用程序容器的命令: 

```Dockerfile title="Dockerfile"
FROM python:3-alpine

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python", "./main.py"]
```

`main.py`是带有Python程序的文件。

:::注意
Fly.io将每个应用程序作为Docker容器部署，但是Fly的好处是它提供了免费的远程Docker构建器，因此您不需要安装在机器上的Docker。
:::

接下来，使用您的应用将命令行切换到文件夹，然后运行以下命令来创建和初始化新的飞行应用程序: 

    flyctl apps create --name <your-app-name>

通过运行部署应用程序: 

    flyctl deploy

就是这样！ 通过运行以下命令在浏览器中打开应用程序: 

    flyctl apps open