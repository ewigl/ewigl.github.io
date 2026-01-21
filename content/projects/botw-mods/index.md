---
title: 《塞尔达传说 旷野之息》模组
summary: 《塞尔达传说 旷野之息》游戏 Mod，NS1 1.8.2 版本。
cover: cover.jpg

date: 2026-01-21T14:51:08+08:00

featured: false

tags:
  - 游戏

github:
demo:
website: https://www.nexusmods.com/profile/EwigLicht8486/mods?gameId=2250
tech_stack:
  - Switch-Toolbox

status: completed
---

## Indestructible Weapons

英杰武器、大师之剑与海利亚盾无限耐久。

![Indestructible Weapons](https://staticdelivery.nexusmods.com/mods/2250/images/95/95-1762584671-637949173.png "https://www.nexusmods.com/legendofzeldabreathofthewild/mods/95")

<details>
<summary>技术细节</summary>

将对应武器参数 `IsLifeInfinite` 的值修改为 `true` 。

- Actor/Pack/Weapon_Bow_028.sbactorpack/Actor/GeneralParamList/
- Actor/Pack/Weapon_Lsword_054.sbactorpack/Actor/GeneralParamList/
- Actor/Pack/Weapon_Shield_037.sbactorpack/Actor/GeneralParamList/
- Actor/Pack/Weapon_Spear_050.sbactorpack/Actor/GeneralParamList/
- Actor/Pack/Weapon_Sword_052.sbactorpack/Actor/GeneralParamList/

</details>

## No Master Mode Triforce and Horse Speed Up Icon

移除大师模式下三角力量 & 移除马匹加速时的图标。

![No Master Mode Triforce and Horse Speed Up Icon](https://staticdelivery.nexusmods.com/mods/2250/images/92/92-1761403089-1059359232.png "https://www.nexusmods.com/legendofzeldabreathofthewild/mods/92")

<details>
<summary>技术细节</summary>

二者都位于 Bootup.pack 文件中。

</details>



## Royal Ancient Reins and Saddle

将古代马具套装的外观替换为皇家马具套装的外观。

![Royal Ancient Reins and Saddle](https://staticdelivery.nexusmods.com/mods/2250/images/94/94-1761989717-1472303004.png "https://www.nexusmods.com/legendofzeldabreathofthewild/mods/94")

<details>
<summary>技术细节</summary>

修改对应马具参数中的 Model 对应值。

以及 StockItem UI 中对应的马具图标。

</details>
