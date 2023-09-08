---
slug: flet-versioning-and-pre-releases
title: Flet versioning and pre-releases
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [news]
---

 Flet是一个快速发展的框架，具有新功能，并且每隔一天进行错误修复。

随着用户等待数周的新版本，每个版本的一个拉力请求都对该项目的开发模型不错，而且说实话，从发展的角度来看，生产大型“英雄”发行版本需要大量的能量。

从现在开始，我们将以每个PR的一个功能/bugfix将版本分解为多个拉动请求。

每个PR合并到`main`分支中，都将发布预释放（开发版）软件包，以[pypi.org](https://pypi.org/project/flet/)具有`X.Y.Z.devN`的版本格式。

## 安装预先释放

要安装Flet预释放软件包使用以下命令: 

```
pip install flet --pre
```

:::信息
我们建议在虚拟环境中安装预释放的构建。
:::

##  Flet版本

Flet用版本号`MAJOR.MINOR.PATCH`切换到[Semanting版本化](https://semver.org/): 

1. `MAJOR`当“不兼容的API更改”时，将会增加。 现在是`0`，当我们觉得Flet API足够稳定时，我们希望将其做到`1`。
2. `MINOR`以向后兼容的方式添加新功能时，将会增加。
3. `PATCH`当我们进行后退兼容的错误修复时，将会增加。

根据该规则，即将发布的Flet版本将具有版本`0.2.0`。 该版本的错误修复将标记为`0.2.1`，`0.2.2`等。该版本之后的版本将为`0.3.0`，依此类推。

Flet预释放的格式将以`major的格式。 由[CI](https://ci.appveyor.com/project/flet-dev/flet)设置。 例如，如果最后发布的版本是`0.1.65`预释放的版本`0.2.0.dev {build}`。 `0.2.0`发布后的预释放将标记为`0.3.0.dev {build}`。