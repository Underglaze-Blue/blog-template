---
title: Img&uPic
date: 2021-12-15
category: Share
tags:
  - Share
---
# 利用 GitHub 做图床

> 又双叒叕 白嫖了 GitHub

### 在 GitHub 上新建一个 repository

首先，在 `Github` 上新建一个专门用来放图片的 `repository`

![image-20211215234915158](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215234915158.png)

然后通过 GitHub Desktop 也好，命令行也好，来进行图片的上传，上传完成后，我们得到的图片链接如下

```sh
https://github.com/yourname/repository/blob/main/uPic/icon_256x256.png
```

### 配合 uPic 使用

使用 `uPic`(Mac) 快速上传到 `GitHub` 图床。



> 需要注意的是，这里的 token可不是你的密码，这里的 token 和 [actions](/_post/actions.md) 中的类似

![image-20211215235308604](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215235308604.png)

设置好图床之后，只需要根据快捷键或选择文件上传，即可获得 `markdown` 格式的链接或其他格式的链接

![image-20211215235351995](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215235351995.png)

上传完成之后，Markdown 格式的链接就自动的保存到你的剪贴板当中

### 配合 typora 使用

在 `typora` 的设置中开启图片自动上传，当在 typora 插入图片之后，自动将图片上传到图床

![image-20211215235447705](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/image-20211215235447705.png)



这样我们在 typora 中编写完 markdown 之后，就可以直接 复制粘贴到 博客下面使用，而不需要考虑怎么转换图片了，非常好用~~
