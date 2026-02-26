---
title: Github Actions Tasks
summary: 利用 GitHub Actions 执行自动任务。
cover: cover.jpg

date: 2024-06-02

featured: true

tags:
  - GitHub

status: completed
---

## 示例项目

- [HIFINI 音乐磁场自动签到](https://github.com/ewigl/hifini-auto-checkin)
- [iKuuu 机场自动签到](https://github.com/ewigl/ikuuu-auto-checkin)
- [PicACG 哔咔漫画 定时自动签到](https://github.com/ewigl/picacg-auto-checkin)

## 示例用法

### Fork 仓库

点击仓库右上角 Fork 按钮将仓库复制到自己的 GitHub 账户。

![08](images/08.png)

![09](images/09.png)

### 启用 Actions

在复制后的仓库左上角找到 Actions。启用 Workflows。

![03](images/03.png)

### 配置 Actions

在复制后的仓库的左上角找到 Settings 标签页，选择 Secrets and variables。配置 Actions 变量。

> [!NOTE]
> 请查看对应项目的 README 文档确定所需变量。
> 
> 关于 Telegram 通知的配置，可参考 [Telegram Bot](/posts/telegram-bot) 获取 Bot Token 以及 Chat ID。
  
![01](images/01.png)

![02](images/02.png)


## 常见问题

### 手动执行任务

![05](images/05.png)

### 检查运行情况

![06](images/06.png)

### 调整运行时间

按需修改 Checkin.yml 文件中的 crontab，希望执行多次添加多行即可。

> [!NOTE]
> 时区为 UTC。
> 且 GitHub Actions 定时任务存在时间延迟。尽量避免将时间设置在高峰时段（整点、半点时段）。

![10](images/10.png)
