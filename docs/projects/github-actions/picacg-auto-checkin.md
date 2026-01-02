---
title: PicACG 自动签到
description: 哔咔漫画自动签到（打哔咔），支持多账户，支持 Telegram 通知。

tags: [Github, PicACG]
---

# PicACG 哔咔漫画 自动签到

https://github.com/ewigl/picacg-auto-checkin

## 仓库变量

### ACCOUNTS

账户信息，包含 name（随便填），email（邮箱），passwd（密码）。

配置格式如下：

```json
[
  {
    "name": "这里填写账户备注",
    "email": "这里填写邮箱",
    "passwd": "这里填写密码"
  },
  {
    "name": "这里填写账户备注",
    "email": "只有一个账号可以删除这一条{}记录",
    "passwd": "有两个以上账号自行在下方添加新的{}记录"
  }
]
```

### TELEGRAM_TOKEN

（可选）Telegram 通知的 Bot Token。

### TELEGRAM_TO

（可选）Telegram 通知的 Chat ID。
