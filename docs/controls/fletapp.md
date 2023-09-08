---
title: FletApp
sidebar_label: FletApp
slug: fletapp
---

在当前应用中呈现另一个Flet应用程序，类似于html iframe，但对于Flet。

##  properties 

###  

###  `reconnect_interval_ms`

延迟，以毫秒的重新连接尝试。

###  `reconnect_timeout_ms`

尝试重新连接的总时间。

###  `url`

Flet应用程序，例如 `http://localhost:8550`或`flet.sock`。

## 事件

###  `on_error`

当连接或任何未手动错误发生时会发射。