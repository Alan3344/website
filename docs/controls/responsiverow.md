---
title: ResponsiveRow
sidebar_label: ResponsiveRow
slug: responsiverow
---

从'@themy/tabs'导入选项卡片;
import TabItem from '@theme/TabItem';

`ResponsiveRow`从[Bootstrap](https://getbootstrap.com/docs/5.2/layout/grid/) Web Framework 借用网格布局的想法。

`ResponsiveRow`允许对齐 child 控件与虚拟列。 默认情况下，虚拟网格具有 12 列，但可以使用`ResponsiveRow.columns`属性来自定义。

类似于`expand`属性，每个控件现在都有`col`属性，该属性允许指定控件应跨度多少列。 例如，要制作一个由两个跨越 6 个虚拟列组成的布局:

```python
import flet as ft

ft.ResponsiveRow([
    ft.Column(col=6, controls=[ft.Text("Column 1")]),
    ft.Column(col=6, controls=[ft.Text("Column 2")])
])
```

`ResponsiveRow`是“响应式”，因为它可以将其 children 的大小调整到更改的屏幕（页面，窗口）大小。 `col`属性上面的属性是一个常数数字，这意味着 child 将跨越任何屏幕大小的 6 列。

如果`ResponsiveRow`'s child 没有指定的`col`属性，则覆盖最大列数。

`col`可以配置为特定“断点”具有不同的值。 断点命名尺寸范围:

| 断点 | 维度    |
| ---- | ------- |
| XS   | <576px  |
| SM   | ≥576px  |
| MD   | ≥768px  |
| LG   | ≥992px  |
| XL   | ≥1200px |
| xxl  | ≥1400px |

例如，以下示例将内容折叠成移动设备上的单列中，并在较大屏幕上进行两列:

```python
import flet as ft

ft.ResponsiveRow([
    ft.Column(col={"sm": 6}, controls=[ft.Text("Column 1")]),
    ft.Column(col={"sm": 6}, controls=[ft.Text("Column 2")])
])
```

## 示例

### pownlowsiverow

<img src="/website/img/docs/controls/responsive-row/responsive-layout.gif" className="screenshot-100"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def page_resize(e):
        pw.value = f"{page.width} px"
        pw.update()

    page.on_resize = page_resize

    pw = ft.Text(bottom=50, right=50, style="displaySmall")
    page.overlay.append(pw)
    page.add(
        ft.ResponsiveRow(
            [
                ft.Container(
                    ft.Text("Column 1"),
                    padding=5,
                    bgcolor=ft.colors.YELLOW,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 2"),
                    padding=5,
                    bgcolor=ft.colors.GREEN,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 3"),
                    padding=5,
                    bgcolor=ft.colors.BLUE,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
                ft.Container(
                    ft.Text("Column 4"),
                    padding=5,
                    bgcolor=ft.colors.PINK_300,
                    col={"sm": 6, "md": 4, "xl": 2},
                ),
            ],
        ),
        ft.ResponsiveRow(
            [
                ft.TextField(label="TextField 1", col={"md": 4}),
                ft.TextField(label="TextField 2", col={"md": 4}),
                ft.TextField(label="TextField 3", col={"md": 4}),
            ],
            run_spacing={"xs": 10},
        ),
    )
    page_resize(None)

ft.app(target=main)
```

  </TabItem>
</Tabs>

## properties

### `alignment`

child 控件应如何水平放置。

例如，`MainAxisAlignment.START`，默认值，将 children 放在一行的左侧。

属性值是`MainAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `END`
- `CENTER`
- `SPACE_BETWEEN`
- `SPACE_AROUND`
- `SPACE_EVENLY`

### `columns`

布局 children 的虚拟列数。 默认值为 12。

### `controls`

响应器中显示的控件列表。

### `run_spacing`

当行内容包裹在多行上时，在运行之间的间距。 默认值为 10。

### `spacing`

连续对控件之间的间距。 默认值是 10 个虚拟像素。 仅当`alignment`设置为`start`，`end`或`center`。

### `vertical_alignment`时，仅应用间距。

child 控件应垂直放置。

属性值是`CrossAxisAlignment`枚举，具有以下值:

- `START`（默认）
- `CENTER`
- `END`
- `STRETCH`
- `BASELINE`
