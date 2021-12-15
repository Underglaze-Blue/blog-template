---
title: Share
date: 2021-12-14
category: Share
tags:
  - Share
---

# 如何白嫖一个博客网站

## 原理

众所周知，GitHub 提供了一个 网页寄存服务叫 [GitHub Pages](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site) 

> **GitHub Pages** 是 GitHub提供的一个网页寄存服务，于 2008 年推出 。可以用于存放静态网页，包括博客、项目文档甚至整本书。

我们可以利用  GitHub Pages 来用作我们的博客网站



## 实现

>  以下都以 [VuePress](https://vuepress.vuejs.org/zh/) 来举例说明，如何一步步实现一个个人博客

### 第一步 创建基础内容

通过 VuePress 的官方文档-> [快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html)一篇 先搭建一个简单的 VuePress 文档

1. 创建一个目录，用来存放你的博客

   ```sh
   mkdir vuepress-starter && cd vuepress-starter
   ```

2. 通过包管理器初始化，例如 `yarn` `npm` 等

   ```sh
   yarn init # npm init
   ```

   <img src="https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215165304734.png" alt="image-20211215165304734"  />

3. 安装 VuePress

   ```sh
   yarn add -D vuepress # npm install -D vuepress
   ```

   ![image-20211215165615568](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215165615568.png)

4. 创建一个文档

   ![image-20211215165738071](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215165738071.png)

5. 在 packag.json 中添加一个 script，[npm script 使用指南--阮一峰](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

   这里的写法是官方推荐如此，我个人更喜欢去掉 *docs*

   ```json
   {
     "scripts": {
       "dev": "vuepress dev docs",
       "build": "vuepress build docs"
     }
   }
   ```

   <img src="https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215170230171.png" alt="image-20211215170230171"  />

6. 启动本地服务试试

   ```sh
   yarn dev # npm run dev
   ```

   ![image-20211215170833506](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215170833506.png)

此时 就完成了一个简单的博客初始状态的搭建，但是界面看着有点丑丑的~  此时就可以使用 VuePress 的另一个能力 --- [主题](https://vuepress.vuejs.org/zh/theme/)

> 其实这里还有一个重要的配置，是基础的配置，会放在主题里面，跟主题一块说明

### 第二步 配置一个好看的主题

~~众所周知~~,也不一定知道,基础的东西都是不一定好看的,想要好看的,就需要折腾,配置主题就是个折腾的过程~ ~ 

1. 先通过万能的搜索引擎找一个~~免费的~~（满意的）的主题，找到它的 GitHub 地址，然后看看说明，[vuepress-theme-maker](https://github.com/80maker/vuepress-theme-maker)

   <img src="https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215222145476.png" alt="image-20211215222145476"  />

   然后看一下安装过程

   ```sh
   npm i vuepress-theme-maker -D
   # OR yarn add vuepress-theme-maker -D
   ```

   ```js
   // .vuepress/config.js
   module.exports = {
     theme: 'vuepress-theme-maker',
     themeConfig: {
       // Please head documentation to see the available options.
     }
   }
   ```

2. 根据安装已经使用说明来进行操作

   <img src="https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215222629515.png" alt="image-20211215222629515"  />

   主题安装完成之后，样式就改变了，但是还不是很完全，比如 logo 图片没显示，首页也没内容之类的……

3. 根据主题配置说明，进行自定义的配置

   - [主题基础配置](https://80shuo.com/post/2021/01/23/maker-basic.html)
   - [VuePress基础配置](https://vuepress.vuejs.org/zh/config/)
   - 有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。

   我们根据主题配置以及 VuePress 配置完成后

   ```js
   module.exports = {
     title: 'TEST',
     description: '热爱我的热爱',
     head: [
       ['link', { rel: 'icon', href: '/favicon.ico' }]
     ],
     theme: 'vuepress-theme-maker',
     themeConfig: {
       lastUpdated: true,
       // 网站logo
       logo: 'https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/logo.png',
       nav: [
         { text: 'Home', link: '/' },
       ],
       blog: {
         directories: [
           {
             id: 'post',
             dirname: '_post',
             path: '/',
             itemPermalink: '/post/:year/:month/:day/:slug.html',
             frontmatter: { title: '' },
             pagination: {
               perPagePosts: 10,
               prevText: '',
               nextText: ''
             },
           }
         ],
         frontmatters: [
           {
             id: "tag",
             keys: ['tag', 'tags'],
             path: '/tags/',
             frontmatter: { title: 'Tag' },
             pagination: {
               lengthPerPage: 10,
               prevText: '',
               nextText: ''
             }
           },
           {
             id: "category",
             keys: ['category', 'categories'],
             path: '/categories/',
             frontmatter: { title: 'Category' },
             pagination: {
               lengthPerPage: 10,
               prevText: '',
               nextText: ''
             }
           }
         ]
       },
     },
   }
   ```

   <img src="https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215224231240.png" alt="image-20211215224231240"  />

   得到了这样一个页面，这里在 blog 这个配置项里面有一条

   ```js
   blog: {
     // ...
         directories: [
           {
             // ...
             dirname: '_post',
            // ...
           }
         ]
     // ...
   }
   ```

   `_post` 指定了目录文件夹名称，那么我们就可以创建这么一个文件夹，同时在这个文件夹下来通过 markdown 来写我们的博客

### 第三步 编写博客

1. 博客的编写

   -  [markdown 语法的使用](/_post/markdown.md)
   - [主题页面配置](https://80shuo.com/post/2021/01/25/maker-page.html)

2. 编写完成后效果预览

   ![image-20211215230137954](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215230137954.png)

   ![image-20211215225933520](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215225933520.png)

   ![image-20211215230113101](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215230113101.png)

此时 ，基本的页面配置已经完成了，还有一些部分有那么一点问题

- Last-updated 没有显示更新时间啊
  - [最后更新时间](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4)
- Link 显示的也没有域名
  - 需要在主题配置里面配置 hostname 的域名名称

### 第四步白嫖发布到 GITHub Pages

1. 在 GitHub 创建一个仓库来存放你的博客

2. 发布你 **打包好的**静态文件到仓库里，这里我写了一个脚本来进行操作

   ```sh
   #!/usr/bin/env sh
   
   set -e
   npm run build
   
   cd dist
   
   git init
   git add -A
   git commit -m 'deploy'
   
   git push -f git@github.com:yourname/repository.git master:gh-pages
   
   cd -
   
   ```

   其中 push 这一步操作 换成你的仓库地址就好 

   然后这里还有一个问题是 vuepress 的配置，默认打包后的文件在 `.vuepress` 文件夹下，这里我们可以修改为自定义的目录

   ```js
   module.exports = {
     dest: 'dist'
   }
   ```

   这样就满足了发布脚本的要求，然后在 `package.json` 中添加一个执行脚本

   ```json
    "scripts": {
       "dev": "vuepress dev docs",
       "build": "vuepress build docs",
       "deploy": "sh build.sh"
     },
   ```

   通过命令行执行

   ```sh
   yarn deploy # npm run deploy
   ```

   等待发布完成后，在 GitHub 的仓库设置来配置 Pages

   ![image-20211215231639669](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215231639669.png)

   ![image-20211215231519143](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215231519143.png)

至此，一个白嫖的 博客就已经完成了 ~~ 

但是每次写完都需要手动打包，上传，是不是太麻烦了~ 

所以就有了白嫖之上的”白嫖”---- [使用 GitHub Actions 自动部署博客](/_post/actions.md)
