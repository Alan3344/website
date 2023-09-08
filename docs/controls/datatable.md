---
title: DataTable
sidebar_label: DataTable
slug: datatable
---

材料设计数据表。

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/layout/datatable)

### 一个简单的数据表

<img src="/website/img/docs/controls/datatable/datatable-minimal.png" className="screenshot-50"/>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.DataTable(
            columns=[
                ft.DataColumn(ft.Text("First name")),
                ft.DataColumn(ft.Text("Last name")),
                ft.DataColumn(ft.Text("Age"), numeric=True),
            ],
            rows=[
                ft.DataRow(
                    cells=[
                        ft.DataCell(ft.Text("John")),
                        ft.DataCell(ft.Text("Smith")),
                        ft.DataCell(ft.Text("43")),
                    ],
                ),
                ft.DataRow(
                    cells=[
                        ft.DataCell(ft.Text("Jack")),
                        ft.DataCell(ft.Text("Brown")),
                        ft.DataCell(ft.Text("19")),
                    ],
                ),
                ft.DataRow(
                    cells=[
                        ft.DataCell(ft.Text("Alice")),
                        ft.DataCell(ft.Text("Wong")),
                        ft.DataCell(ft.Text("25")),
                    ],
                ),
            ],
        ),
    )

ft.app(target=main)
```

### 样式的数据表

<img src="/website/img/docs/controls/datatable/datatable-styled.png" className="screenshot-70"/>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.DataTable(
            width=700,
            bgcolor="yellow",
            border=ft.border.all(2, "red"),
            border_radius=10,
            vertical_lines=ft.border.BorderSide(3, "blue"),
            horizontal_lines=ft.border.BorderSide(1, "green"),
            sort_column_index=0,
            sort_ascending=True,
            heading_row_color=ft.colors.BLACK12,
            heading_row_height=100,
            data_row_color={"hovered": "0x30FF0000"},
            show_checkbox_column=True,
            divider_thickness=0,
            column_spacing=200,
            columns=[
                ft.DataColumn(
                    ft.Text("Column 1"),
                    on_sort=lambda e: print(f"{e.column_index}, {e.ascending}"),
                ),
                ft.DataColumn(
                    ft.Text("Column 2"),
                    tooltip="This is a second column",
                    numeric=True,
                    on_sort=lambda e: print(f"{e.column_index}, {e.ascending}"),
                ),
            ],
            rows=[
                ft.DataRow(
                    [ft.DataCell(ft.Text("A")), ft.DataCell(ft.Text("1"))],
                    selected=True,
                    on_select_changed=lambda e: print(f"row select changed: {e.data}"),
                ),
                ft.DataRow([ft.DataCell(ft.Text("B")), ft.DataCell(ft.Text("2"))]),
            ],
        ),
    )

ft.app(target=main)
```

## `DataTable` properties

### `bgcolor`

表的背景[颜色](/docs/guides/python/colors)。

### `border`

桌子周围的边界。 `ft.Border`类的实例。

