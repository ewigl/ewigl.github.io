---
title: Github Actions Tasks
summary: 利用 GitHub Actions 执行自动任务。
cover: cover.jpg

date: 2025-03-23

featured: true

tags:
  - GitHub

github: https://github.com/ewigl
demo:
website:
tech_stack:
  - JavaScript
  - GitHub Actions
status: completed
---

## 示例项目

- [HIFINI 音乐磁场自动签到](https://github.com/ewigl/hifini-auto-checkin)
- [iKuuu 机场自动签到](https://github.com/ewigl/ikuuu-auto-checkin)
- [PicACG 哔咔漫画 定时自动签到](https://github.com/ewigl/picacg-auto-checkin)
- [ZodGame 自动签到](https://github.com/ewigl/zodgame-auto-checkin)

## 示例用法

1.  Fork 仓库

    点击仓库右上角 Fork 按钮将仓库复制到自己的 GitHub 账户。

    ![08](images/08.png)

    ![09](images/09.png)

2.  启用 Actions

    在自己仓库的左上角找到 Actions 标签页。启用 Workflows。

    ![03](images/03.png)

3.  配置 Actions 变量

    在自己仓库的左上角找到 Settings 标签页，选择 Secrets and variables。新建 Actions 变量。

    请注意查看对应项目的 README 文档，添加所需的变量。

    ![01](images/01.png)
    ![02](images/02.png)

## 常见问题

### 手动触发任务

![05](images/05.png)

### 查看运行结果

![06](images/06.png)

### 修改运行时间

修改 Checkin.yml 中的时间表即可，希望运行多次添加多行 crontab 即可。

时区为 UTC。
且 GitHub Actions 定时任务存在时间延迟。尽量避免将时间设置在高峰时段（整点、半点时段）。

![10](images/10.png)
