---
slug: flet-charts
title: Flet Charts
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

去年我们引入了对[Matplotlib 和 Plotly 图表](/blog/matplotlib-and-plotly-charts)的支持。 两个库都能够将图表导出为 SVG 图像，然后将其显示在 Flet 应用中。 但是，这种图表在实现可视化目的的同时缺乏互动性和动画。

今天，我们将根据 Awesome [fl_chart](https://pub.dev/packages/fl_chart)库来释放[Flet 0.5.2](https://pypi.org/project/flet/) (https://pypi.org/project/flet/)！

引入了三个新图表控件:

## linechart

<img src="/img/docs/controls/charts/linechart-sample-1.gif" className="screenshot-50"/>

[docs](/docs/controls/linechart)·[示例](https://github.com/flet-dev/examples/tree/main/python/controls/charts)

## barchart

<img src="/img/docs/controls/charts/barchart-sample-2.gif" className="screenshot-50"/>

[docs](/docs/controls/barchart)·[示例](https://github.com/flet-dev/examples/tree/main/python/controls/charts)

## piechart

<img src="/img/docs/controls/charts/piechart-sample-2.gif" className="screenshot-30"/>

[docs](/docs/controls/piechart)·[示例](https://github.com/flet-dev/examples/tree/main/python/controls/charts)

:::注意
我们花了很多时间在尝试以 Flet 方式实现其大多数功能的同时研究`fl_chart`库。 但是，如果您在 Flet 中看到任何缺少的东西，但是在库中可用，请[提交新功能请求](https://github.com/flet-dev/flet/issues)。
:::

##

## 其他更改

### pyodide 0.23

Pyodide 在浏览器中提供 Python 运行时，用于运行 Flet 应用程序作为静态网站，已升级到基于 Python 3.11.2 的 0.23 版，并提供了一些[尺寸和性能改进](https://blog.pyodide.org/posts/0.23-release/)。{(https://blog.pyodide.org/posts/0.23-release/)。{{{{{ 1264}内存泄漏修复

在此版本中，我们非常关注 Flet 应用中的内存泄漏问题。 现在，关闭用户会话后，其内存将可靠地释放并收集垃圾。 这使得 Flet 准备与许多用户一起生产应用程序。

升级 Flet 模块到最新版本（`pip install flet -upgrade`），试试图表，并[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

嘿，[{Flet 项目](https://github.com/flet-dev/flet)已经到达了 5K 星星 ⭐️-谢谢大家的持续支持！
