---
title: Hot reload
sidebar_label: Hot reload
---

 `flet` Python模块的安装还安装`flet`命令工具（Flet CLI）
这允许使用热装加载运行网络和桌面应用程序。

```
usage: flet run [-h] [--port PORT] [--directory] [--recursive] [--hidden] [--web]
                script

Runs Flet app in Python with hot reload.

positional arguments:
  script                path to a Python script

options:
  -h, --help            show this help message and exit
  -v, --verbose         -v for detailed output and -vv for more detailed
  -p PORT, --port PORT  custom TCP port to run Flet app on
  -d, --directory       watch script directory
  -r, --recursive       watch script directory and all sub-directories recursively
  -n, --hidden          application window is hidden on startup
  -w, --web             open app in a web browser
```

默认情况下，`flet`仅观看一个`script`文件。 使用` -  directory`标志观看脚本目录中的所有文件。 使用` - 回复“标志”递归观看脚本目录和所有子目录。

例如: 

```
flet run main.py -d
```