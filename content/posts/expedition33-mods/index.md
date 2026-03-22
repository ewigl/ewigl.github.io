---
title: "Clair Obscur: Expedition 33 mods"
summary: "《光与影: 33 号远征队》Mod 安装。"
cover: cover.jpg

date: 2026-03-22
lastmod: 2026-03-22

tags:
  - 游戏

---

## ClairObscurFix

> 基础功能。

1. 下载 [ClairObscurFix](https://www.nexusmods.com/clairobscurexpedition33/mods/24?tab=files)。
2. 将 Sandfall 目录放置于游戏根目录。
3. 配置。

参考配置:

```ini
;;;;;;;;;; General ;;;;;;;;;;

[Developer Console]
; Set "Enabled" to true to enable the console.
; By default you can access it with the key "Tilde".
Enabled = false

[Skip Intro Logos]
; Skips splash screen logos, epilepsy warning and autosave warning.
Enabled = true

[Uncap Cutscene FPS]
; Removes 30fps cap in cutscenes.
Enabled = true
; Set to "true" to enable the use of frame generation in cutscenes.
AllowFrameGen = false

[Adjust Resolution Checks]
; Adjusts resolution checks to use the monitor's maximum supported resolution, rather than the "native" resolution.
Enabled = true

[Maximum Timer Resolution]
; Sets the maximum possible timer resolution. This can help with potential camera stutter caused by lower timer resolution.
Enabled = true

;;;;;;;;;; Ultrawide/Narrower ;;;;;;;;;;

[Cutscenes]
; Disables letterboxing (top & bottom) in cutscenes at aspect ratios narrower than 2.4~.
DisableLetterboxing = true
; Disables pillarboxing (sides) in cutscenes at aspect ratios wider than 2.4~.
DisablePillarboxing = true

[Fix Movies]
; Crops letterboxing from pre-rendered movies at ultrawide resolutions.
Enabled = true

;;;;;;;;;; Graphics ;;;;;;;;;;

[Disable Subtitle Blur]
; Set "Enabled" to true to disable the background blur on cutscene subtitle lines.
Enabled = true

[Sharpening]
; Adjust "Strength" to control the intensity of the forced post-process sharpening.
; Valid range: 0 to 2.0 Game Default = 1.0
Strength = 0
```

## Lune Sciel Verso no Tattoo no Scar

> 伤疤、纹身移除。

1. 下载 [Lune Sciel Verso no Tattoo no Scar](https://www.nexusmods.com/clairobscurexpedition33/mods/131?tab=files)
2. 需要的文件: 177_Lune_.NoTat_P、178_Sciel_NoNeckTat_P、179_Sciel_NoBodyScar_P。
3. 将解压后的文件移动到 Sandfall\Content\Paks\~mods。