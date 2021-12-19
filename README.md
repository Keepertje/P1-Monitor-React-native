## Intro

This is a hobby project of mine to get some practice with React Native and P1 data.

This is a React-Native app based on Expo to read the current power usage from the Homewizard P1 meter.

## How to Connect to Homewizard P1 Meter
https://homewizard-energy-api.readthedocs.io/getting-started.html

Make sure the api is enabled in the Energy app. 

Find the ip adress of your Homewizard P1 meter to access it's api using Discovery.

Find the instance name of your meter, it looks like: p1meter-XXXXXX

```
cindy@MacBook-Pro % dns-sd -B _hwenergy._tcp .
Browsing for _hwenergy._tcp
DATE: ---Sun 19 Dec 2021---
19:21:21.219  ...STARTING...
Timestamp     A/R    Flags  if Domain               Service Type         Instance Name
19:21:22.731  Add        2  12 local.               _hwenergy._tcp.      p1meter-XXXXXX
```

Find how to connect to it

```
cindy@MacBook-Pro % dns-sd  -L  "p1meter-XXXXXX"  _hwenergy._tcp  local.
Lookup p1meter-XXXXXX._hwenergy._tcp.local.
DATE: ---Sun 19 Dec 2021---
19:23:25.771  ...STARTING...
19:23:27.150  p1meter-XXXXXX._hwenergy._tcp.local. can be reached at p1meter-XXXXXX.local.:80 (interface 12)
 api_enabled=1 path=/api/v1 serial=3c39e728a97a product_name=P1\ meter product_type=HWE-P1```
 
Check the part after "can be reach" , without the port and use it to find the ip-adress

Find Ip adress:

```cindy@MacBook-Pro % dns-sd -Gv4v6 p1meter-XXXXXX.local    
DATE: ---Sun 19 Dec 2021---
19:25:23.282  ...STARTING...
Timestamp     A/R    Flags if Hostname                               Address                                      TTL
19:25:23.284  Add 40000002 12 p1meter-XXXXXX.local.                  xxx.xxx.x.xx                                 120
```

Use the url: http://{YOUR_API_ADDRESS}/api/v1/data. in the env.js



