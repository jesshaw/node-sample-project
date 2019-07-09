# puppeteer 安装时默认需要下载chromium，有时假会下载很慢，直接到以下路径下载

1. 先跳过下载
## npm config  get  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

2. 下载指定版本的指定操作系统的chromium，版本号可以到puppeter模块的package.json查看
https://npm.taobao.org/mirrors/chromium-browser-snapshots/

3. 解压到puppeter模块下的.local-chrominu/win64-672088/chrome-win/目录下。