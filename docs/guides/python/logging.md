---
title: Logging
sidebar_label: Logging
---

本文说明了如何控制Flet库及其基础组件生成的日志消息的级别。 您可能需要启用详细的记录以进行故障排除Flet库或提交新的Flet问题。

##  Python

Flet Python模块露出名为Loggers: `flet_core`和`flet`。

启用详细/冗长的Flet在您的程序中记录添加此代码，然后再调用`ft.app()`: 

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

这将启用所有Flet模块（`flet_core`和`flet`）的记录器。

为了减少冗长，您可以抑制`flet_core`模块的记录消息，但添加: 

```python
logging.getLogger("flet_core").setLevel(logging.INFO)
```

提交新的Flet问题时，通常需要用于故障排除目的的调试记录。

在大多数情况下，您应该可以使用`INFO`记录级别。

##  Flet d服务器

您可以控制Flet d-内置Flet Web服务器的记录。

当`flet`配置Python Logger级别时，其值将隐式传递到Flet D服务器，您可以在输出中看到其日志消息。

但是，您可以使用`FLET_LOG_LEVEL`环境变量覆盖Flet d日志级别: `debug`，`info`，`warning`，`debug`，`debug`，`panic`，`panic`，`fatal`。

此外，要重定向Flet日志输出到一个文件，您可以将`FLET_LOG_TO_FILE`环境变量设置为`true`。 Flet日志将在MacOS和Linux上保存到`/tmp/flet-server.log`以及Windows上的``temp％\ flet-server.log''中。