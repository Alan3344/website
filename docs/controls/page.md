
---
title: Page
sidebar_label: Page
slug: page
---

页面是[`View`](/docs/controls/view)控件的容器。

新用户会话启动时，会自动创建页面实例和根视图。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

##  properties 

###  `auto_scroll`

`True`如果children更新时，Scrollbar应自动将其位置移至结尾。 对于`scroll_to()`工作的方法必须为`False`。

###  `appbar`

a [`AppBar`](/docs/controls/appbar)控制在页面顶部显示。

###  `banner`

a [`Banner`](/docs/controls/banner)控件显示在页面顶部。

###  `bgcolor`

页面的背景颜色。

颜色值可能是`＃argb`格式（例如＃ffcc0000`），`＃rgb` format（例如'＃cc0000`）或来自`flet.colors`模块的命名颜色的十六进制值。

###  `bottom_sheet` `bottom_sheet` `bottom_sheet` `bottom_sheet` `bottom_sheet`

[`BottomSheet`](bottomsheet)控制。

###  `client_ip`

🌎仅Web。 连接用户的IP地址。

###  `client_user_agent`

🌎仅Web。 连接用户的浏览器详细信息。

###  `controls`

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

###  `dark_theme`

将此属性设置为`theme.Theme`的实例以自定义黑暗主题。

###  `debug`

`True`如果Flet app的flutter客户端以调试模式运行。

###  `design`

保留供将来使用。

###  `dialog`

an [`AlertDialog`](/docs/controls/alertdialog)控制。

###  `floating_action_button`

a [`FloatingActionButton`](/docs/controls/floatingactionbutton)控制以显示在页面上的内容。

###  `fonts`

允许导入自定义字体，并将它们与[`Text.font_family`](/docs/controls/text#font_family)一起使用，或通过`theme.font_family`应用于整个应用程序。

以下字体格式可以与Flet: 

*  `.ttc`一起使用
* `.ttf`
* `.otf`

`fonts`属性的值是词典，其中键是字体姓名，即引用字体和值是要导入的字体文件的URL。

可以通过提供相对URL和`assets_dir`提供绝对URL或从应用程序资产中导入字体。

在`flet.app()`中指定`assets_dir`调用，以设置应适用于应用程序的资产的位置。 `assets_dir`可能是您`main.py`目录或绝对路径的相对。 例如，考虑以下程序结构: 

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```

现在，以下程序从Github加载“ Kanit”字体，资产中的“开放sans”。 “ kanit”设置为默认应用程序字体，“打开sans”用于特定的文本控件: 

```python
import flet as ft

def main(page: ft.Page):
    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "/fonts/OpenSans-Regular.ttf"
    }

    page.theme = Theme(font_family="Kanit")

    page.add(
      ft.Text("This is rendered with Kanit font"),
      ft.Text("This is Open Sans font example", font_family="Open Sans")
    )

ft.app(target=main, assets_dir="assets")
```

:::注意
目前，仅支持[** static **](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#standard_or_static_fonts)字体，即仅包含一个可比性宽度/重量/样式组合的字体，例如“打开常规”或“ Roboto Bold Italic”。

[**变量**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide#variable_fonts)字体支持仍然[正在进行中的工作](https://github.com/flutter/flutter/issues/33709)。

但是，如果您需要在应用中使用变量字体，则可以使用[** fonttools **](https://pypi.org/project/fonttools/)以特定权重创建静态“实例”，然后使用这些: 

    fonttools varLib.mutator ./YourVariableFont-VF.ttf wght=140 wdth=85

要探索可用的字体功能（例如`wght`的可能选项）使用[** wakamai fondue **](https://wakamaifondue.com/beta/)在线工具。
:::

###  `height`

包含Flet应用的本机OS窗口的网页或内容区域的高度。 此属性是只读的。 它通常用于[`page.on_resize`](#on_resize)处理程序。

###  `horizontal_alignment`

child控件应如何水平放置。

默认值为`CrossAxisAlignment.START`，这意味着页面的左侧。

属性值是`CrossAxisAlignment`枚举，具有以下值: 

*  `START`（默认）
* `CENTER`
* `END`
* `STRETCH`
* `BASELINE` 

###  `name`

`ft.app()`中指定的页名。 当Flet应用程序作为Web应用程序运行时，设置了页名。 这是主机名之后URL的一部分。

###  `navigation_bar`

[`NavigationBar`](navigationbar)控制在页面底部显示。

###  `on_scroll_interval`

`on_scroll`事件以毫秒为单位。 默认值为`10`。

###  `overlay`

`Control` s的列表显示为主页内容的堆栈。

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

###  `platform`

操作系统应用程序正在运行以下命令

*  `ios`
* `android`
* `macos`
* `linux`
* `windows` 

###  `platform_brightness`

主机平台的当前亮度模式: `ft.ThemeMode.LIGHT`或`ft.ThemeMode.DARK`。

###  `pubsub`

一个简单的pubsub实现，用于在应用程序会话之间传递消息。

####  `subscribe(handler)`

订阅当前应用程序会话以进行广播（无主题）消息。 `handler`是一个函数或方法，具有单个`message`参数，例如: 

```python
def main(page: ft.Page):

    def on_broadcast_message(message):
        print(message)

    page.pubsub.subscribe(on_broadcast_message)
