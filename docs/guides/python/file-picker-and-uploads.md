---
title: File picker and uploads
sidebar_label: File picker and uploads
---

[文件拾取器](/docs/controls/filepicker)控件打开用于选择文件和目录的本机 OS 对话框。

它在所有平台上都可以使用: Web，MacOS，Window，Linux，iOS 和 Android。

<img src="/img/docs/controls/file-picker/file-picker-all-modes-demo.png" className="screenshot-80" />

查看[上面演示的源代码](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-all-modes.py)。

文件选择器允许打开三个对话框:

- **选择文件** - 一个或多个，任何文件或特定类型。
- **保存文件** - 选择目录和文件名。
- **获取目录** - 选择目录。

在仅在浏览器中运行 Flet 应用程序时，只需使用“选择文件”选项，并且它仅用于上传，显然，它不会返回到所选文件的完整路径。

拿到文件的地方是台式机！ 所有三个对话框都将完整的路径返回到选定的文件和目录 - 对您的用户提供了很好的帮助！

## 使用您的应用中的文件选择器

建议将文件选择器添加到[`page.overlay.controls`](/docs/controls/page#overlay)集合中，以免影响应用程序的布局。 尽管文件选择器具有 0x0 大小，但当将其视为`Row`或`Column`时仍被视为控制。

```python
import flet as ft

file_picker = ft.FilePicker()
page.overlay.append(file_picker)
page.update()
```

打开文件选择器对话框调用三种方法之一:

- `pick_files()`
- `save_file()`
- `get_directory_path()`

Lambda 为此做得很好:

```python
ft.ElevatedButton("Choose files...",
    on_click=lambda _: file_picker.pick_files(allow_multiple=True))
```

当对话框关闭时`FilePicker.on_result`事件处理程序被调用哪个事件对象具有以下属性集之一:

- `files` - 仅“选择文件”对话框，如果取消对话框，则选择了选定文件列表或`None`的列表。
- `path` - “保存文件”和“获取目录”对话框，如果取消对话框，则通往文件或目录的完整路径或`None`。

```python
import flet as ft

def on_dialog_result(e: ft.FilePickerResultEvent):
    print("Selected files:", e.files)
    print("Selected file or directory:", e.path)

file_picker = ft.FilePicker(on_result=on_dialog_result)
```

最后一个结果始终在`FilePicker.result`属性中可用。

检查[文件选择器](/docs/controls/filepicker)控制文档，以获取所有可用的对话框方法及其参数。

## 上传文件

File Picker 具有内置的上传功能，可在所有平台和 Web 上使用。

要上传一个或多个文件，您应该首先调用`FilePicker.pick_files()`。
当用户选择文件时，它们不会自动将其上传到任何地方，而是将其引用保存在文件拾取器状态中。

要执行实际的上传，您应该调用`FilePicker.upload()`方法，然后传递需要上传的文件列表以及其上传 URL 和上传方法（`PUT`或`POST`）:

```python
import flet as ft

def upload_files(e):
    upload_list = []
    if file_picker.result != None and file_picker.result.files != None:
        for f in file_picker.result.files:
            upload_list.append(
                FilePickerUploadFile(
                    f.name,
                    upload_url=page.get_upload_url(f.name, 600),
                )
            )
        file_picker.upload(upload_list)

ft.ElevatedButton("Upload", on_click=upload_files)
```

:::注意
如果您需要为每个用户分开上传，则可以指定一个文件名，例如`page.get_upload_url()`中的任何数量的目录，例如:

```python
upload_url = page.get_upload_url(f"/{username}/pictures/{f.name}", 600)
```

`/{username}/pictures`目录将在`upload_dir`内部自动创建。
:::

### 上传存储

请注意`page.get_upload_url()`方法的用法 - 它为 Flet 的内部上传存储生成了预先的上传 URL。

:::注意使用任何存储用于文件上传
您可以使用 BOTO3 库[生成预设上传 URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html#generating-a-presigned-url-to-upload-a-file)用于 AWS S3 存储。

相同的技术应适用于[Wasabi](https://wasabi.com/)，[Backblaze](https://www.backblaze.com/)，[Minio](https://min.io/)以及任何其他具有 S3 兼容 API 的存储提供商。
:::

要启用 Flet 将上传的文件保存到目录中，在`flet.app()`中提供了该目录的完整或相对路径:

```python
ft.app(target=main, upload_dir="uploads")
```

您甚至可以在“资产”目录中放置上传，因此上传文件，例如 可以立即从 Flet 客户端访问图片，文档或其他媒体:

```python
ft.app(target=main, assets_dir="assets", upload_dir="assets/uploads")
```

在应用程序中的某个地方，您可以显示上传的图片:

```python
page.add(ft.Image(src="/uploads/<some-uploaded-picture.png>"))
```

### 上传进度

一旦`FilePicker.upload()`方法称为 Flet client 异步启动一个逐一上传，并通过`FilePicker.on_upload`回调报告进度。

`on_upload`事件的事件对象是带有以下字段的`FilePickerUploadEvent`类的实例:

- `file_name`
- `progress` - 一个从`0.0`到`1.0`的值。
- `error`

每个上载文件至少调用两次回调: 在上传开始之前`0`进度，并在上传完成后使用`1.0`进行进度。 对于大于 1 MB 的文件，每 10％上传每 10％也会报告进度。

检查[示例](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-upload-progress.py)演示多个文件上传:

<img src="/img/docs/controls/file-picker/file-picker-multiple-uploads.png" className="screenshot-40" />

有关其所有属性和示例，请参见[File Picker](/docs/controls/filepicker)控制文档。
