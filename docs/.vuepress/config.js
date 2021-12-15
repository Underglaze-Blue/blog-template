/*
 * @Author: 高大鹏
 * @Date: 2021-12-14 10:12:48
 * @LastEditTime: 2021-12-16 00:01:44
 * @LastEditors: 高大鹏
 * @Description:
 * @FilePath: /blog-template/docs/.vuepress/config.js
 */
module.exports = {
  base: '/blog-template/',
  dest: 'dist',
  title: 'TEMPLATE',
  // 网站描述
  description: '热爱我的热爱',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  theme: require.resolve('../../vuepress-theme-maker'),
  themeConfig: {
    lastUpdated: true,
    // 网站logo
    logo: '/images/logo.png',
    // Search 提示
    searchPlaceholder: '找什么呢~ ~',
    // Search 建议列表条目数
    searchMaxSuggestions: 10,
    nav: [
      // 内部链接
      { text: 'Home', link: '/' },
      // 多级菜单
      {
        text: 'Share',
        link: '/_post/share.md'
      },
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