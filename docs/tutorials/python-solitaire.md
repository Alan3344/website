---
title: Creating Solitaire game with Python and Flet - Part 1
sidebar_label: Python - Solitaire game
slug: python-solitaire
---

在本教程中，我们将与 Flet 一起在 Python 中逐步展示著名的 Klondike Solitaire 游戏。 为了获得灵感，我们查看了此在线游戏: https://www.solitr.com/

本教程针对的是对 Python 和面向对象编程的基本知识的初学者/中级 Python 开发人员。

在这里，您可以看到您将使用 Flet 和本教程实现的最终结果:
https://gallery.flet.dev/solitaire/

<img src="/img/docs/solitaire-tutorial/part1_final.gif" className="screenshot-50" />

我们将游戏实现分解为以下步骤:

- [从 Flet 开始启动 Flet](#getting-started-with-flet)
- [可拖动卡片的概念应用程序](#proof-of-concept-app-for-draggable-cards)
- [扇形卡片桩](#fanned-card-piles)
- [Solitaire 设置](#solitaire-setup)
- [Solitaire 规则](#solitaire-rules)
- [赢得游戏](#winning-the-game)
- [部署应用程序](#deploying-the-app)

在第 2 部分中（下一个教程将介绍）我们将添加 Appbar，其中包括启动新游戏，查看游戏规则和更改游戏设置的选项。

## 从 Flet 开始

要创建一个 Flet Web 应用程序，您不需要了解 HTML，CSS 或 JavaScript，但是您确实需要有关 Python 和面向对象的编程的基本知识。

Flet 需要 Python 3.7 或更高。 要使用 Flet 在 Python 中创建 Web 应用程序，您需要先安装`flet`模块:

```bash
pip install flet
```

首先，让我们创建一个简单的 Hello-World 应用程序。

使用以下内容创建`hello.py`:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text(value="Hello, world!"))

ft.app(target=main)
```

运行此应用程序，您将看到一个带有问候的新窗口:

<img src="/img/docs/tutorial/todo-app-hello-world.png" className="screenshot-40" />

## 可拖动卡片的概念应用程序证明

对于概念证明，我们将仅使用三种类型的控件:

- [stack](/docs/controls/stack) - 将用作插槽和卡片绝对定位的父控制
- [GETUREDETECTOR](/docs/controls/gesturedetector) - 将在堆栈中移动的卡片
- [容器](/docs/controls/container) - 卡片将删除卡片的插槽。 也将用作 GETUREDETECTOR 的`content`。

我们已经将概念应用程序的证明分为四个简单的步骤，因此在每个步骤之后，您都有一个完整的简短程序进行运行和测试。

### 步骤 1: 将卡片拖动

在此步骤中，我们将创建一个`Stack`（Solitaire 游戏字段）和`GestureDetector`（Solitaire Card）。 然后，该卡片将被添加到堆栈`controls`的列表中。 `Top`和`left`盖帽的属性用于在堆栈中绝对定位卡片。

```python
import flet as ft

def main(page: ft.Page):

   card = ft.GestureDetector(
       left=0,
       top=0,
       content=ft.Container(bgcolor=ft.colors.GREEN, width=70, height=100),
   )

   page.add(ft.Stack(controls=[card], width=1000, height=500))

ft.app(target=main)
```

运行应用程序以查看添加到堆栈的卡片:
<img src="/img/docs/solitaire-tutorial/drag_and_drop1.png" className="screenshot-50" />

为了能够移动卡片，我们将创建一个`drag`方法，该方法将在`on_pan_update`的`on_pan_update`事件中调用，该事件发生在每个`drag_interval`时，当用户用鼠标拖动卡片时。

为了显示该卡片的动作，我们将在`drag`方法中更新卡片的`top`和`left`属性，每当发生`on_pan_update`事件时。

以下是在堆栈中拖动 fenureteTector 的最简单代码:

```python
import flet as ft

# Use of GestureDetector for with on_pan_update event for dragging card
# Absolute positioning of controls within stack

def main(page: ft.Page):

   def drag(e: ft.DragUpdateEvent):
       e.control.top = max(0, e.control.top + e.delta_y)
       e.control.left = max(0, e.control.left + e.delta_x)
       e.control.update()

   card = ft.GestureDetector(
       mouse_cursor=ft.MouseCursor.MOVE,
       drag_interval=5,
       on_pan_update=drag,
       left=0,
       top=0,
       content=ft.Container(bgcolor=ft.colors.GREEN, width=70, height=100),
   )

   page.add(ft.Stack(controls=[card], width=1000, height=500))

ft.app(target=main)
```

现在您可以看到卡片移动:
<img src="/img/docs/solitaire-tutorial/drag_and_drop2.gif" className="screenshot-50" />

:::注意
更新控件的任何属性后，应要求对控件的`update()`方法（或其母体控件）进行更新生效。
:::

###

### 步骤 2: 将卡片片放在插槽或弹跳中 回来了

此步骤的目标是，如果它足够近，则能够将卡片片放入插槽中，如果不是，则可以将其弹回。
<img src="/img/docs/solitaire-tutorial/drag_and_drop3.gif" className="screenshot-50" />

让我们创建一个`Container`控件，该控件将代表一个插槽，我们将删除卡片:

```python
slot = ft.Container(
    width=70, height=100, left=200, top=0, border=ft.border.all(1)
    )
page.add(ft.Stack(controls = [slot, card], width=1000, height=500))
```

`on_pan_end`卡片的事件在删除卡片时被调用:

```python
card = ft.GestureDetector(
    mouse_cursor=ft.MouseCursor.MOVE,
    drag_interval=5,
    on_pan_update=drag,
    on_pan_end=drop,
    left=0,
    top=0,
    content=ft.Container(bgcolor=ft.colors.GREEN, width=70, height=100),
)
```

在此事件中，我们将调用`drop`方法检查卡片是否足够接近插槽（例如，它比插槽更接近 20px），`place`它在那里:

```python
def drop(e: ft.DragEndEvent):
    if (
        abs(e.control.top - slot.top) < 20
        and abs(e.control.left - slot.left) < 20
    ):
        place(e.control, slot)
    e.control.update()

def place(card, slot):
    """place card to the slot"""
    card.top = slot.top
    card.left = slot.left
    page.update()
```

现在，如果卡片还不够近，我们需要将其弹回原始位置。 不幸的是，我们不知道原始位置坐标，因为卡片在`on_pan_update`事件上更改了卡片的`top`和`left`属性。

要解决此问题，让我们创建一个`Solitaire`类对象，以记住卡片片的原始位置，当卡片的`on_pan_start`事件称为:

```python
class Solitaire:
   def __init__(self):
       self.start_top = 0
       self.start_left = 0

solitaire = Solitaire()

def start_drag(e: ft.DragStartEvent):
    solitaire.start_top = e.control.top
    solitaire.start_left = e.control.left
    e.control.update()
```

现在，让我们更新`on_pan_end`事件，并以弹跳卡片的选项:

```python
def bounce_back(game, card):
    """return card to its original position"""
    card.top = game.start_top
    card.left = game.start_left
    page.update()

def drop(e: ft.DragEndEvent):
    if (
        abs(e.control.top - slot.top) < 20
        and abs(e.control.left - slot.left) < 20
    ):
        place(e.control, slot)

    else:
        bounce_back(solitaire, e.control)

    e.control.update()
```

可以找到此步骤的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/solitaire/solitaire-drag-and-drop/step2.py)。

### 步骤 3: 添加第二张卡片

最终，我们将需要 52 张卡片来玩游戏。 为了获得概念证明，让我们添加第二张卡片:

```python

   card2 = ft.GestureDetector(
       mouse_cursor=ft.MouseCursor.MOVE,
       drag_interval=5,
       on_pan_start=start_drag,
       on_pan_update=drag,
       on_pan_end=drop,
       left=100,
       top=0,
       content=ft.Container(bgcolor=ft.colors.YELLOW, width=70, height=100),
   )

   controls = [slot, card1, card2]
   page.add(ft.Stack(controls=controls, width=1000, height=500))
```

现在，如果您使用两张卡片运行该应用程序，您会注意到，当您四处移动卡片时，黄牌（card2）正在按预期移动，但是绿色卡片（card1）在黄牌下移动。
<img src="/img/docs/solitaire-tutorial/drag_and_drop4.gif" className="screenshot-50" />

之所以发生，是因为 Card2 在 Card1 之后添加到堆栈`controls`的列表中。 要解决此问题，我们需要将可拖动卡片移至`on_pan_start`事件上的控件列表的顶部:

```python
def move_on_top(card, controls):
    """Moves draggable card to the top of the stack"""
    controls.remove(card)
    controls.append(card)
    page.update()

def start_drag(e: ft.DragStartEvent):
    move_on_top(e.control, controls)
    solitaire.start_top = e.control.top
    solitaire.start_left = e.control.left
```

现在，可以将两张卡片拖动而没有问题:
<img src="/img/docs/solitaire-tutorial/drag_and_drop5.gif" className="screenshot-50" />

可以找到此步骤的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/solitaire/solitaire-drag-and-drop/step3.py)。

### 步骤 4: 添加更多插槽

作为概念应用程序证明的最后一步，让我们创建两个插槽:

```python
slot0 = ft.Container(
    width=70, height=100, left=0, top=0, border=ft.border.all(1)
)

slot1 = ft.Container(
    width=70, height=100, left=200, top=0, border=ft.border.all(1)
)

slot2 = ft.Container(
    width=70, height=100, left=300, top=0, border=ft.border.all(1)
)

slots = [slot0, slot1, slot2]
```

创建新卡片时，我们将不会立即指定其`top`和`left`位置，而是将它们放在`slot0`:

```python
# deal cards
place(card1, slot0)
place(card2, slot0)
```

`on_pan_end`事件，我们检查卡片是否接近插槽，我们现在将浏览插槽列表以查找应删除卡片的位置:

```python
def drop(e: ft.DragEndEvent):
    for slot in slots:
        if (
            abs(e.control.top - slot.top) < 20
        and abs(e.control.left - slot.left) < 20
        ):
            place(e.control, slot)
            e.control.update()
            return

    bounce_back(solitaire, e.control)
    e.control.update()
```

结果，可以在三个插槽之间拖动两张卡片:
<img src="/img/docs/solitaire-tutorial/drag_and_drop6.gif" className="screenshot-50" />

可以找到此步骤的完整代码[此处](https://github.com/flet-dev/examples/blob/main/python/tutorials/solitaire/solitaire-drag-and-drop/step4.py)。

恭喜您完成了 Solitaire 游戏的概念应用程序！ 现在，您可以与`GestureDetector`一起工作，将卡片移入`Stack`并将其放置到某些`Containers`中，这是游戏开始的重要组成部分。

## 扇形卡片片堆

在概念应用程序的证明中，您已经完成了将卡片丢给插槽的任务，或者反弹。 如果该插槽中已经有一张卡片，则将新卡片放在其顶部，将其完全覆盖。

在实际的单人游戏中，如果已经有一张卡片片插槽中的卡片片，则要将可拖动卡片放低一点，以便您也可以看到上一张卡片，如果有两张卡片，甚至较低。 这些被称为“扇形桩”。

然后，我们希望能够从扇形堆中挑选一张不是堆的顶部卡片片，并将卡片与下面的所有卡片一起拖动:
<img src="/img/docs/solitaire-tutorial/fanned_piles3.gif" className="screenshot-50" />

为此，拥有有关拖动卡片的插槽中以及掉落的插槽中的插槽中的一堆卡片的信息将很有用。 让我们重组我们的程序，并为实施扇形桩做好准备。

### 插槽，卡片和纸牌课程

一个插槽可以具有`pile`属性，该属性将保存在此处放置的卡片列表。 现在，插槽是`Container`控制对象，我们无法向其添加任何新属性。 让我们创建一个新的`Slot`类，该类将从`Container`继承，然后添加一个`pile`属性:

```python
SLOT_WIDTH = 70
SLOT_HEIGHT = 100

import flet as ft

class Slot(ft.Container):
   def __init__(self, top, left):
       super().__init__()
       self.pile=[]
       self.width=SLOT_WIDTH
       self.height=SLOT_HEIGHT
       self.left=left
       self.top=top
       self.border=ft.border.all(1)
```

与`Slot`类类似，让我们使用`slot`属性创建一个新的`Card`类，要记住它驻留在哪个插槽中。 它将从`GestureDetector`继承，我们将将所有与卡片相关的方法移动到它:

```python
CARD_WIDTH = 70
CARD_HEIGTH = 100
DROP_PROXIMITY = 20

import flet as ft

class Card(ft.GestureDetector):
   def __init__(self, solitaire, color):
       super().__init__()
       self.slot = None
       self.mouse_cursor=ft.MouseCursor.MOVE
       self.drag_interval=5
       self.on_pan_start=self.start_drag
       self.on_pan_update=self.drag
       self.on_pan_end=self.drop
       self.left=None
       self.top=None
       self.solitaire = solitaire
       self.color = color
       self.content=ft.Container(bgcolor=self.color, width=CARD_WIDTH, height=CARD_HEIGTH)

   def move_on_top(self):
       """Moves draggable card to the top of the stack"""
       self.solitaire.controls.remove(self)
       self.solitaire.controls.append(self)
       self.solitaire.update()

   def bounce_back(self):
       """Returns card to its original position"""
       self.top = self.slot.top
       self.left = self.slot.left
       self.update()

   def place(self, slot):
       """Place card to the slot"""
       self.top = slot.top
       self.left = slot.left

   def start_drag(self, e: ft.DragStartEvent):
       self.move_on_top()
       self.update()

   def drag(self, e: ft.DragUpdateEvent):
       self.top = max(0, self.top + e.delta_y)
       self.left = max(0, self.left + e.delta_x)
       self.update()

   def drop(self, e: ft.DragEndEvent):
       for slot in self.solitaire.slots:
           if (
               abs(self.top - slot.top) < DROP_PROXIMITY
           and abs(self.left - slot.left) < DROP_PROXIMITY
         ):
               self.place(slot)
               self.update()
               return

       self.bounce_back()
       self.update()
```

:::注意
注意: 由于每张卡片现在都有`slot`属性，因此无需记住`start_left`和`start_top`在 Solitaire 类中的可拖动卡片的位置`start_top`，因为我们只需将其弹回到它的插槽。
:::。
:::

让我们更新`Solitaire`类从`Stack`继承，然后将卡片片和插槽的创建移动到那里:

```python
SOLITAIRE_WIDTH = 1000
SOLITAIRE_HEIGHT = 500

import flet as ft
from slot import Slot
from card import Card

class Solitaire(ft.Stack):
   def __init__(self):
       super().__init__()
       self.controls = []
       self.slots = []
       self.cards = []
       self.width = SOLITAIRE_WIDTH
       self.height = SOLITAIRE_HEIGHT

   def did_mount(self):
       self.create_card_deck()
       self.create_slots()
       self.deal_cards()

   def create_card_deck(self):
       card1 = Card(self, color="GREEN")
       card2 = Card(self, color="YELLOW")
       self.cards = [card1, card2]

   def create_slots(self):
       self.slots.append(Slot(top=0, left=0))
       self.slots.append(Slot(top=0, left=200))
       self.slots.append(Slot(top=0, left=300))
       self.controls.extend(self.slots)
       self.update()

   def deal_cards(self):
       self.controls.extend(self.cards)
       for card in self.cards:
           card.place(self.slots[0])
       self.update()
```

:::注意
如果您尝试调用`create_slots()`和`create_card_deck()`和`deal_cards()`方法`__init__()` solitaire 类方法`__init__()`，则会导致错误“必须先添加控件到页面上”。 为了解决此问题，我们在`did_mount()`方法内创建插槽和卡片片，该方法在将堆栈添加到页面后立即发生。
:::

现在，我们的主要程序将非常简单:

```python
import flet as ft
from solitaire import Solitaire

def main(page: ft.Page):

   solitaire = Solitaire()

   page.add(solitaire)

ft.app(target=main)
```

您可以找到此步骤的完整源代码[此处](https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-classes)。 它的工作方式与概念应用程序完全相同，但用新类重写，可以为其添加更复杂的功能。

### 放置带有偏移的卡片

当卡片将卡片放在`card.place()`方法中的插槽上时，我们需要做三件事:

- 如果存在，将卡片从其原始插槽中删除
- 将卡片的插槽更改为新插槽
- 将卡片添加到新的老虎机堆中

```python
def place(self, slot):
    # remove card from it's original slot, if exists
    if self.slot is not None:
        self.slot.pile.remove(self)

    # change card's slot to a new slot
    self.slot = slot

    # add card to the new slot's pile
    slot.pile.append(self)
```

更新卡片的`top`和`left`位置时，`left`应保持不变，但是`top`将取决于新插槽堆的长度:

```python
    self.top = slot.top + len(slot.pile) * CARD_OFFSET
    self.left = slot.left
```

现在，将卡片片放置在偏移量中，这使我们散发着扇形的堆外观:
<img src="/img/docs/solitaire-tutorial/fanned_piles1.png" className="screenshot-50" />

### 拖拉卡片片

如果您现在尝试从堆的底部拖动卡片片，则看起来像这样:
<img src="/img/docs/solitaire-tutorial/fanned_piles2.gif" className="screenshot-50" />

为了解决此问题，我们需要更新与可拖动卡片一起使用的所有方法，以便与可拖动堆一起使用。

让我们创建`get_draggable_pile()`方法，该方法将返回需要一起拖动的卡片的列表，从您选择的卡片开始:

```python
def get_draggable_pile(self):
    """returns list of cards that will be dragged together, starting with the current card"""
    if self.slot is not None:
        return self.slot.pile[self.slot.pile.index(self):]
    return [self]
```

然后，我们将更新`move_on_top()`方法:

```python
def move_on_top(self):
    """Brings draggable card pile to the top of the stack"""
    for card in draggable_pile:
        self.solitaire.controls.remove(card)
        self.solitaire.controls.append(card)
    self.solitaire.update()
```

此外，我们需要更新`drag()`方法，以遍历可拖动的堆并更新所有被拖动卡片的位置:

```python
def drag(self, e: ft.DragUpdateEvent):
    draggable_pile = self.get_draggable_pile()
    for card in draggable_pile:
        card.top = max(0, self.top + e.delta_y) + draggable_pile.index(card) * CARD_OFFSET
        card.left = max(0, self.left + e.delta_x)
        card.update()
```

另外，我们需要更新`place()`方法，将可拖动堆放在插槽中:

```python
def place(self, slot):
    """Place draggable pile to the slot"""
    draggable_pile = self.get_draggable_pile()

    for card in draggable_pile:
        card.top = slot.top + len(slot.pile) * CARD_OFFSET
        card.left = slot.left

        # remove card from it's original slot, if exists
        if card.slot is not None:
            card.slot.pile.remove(card)

        # change card's slot to a new slot
        card.slot = slot

        # add card to the new slot's pile
        slot.pile.append(card)

    self.solitaire.update()
```

最后，如果找不到近距离的插槽，我们需要将整个堆弹回其原始位置:

```python
def bounce_back(self):
    """Returns draggable pile to its original position"""
    draggable_pile = self.get_draggable_pile()
    for card in draggable_pile:
        card.top = card.slot.top + card.slot.pile.index(card) * CARD_OFFSET
        card.left = card.slot.left
    self.solitaire.update()
```

可以找到此步骤的完整源代码[此处](https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-fanned-piles)。 现在，我们可以将卡片片拖放堆中的堆堆，这意味着我们已经准备好实现真正的交易了！

## Solitaire 设置

让我们看一下有关 Klondike（Solitaire）的[Wikipedia 文章](https://en.wikipedia.org/wiki/Klondike_(solitaire) #rules）:

> klondike 播放了标准的 52 张牌甲板。

> 改组后，从左到右放置了一堆七张扇形纸牌的图片。 从左到右，每个桩都包含比最后一张卡片更多的卡片。 第一和最左的堆包含一张上升的卡片片，第二块包含两张卡片片，第三张堆包含三张卡片片，第四张桩包含四张卡片片，第五张堆包含五张卡片片 第七桩包含七张卡片。 每个堆的最高卡片都被朝上。
> 其余卡片片形成库存，并将其朝向布局左上方。

> 四个基础（图右上方的轻矩形）是由从 Ace（低点中的低）到 King 建立的，可以通过其他颜色来建造 Tableau Pile。

<img src="/img/docs/solitaire-tutorial/game_setup_wiki.png" className="screenshot-40" />

现在，我们将逐步进行此设置。

### 创建卡片片甲板

第一步是在纸牌班上创建完整的卡片片。 每张卡片应具有`suit`属性（心脏，钻石，俱乐部和黑桃）和`rank`属性（从王牌到国王）。
对于这套西装，它的`color`很重要，因为 Tableau Pile 是由其他颜色构建的。

对于等级而言，其`value`很重要，因为基础是从最低（ACE）到最高（国王）等级值的基础。

在 solitaire.py 中，创建`Suite`和`Rank`类:

```python
class Suite:
    def __init__(self, suite_name, suite_color):
        self.name = suite_name
        self.color = suite_color

class Rank:
    def __init__(self, card_name, card_value):
        self.name = card_name
        self.value = card_value
```

现在，在`Card`类中，我们不接受颜色作为参数，而是在`__init__()`中接受`suite`和`rank`。 此外，我们将`face_up`属性添加到卡片中，并且容器现在将具有卡片的背面图像为`content`:

```python
class Card(ft.GestureDetector):
    def __init__(self, solitaire, suite, rank):
        super().__init__()
        self.mouse_cursor=ft.MouseCursor.MOVE
        self.drag_interval=5
        self.on_pan_start=self.start_drag
        self.on_pan_update=self.drag
        self.on_pan_end=self.drop
        self.suite=suite
        self.rank=rank
        self.face_up=False
        self.top=None
        self.left=None
        self.solitaire = solitaire
        self.slot = None
        self.content=ft.Container(
            width=CARD_WIDTH,
            height=CARD_HEIGTH,
            border_radius = ft.border_radius.all(6),
            content=ft.Image(src="card_back.png"))
```

面朝上卡片的所有图像以及卡片背部的所有图像都存储在与 main..py [link go github]同一目录中的“图像”文件夹中。

:::注意
为了引用对要工作的图像文件，我们需要指定文件夹位于 main.py 中的 Assets_dir 中:

```python
ft.app(target=main, assets_dir="images")
```

:::

最后，在`solitaire.create_card_deck()`中，我们将创建套件和排名的列表，然后创建 52 张卡片牌:

```python
def create_card_deck(self):
    suites = [
        Suite("hearts", "RED"),
        Suite("diamonds", "RED"),
        Suite("clubs", "BLACK"),
        Suite("spades", "BLACK"),
    ]
    ranks = [
        Rank("Ace", 1),
        Rank("2", 2),
        Rank("3", 3),
        Rank("4", 4),
        Rank("5", 5),
        Rank("6", 6),
        Rank("7", 7),
        Rank("8", 8),
        Rank("9", 9),
        Rank("10", 10),
        Rank("Jack", 11),
        Rank("Queen", 12),
        Rank("King", 13),
    ]

    self.cards = []

    for suite in suites:
        for rank in ranks:
            self.cards.append(Card(solitaire=self, suite=suite, rank=rank))
```

该卡片甲板已经准备好被交易了，现在我们需要为其创建布局。

### 创建插槽

klondike solitaire 游戏布局应该看起来像这样:

<img src="/img/docs/solitaire-tutorial/solitaire-layout.svg" className="screenshot-80" />

让我们在`solitaire.create_slots()`中创建所有这些插槽:

```python
def create_slots(self):

    self.stock = Slot(top=0, left=0, border=ft.border.all(1))
    self.waste = Slot(top=0, left=100, border=None)

    self.foundations = []
    x = 300
    for i in range(4):
        self.foundations.append(Slot(top=0, left=x, border=ft.border.all(1, "outline")))
        x += 100

    self.tableau = []
    x = 0
    for i in range(7):
        self.tableau.append(Slot(top=150, left=x, border=None))
        x += 100

    self.controls.append(self.stock)
    self.controls.append(self.waste)
    self.controls.extend(self.foundations)
    self.controls.extend(self.tableau)
    self.update()
```

:::注意
注意: 有些插槽应该具有可见的边框，有些则不应该，因此我们将边框添加到创建`Slot`对象的论点列表中。
:::

### 交易卡片

让我们从整理卡片片并将其添加到控件列表中开始:

```python
def deal_cards(self):
    random.shuffle(self.cards)
    self.controls.extend(self.cards)
    self.update()
```

然后，我们将将卡片从左到右交付给 Tableau Pile，以便每个堆包含一张比最后一张卡片更多的卡片，然后将剩余的卡片放在库存堆中:

```python
def deal_cards(self):
    random.shuffle(self.cards)
    self.controls.extend(self.cards)

    # deal to tableau
    first_slot = 0
    remaining_cards = self.cards

    while first_slot < len(self.tableau):
        for slot in self.tableau[first_slot:]:
            top_card = remaining_cards[0]
            top_card.place(slot)
            remaining_cards.remove(top_card)
        first_slot +=1

    # place remaining cards to stock pile
    for card in remaining_cards:
        card.place(self.stock)

    self.update()
```

让我们来运行程序，看看我们现在的位置:
<img src="/img/docs/solitaire-tutorial/game_setup1.png" className="screenshot-40" />

将库存的卡片片放在扇形的堆中，其方式与 Tableau 相同，但应该放置在常规堆中。 要解决此问题，让我们将此条件添加到`card.place()`方法:

```python
def place(self, slot):
    """Place draggable pile to the slot"""
    if slot in self.solitaire.tableau:
        self.top = slot.top + len(slot.pile) * self.solitaire.card_offset
    else:
        self.top = slot.top
    self.left = slot.left
```

现在，卡片片仅放在扇形堆中到 Tableau:
<img src="/img/docs/solitaire-tutorial/game_setup2.png" className="screenshot-40" />

如果您现在尝试移动卡片片，则该程序将无法正常工作。 这样做的原因是，在`card.drop()`中，方法通过我们现在没有的插槽列表迭代。

让我们更新以通过基础和 Tableau 分开进行的方法:

```python
def drop(self, e: ft.DragEndEvent):
    for slot in self.solitaire.tableau:
        if (
            abs(self.top - (slot.top + len(slot.pile) * CARD_OFFSET)) < DROP_PROXIMITY
        and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
            self.place(slot)
            self.update()
            return

    for slot in self.solitaire.foundations:
        if (
            abs(self.top - slot.top) < DROP_PROXIMITY
        and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
            self.place(slot)
            self.update()
            return

    self.bounce_back()
    self.update()
```

### 在 Tableau Pite 中揭示顶级卡片片

现在，我们有了正确的游戏设置，作为最后的触摸，我们需要在 Tableau Pile 中揭示最上方的卡片片。

在`Slot`类中，创建一个`get_top_card()`方法:

```python
def get_top_card(self):
    if len(self.pile) > 0:
        return self.pile[-1]
```

在`Card`类中，创建`turn_dace_up()`方法:

```python
def turn_face_up(self):
    self.face_up = True
    self.content.content.src=f"/images/{self.rank.name}_{self.suite.name}.svg"
    self.update()
```

最后，在`solitaire.deal_cards()`中显示最上方的卡片:

```python
for slot in self.tableau:
    slot.get_top_card().turn_face_up()
    self.update()
```

让我们看看现在的外观:
<img src="/img/docs/solitaire-tutorial/game_setup3.png" className="screenshot-50" />

可以找到此步骤的完整源代码[此处](https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-game-setup)。

恭喜您完成了 Solitaire 游戏设置！ 您已经创建了一个完整的 52 张牌甲板，其中包括库存，废物，地基和塔图桩的布局，并在 Tableau 中透露了顶级卡片片。 让我们继续进入我们的待办事项列表上的下一个项目，即单人规则。

## solitaire 规则

如果您运行当前版本的 Solitaire，您会注意到您可以用卡片片做一些疯狂的事情:
<img src="/img/docs/solitaire-tutorial/game_rules1.gif" className="screenshot-50" />

现在是时候实施一些规则了。

### 一般规则

目前，我们可以移动任何卡片片，但只能移动面对面的卡片。 让我们在`start_drag`，`drag`和`drop`卡片的方法中添加此检查:

```python
def start_drag(self, e: ft.DragStartEvent):
    if self.face_up:
        self.move_on_top()
        self.update()

def drag(self, e: ft.DragUpdateEvent):
    if self.face_up:
        draggable_pile = self.get_draggable_pile()
        for card in draggable_pile:
            card.top = max(0, self.top + e.delta_y) + draggable_pile.index(card) * CARD_OFFSET
            card.left = max(0, self.left + e.delta_x)
            card.update()

def drop(self, e: ft.DragEndEvent):
    if self.face_up:
        for slot in self.solitaire.tableau:
            if (
                abs(self.top - (slot.top + len(slot.pile) * CARD_OFFSET)) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
                self.place(slot)
                self.update()
                return

        for slot in self.solitaire.foundations:
            if (
                    abs(self.top - slot.top) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
                self.place(slot)
                self.update()
                return

    self.bounce_back()
    self.update()
```

现在，让我们指定卡片的`click`方法`on_tap`事件，如果您单击 Tableau Pile 中的脸部倒入顶部卡片，则可以显示该卡片:

```python
def click(self, e):
    if self.slot in self.solitaire.tableau:
        if not self.face_up and self == self.slot.get_top_card():
            self.turn_face_up()
            self.update()
```

让我们检查一下它的工作方式:
<img src="/img/docs/solitaire-tutorial/game_rules2.gif" className="screenshot-50" />

### 基础规则

目前，我们可以将扇形的堆放在基础上，不允许这样做。 让我们检查可拖动的桩长以修复它:

```python
def drop(self, e: ft.DragEndEvent):
    for slot in self.solitaire.tableau:
        if (
            abs(self.top - (slot.top + len(slot.pile) * CARD_OFFSET)) < DROP_PROXIMITY
        and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
            self.place(slot)
            self.update()
            return

    if len(self.get_draggable_pile()) == 1:
        for slot in self.solitaire.foundations:
            if (
                abs(self.top - slot.top) < DROP_PROXIMITY
        and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
                self.place(slot)
                self.update()
                return

    self.bounce_back()
    self.update()
```

然后，当然，没有任何卡片都可以放在基础上。 根据规则，基金会应从 ACE 开始，然后可以将同一套房的卡片放在其顶部，以建立向 King 建立 Ace Ace。

让我们将此规则添加到纸牌课上:

```python
def check_foundations_rules(self, card, slot):
    top_card = slot.get_top_card()
    if top_card is not None:
        return (
            card.suite.name == top_card.suite.name
            and card.rank.value - top_card.rank.value == 1
        )
    else:
        return card.rank.name == "Ace"
```

在将卡片放置到基础插槽之前，我们将在`drop()`方法中检查此规则:

```python
def drop(self, e: ft.DragEndEvent):
    if self.face_up:
        for slot in self.solitaire.tableau:
            if (
                abs(self.top - (slot.top + len(slot.pile) * CARD_OFFSET)) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ):
                self.place(slot)
                self.update()
                return

        if len(self.get_draggable_pile()) == 1:
            for slot in self.solitaire.foundations:
                if (
                    abs(self.top - slot.top) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ) and self.solitaire.check_foundations_rules(self, slot):
                    self.place(slot)
                    self.update()
                    return

        self.bounce_back()
        self.update()
```

作为基础规则的最终触摸，让我们实现`doublclick`的方法`on_double_tap`卡片的事件。 它将检查面对的卡片是否适合任何基础并将其放在那里:

```python
   def doubleclick(self, e):
       if self.face_up:
           self.move_on_top()
           for slot in self.solitaire.foundations:
               if self.solitaire.check_foundations_rules(self, slot):
                   self.place(slot)
                   self.page.update()
                   return
```

### tableau 规则

最后，让我们实施规则以建立 Tableau 通过交替的套件颜色从国王到王牌堆积。 此外，只能将国王放在一个空的图表上。
让我们添加这些针对纸牌课的规则:

```python
def check_tableau_rules(self, card, slot):
    top_card = slot.get_top_card()
    if top_card is not None:
        return (
            card.suite.color != top_card.suite.color
            and top_card.rank.value - card.rank.value == 1
            and top_card.face_up
        )
    else:
        return card.rank.name == "King"
```

与基金会规则类似，我们将在将卡片放置到 Tableau 堆之前检查 Tableau 规则:

```python
def drop(self, e: ft.DragEndEvent):
    if self.face_up:
        for slot in self.solitaire.tableau:
            if (
                abs(self.top - (slot.top + len(slot.pile) * CARD_OFFSET)) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ) and self.solitaire.check_tableau_rules(self, slot):
                self.place(slot)
                self.update()
                return

        if len(self.get_draggable_pile()) == 1:
            for slot in self.solitaire.foundations:
                if (
                    abs(self.top - slot.top) < DROP_PROXIMITY
            and abs(self.left - slot.left) < DROP_PROXIMITY
        ) and self.solitaire.check_foundations_rules(self, slot):
                    self.place(slot)
                    self.update()
                    return

        self.bounce_back()
        self.update()
```

### 库存和废物

为了正确地玩纸牌游戏，我们缺少库存中堆积的剩余卡片片。

让我们更新卡片的`click()`方法，以通过库存堆，将卡片片放在我们的出发时浪费:

```python
def click(self, e):
    if self.slot in self.solitaire.tableau:
        if not self.face_up and self == self.slot.get_top_card():
            self.turn_face_up()
            self.update()
    elif self.slot == self.solitaire.stock:
        self.move_on_top()
        self.place(self.solitaire.waste)
        self.turn_face_up()
        self.solitaire.update()
```

就是这样！ 现在，您可以正确地玩纸牌，但是如果您不能再次通过浪费，很难赢得比赛。 让我们实现`click()` `on_click`库存插槽的事件，以便再次考虑库存堆:

```python
class Slot(ft.Container):
   def __init__(self, solitaire, top, left, border):
       super().__init__()
       self.pile=[]
       self.width=SLOT_WIDTH
       self.height=SLOT_HEIGHT
       self.left=left
       self.top=top
       self.on_click=self.click
       self.solitaire=solitaire
       self.border=border
       self.border_radius = ft.border_radius.all(6)

   def click(self, e):
       if self == self.solitaire.stock:
           self.solitaire.restart_stock()
```

`restart_stock()` `Solitaire`类中的方法将再次将所有卡片片放置在废物中:

```python
def restart_stock(self):
    while len(self.waste.pile) > 0:
        card = self.waste.get_top_card()
        card.turn_face_down()
        card.move_on_top()
        card.place(self.stock)
    self.update
```

对于`card.place()`的方法，可以与库存和废物的卡片正确配合使用，我们将条件添加到`card.get_draggable_pile()`，以便它仅返回顶部卡片，而不是整个堆:

```python
def get_draggable_pile(self):
    """returns list of cards that will be dragged together, starting with the current card"""
    if self.slot is not None and self.slot != self.solitaire.stock and self.slot != self.solitaire.waste:
        return self.slot.pile[self.slot.pile.index(self):]
    return [self]
```

全做完了！ 可以找到此步骤的完整源代码[此处](https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-game-rules)。

让我们继续进行游戏本身的最后一步 - 检测您赢得的情况。

## 赢得游戏

根据[Wikipedia](https://en.wikipedia.org/wiki/Klondike_(solitaire) #probability_of_winning），有些人暗示赢得比赛的机会为 30 场比赛中的 1 场。

知道获胜的机会很低，我们应该计划向用户向用户展示一些令人兴奋的事情。

首先，让我们将获胜条件的检查添加到`Solitaire`类中。 如果所有四个基础总共包含 52 张卡片，那么您将赢:

```python
def check_win(self):
    cards_num = 0
    for slot in self.foundations:
        cards_num += len(slot.pile)
    if cards_num == 52:
        return True
    return False
```

每当将卡片放置在基础上时，我们将检查这种情况是否为真:

```python
def place(self, slot):
    """Place draggable pile to the slot"""

    draggable_pile = self.get_draggable_pile()

    for card in draggable_pile:
        if slot in self.solitaire.tableau:
            card.top = slot.top + len(slot.pile) * CARD_OFFSET
        else:
            card.top = slot.top
        card.left = slot.left

        # remove card from it's original slot, if exists
        if card.slot is not None:
            card.slot.pile.remove(card)

        # change card's slot to a new slot
        card.slot = slot

        # add card to the new slot's pile
        slot.pile.append(card)

    if self.solitaire.check_win():
        self.solitaire.winning_sequence()

    self.solitaire.update()
```

最后，如果满足获胜条件，它将触发涉及[位置动画](https://flet.dev/docs/guides/python/animations#position-animation)的获胜序列:

```python
def winning_sequence(self):
    for slot in self.foundations:
        for card in slot.pile:
            card.animate_position=1000
            card.move_on_top()
            card.top = random.randint(0, SOLITAIRE_HEIGHT)
            card.left = random.randint(0, SOLITAIRE_WIDTH)
            self.update()
    self.controls.append(ft.AlertDialog(title=ft.Text("Congratulations! You won!"), open=True))
```

您可以想象，我花了一段时间才赢得游戏并拍摄此视频，但是这里是:
<img src="/img/docs/solitaire-tutorial/winning_the_game.gif" className="screenshot-50" />

哇！ 我们做到了。 您可以找到 Solitaire Game [此处](https://github.com/flet-dev/examples/tree/main/python/tutorials/solitaire/solitaire-final-part1)的第 1 部分的完整源代码。

在第 2 部分中，我们将添加带有选项的顶部菜单，以重新启动游戏，查看游戏规则并更改游戏设置，例如废物尺寸，通过废物和卡片片映像的通行数。

现在，由于我们有一个不错的桌面版本，让我们将其部署为网络应用程序以与您的朋友和同事共享。

## 部署该应用程序

恭喜！ 您已经用 Flet 在 Python 中创建了 Solitaire Game 应用程序，看起来很棒！

现在是时候与世界共享您的应用程序了！

[遵循以下说明](/docs/guides/python/deploying-web-app)将您的 Flet 应用程序部署为 web 应用程序，以 Fly.io 或 replesit。

## summary

在本教程中，您已经学会了如何:

- 创建一个简单的 Flet app;
- 用手势拖放卡片片拖放卡片；
- 创建自己的类，该类从 Flet 控件继承；
- 使用堆栈中控件的绝对定位设计 UI 布局；
- 实施隐式动画；
- 将您的 Flet 应用程序部署到 Web；

为了进一步阅读，您可以探索[控件](/docs/controls)和[示例存储库](https://github.com/flet-dev/examples/tree/main/python)。

我们很乐意倾听您的反馈！ 请给我们放置一个[电子邮件](mailto:hello@flet.dev)，加入[Discord](https://discord.gg/dzWXP8SHG8)的讨论，请在[Twitter](https://twitter.com/fletdev)上关注。
