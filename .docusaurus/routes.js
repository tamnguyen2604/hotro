import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a78'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '657'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e38'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c8a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f70'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '780'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'dd1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '677'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '852'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8fa'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f79'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fa9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '69f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '2cc'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5cc'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c04'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd87'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '203'),
    routes: [
      {
        path: '/docs/bao-cao-theo-qd560',
        component: ComponentCreator('/docs/bao-cao-theo-qd560', 'cb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bat-tam-giam-tam-giu',
        component: ComponentCreator('/docs/bat-tam-giam-tam-giu', '7cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/vụ-án',
        component: ComponentCreator('/docs/category/vụ-án', '452'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tinbao',
        component: ComponentCreator('/docs/tinbao', 'cf6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/chuyen-an',
        component: ComponentCreator('/docs/vu-an/chuyen-an', 'b3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/dieu-tra-truy-to',
        component: ComponentCreator('/docs/vu-an/dieu-tra-truy-to', 'ee8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/nhan-an',
        component: ComponentCreator('/docs/vu-an/nhan-an', '309'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/nhap-vu-an',
        component: ComponentCreator('/docs/vu-an/nhap-vu-an', '48b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/tach-vu-an',
        component: ComponentCreator('/docs/vu-an/tach-vu-an', 'e5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/thi-hanh-an',
        component: ComponentCreator('/docs/vu-an/thi-hanh-an', '47f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/xet-xu-gdt-tt',
        component: ComponentCreator('/docs/vu-an/xet-xu-gdt-tt', 'bd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/xet-xu-phuc-tham',
        component: ComponentCreator('/docs/vu-an/xet-xu-phuc-tham', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vu-an/xet-xu-so-tham',
        component: ComponentCreator('/docs/vu-an/xet-xu-so-tham', '5b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f86'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
