---
title: iKuuu 自动签到
description: iKuuu 自动签到，支持多账户，支持 Telegram 通知。

tags: [Github]
---

# iKuuu 自动签到

https://github.com/ewigl/ikuuu-auto-checkin

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

### HOST

（可选）iKuuu 的域名，不设置时默认为 `ikuuu.one`，iKuuu 更改域名时必须同步修改。

### TELEGRAM_TOKEN

（可选）Telegram 通知的 Bot Token。

### TELEGRAM_TO

（可选）Telegram 通知的 Chat ID。

## 注意事项

iKuuu 经常更换域名，需要随时注意修改 HOST 的值。
