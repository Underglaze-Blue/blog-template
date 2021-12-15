---
title: Markdown 语法
date: 2021-12-15
category: Share
tags:
  - Share
---
# Markdown 语法

<!-- more -->

## 标题

Markdown 语法：

```
# 第一级标题 `<h1>` 
## 第二级标题 `<h2>` 
###### 第六级标题 `<h6>` 
```

效果如下：

# 第一级标题 `<h1>` 
## 第二级标题 `<h2>` 
###### 第六级标题 `<h6>` 



## 强调

Markdown 语法：

```
*这些文字会生成`<em>`*
_这些文字会生成`<u>`_

**这些文字会生成`<strong>`**
__这些文字会生成`<strong>`__
```
效果如下：

*这些文字会生成`<em>`*
_这些文字会生成`<u>`_

**这些文字会生成`<strong>`**
__这些文字会生成`<strong>`__


## 列表

### 无序列表

Markdown 语法：

```
* 项目一 无序列表 `* + 空格键`
* 项目二
	* 项目二的子项目一 无序列表 `TAB + * + 空格键`
	* 项目二的子项目二
```

效果如下：

* 项目一 无序列表 `* + 空格键`
* 项目二
	* 项目二的子项目一 无序列表 `TAB + * + 空格键`
	* 项目二的子项目二

### 有序列表

Markdown 语法：

```
1. 项目一 有序列表 `数字 + . + 空格键`
2. 项目二 
3. 项目三
	1. 项目三的子项目一 有序列表 `TAB + 数字 + . + 空格键`
	2. 项目三的子项目二
```

效果如下：

1. 项目一 有序列表 `数字 + . + 空格键`
2. 项目二 
3. 项目三
	1. 项目三的子项目一 有序列表 `TAB + 数字 + . + 空格键`
	2. 项目三的子项目二


## 图片

Markdown 语法：

```
![图片描述](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/logo.png)
格式: ![图片描述](url)
```

效果如下：

![图片描述](https://cdn.jsdelivr.net/gh/Underglaze-Blue/git-img@main/uPic/logo.png)


## 链接

Markdown 语法：

```
email <example@example.com>
[GitHub](http://github.com)
自动生成连接  <http://www.github.com/>
```

效果如下：

Email 连接： <example@example.com>
[连接标题Github网站](http://github.com)
自动生成连接像： <http://www.github.com/> 这样

## 区块引用

Markdown 语法：

```
某某说:
> 第一行引用
> 第二行费用文字
```

效果如下：

某某说:
> 第一行引用
> 第二行费用文字

## 行内代码

Markdown 语法：

```
像这样即可：`<addr>` `code`
```

效果如下：

像这样即可：`<addr>` `code`

## 多行或者一段代码

Markdown 语法：

	```js
	function fancyAlert(arg) {
	  if(arg) {
	    $.facebox({div:'#foo'})
	  }

	}
	```


效果如下：

```js
function fancyAlert(arg) {
	if(arg) {
		$.facebox({div:'#foo'})
	}

}
```

## 表格

Markdown 语法：

```
第一格表头 | 第二格表头
--------- | -------------
内容单元格 第一列第一格 | 内容单元格第二列第一格
内容单元格 第一列第二格 多加文字 | 内容单元格第二列第二格
```

效果如下：

第一格表头 | 第二格表头
--------- | -------------
内容单元格 第一列第一格 | 内容单元格第二列第一格
内容单元格 第一列第二格 多加文字 | 内容单元格第二列第二格


## 删除线

Markdown 语法：

	加删除线像这样用： ~~删除这些~~

效果如下：

加删除线像这样用： ~~删除这些~~

## 分隔线

以下三种方式都可以生成分隔线：

	***

	*****

	- - -

效果如下：

***

*****

- - -


