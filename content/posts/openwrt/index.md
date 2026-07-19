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
luci-i18n-base-zh-cn luci-i18n-attendedsysupgrade-zh-cn luci-i18n-firewall-zh-cn luci-i18n-package-manager-zh-cn luci-i18n-smartdns-zh-cn iperf3
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
wlan_password="Licht150886."
#
root_password="Licht150886."
lan_ip_address="192.168.8.1/24"

# log potential errors
exec >/tmp/setup.log 2>&1

if [ -n "$root_password" ]; then
  (echo "$root_password"; sleep 1; echo "$root_password") | passwd > /dev/null
fi

# Set hostname & timezone & Time Format
if [ -n "$host_name" ]; then
  uci set system.@system[0].hostname="$host_name"
  uci set system.@system[0].timezone='CST-8'
  uci set system.@system[0].zonename='Asia/Shanghai'
  uci set system.@system[0].clock_hourcycle='h23' 
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

### SmartDNS

```sh{filename="/etc/config/smartdns"}
config smartdns
        option enabled '1'
        option server_name 'smartdns'
        option port '53'
        option auto_set_dnsmasq '1'
        option tcp_server '1'
        option ipv6_server '1'
        option bind_device '1'
        option dualstack_ip_selection '1'
        option serve_expired '1'
        option cache_persist '1'
        option resolve_local_hostnames '1'
        option force_https_soa '1'
        option rr_ttl_min '600'
        option seconddns_port '6553'
        option seconddns_tcp_server '1'
        option old_port '53'
        option old_enabled '1'
        option old_auto_set_dnsmasq '1'

config domain-rule

config client-rule

config ip-rule

config server
        option enabled '1'
        option name 'AliDNS'
        option ip '223.5.5.5'
        option type 'udp'
        option server_group 'CN'
        option exclude_default_group '1'

config server
        option enabled '1'
        option name 'AliDNS_DOH'
        option ip 'https://dns.alidns.com/dns-query'
        option type 'https'
        option server_group 'CN'
        option exclude_default_group '1'

config server
        option enabled '1'
        option name 'AliDNS_DOT'
        option ip '223.5.5.5'
        option type 'tls'
        option server_group 'CN'
        option exclude_default_group '1'

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
        option name 'TencentDNSPod'
        option ip '119.29.29.29'
        option type 'udp'
        option server_group 'CN'
        option exclude_default_group '1'

config server
        option enabled '1'
        option name 'TencentDNSPod_DOH'
        option ip 'https://doh.pub/dns-query'
        option type 'https'
        option server_group 'CN'
        option exclude_default_group '1'

config server
        option enabled '1'
        option name 'TencentDNSPod_DOT'
        option ip '119.29.29.29'
        option type 'tls'
        option server_group 'CN'
        option exclude_default_group '1'

config domain-rule-list
        option enabled '1'
        option server_group 'CN'
        option domain_list_file '/etc/smartdns/domain-set/smartdns-domains.china.conf'
        option block_domain_type 'none'
        option name 'CN'
```

## 配置 Nikki

> [!NOTE] 官方地址
> https://github.com/nikkinikki-org/OpenWrt-nikki

### 安装

> [!NOTE] 参考文档
> https://github.com/nikkinikki-org/OpenWrt-nikki/blob/main/README.zh.md

### 配置

> [!NOTE] 注意事项
> Proxy Config -> LAN Proxy -> Access Control 需要至少保留一个记录。