``` 

#### `subscribe_topic（topic，handler）`

将当前应用程序会话订阅到特定主题。 `handler`是具有两个参数的函数或方法: `topic`和`message`，例如: 

```python
def main(page: ft.Page):

    def on_message(topic, message):
        print(topic, message)

    page.pubsub.subscribe_topic("general", on_message)
``` 

####  `send_all(message)`

向所有订户广播消息。 `message`可以是什么: 例如: 简单的文字或类实例，例如: 

```python
@dataclass
class Message:
    user: str
    text: str

def main(page: ft.Page):

    def on_broadcast_message(message):
        page.add(ft.Text(f"{message.user}: {message.text}"))

    page.pubsub.subscribe(on_broadcast_message)

    def on_send_click(e):
        page.pubsub.send_all(Message("John", "Hello, all!"))

    page.add(ft.ElevatedButton(text="Send message", on_click=on_send_click))
``` 

#### `send_all_on_topic（主题，消息）``

将消息发送给所有有关特定主题的订户。

####  `send_others(message)`

向除发送者以外的所有订户的广播消息。

#### `send_others_on_topic（主题，消息）'
将消息发送给所有特定主题的订阅者，但发件人除外。

####  `unsubscribe()`

从广播消息中退订当前应用程序会话，例如: 

```python
@dataclass
class Message:
    user: str
    text: str

def main(page: ft.Page):

    def on_leave_click(e):
        page.pubsub.unsubscribe()

    page.add(ft.ElevatedButton(text="Leave chat", on_click=on_leave_click))
``` 

####  `unsubscribe_topic(topic)`

从特定主题中取消订阅当前应用程序会话。

####  `unsubscribe_all()`

从广播消息和所有主题中取消订阅当前应用程序会话，例如: 

```python
def main(page: ft.Page):
    def client_exited(e):
        page.pubsub.unsubscribe_all()

    page.on_close = client_exited
``` 

###  `pwa`

`True`如果应用程序作为渐进式Web应用程序（PWA）运行。 只读。

###  `query`

``？''之后的应用程序的一部分。 该值是`QueryString`的实例，带有用于获取查询参数的辅助方法。

###  `route`

获取或设置页面的导航路线。 请参阅[导航和路由](/docs/guides/python/navigation-and-routing)部分
更多信息和示例。

###  `rtl`

`True`将文本方向设置为左右。 默认值为`False`。

###  `scroll`

启用页面垂直滚动，以防止其内容溢出。

属性值是默认值`None`的可选`ScrollMode`枚举。

支持的值: 

*  `None`（默认值） - 该行不可滚动，其内容可能会溢出。
* `AUTO`  - 启用滚动，并且仅在滚动时显示滚动条。
* `ADAPTIVE`  - 启用滚动，并在运行应用程序或桌面时始终显示滚动条。
* `ALWAYS`  - 启用滚动，并始终显示滚动条。
* `HIDDEN`  - 启用滚动，但滚动条总是隐藏的。

###  `session`

会话数据的简单KV存储。

###  `session_id`

用户会话的独特ID。 此属性仅读取。

###  `spacing`

页面上的控件之间的垂直间距。 默认值是10个虚拟像素。 仅当`alignment`设置为`start`，`end`或`center`。

