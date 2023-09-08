---
title: Markdown
sidebar_label: Markdown
slug: markdown
---

控制以标记格式渲染文本的控制。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/displays/markdown)

### 用 githubweb 扩展和可单击的链接标记

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

````python
import flet as ft

md1 = """
# Markdown Example
Markdown allows you to easily include formatted text, images, and even formatted Dart code in your app.

## Titles

Setext-style

This is an H1
=============

This is an H2
-------------

Atx-style

# This is an H1

## This is an H2

###### This is an H6

Select the valid headers:

- [x] `# hello`
- [ ] `#hello`

## Links

[inline-style](https://www.google.com)

## Images

![Image from Flet assets](/icons/icon-192.png)

![Test image](https://picsum.photos/200/300)

## Tables

|Syntax                                 |Result                               |
|---------------------------------------|-------------------------------------|
|`*italic 1*`                           |*italic 1*                           |
|`_italic 2_`                           | _italic 2_                          |
|`**bold 1**`                           |**bold 1**                           |
|`__bold 2__`                           |__bold 2__                           |
|`This is a ~~strikethrough~~`          |This is a ~~strikethrough~~          |
|`***italic bold 1***`                  |***italic bold 1***                  |
|`___italic bold 2___`                  |___italic bold 2___                  |
|`***~~italic bold strikethrough 1~~***`|***~~italic bold strikethrough 1~~***|
|`~~***italic bold strikethrough 2***~~`|~~***italic bold strikethrough 2***~~|

## Styling

Style text as _italic_, __bold__, ~~strikethrough~~, or `inline code`.

- Use bulleted lists
- To better clarify
- Your points

## Code blocks

Formatted Dart code looks really pretty too:

```
void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: ft.Markdown(data: markdownData),
    ),
  ));
}
```
"""

def main(page: ft.Page):
    page.scroll = "auto"
    page.add(
        ft.Markdown(
            md1,
            selectable=True,
            extension_set=ft.MarkdownExtensionSet.GITHUB_WEB,
            on_tap_link=lambda e: page.launch_url(e.data),
        )
    )

ft.app(target=main)
````

  </TabItem>
</Tabs>

<img src="/website/img/docs/controls/markdown/custom-markdown.gif" className="screenshot-40"/>

### 用代码语法突出显示标记

[源代码](https://github.com/flet-dev/examples/blob/main/python/controls/markdown/markdown-code-highlight.py)

<img src="/website/img/docs/controls/markdown/markdown-highlight.png" className="screenshot-60"/>

## properties

### `auto_follow_links`

自动打开文档中的 URL。 默认值为`False`。 如果已注册，则在此之后发射`on_tap_link`事件。

### `auto_follow_links_target`

在 Web 模式下打开 URL 的位置:

- `_blank`（默认值） - 新的选项卡片/窗口。
- `_self` - 当前选项卡片/窗口。

### `code_style`

代码块文本样式。 该值是[`ft.TextStyle`](text#textstyle-properties)类的实例。

为 Markdown 代码块配置 Monospace 字体的一个示例:

```python
    page.fonts = {
        "Roboto Mono": "RobotoMono-VariableFont_wght.ttf",
    }

    page.add(
        Markdown(
            table,
            selectable=True,
            extension_set="gitHubWeb",
            code_theme="atom-one-dark",
            code_style=TextStyle(font_family="Roboto Mono"),
            on_tap_link=lambda e: page.launch_url(e.data),
        )
    )
```

### `code_theme`

代码块的语法突出显示主题。

支持的主题:

- `a11y-dark`
- ``a11y-light“
- `agate`
- `and-hope'
- `androidstudio`
- ``arduino-light“
- `arta`
- `ascetic`
- `ATELIER-cave-dark`
- ``Antelier-cave-light“
- `Atelier-dune-dark`
- `natelier-dune-light“
- `natelier-stuary-dark`
- `natelier-estuary-light“
- `Antelier-Forest-dark`
- ```Antelier-telest-light''

  ```
- `Antelier-Heath-dark`
- `natelier-heath-light“
- ```Antelier-lakesdar dark'

  ```
- ```Antelier-lakes-light''

  ```
- `gatelier-plateau-dark`
- `natelier-plateau-light“
- `Antelier-savanna-dark`
- `natelier-savanna-light“
- `Antelier-seaside-dark`
- `Antelier-seaside-light“
- `natelier-sulphurpool-dark`
- `natelier-sulphurpool-light'
- `otom-one-wark-roalable“
- `otom-one-dark`
- ``arom-One-light“
- `brown-paper`
- `codepen-embed`
- `color-brewer`
- `darcula`
- `dark`
- `default`
- `docco`
- `dracula`
- `far`
- `foundation`
- `github-gist`
- `github`（默认）
- `gml`
- `googlecode`
- ``渐变''
- `grayscale`
- `gruvbox-dark`
- `gruvbox-light“
- `hopscotch`
- `hybrid`
- `idea`
- ``ir-black`
- `'iSbl-editor-dark`
- ``isbl-editor-light“
- `kimbie.dark`
- `kimbie.light`
- `lightfair`
- `magula`
- `单蓝色
- `monokai-sublime`
- `monokai`
- `夜烤
- `nord`
- `obsidian`
- `ocean`
- `paraiso-dark`
- `paraiso-light“
- `pojoaque`
- `purebasic`
- `qtcreator_dark`
- `qtcreator_light`
- `railscasts`
- `rainbow`
- `routeros`
- ``School-Book'
- `紫色阴影
- `solarized-dark`
- `solarized-light“
- `sunburst`
- `明天晚上蓝色
- `明天晚上
- `明天八十年代
- `明天晚上
- `tomorrow`
- `vs`
- `vs2015`
- `xcode`
- `xt256`
- `zenburn`

### `extension_set`

属性值为`MarkdownExtensionSet`枚举，具有以下值: `NONE`（默认），`COMMON_MARK`，`GITHUB_WEB`，`GITHUB_FLAVORED`。{44441} {444355}

是否可以选择渲染文本。

### `value`

将其降低到渲染。

## 事件

### `on_tap_link`

单击/敲击 Markdown 文档中的链接时，请发射。 `data`事件的属性包含 URL。

以下示例在新窗口中打开 Markdown URL:

```python
import flet as ft

def main(page: ft.Page):
    def open_url(e):
        page.launch_url(e.data)

    page.add(
        ft.Markdown(
            "[inline-style](https://www.google.com)",
            extension_set="gitHubWeb",
            on_tap_link=open_url,
            expand=True,
        ),
    )

ft.app(target=main)
```
