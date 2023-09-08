---
title: How Flet works
sidebar_label: How it works
slug: how-it-works
---

Flet UI 不会嵌入您的程序中，而是由处理外 Flet 服务器提供的服务。 应用程序状态和控制流逻辑属于您的持久性程序程序，而 UI 更改和事件通过基于 WebSocket 的协议传达给 Flet 服务器。 它允许将 Web 应用程序写为独立的整体，而无需任何请求/响应模型，路由，模板或状态管理。

在经典的客户端架构中，前端通信到一个或多个后端服务。 Flet 实现了一种相反的方法，其中多个后端服务散布在防火墙后面的内部网络上，并与集中式 Flet Web 服务器（即前端服务）进行通信，即 DMZ 中安装或托管作为服务。

<div style={{textAlign: 'center'}}><img src="/img/blog/pglet-introduction/pglet-highlevel-design.png" /></div>

该设计给出了许多优点:

- 通过设计安全 - 您的内部服务和关键数据留在防火墙后面，而无法从外界访问。
- 应用程序旁边运行的应用程序及其处理数据 - 更快/更便宜的访问和最大安全性。
- 零部署 - 在网络或开发计算机中的任何服务器上运行应用程序，无需将应用程序部署到 Web 服务器。
