---
标题: 自托管
sidebar_label: 自托管
Slug: 自我托管
---
使用nginx在自己的服务器上托管Flet应用程序。

在[AWS](https://aws.amazon.com/free/)，[Oracle](https://www.oracle.com/cloud/free/)，[Linode](https://www.linode.com/pricing/)等等，有免费且廉价的云服务器层可用。

使用应用程序依赖项列表创建`requirements.txt`。 至少应包含`flet`模块: 

```txt
flet>=0.2.4
```

创建一个VirtualEnv并安装要求: 

    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

### Sample `main.py` Flet app

```python
import flet as ft
import os


# set Flet path to an empty string to serve at the root URL (e.g., https://lizards.ai/)
# or a folder/path to serve beneath the root (e.g., https://lizards.ai/ui/path
DEFAULT_FLET_PATH = ''  # or 'ui/path'
DEFAULT_FLET_PORT = 8502


def main(page: ft.Page):
    page.title = "You Enjoy Mychatbot"
    page.add(ft.Text("Reba put a stopper in the bottom of the tub"))


if __name__ == "__main__":
    flet_path = os.getenv("FLET_PATH", DEFAULT_FLET_PATH)
    flet_port = int(os.getenv("FLET_PORT", DEFAULT_FLET_PORT))
    ft.app(name=flet_path, target=main, view=None, port=flet_port)
``` 

## 自动启动Flet服务器

### 创建Systemd单元文件文件

使用SystemD服务单元文件`flet.service`自动启动Flet服务器。

下面的设置假定您的Flet App脚本在`$ home/flet-app/main.py中定义。 根据您的设置替换`User`，`Group`，`WorkingDirectory`等。

```txt
[Unit]
Description=Flet Server
After=network.target

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/flet-app
Environment="PATH=/home/ubuntu/flet-app/.venv/bin"
ExecStart=/home/ubuntu/flet-app/.venv/bin/python /home/ubuntu/flet-app/main.py

[Install]
WantedBy=multi-user.target
``` 

### 启用Flet服务器

```
cd /etc/systemd/system
sudo ln -s /home/ubuntu/flet-app/flet.service
sudo systemctl start flet
sudo systemctl enable flet
sudo systemctl status flet
``` 

##  nginx代理设置

Nginx将代理Flet应用程序和Websocket。

在您的`/etc/nginx/stites-vailable/*`config文件中，根据需要更新路径和端口: 

```txt
    location / {
        proxy_pass         http://127.0.0.1:8502/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
  
    location /ws {
        proxy_pass         http://127.0.0.1:8502/ws;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
```

就是这样！ 重新启动NGINX，然后在浏览器中打开应用程序。