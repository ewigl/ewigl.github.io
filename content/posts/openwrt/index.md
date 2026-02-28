---
title: OpenWrt
summary: OpenWrt 使用相关信息。
cover: cover.jpg

date: 2025-02-07
lastmod: 2026-02-28

tags:
  - OpenWrt
---

## 自定义构建

[https://firmware-selector.openwrt.org/](https://firmware-selector.openwrt.org/)

## 自定义软件包

```
luci-app-smartdns iperf3
```

## 自定义初始化脚本

> uci-defaults

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
lan_ip_address="192.168.8.1/24"

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

## 自定义配置

> 一般流程：
> 1. 配置 PPPoE。
> 2. 配置静态 IP。
> 3. 配置应用。

### DHCP

```sh{filename="/etc/config/dhcp"}
config host
	option name 'Licht'
	list mac ''
	option ip '192.168.8.32'
	option leasetime 'infinite'

config host
	option name 'Legion'
	list mac ''
	option ip '192.168.8.64'
	option leasetime 'infinite'
```

### SmartDNS

```sh{filename="/etc/config/smartdns"}
config server
	option enabled '1'
	option name 'AliDNS'
	option ip '223.5.5.5'
	option type 'udp'
	option server_group 'CN'

config server
	option enabled '1'
	option name 'AliDNS_DOH'
	option ip 'https://dns.alidns.com/dns-query'
	option type 'https'
	option server_group 'CN'

config server
	option enabled '1'
	option name 'AliDNS_DOT'
	option ip '223.5.5.5'
	option type 'tls'
	option server_group 'CN'

config server
	option enabled '1'
	option name 'Cloudflare'
	option ip '1.1.1.1'
	option type 'udp'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Cloudflare_DOH'
	option ip 'https://1.1.1.1/dns-query'
	option type 'https'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Cloudflare_DOT'
	option ip '1.1.1.1'
	option type 'tls'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Google'
	option ip '8.8.8.8'
	option type 'udp'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Google_DOH'
	option ip 'https://dns.google/dns-query'
	option type 'https'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Google_DOT'
	option ip '8.8.8.8'
	option type 'tls'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad101'
	option ip '101.101.101.101'
	option type 'udp'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad101_DOH'
	option ip 'https://101.101.101.101/dns-query'
	option type 'https'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad101_DOT'
	option ip '101.101.101.101'
	option type 'tls'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad9'
	option ip '9.9.9.9'
	option type 'udp'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad9_DOH'
	option ip 'https://dns.quad9.net/dns-query'
	option type 'https'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'Quad9_DOT'
	option ip '9.9.9.9'
	option type 'tls'
	option server_group 'UN'

config server
	option enabled '1'
	option name 'TencentDNSPod'
	option ip '119.29.29.29'
	option type 'udp'
	option server_group 'CN'

config server
	option enabled '1'
	option name 'TencentDNSPod_DOH'
	option ip 'https://doh.pub/dns-query'
	option type 'https'
	option server_group 'CN'

config server
	option enabled '1'
	option name 'TencentDNSPod_DOT'
	option ip '119.29.29.29'
	option type 'tls'
	option server_group 'CN'
```

### uhttpd

```sh{filename="/etc/config/uhttpd"}
config uhttpd "mihomo"
	option home '/etc/mihomo'
	list listen_http '0.0.0.0:8848'
	list listen_https '0.0.0.0:8843'
```