###  `splash`时，仅应用间距。

`Control`将显示在页面内容的顶部。 [`ProgressBar`](/docs/controls/progressbar)或[`ProgressRing`](/docs/controls/progressring)可以用作漫长操作的指示器，例如: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    def button_click(e):
        page.splash = ft.ProgressBar()
        btn.disabled = True
        page.update()
        sleep(3)
        page.splash = None
        btn.disabled = False
        page.update()

    btn = ft.ElevatedButton("Do some lengthy task!", on_click=button_click)
    page.add(btn)

ft.app(target=main)
```

</TabItem>
</Tabs> 

###  `show_semantics_debugger`

`True`打开一个覆盖层，该覆盖层显示框架报告的可访问性信息。

###  `theme`

将此属性设置为`theme.Theme`的实例，以自定义光主题。 当前，主题只能自动从“种子”颜色生成。 例如，从绿色生成光主题: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.theme = theme.Theme(color_scheme_seed="green")
page.update()
```

</TabItem>
</Tabs>

`Theme`类具有以下属性: 

*  `color_scheme_seed`  - 一种种子颜色，以算法从中得出其余的主题颜色。
* `color_scheme`  -  [`ft.ColorScheme`]](#colorscheme-class)类的实例，该类允许自定义从`color_scheme_seed`派生的材料颜色方案。
* `text_theme`  -  [`ft.TextTheme`]](#texttheme-class)类的实例，用于自定义与卡片片和帆布颜色对比的文本样式。
* `primary_text_theme`  -  [`ft.TextTheme`]](#texttheme-class)类的实例描述了与主要颜色对比的文本主题。
* `scrollbar_theme`  -  [`ft.ScrollbarTheme`]的实例(#scrollbartheme-class)类自定义整个应用程序上的scrollbars的外观。
* `tabs_theme`  -  [`ft.TabsTheme`]的实例(#tabstheme-class)类在应用程序上自定义`Tabs`控制的外观。
* `font_family`  - 所有UI元素的基本字体。
* `use_material3`  -  `True`（默认）使用材料3设计； 否则材料2。
* `visual_density`  -  `ThemeVisualDensity` enum: `STANDARD`（默认），`COMPACT`，`COMFORTABLE`，`ADAPTIVE_PLATFORM_DENSITY`。
* `page_transitions`  -  `PageTransitionsTheme`的实例，允许自定义不同平台的导航页面过渡。 请参阅[下面](#navigation-transitions)部分。

:::注意
如果您想在主题的`font_family`中使用它们。

一组30种颜色，基于[物质规格](https://m3.material.io/styles/color/the-color-system/color-roles)，可用于配置大多数组件的颜色属性。 在[Flutter Docs](https://api.flutter.dev/flutter/material/ColorScheme-class.html)中阅读有关`ColorScheme`的更多信息。

`ColorScheme`类具有以下属性: 

*  `primary`  - 在应用程序的屏幕和组件上显示的颜色最常显示。
* `on_primary`  - 在`primary`上绘制时显然可以清晰的颜色。
* `primary_container`  - 一种用于元素所需的颜色所需的重点，而不是`primary`。
* `on_primary_container`  - 在`primary_container`上绘制时显然可以辨别的颜色。
* `secondary`  - 一种重音颜色，用于UI中不太突出的组件，例如滤清器芯片，同时扩大了颜色表达的机会。
* `on_secondary`  - 在`secondary`上绘制时显然可以清晰的颜色。
* `secondary_container`  - 一种颜色，用于元素所需的重点少于`secondary`。
* `on_secondary_container`  - 在`secondary_container`上绘制时显然可以清晰的颜色。
* `tertiary`  - 一种用作对比的颜色，可以平衡`primary`和`secondary`颜色，或者引起人们对元素（例如输入字段）的高度关注。
* `on_tertiary`  - 在`tertiary`上绘制时显然可以辨别的颜色。
* `tertiary_container`  - 一种用于元素所需的颜色，需要较少的重点，而不是`tertiary`。
* `on_tertiary_container`  - 在`tertiary_container`上绘制时显然可以清晰的颜色。
* `error`  - 用于输入验证错误的颜色，例如 对于`TextField.error_text`。
* `on_error`  - 在`error`上绘制时显然可以清晰的颜色。
* `error_container`  - 用于错误元素所需的颜色所需的重点比`error`。
* `on_error_container`  - 在`error_container`上绘制时显然可以辨别的颜色。
* `background`  - 一种通常出现在可滚动内容后面的颜色。
* `on_background`  - 在`background`上绘制时显然可以清晰的颜色。
* `surface`  -  `Card`之类的小部件的背景颜色。
* `on_surface`  - 在`surface`上绘制时显然可以清晰的颜色。
* `surface_variant`  -  `surface`的颜色变体，可用于使用`surface`与组件进行区分。
* `on_surface_variant`  - 在`surface_variant`上绘制时显然可以清晰的颜色。
* `outline`  - 一种实用颜色，可以创建边界和重点以提高可用性。
* `outline_variant`  - 当不需要3: 1对比时，可以为装饰元素创建边界的实用颜色，例如分隔器或装饰元素。
* `shadow`  - 一种颜色用来绘制高架组件的滴阴影。
* `scrim`  - 一种颜色用来绘制模态组件周围的碎片。
* `inverse_surface`  - 用于显示周围UI中看到的反面的表面颜色，例如在`SnackBar`中，以引起注意力。
* `on_inverse_surface`  - 在`inverse_surface`上绘制时显然可以辨别的颜色。
* `inverse_primary`  - 用于在`inverse_surface`背景上显示突出显示颜色的强调颜色，例如`SnackBar`中的按钮文本。
* `surface_tint`  - 一种颜色用作表面颜色上的覆盖层，以指示组件的高程。

####  `TextTheme` class class class

自定义文本样式。

`TextTheme`类具有`ft.TextStyle`类型的以下属性: 

*  `body_large`  - 最大的身体样式。 身体样式用于更长的文本段落。
* `body_medium`  - 身体样式的中间尺寸。 身体样式用于更长的文本段落。 材料的默认文本样式。
* `body_small`  - 最小的身体样式。
* `display_large`  - 最大的显示样式。 作为屏幕上最大的文本，显示样式是为简短而重要的文本或数字保留的。 它们在大屏幕上工作最佳。
* `display_medium`  - 显示样式的中间尺寸。
* `display_small`  - 显示样式的最小。
* `headline_large`  - 最大的标题样式。 标题样式比显示样式小。 它们最适合较小的屏幕上的简短高强调文本。
* `headline_medium`  - 标题样式的中间尺寸。
* `headline_small`  - 标题最小的样式。
* `label_large`  - 最大的标签样式。 标签样式是较小的实用风格，用于UI区域，例如组件内部的文本或内容主体中的很小的支撑文本，例如字幕。 用于`ElevatedButton`，`TextButton`和`OutlinedButton`上的文本。
* `label_medium`  - 标签样式的中间尺寸。
* `label_small`  - 标签样式的最小。
* `title_large`  - 标题样式的最大。 标题比标题样式小，应用于较短的中强调文本。
* `title_medium`  - 标题样式的中间大小。
* `title_small`  - 标题样式的最小。

####  `ScrollbarTheme` class class

自定义应用程序上滚动条的颜色，厚度和形状。

`ScrollbarTheme`类具有以下属性: 

*  `thumb_visibility`  - 指示即使在不进行滚动的情况下，也应可见滚动条拇指。 当`False`时，将在滚动过程中显示滚动条，否则会淡出。 当`True`时，滚动条将永远可见，永远不会淡出。 属性值可以是单个布尔值，也可以是`ft.MaterialState`的字典作为键，而布尔值则为值。
* `thickness`  - 可滚动的横轴中滚动条的厚度。 属性值可以是单个浮点值，也可以是`ft.MaterialState`的字典，作为键，float作为值。
* `track_visibility`  - 指示应可见滚动条。 当`True`时，只要拇指可见，滚动条轨道就会始终可见。 如果看不见卷轴拇指，则轨道也不可见。 当`None`时，默认为`False`。 如果此属性为`None`，则使用`ScrollbarTheme.track_visibility` `Theme.scrollbar_theme`。 如果也是`None`，则默认值为`False`。 属性值可以是单个布尔值，也可以是`ft.MaterialState`的字典作为键，而布尔值则为值。
* `radius`  - 滚动拇指的圆形矩形角的半径。
* `thumb_color`  - 覆盖滚动条拇指的默认颜色。 该值是单个颜色字符串或`ft.MaterialState`字典。
* `track_color`  - 覆盖Scrollbar Track的默认颜色。 该值是单个颜色字符串或`ft.MaterialState`字典。
* `track_border_color`  - 覆盖滚动条轨道边框的默认颜色。 该值是单个颜色字符串或`ft.MaterialState`字典。
* `cross_axis_margin`  - 逻辑像素中从卷轴拇指到最近的横轴边缘的距离。 滚动条轨道消耗了这个空间。 不得无效，默认为0。
* `main_axis_margin`  - 距滚子拇指的距离的距离距离逻辑像素的距离始于视口的边缘。 它会影响可用的油漆区域的数量。 滚动条轨道消耗了这个空间。 不得无效，默认为0。
* `min_thumb_length`  - 首选的滚动拇指最小尺寸可以收缩到总滚动范围较大时，当前可见的视口很小，并且视图不会超过。
* `interactive`  - 滚动栏是否应具有互动性并响应拇指上的拖动，还是在轨道区域敲击。 当`False`时，滚动条不会响应手势或悬停事件，并且可以单击它。 默认为`True`时`None`，除非在Android上，nandroid将默认为`None`时默认为`None`。

自定义整个应用程序上`Tabs`控件的外观。

`TabsTheme`类具有以下属性: 

*  `divider_color`  - 分别的颜色。
* `indicator_border_radius`  - 指标角的半径。
* `indicator_border_side`  - 所选选项卡片下方绘制的水平线的颜色和重量。
* `indicator_padding`  - 找到相对于选项卡片的边界的选定选项卡片的下划线。 `indicator_tab_size`属性可用于根据`False`或带有`True`的整个选项卡片来定义标签指示器的边界。
* `indicator_color`  - 所选选项卡片下方的线的颜色。
* `indicator_tab_size`  -  `True`指示器以获取整个选项卡片。
* `label_color`  - 选定标签标签的颜色。
* `unselected_label_color`  - 未选择的标签标签的颜色。
* `overlay_color`  - 定义墨水响应焦点，悬停和飞溅颜色。 如果指定，则根据`MaterialState.FOCUSED`，`MaterialState.HOVERED`和`MaterialState.PRESSED`的一个解决方案。

#### 导航过渡

`theme.page_transitions`允许自定义不同平台的导航页面过渡。 该值是`PageTransitionsTheme`类的实例，具有以下可选属性: 

*  `android`（默认值为`FADE_UPWARDS`）
* `ios`（默认值为`CUPERTINO`）
* `macos`（默认值为`ZOOM`）
* `linux`（默认值为`ZOOM`）
* `windows`（默认值为`ZOOM`）

支持的过渡为`ft.PageTransitionTheme`枚举: `NONE`（零延迟过渡而无需任何动画），`FADE_UPWARDS`，`OPEN_UPWARDS`，`ZOOM`，`ZOOM`，`CUPERTINO`。

一个简单的示例: 

```python
theme = ft.Theme()
theme.page_transitions.android = ft.PageTransitionTheme.OPEN_UPWARDS
theme.page_transitions.ios = ft.PageTransitionTheme.CUPERTINO
theme.page_transitions.macos = ft.PageTransitionTheme.FADE_UPWARDS
theme.page_transitions.linux = ft.PageTransitionTheme.ZOOM
theme.page_transitions.windows = ft.PageTransitionTheme.NONE
page.theme = theme
page.update()
``` 

###  `theme_mode`

页面主题。

属性值是带有`SYSTEM`的可选`ThemeMode`枚举。

支持的值: `SYSTEM`（默认值），`LIGHT`或`DARK`。

###  `title`

例如，浏览器或本机OS窗口的标题: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.title = "My awesome app"
page.update()
```

</TabItem>
</Tabs> 

###  `url`

完整的Web应用程序的URL。

###  `vertical_alignment`

child控件应垂直放置。

例如，`MainAxisAlignment.START`，默认值将children放在页面顶部。

属性值是`MainAxisAlignment`枚举，具有以下值: 

*  `START`（默认）
* `END`
* `CENTER`
* `SPACE_BETWEEN`
* `SPACE_AROUND`
* `SPACE_EVENLY` 

###  `views`

[`View`]](/docs/controls/view)控制以构建导航历史记录的列表。

列表中的最后一个视图是页面上显示的视图。

第一个视图是无法弹出的“根”视图。

###  `web`

`True`如果应用程序在Web浏览器中运行。

###  `width`

包含Flet应用程序的本机OS窗口的网页或内容区域的宽度。 此属性是只读的。 通常在[`page.on_resize`](#on_resize)处理器内使用。

###  `window_always_on_top`

🖥️桌面。 设置窗口是否应始终在其他窗口的顶部显示。 默认值为`False`。

###  `window_bgcolor`

🖥️桌面。 设置应用程序窗口的背景颜色。

与`page.bgcolor`一起使用以使窗口透明: 

```python
import flet as ft

def main(page: ft.Page):
    page.window_bgcolor = ft.colors.TRANSPARENT
    page.bgcolor = ft.colors.TRANSPARENT
    page.window_title_bar_hidden = True
    page.window_frameless = True
    page.window_left = 400
    page.window_top = 200
    page.add(ft.ElevatedButton("I'm a floating button!"))

ft.app(target=main)
``` 

###  `window_focused`

🖥️桌面。 设置为`True`，以Flet app。

🖥️桌面。 设置为`True`使应用程序窗口无框。

###  `window_full_screen`

🖥️桌面。 将设置为`True`以将App的本机OS窗口切换到完整屏幕模式。 默认值为`False`。

###  `window_height`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的高度。

###  `window_left`

🖥️桌面。 获取或设置本机OS窗口的水平位置 - 距屏幕左边缘的虚拟像素的距离。

###  `window_maximizable`

🖥️桌面。 设置为`False`以隐藏/禁用本机OS窗口的“最大化”按钮。 默认值为`True`。

###  `window_maximized`

🖥️桌面。 `True`如果包含Flet应用程序的本机OS窗口最大化； 否则`False`。 将此属性设置为`True`以编程性地最大化窗口并将其设置为`False`以脱离它。

###  `window_max_height`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的最大高度。

###  `window_max_width`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的最大宽度。

###  `window_minimizable`

🖥️桌面。 设置为`False`以隐藏/禁用本机OS窗口的“最小化”按钮。 默认值为`True`。

###  `window_minimized`

🖥️桌面。 `True`如果包含Flet应用程序的本机OS窗口被最小化； 否则`False`。 将此属性设置为`True`以编程方式最小化窗口并将其设置为`False`以还原。

###  `window_min_height`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的最小高度。

###  `window_min_width`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的最小宽度。

###  `window_movable`
🖥️桌面。 仅MacOS。 设置为`False`，以防止用户更改包含Flet应用程序的本机OS窗口的位置。 默认值为`True`。

###  `window_opacity`

🖥️桌面。 设置本机OS窗口的不透明度。 该值必须在`0.0`（完全透明）和`1.0`（完全不透明）之间。

###  `window_resizable`

🖥️桌面。 设置为`False`，以防止用户调整包含Flet应用程序的本机OS窗口。 默认值为`True`。

###  `window_title_bar_hidden`

🖥️桌面。 设置为`True`隐藏窗口标题栏。 请参阅[`WindowDragArea`](windowdragarea)允许移动的控制
带隐藏标题栏的应用窗口。

###  `window_title_bar_buttons_hidden`

🖥️桌面。 设置为`True`以隐藏标题栏隐藏时隐藏窗口动作按钮。 仅MacOS。

###  `window_top`

🖥️桌面。 获取或设置本机OS窗口的垂直位置 - 距屏幕顶部边缘的虚拟像素中的距离。

###  `window_prevent_close`

🖥️桌面。 设置为`True`以拦截本机关闭信号。 可以与[``page.on_window_event（colles）`](#on_window_event)事件处理程序和[`page.window_destroy()`](#window_destroy)一起使用，以实现App Exit exin确认逻辑 - 请参见[`page.window_destroy()`] 4921} `window_progress_bar`

🖥️桌面。 从`0.0`到`1.0`的值在任务栏（Windows）或Dock（MacOS）应用程序按钮上显示进度栏。

###  `window_skip_task_bar`

🖥️桌面。 设置为`True`以隐藏任务栏（Windows）或Dock（MacOS）的应用程序。

###  `window_visible`

🖥️桌面。 设置为`True`以使应用程序窗口可见。 当应用从隐藏的窗口开始时使用。

以下程序从隐藏的窗口开始，使其在3秒内可见: 

```python
from time import sleep

import flet as ft


def main(page: ft.Page):

    page.add(
        ft.Text("Hello!")
    )

    sleep(3)
    page.window_visible = True
    page.update()  

ft.app(target=main, view=ft.AppView.FLET_APP_HIDDEN)
```

注意`view=ft.AppView.FLET_APP_HIDDEN`，它在开始时隐藏了应用程序窗口。

###  `window_width`

🖥️桌面。 获取或设置包含Flet app的本机OS窗口的宽度。

## 方法

###  `can_launch_url(url)`

检查是否可以通过设备上安装的某些应用程序来处理指定的URL。

返回`True`如果可以验证是否有一个处理程序。 `False`返回值可以指示没有可用的处理程序，或者该应用程序无权检查。 例如: 

* 在Android和iOS的最新版本上，这将始终返回`False`，除非应用程序已配置以允许查询系统以寻求启动支持。
* 在Web上，这将始终返回`False`，除了一些始终被假定支持的特定方案（例如http（s）），因为永远不允许网页查询安装的应用程序。

###  `close_banner()`

关闭活动横幅。

###  `close_bottom_sheet()`

关闭活动的底部表。

###  `close_dialog()`

关闭主动对话框。

###  `close_in_app_web_view()`

📱仅移动。 关闭使用`launch_url()`打开的应用内Web视图。

###  `error(message)`


###  `fetch_page_details()`


###  `get_clipboard()`

将最后一个文本值保存到客户端的剪贴板上。

###  `get_control(id)`


### `get_upload_url（file_name，expires）`

生成预先上传的URL用于内置上传存储: 

*  `file_name`  - 一个相对于上载存储路径。
* `expires`  - 几秒钟内的URL时间。

例如: 

```python
upload_url = page.get_upload_url("dir/filename.ext", 60)
```

要启用内置的上传存储，将`upload_dir`参数提供给`flet.app()`调用: 

```python
ft.app(target=main, upload_dir="uploads")
``` 

###  `go(route)`

更新[`page.route`]](#route)的辅助方法，调用[`page.on_route_change`](#on_route_change)事件处理程序更新视图，最后调用`page.update()`。

插入`page.controls`列表的特定索引。

###  `launch_url(url)`

在新的浏览器窗口中打开`url`。

可选方法参数: 

*  `web_window_name`  - 窗口tab/window tab/window url in: `_self`  - 相同的浏览器选项卡片，`_blank`  - 一个新的浏览器选项卡片（或移动设备上的外部应用程序）或`<your name>`）或`<your name>`}  - 一个命名选项卡片。
* `web_popup_window`  - 设置为`True`以在浏览器弹出窗口中显示URL。 默认值为`False`。
* `window_width`  - 可选，弹出窗口宽度。
* `window_height`  - 可选，弹出窗口高度。

### `login（提供者，fetch_user，fetch_groups，scope，scope，saved_token，on_open_authorization_url，on_page_page_html，redirect_to_page，授权）

启动Oauth流动。 有关更多信息和示例，请参见[Authentication](/docs/guides/python/authentication)指南。

###  `logout()`

清除当前的身份验证上下文。 有关更多信息和示例，请参见[authentication](/docs/guides/python/authentication#signing-out)指南。

###  `remove(*controls)`

从`page.controls`列表中删除特定控件。

###  `remove_at(index)`

从`page.controls`列表中删除控件。

将滚动位置移至绝对`offset`，相对`delta`或使用指定的`key`跳到控件。

有关方法和示例，请参见[`Column.scroll_to()`](column#scroll_tooffset-delta-key-duration-curve)。

###  `set_clipboard(data)`

例如，将剪贴板数据设置在客户端（用户的Web浏览器或桌面）上: 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.set_clipboard("This value comes from Flet app")
```

</TabItem>
</Tabs> 

### `show_banner（Banner: Banner）``

在页面顶部显示横幅。

### `show_bottom_sheet（bottom_sheet: bottonssheet）``

在页面底部显示底部表。

### `show_dialog（对话: alertdialog）``

显示对话框。

### `show_snack_bar（snack_bar: snackbar）``

在页面底部显示Snackbar。

`snack_bar`  -  a [`SnackBar`](/docs/controls/snackbar)控件以显示在
🖥️桌面。 将应用程序的本机OS窗口移至屏幕中心。

###  `window_close()`

🖥️桌面。 关闭应用程序窗口。

###  `window_destroy()`

🖥️桌面。 强迫关闭应用程序的本地操作系统窗口。 该方法可以与`page.window_prevent_close = true”一起使用以实现应用程序出口确认: 

```python
import flet as ft

def main(page: ft.Page):
    page.title = "MyApp"

    def window_event(e):
        if e.data == "close":
            page.dialog = confirm_dialog
            confirm_dialog.open = True
            page.update()

    page.window_prevent_close = True
    page.on_window_event = window_event

    def yes_click(e):
        page.window_destroy()

    def no_click(e):
        confirm_dialog.open = False
        page.update()

    confirm_dialog = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to exit this app?"),
        actions=[
            ft.ElevatedButton("Yes", on_click=yes_click),
            ft.OutlinedButton("No", on_click=no_click),
        ],
        actions_alignment=ft.MainAxisAlignment.END,
    )

    page.add(ft.Text('Try exiting this app by clicking window\'s "Close" button!'))

ft.app(target=main)
``` 

###  `window_to_front()`

🖥️桌面。 将应用程序窗口带到前景。

## 事件

###  `on_close`

当会话在配置的时间（默认情况下为60分钟）之后，会议过期。

###  `on_connect`

当Web用户（重新）连接到页面会话时，会发射。 首先打开应用程序页面时，它不会触发，但是当刷新该页面时触发，或者Flet Web客户端已在计算机解锁后重新连接。 此事件可用于检测网络用户何时“在线”。

###  `on_disconnect`

当Web用户从页面会话中断开连接时，请触发，即关闭浏览器选项卡片/窗口。

###  `on_error`

发生未经治疗的例外时发射。

###  `on_keyboard_event`

按下键盘键时发射。 事件对象`e`是`KeyboardEvent`类的实例: 

```python
@dataclass
class ft.KeyboardEvent:
    key: str
    shift: bool
    ctrl: bool
    alt: bool
    meta: bool
```

检查[简单用法示例](https://github.com/flet-dev/examples/blob/main/python/controls/page/keyboard-events.py)。

###  `on_login`

在成功或失败的OAUTH授权流程中开火。 有关更多信息和示例，请参见[Authentication](/docs/guides/python/authentication#checking-authentication-results)指南。

###  `on_logout`

在`page.logout()`呼叫。

###  `on_platform_brigthness_change`之后。

当App主机平台的亮度发生变化时。

###  `on_resize`

例如，用户调整了包含Flet应用程序的浏览器或本机OS窗口时，请进行射击。

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
def page_resize(e):
    print("New page size:", page.window_width, page.window_height)

page.on_resize = page_resize
```

</TabItem>
</Tabs> 

###  `on_route_change`

通过编辑应用程序URL或使用浏览器向后/向前按钮进行编程时，页面路由会更改页面路由时发射。

事件对象`e`是`RouteChangeEvent`类的实例: 

```python
class RouteChangeEvent(ft.ControlEvent):
    route: str     # a new page root
``` 

###  `on_scroll`

用户更改页面滚动位置时会发射。

有关事件详细信息和示例，请参见[`Column.on_scroll`](docs/controls/column#on_scroll)。

###  `on_view_pop`

当用户在[`AppBar`](/docs/controls/appbar)控制中单击自动“返回”按钮时发射。

事件对象`e`是`ViewPopEvent`类的实例: 

```python
class ViewPopEvent(ft.ControlEvent):
    view: ft.View
```

其中`view`是[`View`](/docs/controls/view)控件的实例，其中包含AppBar。

###  `on_window_event`

当应用程序的本机操作系统窗口改变其状态时，会发射: 位置，大小，最大化，最小化等。

`data`包含Window的事件名称: 

*  `close`
* `focus`
* `blur`
* `maximize`
* `unmaximize`
* `minimize`
* `restore`
* `resize`
* `resized`（仅MACOS和Windows）
* `move`
* `moved`（仅MACOS和Windows）
* `enterFullScreen`
* `leaveFullScreen`