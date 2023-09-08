---
title: FilePicker
sidebar_label: FilePicker
slug: filepicker
---

一个控件，该控件允许您使用本机文件资源管理器选择单个或多个文件，并具有扩展程序过滤支持和上传。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 示例

[live 示例](https://flet-controls-gallery.fly.dev/utility/filepicker)

### 选择多个文件

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def pick_files_result(e: ft.FilePickerResultEvent):
        selected_files.value = (
            ", ".join(map(lambda f: f.name, e.files)) if e.files else "Cancelled!"
        )
        selected_files.update()

    pick_files_dialog = ft.FilePicker(on_result=pick_files_result)
    selected_files = ft.Text()

    page.overlay.append(pick_files_dialog)

    page.add(
        ft.Row(
            [
                ft.ElevatedButton(
                    "Pick files",
                    icon=ft.icons.UPLOAD_FILE,
                    on_click=lambda _: pick_files_dialog.pick_files(
                        allow_multiple=True
                    ),
                ),
                selected_files,
            ]
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

### 所有对话模式

<img src="/website/img/docs/controls/file-picker/file-picker-all-modes-demo.png" className="screenshot-70" />

[源代码](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-all-modes.py)

### 上传多个文件

<img src="/website/img/docs/controls/file-picker/file-picker-multiple-uploads.png" className="screenshot-40" />

[源代码](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-upload-progress.py)

## properties

### `allowed_extensions`

允许仅使用指定的扩展名选择文件。

该属性的价值是字符串列表，例如 `["pdf", "svg", "jpg"]`。

### `allow_multiple`

允许选择多个文件。

### `dialog_title`

可以选择在桌面平台上设置以设置模式窗口标题。 它将在其他平台上忽略。

### `file_name`

仅用于“保存文件”对话框。 可以设置为非空字符串以提供默认文件名。

### `file_type`

允许选择特定组的文件。

属性值是`FilePickerFileType`枚举，具有以下值:

- `ANY`（默认） - 任何文件
- `IMAGE`
- `VIDEO`
- `MEDIA` - `VIDEO`和`IMAGE`
- `AUDIO`
- `CUSTOM` - 仅来自`allowed_extensions` list

### `initial_directory`的扩展名的文件

可以选择将其设置为绝对路径，以指定对话框应打开的位置。 仅在 Linux，MacOS 和 Windows 上支持。

### `result`

对话框关闭时，将设置结果。

该属性的值是`FilePickerResultEvent`类的实例:

- `path` - “保存文件”或“ get Directory Path”对话框的结果: 所选的文件路径或目录路径。 `None`如果取消对话框。
- `files`“选择文件”对话框的结果: `FilePickerFile`类实例的列表。 `None`如果取消对话框。

`FilePickerFile`类属性:

- `name` - 没有路径的文件名。
- `path` - 文件的完整路径。 仅适用于桌面和移动设备。 `None`在 Web 上。
- `size` - 字节中的文件大小。

## 方法

### `get_directory_path()`

选择一个目录并返回其绝对路径。

您可以设置以下文件拾取器属性或在方法调用中提供其值:

- `dialog_title`
- `initial_directory`

### `pick_files()`

从基础平台检索文件。

您可以设置以下文件拾取器属性或在方法调用中提供其值:

- `dialog_title`
- `initial_directory`
- `file_type`
- `allowed_extensions`
- `allow_multiple`

### `save_file()`

打开一个保存文件对话框，该对话框让用户可以选择一个文件路径和一个文件名来保存文件。

此功能实际上并未保存文件。 它仅打开对话框，让用户选择位置和文件名。 此功能仅返回`FilePicker.result.path`属性中的此（不存在的）文件的路径。

此方法仅在桌面平台（Linux，MacOS 和 Windows）上可用。

您可以设置以下文件拾取器属性或在方法调用中提供其值:

- `dialog_title`
- `file_name`
- `initial_directory`
- `file_type`
- `allowed_extensions`

### `upload()`

将选定的文件上传到指定的上传 URL。

在调用上载[`pick_files()`](#pick_files)之前，必须调用内部文件选择器选择不是空的。

方法参数:

- `files` - `FilePickerUploadFile`类实例的列表。

每个列表项目指定应使用`PUT`（默认）或`POST`方法上传到上传 URL 的文件。

- `name`
- `upload_url`
- `method`（`PUT`（默认），`POST`）

`upload_url`通常是一个预先的 URL（例如[AWS S3 对象上传 URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html)）。

对于内置的上传存储，可以使用以下调用来生成已签名的上传 URL:

```python
upload_url = page.get_upload_url("dir/filename.ext", 60)
```

第一个参数是与上传存储路径相对的。
第二个论点是在几秒钟内使用的 URL 时间。

要启用内置的上传存储，将`upload_dir`的参数提供给`flet.app()`调用:

```python
ft.app(target=main, upload_dir="uploads")
```

## 事件

### `on_result`

关闭文件选择器对话框时发射。

事件对象是`FilePickerResultEvent`类的实例。 有关类属性，请参见[`FilePicker.result`](#result)。

### `on_upload`

当文件上传进度更新时，启动。

事件对象是`FilePickerUploadEvent`类的实例:

- `file_name`
- `progress` - 一个从`0.0`到`1.0`的值。
- `error`
