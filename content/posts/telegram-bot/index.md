---
title: Telegram Bot
summary: Telegram Bot 简单指南。
cover: cover.jpg

date: 2026-02-08T15:49:18+08:00
lastmod: 2026-02-08T15:49:18+08:00

tags:
  - Telegram
---

## 创建 Bot

使用 [@BotFather](https://t.me/BotFather) 创建一个新的 Bot，按照提示操作，获取 Bot 的 API Token 并妥善保存。

## 获取 Chat ID

>[!NOTE]
> 该 ID 对于每个账户来说是唯一的。

1. 在 Telegram 中找到 Bot，点击进入聊天界面。
2. 发送一条消息给 Bot，例如 "Hello"。
3. 访问 Telegram API 获取更新：  `https://api.telegram.org/bot<Bot-Token>/getUpdates`
4. 结果示例如下。JSON 中 `chat.id` 字段的值即为 Chat ID。

    ```json
    {
      "ok": true,
      "result": [
        {
          "update_id": 123456789,
          "message": {
            "message_id": 1,
            "from": {
              "id": 123456789,
              "is_bot": false,
              "first_name": "EwigLicht",
              "username": "EwigLicht",
              "language_code": "zh-hans"
            },
            "chat": {
              "id": 123456789,
              "first_name": "EwigLicht",
              "username": "EwigLicht",
              "type": "private"
            },
            "date": 123456789,
            "text": "Hello"
          }
        }
      ]
    }
    ```

## 发送消息

>[!TIP]
> 参考文档: [Telegram Bot API](https://core.telegram.org/bots/api#sendmessage)

### appleboy/telegram-action

```yaml
    steps:
      - name: Notify
        if: ${{ always() && env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID }}
        uses: appleboy/telegram-action@master
        with:
          to: ${{ secrets.TELEGRAM_CHAT_ID }}
          token: ${{ secrets.TELEGRAM_BOT_TOKEN }}
          format: markdown
          message: |
            *标题*

            ${{ steps.checkin.outputs.result  }}

            [任务详情](https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }})
```

### curl

```bash
curl -sS -X POST "https://api.telegram.org/bot<Bot-Token>/sendMessage" \
     -H "Content-Type: application/json" \
     -d '{
           "chat_id": "<Chat-ID>",
           "text": "Hello, World!"
         }'
```
