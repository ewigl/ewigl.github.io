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

安装游戏，至少启动一次。

## 安装汉化

1. 下载 [NieR_Chinese](https://gitee.com/WLongWLong/nier_chinese)
2. 参考 README，替换游戏原始 data 文件。

## 安装框架

### Wolf's Automata eXtensions (WAX)

1. 下载 [WAX](https://www.nexusmods.com/nierautomata/mods/744?tab=files)
2. 将 wax.dll 解压到游戏根目录，重命名为 d3d11.dll。

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
