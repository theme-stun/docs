# Quick start

## Installation

- Install `Stun`

  Enter your Hexo directory, run this.

  ``` bash
  $ git clone https://github.com/liuyib/hexo-theme-stun.git themes/stun
  ```

  > This command will clone all the files in this repository, many of which are only used for project development and are not used by ordinary users at all. Therefore, if you want to clone only the files necessary for the theme to run, please use the following command instead of the above command:
  >
  > ```bash
  > $ git clone -b dist https://github.com/liuyib/hexo-theme-stun.git themes/stun
  > ```
  >
  > Note: It is not convenient to update in the future, please use with caution.

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
