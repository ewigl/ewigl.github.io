---
title: GoFile Enhanced
summary: GoFile 批量下载文件脚本。
cover: cover.jpg

date: 2024-11-02

featured: true

tags:
  - GoFile

link: https://greasyfork.org/scripts/515250

status: completed
---

## 简介

Gofile 文件批量下载。使用下载器下载文件夹内容。直链下载。

支持 [AB Download Manager](https://github.com/amir1376/ab-download-manager)、[Internet Download Manager](https://www.internetdownloadmanager.com/) 与所有基于 [Aria2](https://github.com/aria2/aria2) 封装的下载器（例如 Motrix Next）。

## 预览

![cover](https://github.com/user-attachments/assets/b6831bfa-6838-412e-b71a-a1ed802ecee8)

## 使用方法

![usage](https://github.com/user-attachments/assets/36378f19-9966-414d-a344-82845a3087d0)

### 直链 / Direct

直链下载。需要打开 Gofile 网站设置，允许"弹出式窗口和重定向"权限。

> [!NOTE]
> 文件过多时不建议使用，会一次性打开大量浏览器窗口。

![direct](https://github.com/user-attachments/assets/4676339f-f33f-46e1-92a0-08bb2d65a9c1)

### ABDM

直接将下载任务发送到 ABDM。需要启用 ABDM 中的浏览器集成功能。（无需安装浏览器扩展）

支持文件夹下载。

> [!NOTE]
> 需要正确配置 ABDM 端口。默认端口为 15151。

![abdm](https://github.com/user-attachments/assets/71dabdaf-6bfb-4d59-bfb0-669b3893b43d)

### Aria2

直接将下载任务通过 RPC 发送给 Aria2 下载器。需要正确配置 Aria2 RPC 信息。

支持文件夹下载。

> [!NOTE]
> 第三方下载器端口可能会与 Aria2 默认配置不同，例如 Motrix Next 默认端口为 29100

### IDM

使用 IDM 批量下载。

使用脚本导出 IDM 专用格式 - 后缀为 ef2 的文件。

打开 IDM，选择任务 -> 导入 -> 从"IDM 导出文件"导入。

### 文件夹下载补充说明

目前仅支持 ABDM 与 Aria2 两种下载方式。目前仍属于实验性功能。

> [!NOTE]
> 需要在脚本设置中正确配置 ABDM 与 Aria2 下载目录（绝对路径，例如 `D:/Download`）。
>
> 如果不配置下载目录，文件可能会下载到意想不到的地方（一般是你的下载软件所在目录或驱动器根目录），或直接下载出错。

![file list](https://github.com/user-attachments/assets/cca8e363-5671-4a92-97cf-5d5759a3ac35)

![config](https://github.com/user-attachments/assets/0abb3628-a3aa-4765-ba17-c0a5d46f9946)
