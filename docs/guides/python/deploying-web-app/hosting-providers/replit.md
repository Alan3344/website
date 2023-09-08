---
title: Replit
sidebar_label: Replit
slug: replit
---

[REPLIT](https://replit.com/)是用任何语言编写的 Web 应用程序的在线 IDE 和托管平台。 他们的免费层允许运行任何数量的应用程序限制。

在 REPLIT 上运行您的应用程序:

- [注册](https://replit.com/signup?from=landing)在 REPLIT 上。
- 单击“新替补”按钮，选择“ python”模板，然后键入替补的名称，例如 “ my-flet-app”。 另外，转到[Flet 模板](https://replit.com/@fletdev/Flet)页面，然后单击**使用模板**按钮。 Flet 模板为您配置了所有内容，因此您可以跳至`main.py`并立即更新您的程序。
- 在“文件”窗格上单击<img src="/website/img/docs/getting-started/more-vert-icon.svg" className="icon-button" />按钮，然后“显示隐藏的文件”:

   <img src="/website/img/docs/hosting-replit/replit-show-hidden-files.png" className="screenshot-30 screenshot-rounded"/>

- 在左侧打开`.replit`文件，滚动到`[packager.features]` e 节，然后将`guessImports`设置为`false`:

   <img src="/website/img/docs/hosting-replit/replit-disable-guess-imports.png" className="screenshot-60 screenshot-rounded"/>

- 在“工具”窗格上单击“软件包”，然后搜索`flet`软件包，然后单击“安装”按钮。
- 在“文件”窗格上打开`main.py`并复制您的应用。
- 将调用调用到`ft.app()`，并包含`view=ft.AppView.WEB_BROWSER`参数:

```python
ft.app(main, view=ft.AppView.WEB_BROWSER)
```

- 运行应用程序。 享受。

   <img src="/website/img/docs/hosting-replit/replit-running-app.png" className="screenshot-80 screenshot-rounded"/>
