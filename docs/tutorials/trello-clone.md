---
title: Making a Trello clone with Python and Flet
sidebar_label: Python - Trello clone
slug: trello-clone
---

让我们用 Flet 框架在 python 中制作一个克隆，然后将其部署到[fly.io](https://fly.io/)！

<img src="/website/img/docs/trolli-tutorial/trolli-app.gif" className="screenshot-80" />

可以通过自我解释提交（在此[9731}）找到本教程的代码。 克隆后，请确保运行`pip install -ruesignt.txt`。 [这里](https://gallery.flet.dev/trolli/)是一个实时演示。

## 为什么 Flet？

毫无疑问，大多数开发人员都熟悉开发了比最初预期的受众群体的控制台应用程序的情况，或者需要为非开发人员开发内部工具，但注定要拥有一个小的用户群和/ 或相对短暂的保质期。 在这种情况下，往常会感到尴尬，例如 Electron 等超大工具，诸如 Flutter（讽刺性公认！）之类的功能丰富的框架，或者尝试快速在其他一些跨平台框架上处理.NET MAUI。 我们真正希望的是能够在我们的逻辑上投入一个 UI，该逻辑看起来很不错，具有可接受的性能，理想情况下，与业务逻辑相比，要花费的时间更少，最好使用其余部分的语言 逻辑是编写的 - 即我们已经精通的语言（目前唯一发布的库在 Python 中，但是 C＃，Typescript 和 Golang 库在路线图上）。 这正是 Flet 平台旨在提供的内容。

Flet 对许多新的 UI 框架采用了不同的方法，这些方法可以说是对大多数经验丰富的程序员更直观的方法。 与当前无处不在的声明性方法不同，而是选择了命令模型。

暗示 Flet 的设计是考虑到简单的 GUI，但是让我们尝试使某些东西变得更复杂，例如一个带有一些过滤器的简单仪表板，并拍摄像 Trello 的最小版本一样 - 并授予 它是完全独立的名称，_trolli_。 出于本教程的目的，我会假设读者熟悉 Flet project 的基本概念和设置（读取[教程](https://flet.dev/docs/tutorials)和[docs](https://flet.dev/docs/guides/python/getting-started)（如果没有），而是专注于 有关不属于现有教程的一部分的各个方面的更多信息。

## 定义实体和布局

以创建克隆的 MVP 的直接目标，让我们首先定义主要实体（`boards`，`board_lists`，`board_lists`，`items`），`items`），安顿下来的设计和布局，然后实现一种伪造模式 因此，在未来的开发中，我们可以从内存数据存储转变为某种持续存储。

在这里，在`main.py`模块中，我们将添加此代码，然后继续定义`TrelloApp`类。

```python
import flet
from flet import (
    Page,
    colors
)

if __name__ == "__main__":

    def main(page: Page):

        page.title = "Flet Trello clone"
        page.padding = 0
        page.bgcolor = colors.BLUE_GREY_200
        app = TrelloApp(page)
        page.add(app)
        page.update()

    flet.app(target=main, view=flet.WEB_BROWSER)
```

在布局方面，我们可以考虑该应用程序由标头（`appbar`）组成，在此下面，可折叠的导航面板（临近）是由板，设置，成员或其他我们可以选择的活动视图组成的。 这样的东西...

<img src="/website/img/docs/trolli-tutorial/mock-up.png" className="screenshot-80" />

因此，应用程序本身的课程看起来像这样...

```python
from flet import (
    Container,
    Icon,
    Page,
    Text,
    AppBar,
    PopupMenuButton,
    PopupMenuItem,
    colors,
    icons,
    margin
)

class TrelloApp:
    def __init__(self, page: Page):
        self.page = page
        self.appbar_items = [
            PopupMenuItem(text="Login"),
            PopupMenuItem(),  # divider
            PopupMenuItem(text="Settings")
        ]
        self.appbar = AppBar(
            leading=Icon(icons.GRID_GOLDENRATIO_ROUNDED),
            leading_width=100,
            title=Text("Trolli",size=32, text_align="start"),
            center_title=False,
            toolbar_height=75,
            bgcolor=colors.LIGHT_BLUE_ACCENT_700,
            actions=[
                Container(
                    content=PopupMenuButton(
                        items=self.appbar_items
                    ),
                    margin=margin.only(left=50, right=25)
                )
            ],
        )
        self.page.appbar = self.appbar
        self.page.update()
```

在新文件（`app_layout.py`）中，我们可以在类中为应用程序定义一个布局，该应用程序将从`Row`控件中继承以及导航导轨以及一个切换按钮折叠并扩展其主内容，并且主内容是主要内容 布置区域。 但是，我们没有在该模块中定义导航侧栏，而是将其放在其自己的`sidebar.py`模块中。 我们还将将侧栏类构建为`UserControl`，以便可以独立于`AppLayout`类更新。

```python
from flet import (
    Control,
    Column,
    Container,
    IconButton,
    Page,
    Row,
    Text,
    IconButton,
    colors,
    icons,
)
from sidebar import Sidebar


class AppLayout(Row):
    def __init__(
        self,
        app,
        page: Page,
        *args,
        **kwargs
    ):
        super().__init__(*args, **kwargs)
        self.app = app
        self.page = page
        self.toggle_nav_rail_button = IconButton(
            icon=icons.ARROW_CIRCLE_LEFT, icon_color=colors.BLUE_GREY_400, selected=False,
            selected_icon=icons.ARROW_CIRCLE_RIGHT, on_click=self.toggle_nav_rail)
        self.sidebar = Sidebar(self, page)
        self._active_view: Control = Column(controls=[
            Text("Active View")
        ], alignment="center", horizontal_alignment="center")
        self.controls = [self.sidebar,
                         self.toggle_nav_rail_button, self.active_view]

    @property
    def active_view(self):
        return self._active_view

    @active_view.setter
    def active_view(self, view):
        self._active_view = view
        self.update()

    def toggle_nav_rail(self, e):
        self.sidebar.visible = not self.sidebar.visible
        self.toggle_nav_rail_button.selected = not self.toggle_nav_rail_button.selected
        self.page.update()
```

这是`Sidebar.py`文件。

```python
from flet import (
    UserControl,
    Column,
    Container,
    Row,
    Text,
    NavigationRail,
    NavigationRailDestination,
    alignment,
    border_radius,
    colors,
    icons,
    padding,
    margin,
)


class Sidebar(UserControl):

    def __init__(self, app_layout, page):
        super().__init__()
        self.app_layout = app_layout
        self.page = page
        self.top_nav_items = [
            NavigationRailDestination(
                label_content=Text("Boards"),
                label="Boards",
                icon=icons.BOOK_OUTLINED,
                selected_icon=icons.BOOK_OUTLINED
            ),
            NavigationRailDestination(
                label_content=Text("Members"),
                label="Members",
                icon=icons.PERSON,
                selected_icon=icons.PERSON
            ),

        ]
        self.top_nav_rail = NavigationRail(
            selected_index=None,
            label_type="all",
            on_change=self.top_nav_change,
            destinations=self.top_nav_items,
            bgcolor=colors.BLUE_GREY,
            extended=True,
            expand=True
        )

    def build(self):
        self.view = Container(
            content=Column([
                Row([
                    Text("Workspace"),
                ]),
                # divider
                Container(
                    bgcolor=colors.BLACK26,
                    border_radius=border_radius.all(30),
                    height=1,
                    alignment=alignment.center_right,
                    width=220
                ),
                self.top_nav_rail,
                # divider
                Container(
                    bgcolor=colors.BLACK26,
                    border_radius=border_radius.all(30),
                    height=1,
                    alignment=alignment.center_right,
                    width=220
                ),
            ], tight=True),
            padding=padding.all(15),
            margin=margin.all(0),
            width=250,
            bgcolor=colors.BLUE_GREY,
        )
        return self.view

    def top_nav_change(self, e):
        self.top_nav_rail.selected_index = e.control.selected_index
        self.update()

```

如果我们运行主应用

```
flet main.py -d
```

我们可以看到结果，并在进行任何样式更改时进行热重新加载。 例如，尝试将`alignment =“ center”'添加到这样的容器中的第一行…

```python
content=Column([
        Row([Text("Workspace")], alignment="center")
```

如果保存文件，则应该能够在应用程序窗口中看到更改。

<img src="/website/img/docs/trolli-tutorial/basic-nav-rail-toggle.gif" className="screenshot-60" />

在我们继续前进之前，让我们定义我们的基本实体。 我们将需要一个`Board`类，该类将保留列表的列表，每个列表将是`BoardList`对象（对不幸的词汇碰撞表示歉意 - 对“列表”的使用源自“列表”的性质。 应用程序，而“列表”的技术用途源自 Python 的特定术语，用于类似数组的数据结构），而每个术语都将包含`Item`对象的列表。 如果这令人困惑，请花一些时间查看源代码以清除内容。

对于每个实体，我们将在每个类的顶部添加一个应用程序宽度 ID = itertools.counters.counts.counts.counts.count（）`语句，并在初始化时呼叫`next(Board.id_counter)`。 这样，两个列表或董事会可以具有相同的名称，但仍然代表不同的实体。

## 数据访问层和自定义

现在，我们已经定义了一个基本布局和实体，让我们在应用程序本身中添加一些自定义参数。 我们还花一些时间创建一个基本的数据访问接口。 您可以分别在`data_store.py`和`memory_store.py`文件中看到接口和内存实现的锅炉板。 这将使我们更容易
这是更新的主函数。 我们需要在主方法中实例化`InMemoryStore`类，以便每个用户会话（即使用应用程序的每个新选项卡片）都有其自己的商店版本。 然后，我们需要将该商店传递给需要访问它的每个组件。

我们还将在 * Assets *目录中添加新字体，该目录在 App 函数中指定的参数中指定。

```python
if __name__ == "__main__":

    def main(page: Page):

        page.title = "Flet Trello clone"
        page.padding = 0
        page.theme = theme.Theme(
            font_family="Verdana")
        page.theme.page_transitions.windows = "cupertino"
        page.fonts = {
            "Pacifico": "/Pacifico-Regular.ttf"
        }
        page.bgcolor = colors.BLUE_GREY_200
        page.update()
        app = TrelloApp(page)

    flet.app(target=main, assets_dir="../assets", view=flet.WEB_BROWSER)
```

## 应用程序逻辑

您现在可以运行该应用程序，但是除了名称的更好字体外，它仍然没有任何功能。 现在是时候填写应用程序逻辑了。 尽管此应用程序可能有资格为非平凡，但我们不会理会将代码分为不同的应用程序和业务层。 数据访问和其余逻辑的分离对于此非构造专注的教程就足够了，尽管进一步的分离可能是一件明智的考虑。

### 创建视图

首先，我们将添加视图以对应于侧栏导航目的地。 我们需要一个视图来显示所有董事会和一个视图，以显示成员窗格，目前，该窗格将成为占位符，直到将来的教程为止。 我们将这些视图作为控件添加到`app_layout.py`模块。

```python
self.members_view = Text("members view")

self.all_boards_view = Column([
    Row([
        Container(
            Text(value="Your Boards", style="headlineMedium"),
            expand=True,
            padding=padding.only(top=15)),
        Container(
            TextButton(
                "Add new board",
                icon=icons.ADD,
                on_click=self.app.add_board,
                style=ButtonStyle(
                    bgcolor={
                        "": colors.BLUE_200,
                        "hovered": colors.BLUE_400
                    },
                    shape={
                        "": RoundedRectangleBorder(radius=3)
                    }
                )
            ),

            padding=padding.only(right=50, top=15))
    ]),
    Row([
        TextField(hint_text="Search all boards", autofocus=False, content_padding=padding.only(left=10),
                    width=200, height=40, text_size=12,
                    border_color=colors.BLACK26, focused_border_color=colors.BLUE_ACCENT, suffix_icon=icons.SEARCH)
    ]),
    Row([Text("No Boards to Display")])
], expand=True)

```

由于我们在命令式范式中工作，并且没有明确的状态管理工具（例如 Redux 之类的），因此我们将需要一种方法来“补充”显示所有董事会的观点，以便其当前状态反映其他实体的变化（ 即餐具柜）。

```python
def hydrate_all_boards_view(self):
    self.all_boards_view.controls[-1] = Row([
        Container(
            content=Row([
                Container(
                    content=Text(value=b.name), data=b, expand=True, on_click=self.board_click),
                Container(
                    content=PopupMenuButton(
                        items=[
                            PopupMenuItem(
                                content=Text(value="Delete", style="labelMedium",
                                                text_align="center"),
                                on_click=self.app.delete_board, data=b),
                            PopupMenuItem(),
                            PopupMenuItem(
                                content=Text(value="Archive", style="labelMedium",
                                                text_align="center"),
                            )
                        ]
                    ),
                    padding=padding.only(right=-10),
                    border_radius=border_radius.all(3)
                )], alignment="spaceBetween"),
            border=border.all(1, colors.BLACK38),
            border_radius=border_radius.all(5),
            bgcolor=colors.WHITE60,
            padding=padding.all(10),
            width=250,
            data=b
        ) for b in self.store.get_boards()
    ], wrap=True)
    self.sidebar.sync_board_destinations()
```

### 同步导航面板

接下来，我们需要导航面板的视觉上不同部分来显示我们创建的板。 当特定板是主动视图时，我们将在侧边栏中添加第二个，`bottom_nav_rail`。 这将需要在侧栏组件中使用`sync_board_destinations`方法，只要对当前板的列表进行任何更改。
现在，我们将为每个顶部和底部 NAV 导轨提供一个更改处理程序。

```python
self.top_nav_rail = NavigationRail(
    selected_index=None,
    label_type="all",
    on_change=self.top_nav_change,
    destinations=self.top_nav_items,
    bgcolor=colors.BLUE_GREY,
    extended=True,
    height=110
)
self.bottom_nav_rail = NavigationRail(
    selected_index=None,
    label_type="all",
    on_change=self.bottom_nav_change,
    extended=True,
    expand=True,
    bgcolor=colors.BLUE_GREY,
)

...

def sync_board_destinations(self):
    boards = self.store.get_boards()
    self.bottom_nav_rail.destinations = []
    for i in range(len(boards)):
        b = boards[i]
        self.bottom_nav_rail.destinations.append(
            NavigationRailDestination(
                label_content=TextField(
                    value=b.name,
                    hint_text=b.name,
                    text_size=12,
                    read_only=True,
                    on_focus=self.board_name_focus,
                    on_blur=self.board_name_blur,
                    border="none",
                    height=50,
                    width=150,
                    text_align="start",
                    data=i
                ),
                label=b.name,
                selected_icon=icons.CHEVRON_RIGHT_ROUNDED,
                icon=icons.CHEVRON_RIGHT_OUTLINED
            )
        )
    self.view.update()

```

现在，我们可以添加新板，它们出现在我们的导航轨中。
不幸的是，单击导航导轨实际上并没有导航到任何东西。

<img src="/website/img/docs/trolli-tutorial/add-board-capability.gif" className="screenshot-60" />

我们可以通过几种方法来实现这一目标，例如在`app_layout.py`模块中存在所有视图，然后根据导航导轨索引，根据导航导轨索引，对相关视图的可视性开/关。 但这在浏览器上下文中也无济于事，也不会在带有后背按钮的移动上下文中。 我们需要考虑路由。 Flet 提供了一个用于 URL 匹配的`TemplateRoute`实用程序类。

### 路由

在`main.py`模块中，让我们将处理程序连接到`page.on_route_change`事件。

```python
Class TrelloApp:
    def __init__(self, page: Page, user=None):
 	…
        self.page.on_route_change = self.route_change
	…


    def initialize(self):
        self.page.views.append(
            View(
                "/",
                [
                    self.appbar,
                    self.layout
                ],
                padding=padding.all(0),
                bgcolor=colors.BLUE_GREY_200
            )
        )
        self.page.update()
        # create an initial board for demonstration
        self.create_new_board("My First Board")
        self.page.go("/")

    def route_change(self, e):
        troute = TemplateRoute(self.page.route)
        if troute.match("/"):
            self.page.go("/boards")
        elif troute.match("/board/:id"):
            if int(troute.id) > len(self.store.get_boards()):
                self.page.go("/")
                return
            self.layout.set_board_view(int(troute.id))
        elif troute.match("/boards"):
            self.layout.set_all_boards_view()
        elif troute.match("/members"):
            self.layout.set_members_view()
        self.page.update()
```

在这里，我们还将更改我们的初始化方法，以便该应用以用于演示目的的预制板开始。 在该方法中，请注意，我们在页面上添加了一个 flet `View`对象。 该页面将视图列表保持为其他控件的顶级容器，以跟踪导航历史记录。 我们还需要将相应的`set_***_view`方法添加到`layout.py`模块。 这是`set_board_view`方法例如...

```python
 def set_board_view(self, i):
        self.active_view = self.store.get_boards()[i]
        self.sidebar.bottom_nav_rail.selected_index = i
        self.sidebar.top_nav_rail.selected_index = None
        self.sidebar.update()
        self.page.update()
```

现在，如果我们在网络浏览器中启动该项目

```
flet main.py -d -w
```

命令（_-d_ flag 用于热加载，_-w_ for web）我们可以添加一些板并通过单击或输入` URL。

<img src="/website/img/docs/trolli-tutorial/navigation.gif" className="screenshot-60" />

### 更改木板名称

接下来，我们应该包括更改董事会名称的能力。 与在`board_list.py`模块中实现的更“_合适的_”标题编辑逻辑相反，我将偏爱某些人可能认为是一种更“_hacky_”的方法，因为我个人不喜欢过度的礼仪编辑流，尤其是 在如此低的赌注中，流体的应用。 我们将利用`on_focus`和`on_blur`在`sidebar.py`模块中的底部导航导轨目的地中的事件。 这是我们要添加的处理程序。

```python
def board_name_focus(self, e):
    e.control.read_only = False
    e.control.border = "outline"
    e.control.update()

def board_name_blur(self, e):
    self.store.update_board(self.store.get_boards()[e.control.data], {
        'name': e.control.value})
    self.app_layout.hydrate_all_boards_view()
    e.control.read_only = True
    e.control.border = "none"
    self.page.update()

```

这是一种非常直观的方式，可以在没有不必要的对话框或无关的按钮上更改板名称。

让我们快速固执一个登录过程，这将在以后的分期付款中更充分地实现。 现在，我们只需添加以下登录方法，然后将其连接到登录`PopupMenuItem` on_click 事件。

```python
def login(self, e):

    def close_dlg(e):
        if user_name.value == "" or password.value == "":
            user_name.error_text = "Please provide username"
            password.error_text = "Please provide password"
            self.page.update()
            return
        else:
            print("name and password: ", user_name.value, password.value)
            user = User(user_name.value, password.value)
            if user not in self.store.get_users():
                self.store.add_user(user)
            self.user = user_name.value
            self.page.client_storage.set("current_user", user_name.value)

        dialog.open = False
        self.appbar_items[0] = PopupMenuItem(
            text=f"{self.page.client_storage.get('current_user')}'s Profile")
        self.page.update()
    user_name = TextField(label="User name")
    password = TextField(label="Password", password=True)
    dialog = AlertDialog(
        title=Text("Please enter your login credentials"),
        content=Column([
            user_name,
            password,
            ElevatedButton(text="Login", on_click=close_dlg),
        ], tight=True),
        on_dismiss=lambda e: print("Modal dialog dismissed!"),
    )
    self.page.dialog = dialog
    dialog.open = True
    self.page.update()
```

## 拖放

接下来，我们将在列表中的列表和项目中添加关键的拖放功能。

我们将从董事会内重新排序列表的简单案例开始。 为了给我们拖动列表的目标的视觉指示，我们将修改`board_list`容器`border`属性，使`list_will_drag_accept`事件处理程序上的颜色变暗，然后将其返回到更轻的 `list_drag_accept`和`list_drag_leave`操作器中的颜色。

接下来，我们将在`DragTarget`对象中包装`board_list`视图，然后将所有这些视图包装在`Draggable`对象中。 这两个都将通过“列表”的`group`参数。 这将很重要，因为以后我们将要添加在不同列表之间拖放各个项目的能力，因此对于该功能，我们将指定另一个组。 如果有什么
现在，视图的组成应该看起来像这样。

```python
self.view = Draggable(
    group="lists",
    content=DragTarget(
        group="lists",
        content=Container(
            content=Column([
                self.header,
                self.new_item_field,
                TextButton(content=Row([Icon(icons.ADD), Text("add card", color=colors.BLACK38)], tight=True),
                           on_click=self.add_item_handler),
                self.items,
                self.end_indicator
            ], spacing=4, tight=True, data=self.title),
            width=250,
            border=border.all(2, colors.BLACK12),
            border_radius=border_radius.all(5),
            bgcolor=self.color if (
                self.color != "") else colors.BACKGROUND,
            padding=padding.only(
                bottom=10, right=10, left=10, top=5)
        ),
        data=self,
        on_accept=self.list_drag_accept,
        on_will_accept=self.list_will_drag_accept,
        on_leave=self.list_drag_leave
    )
)

```

事件处理程序的定义。

```python
def list_drag_accept(self, e):
    src = self.page.get_control(e.src_id)
    l = self.board.board_lists
    to_index = l.index(e.control.data)
    from_index = l.index(src.content.data)
    l[to_index], l[from_index] = l[from_index], l[to_index]
    self.inner_list.border = border.all(2, colors.BLACK12)
    self.board.update()
    self.update()


def list_will_drag_accept(self, e):
    self.inner_list.border = border.all(2, colors.BLACK)
    self.update()


def list_drag_leave(self, e):
    self.inner_list.border = border.all(2, colors.BLACK12)
    self.update()

```

请注意，操纵不透明度字段是视觉指示，表明将在目标上接受拖动的项目。

<img src="/website/img/docs/trolli-tutorial/drag-drop-list.gif" className="screenshot-60" />

现在，对于将项目拖到列表中的情况稍微复杂得多（包括可能属于同一板上的另一个列表）。 现在，我们希望`board_list`不仅是其他列表的拖动目标，而且还可以从其他列表中拖动到它的项目，我们需要将另一个`DragTarget`包装添加到列表中，而且这一次 我们将分配组名称“项目”，以便它仅响应项目的拖累。

由于我们将能够将列表拖到现有列表上方或下方的位置，因此我们将采用与列表拖动实现的不同视觉指示器策略。
我们将确保每当将新的`item`添加到`board_list`中时，它将与视觉指示器插入（作为简单的容器对象）。

`item.py`模块现在需要`Draggable`和`DragTarget`包裹的视图，并分配给“项目”组，如下所示，与事件处理程序一起看到。

```python
def build(self):

    self.view = Draggable(
        group="items",
        content=DragTarget(
            group="items",
            content=self.card_item,
            on_accept=self.drag_accept,
            on_leave=self.drag_leave,
            on_will_accept=self.drag_will_accept,
        ),
        data=self
    )
    return self.view

def drag_accept(self, e):
    src = self.page.get_control(e.src_id)

    # skip if item is dropped on itself
    if (src.content.content == e.control.content):
        print("skip")
        self.card_item.elevation = 1
        self.list.set_indicator_opacity(self, 0.0)
        e.control.update()
        return

    # item dropped within same list but not on self
    if (src.data.list == self.list):
        self.list.add_item(chosen_control=src.data,
                            swap_control=self)
        self.card_item.elevation = 1
        e.control.update()
        return

    # item added to different list
    self.list.add_item(src.data.item_text, swap_control=self)
    # remove from the list to which draggable belongs
    src.data.list.remove_item(src.data)
    self.list.set_indicator_opacity(self, 0.0)
    self.card_item.elevation = 1
    e.control.update()

def drag_will_accept(self, e):
    self.list.set_indicator_opacity(self, 1.0)
    self.card_item.elevation = 20 if e.data == "true" else 1
    e.control.update()

def drag_leave(self, e):
    self.list.set_indicator_opacity(self, 0.0)
    self.card_item.elevation = 1
    e.control.update()
```

我们需要在某个地方容纳逻辑，该逻辑将决定如何以及何时修改基于阻力事件`board_list`对象拥有的项目。 肯定有一些设计模式武装分子，可以在以下方法中发现几十个对神圣软件设计神圣顺序的邪恶违规行为，但是对于这种应用的大小，只需超载`add_item`方法，即可从不同 如下所示，在我看来，地方似乎是一种完全可行的方法。

```python
def add_item(self, item: str = None, chosen_control: Draggable = None swap_control: Draggable = None):

    controls_list = [x.controls[1] for x in self.items.controls]
    to_index = controls_list.index(
        swap_control) if swap_control in controls_list else None
    from_index = controls_list.index(
        chosen_control) if chosen_control in controls_list else None
    control_to_add = Column([
        Container(
            bgcolor=colors.BLACK26,
            border_radius=border_radius.all(30),
            height=3,
            alignment=alignment.center_right,
            width=200,
            opacity=0.0
        )
    ])

    # rearrange (i.e. drag drop from same list)
    if ((from_index is not None) and (to_index is not None)):
        self.items.controls.insert(
            to_index, self.items.controls.pop(from_index))
        self.set_indicator_opacity(swap_control, 0.0)

    # insert (drag from other list to middle of this list)
    elif (to_index is not None):
        new_item = Item(self, item)
        control_to_add.controls.append(new_item)
        self.items.controls.insert(to_index, control_to_add)

    # add new (drag from other list to end of this list, or use add item button)
    else:
        new_item = Item(self, item) if item else Item(
            self, self.new_item_field.value)
        control_to_add.controls.append(new_item)
        self.items.controls.append(control_to_add)
        self.store.add_item(self.board_list_id, new_item)
        self.new_item_field.value = ""

    self.view.update()
    self.page.update()
```

通过这些更改，我们应该能够在板上拖动列表，并在不同列表之间拖动项目。

<img src="/website/img/docs/trolli-tutorial/drag-lists-and-items.gif" className="screenshot-60" />

## 处理页面调整大小

我们需要添加的唯一逻辑的最后一点是一些页面大小的大小，以确保如果存在的列表比显示的列表更多，则有一个滚动条可以达到它们。 该逻辑还必须考虑侧边栏的状态 - 是否扩展。

我们将向`board.py`模块添加一个调整大小方法。

```python
def resize(self, nav_rail_extended, width, height):
    self.list_wrap.width = (
        width - 310) if nav_rail_extended else (width - 50)
    self.view.height = height
    self.list_wrap.update()
    self.view.update()
```

并在`app_layout.py`模块中连接此`page.on_resize`处理程序。

```python
def page_resize(self, e=None):
    if type(self.active_view) is Board:
        self.active_view.resize(self.sidebar.visible,
                                self.page.width, self.page.height)
    self.page.update()
```

## 部署为 Web 应用

运行`flet main。 服务器和 UI 之间的通信以及服务器和您的客户端代码发生在 WebSocket 中。 因此，您应该确保在部署应用程序的任何地方都有足够的 Websocket 支持。 对于本教程，我们将部署到[fly.io](https://fly.io/)，该(https://fly.io/)在其免费层上提供多达3 VM 和 3GB 存储空间。 如果您更习惯于 AWS 服务（或其他人正在付款: 微笑: ），您可以考虑将这种部署策略调整为 Fargate。

[安装 FlyCtl 命令行实用程序](https://fly.io/docs/hands-on/install-flyctl/)，并创建一个可以通过运行来验证的帐户

```
fly auth login
```

[Fly.io](https://fly.io/)通过基于 Docker 容器创建 Micro-VMS 来起作用。 因此，您需要在存储库的根部中`DockerFile`，并且还需要一个`fly.toml`配置文件。 后者也可以通过运行来创建

```
fly launch
```

在您的存储库中并遵循提示。 如果需要，您可以参考本教程中的同伴存储库中的指定提交。

一旦您验证了可以在本地构建和运行的 Docker 映像，就可以通过运行来创建您的应用

```
fly apps create --name <app-name>
```

然后部署

```
fly deploy
```

如果部署成功，您应该可以通过运行来访问该应用

```
fly apps open
```

## 摘要

希望这项演练可以使读者了解如何使用 Flet 框架如何开发和部署实际可用应用程序。 在许多不同的用例中，灵活性，开发速度和开发人员的经验使其成为真正令人信服的工具，而且越来越多的开发人员这样做。

您可以在[Twitter](https://twitter.com/fletdev)上关注发布和新功能，也可以参与[Discord](https://discord.gg/dzWXP8SHG8)的讨论。