有关更多信息和示例，请参见[`Container.border`](/docs/controls/container#border)属性。

### `border_radius`

边界角。

有关更多信息和示例，请参见[`Container.border`](/docs/controls/container#border)属性。

### `checkbox_horizontal_margin`

如果显示了该复选框的水平边距。

### `column_spacing`

每个数据列的内容之间的水平边缘。

### `columns`

[`DataColumn`](#datacolumn)控制表列的列表。

### `data_row_color`

数据行的背景[颜色](/docs/guides/python/colors)。

可以使有效的背景颜色依赖于`MaterialState`状态，即，如果选择了，按下，按下，悬停，集中，禁用，禁用或启用该行。 颜色被描绘成排行榜的覆盖层。 为了确保可见行的墨水井（按下时，悬停并集中注意力），建议使用透明的背景颜色。

有关更多信息和示例，请参见[`Checkbox.fill_color`](/docs/controls/checkbox#fill_color)属性。

### {288814}

每行的最小高度（不包括包含列标题的行）。

### `data_row_max_height`

每行的最大高度（不包括包含列标题的行）。

### `data_text_style`

数据行的文本样式。 [`ft.TextStyle`](text#textstyle-properties) class。

### `divider_thickness`的实例

`TableRow` s 之间出现的分隔线的宽度。

必须大于或等于零。 此值默认为 1.0。

### `gradient`

表的背景梯度。

有关更多信息和示例，请参见[`Container.gradient`](/docs/controls/container#gradient)属性。

### {288822}

标题行的背景[颜色](/docs/guides/python/colors)。

可以使有效的背景颜色取决于`MaterialState`状态，即，在排序时按下行，悬停，聚焦。 颜色被描绘成排行榜的覆盖层。 为了确保可见行的墨水井（按下时，悬停并集中注意力），建议使用半透明的颜色。

有关更多信息和示例，请参见[`Checkbox.fill_color`](/docs/controls/checkbox#fill_color)属性。

### `heading_row_height`

标题行的高度。

### `heading_text_style`

标题行的文字样式。 [`ft.TextStyle`](text#textstyle-properties) class。

### `horizontal_lines`的实例

设置[颜色](/docs/guides/python/colors)和行之间的水平线宽度。 `ft.BorderSide`类的实例。

### `horizontal_margin`

表的边缘和每行的第一个和最后一个单元格中的内容之间的水平边缘。

显示复选框时，它也是第一个数据列中的内容之间的余量。

### {288331}

[`DataRow`](#datarow)控制表行的列表。

### `show_bottom_border`

是否显示桌子底部的边框。

默认情况下，底部未显示边框，以允许由装饰定义的表周围的边框。

### `show_checkbox_column`

控件是否应显示可选行的复选框。

如果`True`，则将`Checkbox`放置在可选的每行的开头。 但是，如果未为任何行设置`DataRow.on_select_changed`，即使此值为`True`，也不会放置复选框。

如果`False`，所有行都不会显示`Checkbox`。

### `sort_ascending`

`sort_column_index`中提到的列是否以升序排序。

如果`True`，则订单正在上升（这意味着当前排序列的最小值的行首先在表中）。

如果`False`，则订单正在下降（这意味着当前排序列的最小值的行在表中。

### `sort_column_index`

当前的主排序键的列。

如果指定，则指示指示的列是对数据进行排序的列。 该数字必须对应于`columns`中相关列的索引。

设置这将导致相关列显示一个排序指示器。

当这是`None`时，这意味着表的排序顺序与任何一列都不对应。

### `vertical_lines`

设置列之间的[颜色](/docs/guides/python/colors)和垂直线的宽度。 `ft.BorderSide`类的实例。

## `DataTable`事件

### `on_select_all`

使用标题行中的复选框选择或取消选择每一行时调用。

如果这是`None`，则适当调用表中每个行的`DataRow.on_select_changed`回调。

要控制特定行是否可选，请参见`DataRow.on_select_changed`。 此回调仅在可选的任何行时才相关。

## `DataColumn`

`DataTable`的列配置。

必须为每列提供一个列配置以在表中显示。

### `label`

列标题。

通常，这将是`Text`控件。 它也可能是`Icon`（通常使用尺寸 18），或带有图标和一些文本的`Row`。

### `numeric`

该列是否代表数字数据。

### `tooltip`

列标题的工具提示。

这是对列标题的更长描述，对于标题可能
当用户要求使用此列对表进行排序时。

如果未设置，则该列将不可分类。

## `DataRow`

数据表的行配置和单元格数据。

必须为每行提供一个行配置，以在表中显示。

表的这一行数据在`cells`属性`DataRow`对象的属性中提供。

### `cells`

此行的数据 - [`DataCell`](#datacell)控件的列表。

表格必须与表中的列一样多。

### `color`

该行的[颜色](/docs/guides/python/colors)。

默认情况下，除非选择，否则颜色是透明的。 选定的行具有灰色半透明的颜色。

有效的颜色可以取决于`MaterialState`状态，如果选择该行，按下，悬停，集中，残障或启用行。 颜色被描绘成排行榜的覆盖层。 为了确保可见行的墨水井（按下时，悬停并集中注意力），建议使用半透明的颜色。

有关更多信息和示例，请参见[`Checkbox.fill_color`](/docs/controls/checkbox#fill_color)属性。

### `selected`

是否选择了行。

如果`on_select_changed`对于表中的任何一行都是不为空的，则在每行开始时显示一个复选框。 如果选择该行（`True`），则将检查复选框，并突出显示该行。

否则，将不会检查复选框。

## `DataRow`事件

### `on_long_press`

如果行是长期压力的，请调用。

如果该行中的`DataCell`的`DataCell.on_tap`，`DataCell.on_double_tap`，`DataCell.on_long_press`，`DataCell.on_tap_cancel`或`DataCell.on_tap_cancel`或`DataCell.on_tap_down`定义的回调，该回调行为超出了该特定单元格的行为。

###

### 。 `on_select_changed`

当用户选择或取消选择可选行时，请致电。

如果这不是零，则可以选择该行。 该行的当前选择状态由选定给出。

如果可以选择任何行，则表的标题行将具有一个可以检查的复选框，可以选择所有可选行（如果选择了所有行（如果选择了所有行）），并且每个后续行都将具有一个复选框，以切换该行 。

为了确定“所有”复选框的状态，`on_select_changed`回调被忽略为 null 的行被忽略，并且其复选框被禁用。

如果该行中的`DataCell`的`DataCell.on_tap`定义了`DataCell.on_tap`，则回调行为覆盖了该特定单元格的行的手势行为。

## `DataCell`

`DataTable`单元格的数据。

必须在`DataTable`中为每个`DataRow`提供数据量对象列表。

### {288892}

行的数据。

通常是`Text`控制或`Dropdown`控制。

如果单元格没有数据，则应提供带有占位符文本的`Text`小部件，并且应将`placeholder`设置为`True`。

此控件只能有一个 child。 要布置多个 children，请让此控件的 child 成为一个小部件，例如`Row`，`Column`或`Stack`，它们具有`controls`属性，然后为该窗口提供 children。

### `placeholder`

child 实际上是占位符。

如果是`True`，则将单元格的默认文本样式更改为适合占位符文本。

### {2888104}

是否在单元格的末端显示编辑图标。

这并不能使细胞实际上可以编辑； 如果需要，呼叫者必须实现编辑行为（从`on_tap`回调开始）。

如果设置了此设置，则还应设置`on_tap`，否则点击图标将没有效果。

## `DataCell` events

### {2888108}

当单元重敲打时调用。

如果非无效，请点击单元格会调用此回调。 如果 null（包括`on_tap`，`on_long_press`，`on_tap_cancel`和{2888112}），则点击该单元格将尝试选择该行（如果提供`DataRow.on_select_changed`）。

### `on_long_press` `on_long_press` `on_long_press`

如果单元格长期被调用。

如果非编号，点击单元将调用此回调。 如果 null（包括`on_double_tap`，`on_tap`，`on_tap_cancel`和{2888112}），则点击该单元格将尝试选择该行（如果提供`DataRow.on_select_changed`）。

### {2888105} {2888105}

如果细胞被轻拍，请调用。

如果非无效，请点击单元格会调用此回调。 如果 null（包括`on_double_tap`，`on_long_press`，`on_tap_cancel`和{2888112}），则敲击单元格将尝试选择行（如果提供`DataRow.on_select_changed`）。

### {2888111} {2888111}}

如果用户取消了单元，请在单元格上启动点击。

如果非无效，则取消水龙头手势将调用此回调。 如果 null（包括`on_tap`，`on_double_tap`，`on_long_press`），则敲击单元格将尝试选择该行（如果提供`DataRow.on_select_changed`）。

### {2888112}

如果单元格被敲击，请调用。

如果非无效，请点击单元格会调用此回调。 如果 null（包括`on_tap` `on_double_tap`，`on_long_press`和{2888111}），则敲击单元格将尝试选择该行（如果提供`DataRow.on_select_changed`）。
