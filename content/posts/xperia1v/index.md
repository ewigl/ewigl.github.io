---
title: Sony Xperia 1 V
summary: Sony Xperia 1 V，Lineage OS 系统相关信息。
cover: cover.jpg

date: 2025-11-14
lastmod: 2026-01-17

tags:
  - Android
---

## [Lineage OS](https://wiki.lineageos.org/devices/pdx234/)

最新版本: ` 23.2`

### Func

| 功能                                   | 详情                                       |
| -------------------------------------- | ------------------------------------------ |
| 创作者模式（BT.2020 色域和 10 位色深） | √                                          |
| 完整分辨率 / 4K                        | 支持但存在 Bug                             |
| 全高刷新率                             | √                                          |
| 大师 Apps                              | ApkMirror                                  |
| 杜比音效                               | ×                                          |
| 相机键快速启动                         | √                                          |
| GApps                                  | MindTheGApps                               |
| 人脸解锁                               | ×                                          |
| 自定义                                 | 状态栏网速、电池图标、隐藏手势条、隐藏应用 |

### Bug

| BUG                       | 详情                                  |
| ------------------------- | ------------------------------------- |
| 美团等少部分 App 无法使用 | 梆梆加固 / App 检测的原因，非系统 Bug |
| 短信对话页面需要返回两次  | 仅完整分辨率模式（4K）下有这个问题    |

### Root

- [APatch](https://github.com/bmax121/APatch)。
- 自定义构建 SukiSU Ultra: [XDA](https://xdaforums.com/posts/90326019/), [GitHub](https://github.com/spacealtctrl/a16_sony_sm8550_SukiSU_SUSFS)

### PIF

依次安装:

1. [ReZygisk](https://github.com/PerformanC/ReZygisk/releases)
2. [Play integrity Fix](https://github.com/KOWX712/PlayIntegrityFix/releases)
3. [TrickyStore](https://github.com/5ec1cff/TrickyStore)
4. [TrickyStore Addon](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases)
5. [Yuri Keybox Manager](https://github.com/YurikeyDev/yurikey/releases)
6. 重启

"执行" Yuri Keybox Manager。

## 其他信息

- 同时按住 <kbd>音量上</kbd> + <kbd>音量下</kbd> + <kbd>电源</kbd> 强制重启。
- <kbd>音量上</kbd> + <kbd>电源</kbd> = 蓝色灯 - Bootloader
- <kbd>音量下</kbd> + <kbd>电源</kbd> = 绿色灯 - SOMC Flash Mode

如果系统未正确识别 bootloader 或 SOMC 模式，需要在设备管理器处手动指定驱动程序。
