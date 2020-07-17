(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"优化建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化建议"}},[t._v("#")]),t._v(" 优化建议")]),t._v(" "),a("h2",{attrs:{id:"优化网站-seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化网站-seo"}},[t._v("#")]),t._v(" 优化网站 SEO")]),t._v(" "),a("h3",{attrs:{id:"移除网址中多余的-index-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除网址中多余的-index-html"}},[t._v("#")]),t._v(" 移除网址中多余的 "),a("code",[t._v("/index.html")])]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h3",{attrs:{id:"向搜索引擎提交-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向搜索引擎提交-urls"}},[t._v("#")]),t._v(" 向搜索引擎提交 URLs")]),t._v(" "),a("p",[t._v("为了使博客文章更好的被搜索引擎收录，推荐使用插件 "),a("a",{attrs:{href:"https://github.com/cjh0613/hexo-submit-urls-to-search-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-submit-urls-to-search-engine"),a("OutboundLink")],1),t._v(" 来主动向搜索引擎提交 URLs。使用步骤如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装")]),t._v(" "),a("p",[t._v("在 Hexo 根目录下执行指令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-submit-urls-to-search-engine --save\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用")]),t._v(" "),a("p",[t._v("在 Hexo 根目录下的 _config.yml 文件中，添加以下配置项：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hexo_submit_urls_to_search_engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交最新的 n 个链接")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交修改时间在 n 秒内的链接，单位秒。例如：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有两个文件 a.txt 和 b.txt，分别对应 https://yoursite.com/a.txt 和 https://yoursite.com/b.txt")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其更新时间距当前分别为 800s 和 1000s（period 字段设为 900）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 则 https://yoursite.com/a.txt 会被提交，https://yoursite.com/b.txt 不会")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("period")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交链接的条件，可选值：count | period。不同取值的含义如下：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# count ：应用上述的 count  配置项")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# period：应用上述的 period 配置项")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("submit_condition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否向 Google 提交，可选值：1 | 0（0：否；1：是）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否向 Bing 提交，可选值：1 | 0（0：否；1：是）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否向 Baidu 提交，可选值：1 | 0（0：否；1：是）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baidu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文本文档的地址，要推送的链接会保存在此文本文档里")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("txt_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" submit_urls.txt\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在百度站长平台中注册的域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baidu_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//yoursite.com/\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 百度自动推送 API 的 token（获取方式见插件文档：https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baidu_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxx\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在必应站长平台中注册的域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bing_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//yoursite.com/\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必应自动推送 API 的 token（获取方式见插件文档：https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bing_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxx\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在谷歌站长平台中注册的域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//yoursite.com/\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存放 google key 的 json 文件，放于网站根目录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_key_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" google_key.json\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当然你也可以使用环境变量记录私钥，这样即使源码放在公开仓库，也不会泄露秘钥。")])]),t._v(" "),a("p",[t._v("完成上述配置后，你需要在 Hexo 根目录下运行 "),a("code",[t._v("hexo generate")]),t._v(" 指令，该指令会生成一个 .txt 文件来存储要推送的链接。")]),t._v(" "),a("p",[t._v("最后，在 Hexo 根目录下的 _config.yml 文件中，修改以下配置项，即可实现在执行 "),a("code",[t._v("hexo deploy")]),t._v(" 指令时，自动推送你的链接：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cjh_google_url_submitter\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cjh_bing_url_submitter\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cjh_baidu_url_submitter\n")])])])])]),t._v(" "),a("p",[t._v("如果你使用插件时"),a("strong",[t._v("遇到了问题")]),t._v("或者想进行"),a("strong",[t._v("更详细的设置")]),t._v("，请查看插件的"),a("a",{attrs:{href:"https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"打包、压缩资源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包、压缩资源文件"}},[t._v("#")]),t._v(" 打包、压缩资源文件 "),a("Badge",{attrs:{text:"Disrelated",type:"warning"}})],1),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("由于我在使用过程中，发现了该插件的很多问题，例如："),a("a",{attrs:{href:"https://github.com/chenzhutian/hexo-all-minifier/issues/93",target:"_blank",rel:"noopener noreferrer"}},[t._v("#93"),a("OutboundLink")],1),t._v("，所以暂时不再推荐使用！")])]),t._v(" "),a("p",[t._v("Stun 主题的源码中，"),a("code",[t._v("HTML")]),t._v(", "),a("code",[t._v("CSS")]),t._v(", "),a("code",[t._v("JavaScript")]),t._v(", "),a("code",[t._v("图片")]),t._v(" 等资源文件是没有打包压缩的。绝大部分的 Hexo 主题也是如此。庆幸的是，可以找到相关的插件来解决这一问题。")]),t._v(" "),a("p",[t._v("这里可以使用 "),a("a",{attrs:{href:"https://github.com/chenzhutian/hexo-all-minifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-all-minifier"),a("OutboundLink")],1),t._v(" 插件，它集成了 "),a("code",[t._v("html-minifier")]),t._v(", "),a("code",[t._v("clean-css")]),t._v(", "),a("code",[t._v("uglify")]),t._v(" 和 "),a("code",[t._v("imagemin")]),t._v("，只需安装和简单的配置即可使用。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装")]),t._v(" "),a("p",[t._v("在 Hexo 根目录下执行指令。")]),t._v(" "),a("blockquote",[a("p",[t._v("一定要在 Git Bash 中执行，在 Window 的 PowerShell 或 CMD 中执行可能会失败。建议养成在 Git Bash 中执行 npm 指令的好习惯！")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-all-minifier --save\n")])])]),a("p",[t._v("如果是 Mac 用户，你还需要执行下面的指令。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libtool automake autoconf nasm\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用")]),t._v(" "),a("p",[t._v("在 Hexo 根目录下的 "),a("code",[t._v("_config.yml")]),t._v(" 文件中，添加以下字段即可使用。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("all_minifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("如果你使用插件时"),a("strong",[t._v("遇到了问题")]),t._v(" 或者 想进行"),a("strong",[t._v("更详细的设置")]),t._v("，请查看插件的"),a("a",{attrs:{href:"https://github.com/chenzhutian/hexo-all-minifier/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("s",[t._v("安装这个插件后，不管使用哪一个主题，都可以生效，所以强烈推荐使用。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);