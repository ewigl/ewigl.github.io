---
title: HIFITI 自动签到
description: HIFITI (hifiti.com) 音乐磁场 定时自动签到，支持多账号。

tags: [Github]
---

# HIFITI 音乐磁场 自动签到

https://github.com/ewigl/hifiti-auto-checkin

## 仓库变量

### ACCOUNTS

账户信息，包含 name（随便填）与 Cookie （从网站中获取）。

登陆 hifiti.com 后，打开浏览器控制台，在网络监控界面获取 Cookie，确保 Cookie 包含 bbs_token 与 bbs_sid 两个字段。

![获取 Cookie](https://raw.githubusercontent.com/ewigl/hifini-auto-checkin/main/imgs/001.png)

配置格式如下：

```json
[
  {
    "name": "这里填写账户备注",
    "cookie": "这里填写 Cookie"
  },
  {
    "name": "这里填写账户备注,只有一个账号可以删除这一条{}记录",
    "cookie": "这里填写 Cookie，有两个以上账号自行在下方添加新的{}记录。"
  }
]
```

## 注意事项

使用网站右上角的“退出”按钮退出登录会使 Cookie 失效。
