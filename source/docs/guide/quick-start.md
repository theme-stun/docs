# Quick start

## Installation

- Install `Stun`

  Enter your Hexo directory, run this.

  ``` bash
  $ git clone https://github.com/liuyib/hexo-theme-stun.git themes/stun
  ```

- Install dependency `hexo-renderer-pug`

  Enter your Hexo directory, run this.

  ``` bash
  $ npm install --save hexo-renderer-pug
  ```

## How to use

Change the `_config.yml` file in your Hexo root directory.

``` yml
theme: stun
```

Run your Hexo server.

``` bash
$ hexo clean && hexo s
```

## Update

``` bash
$ cd themes/stun

# Update to stable version (Recommend).
$ git pull origin master

# Update to the latest features (Not recommended).
$ git pull origin dev
```
