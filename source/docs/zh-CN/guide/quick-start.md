# 快速开始

## 安装

- 安装 Stun

  在 Hexo 根目录下，执行指令：

  ``` bash
  $ git clone https://github.com/liuyib/hexo-theme-stun.git themes/stun
  ```

  > 该指令会将本仓库中的所有文件克隆下来，其中有很多文件仅用于项目开发，对于普通用户来说完全用不到。因此，如果你想仅克隆主题运行所必需的文件，请用下面的指令代替上面的指令：
  >
  > ```bash
  > $ git clone -b dist https://github.com/liuyib/hexo-theme-stun.git themes/stun
  > ```
  >
  > 注意：这样做不方便以后更新，请谨慎使用。

- 安装依赖 `hexo-renderer-pug`

  在 Hexo 根目录下，执行指令：

  ``` bash
  $ npm install --save hexo-renderer-pug
  ```

## 使用

修改 Hexo 根目录下的 `_config.yml` 文件：

``` yml
theme: stun
```

启动 Hexo 服务器：

``` bash
$ hexo clean && hexo s
```

## 更新

在 Hexo 根目录下，执行指令：

``` bash
$ cd themes/stun

# 更新到稳定版本（推荐）
$ git pull origin master

# 更新到最新功能（不推荐）
$ git pull origin dev
```
