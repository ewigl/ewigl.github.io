---
title: OpenWrt
summary: OpenWrt 使用相关信息。
cover: cover.jpg

date: 2025-02-20
lastmod: 2025-02-21

tags:
  - OpenWrt
---

## 自定义构建

[https://firmware-selector.openwrt.org/](https://firmware-selector.openwrt.org/)

## 自定义软件包

```
luci-i18n-base-zh-cn luci-i18n-firewall-zh-cn luci-i18n-opkg-zh-cn iperf3 luci-i18n-smartdns-zh-cn
```

## 自定义初始化脚本

> 即 uci-defaults

```sh
# Beware! This script will be in /rom/etc/uci-defaults/ as part of the image.
# Uncomment lines to apply:
#
host_name="Licht_AX"
#
wlan_name="Licht_AX_5G"
wlan_password="Licht998486."
#
root_password="Licht998486."
lan_ip_address="192.168.8.1"

# log potential errors
exec >/tmp/setup.log 2>&1

if [ -n "$root_password" ]; then
(echo "$root_password"; sleep 1; echo "$root_password") | passwd > /dev/null
fi

# Set hostname & timezone
if [ -n "$host_name" ]; then
uci set system.@system[0].hostname="$host_name"
uci set system.@system[0].timezone='CST-8'
uci set system.@system[0].zonename='Asia/Shanghai'
uci commit system
fi

# Configure LAN
# More options: https://openwrt.org/docs/guide-user/base-system/basic-networking
if [ -n "$lan_ip_address" ]; then
uci set network.lan.ipaddr="$lan_ip_address"
uci commit network
fi

# Configure WLAN
# More options: https://openwrt.org/docs/guide-user/network/wifi/basic#wi-fi_interfaces
if [ -n "$wlan_name" -a -n "$wlan_password" -a ${#wlan_password} -ge 8 ]; then
# 5G HZ WLAN @wifi-device[1]
# Device
uci set wireless.@wifi-device[1].disabled='0'
uci set wireless.@wifi-device[1].country='US'
uci set wireless.@wifi-device[1].cell_density='2'
uci set wireless.@wifi-device[1].channel='64'
uci set wireless.@wifi-device[1].htmode='HE160'
# Interface
uci set wireless.@wifi-iface[1].disabled='0'
uci set wireless.@wifi-iface[1].encryption='psk2'
uci set wireless.@wifi-iface[1].ssid="$wlan_name"
uci set wireless.@wifi-iface[1].key="$wlan_password"
#
uci commit wireless
fi

echo "All done!"

```

## AX3000T 相关

### 刷入过程

参考 OpenWrt Wiki 官方文档，使用 [XMiR-Patcher](https://github.com/openwrt-xiaomi/xmir-patcher) 刷入 OpenWrt。

使用 scp 命令拷贝文件时如有必要使用 `-O` 参数。

### 注意事项

使用 XMiR-Patcher 备份过程中可能出现 Timed Out 问题。

解决方法：[GitHub Issue](https://github.com/openwrt-xiaomi/xmir-patcher/issues/9#issuecomment-2209618296)。

Timeout 设置为 90 并使用额外功能菜单中的单独备份模式分别备份各个分区。

### 自定设置

- 5G WIFI - 高级设置 - 国家代码设置为 US。
- 信号覆盖密度最大。
- 常规设置最大传输功率可选 24 dBm 或自动。
- 选择 AU 等国家代码可能会因为频率过高 (超过 6GHZ) 导致终端设备搜索不到 5G 信号。
