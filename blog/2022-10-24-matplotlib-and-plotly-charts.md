---
slug: matplotlib-and-plotly-charts
title: Matplotlib and Plotly charts
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

我们很高兴引入 matplotlib 并在[Flet 0.1.63](https://pypi.org/project/flet/0.1.63/)中绘制控制控件！

[matplotlib](https://matplotlib.org/)和[plotly](https://plotly.com/python/)是最知名的 Python 绘制图书馆，具有大量功能。 它们与其他科学的 Python 库（例如 Numpy 或 Pandas）非常兼容。

毫无疑问，将其功能复制为纯 flutter 小部件是不可能的。 幸运的是，Matplotlib 和 Plotly 都可以将图表导出到各种格式，例如 SVG。 另一方面，Flet 可以[显示 SVG 图像](https://github.com/flet-dev/examples/blob/main/python/controls/image/svg-image.py)，这给出了完美的组合 - Flet Matplotlib 和 Plotly 的图表控件！

生成的解决方案非常出色，以至于可以从[matplotlib](https://matplotlib.org/stable/gallery/index.html)和[plotly](https://plotly.com/python/)画廊中显示几乎所有示例 - 您的想象力是唯一的限制！

绘制[简单条形图](https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-barchart.py):

<img src="/website/img/docs/controls/charts/matplotlib-barchart.png" className="screenshot-60"/>

一个不错的[带有传奇的散布](https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-scatter.py):

<img src="/website/img/docs/controls/charts/matplotlib-scatter.png" className="screenshot-60"/>

或一些多创图[CONTOUR 图](https://github.com/flet-dev/examples/blob/main/python/controls/charts/mpl-contour.py):

<img src="/website/img/docs/controls/charts/matplotlib-contour.png" className="screenshot-60"/>

检查文档中的 matplotlib 并绘制图表控件:

- [matplotlibchart](/docs/controls/matplotlibchart)
- [plotlychart](/docs/controls/plotlychart)

探索[Flet 图表示例](https://github.com/flet-dev/examples/tree/main/python/controls/charts)。

通过示例学习 Python 库:

- [Matplotlib Gallery](https://matplotlib.org/stable/gallery/index.html)
- [Plotly Gallery](https://plotly.com/python/)

将来发布，我们可能会通过实现自定义[后端](https://matplotlib.org/stable/users/explain/backends.html)来为 matplotlib 图表添加一个交互式“工具栏”。 还是对于 Flet 用户来说，这是一个很棒的表现？ 😉

另外，当 Flet 支持其他语言时，我们需要重新访问图表，以使其成为语言 - 敏捷的语言，因为当前的图表实现依赖于 Python 库。

升级 Flet 模块到最新版本（`pip install flet -upgrade`），将 auth 集成在您的应用中，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！

享受！
