---
title: Choosing hosting provider
sidebar_label: Hosting providers
slug: /guides/python/deploying-web-app/hosting-providers
---

 Flet应用程序使用Websockets对其UI的实时部分更新，并将事件发送回您的程序。
在为Flet应用程序选择托管提供商时，您应该注意他们对Websockets的支持。 有时不允许Websocket或作为更昂贵的产品的一部分而来的，有时会有一个代理会定期通过超时破坏Websocket连接（Flet实现重连接逻辑，但无论如何，它可能是您应用程序用户的不愉快行为 ）。

为Flet应用程序选择托管提供商时的另一个重要因素是延迟。 UI上的每个用户操作都会向Flet应用发送消息，并且该应用将更新的UI发送给用户。 确保您的托管提供商具有多个数据中心，因此您可以更靠近大多数用户。

:::注意
我们不属于本节中的托管提供商 - 我们只使用他们的服务并喜欢它。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```