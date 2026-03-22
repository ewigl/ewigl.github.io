---
title: Nier Automata mods
summary: 《尼尔：机械纪元》Mod 安装。
cover: cover.jpg

date: 2026-03-20
lastmod: 2026-03-20

tags:
  - 游戏
---

> 参考: [The Definitive NieR Automata Experience (Mod List and Guide)](https://www.nexusmods.com/nierautomata/mods/29)


## 准备工作

1. 安装游戏，至少启动一次。
2. 下载 [Preparation Folders](https://www.nexusmods.com/nierautomata/mods/29?tab=files)，解压至游戏根目录。

    或手动准备目录结构:
    ```
    基本目录:
    NierAutomata\data\wp
    NierAutomata\data\pl
    NierAutomata\data\wp

    Wolf's Automata eXtensions (WAX) 目录:
    NierAutomata\WAX
    NierAutomata\WAX\mods
    ```

## 安装汉化

1. 下载 [NieR_Chinese](https://gitee.com/WLongWLong/nier_chinese)
2. 参考 README。

## 安装框架

### Wolf's Automata eXtensions (WAX)

1. 下载 [WAX](https://www.nexusmods.com/nierautomata/mods/744?tab=files)
2. 将 wax.dll 解压到游戏根目录，重命名为 d3d11.dll。

## Fix 与 QOL

### Grid Vignette and Bunker Grain Removal

1. 下载 [Grid Vignette and Bunker Grain Removal](https://www.nexusmods.com/nierautomata/mods/149?tab=files)
2. 解压缩，将文件移动到 NieRAutomata\WAX\mods\Grid Vignette and Bunker Grain Removal\textures。（WAX）

### Prologue Checkpoints - No More Full Restarts

1. 下载 [Prologue Checkpoints](https://www.nexusmods.com/nierautomata/mods/753?tab=files)
2. 解压缩，将文件移动到 NieRAutomata\data\ph1。

### Home Menu Texture compression fix

1. 下载 [Home Menu Texture compression fix](https://www.nexusmods.com/nierautomata/mods/151?tab=files)
2. 解压缩，将文件移动到 NieRAutomata\WAX\mods\Home Menu Texture compression fix\textures。（WAX）

## 视觉效果

### HD Texture Pack

1. 下载 [NieR Automata - Texture Pack V1.03 (Lite)](https://www.nexusmods.com/nierautomata/mods/5?tab=files)。解压缩到临时目录。
2. 打开 powershell，运行如下命令 `Get-ChildItem -Path "D:\Licht\Downloads\SK_Res" -Recurse -File | Move-Item -Destination "D:\Licht\Downloads\HD Texture Pack\textures"`
3. 或者手动执行上一步的自动操作，即：将所有贴图平铺在一个 textures 目录中。（可能需要预先创建 HD Texture Pack\textures 目录）

### HD Texture Pack - Fonts Fix

1. 下载 [HD Texture Pack - Fonts Fix](https://www.nexusmods.com/nierautomata/mods/723?tab=files)。
2. 步骤同 HD Texture Pack。可以覆盖 HD Texture Pack 中的贴图。

## 2B & A2

### 2B-A2 in Santa Dress (Stellar Blade) (WAX)

1. 下载 [Santa Dress A2](https://www.nexusmods.com/nierautomata/mods/764?tab=files)
2. 将 data 与 wax 目录移动到游戏根目录。

### 2B in YoRHa Unofficial Ceremonial Attire (Stellar Blade)

1. 下载 [YoRHa Unofficial Ceremonial Attire](https://www.nexusmods.com/nierautomata/mods/749?tab=files)
2. 将 data 与 wax 目录移动到游戏根目录。

## 9S & Pods

### ANDROIDS REMASTERED

1. 下载 [9S 与 Pods](https://www.nexusmods.com/nierautomata/mods/30?tab=files)
2. 将 data 目录移动到游戏根目录。将 SK_Res 中的贴图移动到 NieRAutomata\WAX\mods\Androids Remastered\textures。

