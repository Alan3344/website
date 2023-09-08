---
title: View
sidebar_label: View
slug: view
---

视图是所有其他控件的最高容器。

当新用户会话启动时，将自动创建根视图。 从布局角度来看，视图代表[Column](column)控件，因此它具有相似的行为并具有相同的属性。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

##  properties 

###  `appbar`

a [`AppBar`](/docs/controls/appbar)控件显示在页面顶部。

###  `auto_scroll`

`True`如果children更新时，Scrollbar应自动将其位置移至结尾。 必须为`False`进行工作的方法`False`。

###  `bgcolor`

页面的背景颜色。

颜色值可能是`＃argb`格式（例如＃ffcc0000`），`＃rgb` format（例如'＃rgb`格式（例如＃cc0000`）或`flet.colors` module的命名颜色的颜色值。

在页面上显示的控件列表。

例如，在页面上添加新控件: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.append(ft.Text("Hello!"))
page.update()
```

  </TabItem>
</Tabs>

或使用`page.add()`快捷方式获得与上述相同的结果: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(ft.Text("Hello!"))
```

  </TabItem>
</Tabs>

要删除页面上最高控制的最高控制: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.controls.pop()
page.update()
```

  </TabItem>
</Tabs> 

###  `fullscreen_dialog`

该视图是否是全屏对话框。

在材料和Cupertino中，完整的屏幕具有使应用程序栏具有关闭按钮而不是后退按钮的效果。 在iOS上，对话框对动画的过渡方式不同，并且背面滑动手势也不可闭合。

###  `route`

视图路由 -  Flet框架当前未使用，但可以在用户程序中使用以更新[`page.route`](/docs/controls/page#route) (/docs/controls/page#route)当视图弹出时。

###  `floating_action_button` `floating_action_button`

a [`FloatingActionButton`](/docs/controls/floatingactionbutton)控制以显示在页面上的内容。

###  `horizontal_alignment`

child控件应如何水平放置。

默认值为`CrossAxisAlignment.START`，这意味着页面的左侧。

属性值是`CrossAxisAlignment`枚举，具有以下值: 

*  `START`（默认）
* `CENTER`
* `END`
* `STRETCH`
* `BASELINE` 

###  `on_scroll_interval`

`on_scroll`事件以毫秒为单位。 默认值为`10`。

###  `padding`

页面内容与其边缘之间的空间。 默认值来自每一侧的10像素。 设置零填充: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.padding = 0
page.update()
```

  </TabItem>
</Tabs>

有关更多信息和可能的值，请参见[`Container.padding`](container#padding)。

###  `scroll`

启用页面垂直滚动，以防止其内容溢出。

属性值是默认值`None`的可选`ScrollMode`枚举。

支持的值: 

*  `None`（默认值） - 该行不可滚动，其内容可能会溢出。
* `AUTO`  - 启用滚动，并且仅在滚动时显示滚动条。
* `ADAPTIVE`  - 启用滚动，并在运行应用程序或桌面时始终显示滚动条。
* `ALWAYS`  - 启用滚动，并始终显示滚动条。
* `HIDDEN`  - 启用滚动，但滚动条总是隐藏的。

###  `spacing`

页面上的控件之间的垂直间距。 默认值是10个虚拟像素。 仅当`alignment`设置为`start`，`end`或`center`。

###  `vertical_alignment`时，仅应用间距。

child控件应垂直放置。

例如，`MainAxisAlignment.START`，默认值将children放在页面顶部。

属性值是`MainAxisAlignment`枚举，具有以下值: 

*  `START`（默认）
* `END`
* `CENTER`
* `SPACE_BETWEEN`
* `SPACE_AROUND`
* `SPACE_EVENLY` 

## 方法

### `scroll_to（offset，delta，key，key，distration，duration，curve）'

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

有关方法详细信息和示例，请参见[`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve)。

## 事件

###  `on_scroll`

用户更改滚动位置时会发射。

有关事件的详细信息和示例，请参见[`Column.on_scroll`](column#on_scroll)。