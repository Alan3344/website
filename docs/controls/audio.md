---
title: Audio
sidebar_label: Audio
slug: audio
---

同时播放多个音频文件的控件。 在MACOS，Linux，Windows，iOS，Android和Web上使用。
基于[Audioplayers](https://pub.dev/packages/audioplayers) flutter小部件。

音频控制是非视觉的，应添加到`page.overlay`列表中。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

## 示例

### 自动播放音频

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

:::note
Autoplay works in desktop, mobile apps and Safari browser, but doesn't work in Chrome/Edge.
:::

```python
import flet as ft

def main(page: ft.Page):
    audio1 = ft.Audio(
        src="https://luan.xyz/files/audio/ambient_c_motion.mp3", autoplay=True
    )
    page.overlay.append(audio1)
    page.add(
        ft.Text("This is an app with background audio."),
        ft.ElevatedButton("Stop playing", on_click=lambda _: audio1.pause()),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs> 

### 带有播放控件的音频

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

url = "https://github.com/mdn/webaudio-examples/blob/main/audio-analyser/viper.mp3?raw=true"

def main(page: ft.Page):
    def volume_down(_):
        audio1.volume -= 0.1
        audio1.update()

    def volume_up(_):
        audio1.volume += 0.1
        audio1.update()

    def balance_left(_):
        audio1.balance -= 0.1
        audio1.update()

    def balance_right(_):
        audio1.balance += 0.1
        audio1.update()

    audio1 = ft.Audio(
        src=url,
        autoplay=False,
        volume=1,
        balance=0,
        on_loaded=lambda _: print("Loaded"),
        on_duration_changed=lambda e: print("Duration changed:", e.data),
        on_position_changed=lambda e: print("Position changed:", e.data),
        on_state_changed=lambda e: print("State changed:", e.data),
        on_seek_complete=lambda _: print("Seek complete"),
    )
    page.overlay.append(audio1)
    page.add(
        ft.ElevatedButton("Play", on_click=lambda _: audio1.play()),
        ft.ElevatedButton("Pause", on_click=lambda _: audio1.pause()),
        ft.ElevatedButton("Resume", on_click=lambda _: audio1.resume()),
        ft.ElevatedButton("Release", on_click=lambda _: audio1.release()),
        ft.ElevatedButton("Seek 2s", on_click=lambda _: audio1.seek(2000)),
        ft.Row(
            [
                ft.ElevatedButton("Volume down", on_click=volume_down),
                ft.ElevatedButton("Volume up", on_click=volume_up),
            ]
        ),
        ft.Row(
            [
                ft.ElevatedButton("Balance left", on_click=balance_left),
                ft.ElevatedButton("Balance right", on_click=balance_right),
            ]
        ),
        ft.ElevatedButton(
            "Get duration", on_click=lambda _: print("Duration:", audio1.get_duration())
        ),
        ft.ElevatedButton(
            "Get current position",
            on_click=lambda _: print("Current position:", audio1.get_current_position()),
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs> 

##  properties 

###  `autoplay`

在将音频控件添加到页面中，就开始播放音频。

:::注意
AutoPlay在台式机，移动应用程序和Safari浏览器中工作，但在Chrome/Edge中不起作用。
:::

###  `balance`

设置立体声平衡。

-1-左通道已完整卷； 正确的渠道是无声的。 1-正确的频道已全部； 左通道是无声的。 0-两个通道都处于相同的音量。

:::注意
仅在Windows和Linux上支持设置平衡。
:::

###  `get_current_position()`

返回毫秒中的当前位置。

###  `get_duration()`

返回毫秒中的音频持续时间。

###  `playback_rate`

设置播放率。 iOS和MACO的限制在0.5至2x Android SDK版本之间应为23或更高。

###  `release_mode`

设置发布模式。 支持以下值: 

*  `ReleaseMode.RELEASE`（默认） - 释放所有资源，就像调用`release()`方法一样。 在Android中，媒体播放器的资源很密集，这将使它消失。 数据将在需要时再次缓冲（如果是远程文件，将再次下载）。 在iOS和macOS中，就像`stop()`方法一样的工作。
* `ReleaseMode.LOOP`  - 保持缓冲数据并在完成后再次播放，创建一个循环。 请注意，使用此模式时，通话停止方法不足以释放资源。
* `ReleaseMode.STOP`  - 停止音频播放，但保持所有资源完整。 如果您打算稍后再播放，请使用此。

###  `src`

将URL设置为音频文件。 它可能是资产URL，有关资产的更多信息，请参见[Image.src](/docs/controls/image#src)。

###  `src_base64`

设置以基本64格式编码的音频文件的内容。

## 方法

###  `pause()`

停止播放音频。

###  `play()`

开始从头开始播放音频。

###  `release()`

停止播放并释放与此音频控件相关的资源。
调用`resume()`或更改源头后，资源将再次获取或缓冲。

###  `resume()`

简历当前位置播放音频。

###  `seek()`

将光标移至所需位置。

方法参数: 

*  `position_milliseconds`  - 在毫秒中所需的位置。

###  `volume`

设置音量（振幅）。

0是静音，1是最大音量。 0到1之间的值是线性插值的。

## 事件

###  `on_duration_changed`

一旦有音频持续时间（可能需要花费一段时间才能下载或缓冲）。

事件的`e.data`包含毫秒的音频持续时间。

###  `on_loaded`

加载/缓冲音频时发射。

###  `on_position_changed`

更改音频位置时会发射。 如果状态正在播放，将每1秒不断更新一次播放的位置。 可用于进度栏。

###  `on_seek_complete`

搜索完成。 

###  `on_state_changed`一旦音频搜索完成，就要发送活动。

当音频播放器状态更改时，会发射。 事件的`e.data`包含以下状态之一: 

*  `stopped`
* `playing`
* `paused`
* `completed`
* `disposed`