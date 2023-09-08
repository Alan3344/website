---
title: Controls reference
sidebar_label: Controls reference
slug: /controls
---

 Flet UI是由控件构建的。 控件被组织为层次结构或树，每个控件都有父（[Page](controls/page)）和诸如[column](controls/column)的容器控件，[下拉下拉](controls/dropdown)可以包含child控件，用于 例子: 

```
Page
 ├─ TextField
 ├─ Dropdown
 │   ├─ Option
 │   └─ Option
 └─ Row
     ├─ ElevatedButton
     └─ ElevatedButton
```

[控制库实时演示](https://flet-controls-gallery.fly.dev/layout) 

## 按类别控制

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
``` 

## 公共控制属性

Flet控件具有以下属性: 

###  `bottom`

在内部[`Stack`](controls/stack)内部有效。 child的底部边缘从堆栈的底部插入。

###  `data`

可以连接到控件的任意数据。

###  `disabled`

每个控件都有`disabled`属性，该属性默认为`False`，并且启用了所有children。
`disabled`属性主要用于`TextField`，`Dropdown`，`Checkbox`，按钮之类的数据输入控件。
但是，`disabled`可以将其设置为父控件，其值将递归地传播到所有children。

例如，如果您的表单具有多个入口控件，则可以通过禁用容器来将它们全部禁用: 

```python
c = ft.Column(controls=[
    ft.TextField(),
    ft.TextField()
])
c.disabled = True
page.add(c)
``` 

###  `expand`

将child控件放入[`Column`](controls/column)或[`Row`](controls/row)中时，您可以“展开”它以填充可用空间。 `expand`属性可能是布尔值（`True`  - 扩展控制以填充所有可用空间）或整数 - 指定如何将自由空间与其他扩展的child控件分配的“展开因子”。

有关`expand`属性的更多信息和示例，请参见[{`Column`](controls/column#expanding-children)中的“扩展children”部分(controls/column#expanding-children)或[`Row`] `Row`](controls/row#expanding-children)。

在虚拟像素中强加的控制高度。

###  `left`

在内部[`Stack`](controls/stack)内部有效。 child的左侧边缘与堆栈的左侧插图。

###  `right`

在内部[`Stack`](controls/stack)内部有效。 child的右边缘从堆栈的右侧插图。

###  `top`

在内部[`Stack`](controls/stack)内部有效。 child的顶部边缘从堆栈的顶部插入。

###  `visible`

每个控件都具有`visible`属性，该属性为`True`，默认情况下 - 控件在页面上呈现。 将`visible`设置为`False`完全防止控件（及其所有children（如果有），则可以在页面上渲染。 隐藏的控件不能专注或使用键盘或鼠标选择，并且它们不会发出任何事件。

###  `width`

在虚拟像素中强加的控制宽度。

## 转换

###  `offset`

在绘制控件之前，要应用翻译转换。

翻译表示为`transform.Offset`缩放到控件的大小。 例如，`x`的`Offset`的`x`将导致控件宽度的四分之一的水平翻译。

下面的示例显示堆栈的左上角在``0，0，0，0，0，0，0，0，0，1 offsit * control _size`）水平和垂直翻译到控件上的spact stack的左上角。

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Stack(
            [
                ft.Container(
                    bgcolor="red",
                    width=100,
                    height=100,
                    left=100,
                    top=100,
                    offset=ft.transform.Offset(-1, -1),
                )
            ],
            width=1000,
            height=1000,
        )
    )

ft.app(target=main)
``` 

###  `opacity`

使控制部分透明。 `0.0`  - 控制是完全透明的，根本没有绘制。 `1.0`（默认） - 完全绘制控件而没有任何透明度。

###  `rotate`

使用围绕中心旋转进行控制。

`rotate`属性的值可能是以下类型之一: 

*  `number`  - 顺时针弧度中的旋转。 完整的圆`360°`is`n is`MATH.pi * 2`弧度，`90°is`pi / 2`，`45°`is pi / 4`，等等，等等。
* `transform.Rotate`  - 允许指定旋转`angle`以及`alignment`  - 旋转中心的位置。

例如: 

```python
ft.Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    rotate=Rotate(angle=0.25 * pi, alignment=ft.alignment.center_left)
)
``` 

###  `scale`

沿2D平面进行比例控制。 默认比例因子为`1.0`  - 控制不缩放。 `0.5`  - 控件小两倍，`2.0`  - 控件大两倍。

可以为`x`和`y`轴指定不同的比例乘数，但是将`Control.scale`属性设置为`transform.Scale`类的实例: 

```python
from dataclasses import field

class Scale:
    scale: float = field(default=None)
    scale_x: float = field(default=None)
    scale_y: float = field(default=None)
    alignment: Alignment = field(default=None)
```

可以指定`scale`或`scale_x`和`scale_y`，但不是全部: 

```python
ft.Image(
    src="https://picsum.photos/100/100",
    width=100,
    height=100,
    border_radius=5,
    scale=Scale(scale_x=2, scale_y=0.5)
)
```