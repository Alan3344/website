---
slug: using-custom-fonts-in-flet-app
title: Using custom fonts in a Flet app
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [how-to]
---

现在，您可以在 Flet 应用中使用自己的字体！

支持以下字体格式:

- `.ttc`
- `.ttf`
- `.otf`

使用[`page.fonts`](/docs/controls/page#fonts)属性导入字体。

将`page.fonts`属性设置为词典，其中键是字体姓名，要引用字体和值是要导入的字体文件的 URL:

```python
def main(page: ft.Page):
    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Aleo Bold Italic": "https://raw.githubusercontent.com/google/fonts/master/ofl/aleo/Aleo-BoldItalic.ttf"
    }
    page.update()

    # ...
```

可以通过提供相对 URL 和`assets_dir`来提供绝对 URL 或从应用程序资产中导入字体。

在`flet.app()`中指定`assets_dir`调用，以设置应用程序应可用的资产的位置。 `assets_dir`可能是您`main.py`目录或绝对路径的相对。 例如，考虑以下程序结构:

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```

## 代码样本

以下程序从 Github 加载“ Kanit”字体，资产中的“开放 sans”。 “ kanit”设置为默认应用程序字体，“打开 sans”用于特定的文本控件:

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Custom fonts"

    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "fonts/OpenSans-Regular.ttf",
    }

    page.theme = Theme(font_family="Kanit")

    page.add(
        ft.Text("This is rendered with Kanit font"),
        ft.Text("This is Open Sans font example", font_family="Open Sans"),
    )

ft.app(target=main, assets_dir="assets")
```

<img src="/website/img/blog/using-custom-fonts-in-flet-app/custom-fonts-example.png" className="screenshot-50" />

## 静态 VS 变量字体

目前，仅支持[静态](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts)字体，即仅包含一个可比性宽度/重量/样式组合的字体，例如“打开常规”或“ Roboto Bold Italic”。

[变量](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts)字体支持仍在[正在进行的工作](https://github.com/flutter/flutter/issues/33709)。

但是，如果您需要在应用程序中使用变量字体，则可以使用[Fonttools](https://pypi.org/project/fonttools/)以特定权重创建静态“实例”，然后使用这些:

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

要探索可用的字体功能（例如`wght`的可能选项），请使用[Wakamai dondue](https://wakamaifondue.com/beta/)在线工具。

[给 Flet 试试](/docs/guides/python/getting-started)，[让我们知道](https://discord.gg/dzWXP8SHG8)您的想法！
