import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hotro/__docusaurus/debug',
    component: ComponentCreator('/hotro/__docusaurus/debug', '2b2'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/config',
    component: ComponentCreator('/hotro/__docusaurus/debug/config', '760'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/content',
    component: ComponentCreator('/hotro/__docusaurus/debug/content', '09f'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/globalData',
    component: ComponentCreator('/hotro/__docusaurus/debug/globalData', '7f9'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/metadata',
    component: ComponentCreator('/hotro/__docusaurus/debug/metadata', '6b3'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/registry',
    component: ComponentCreator('/hotro/__docusaurus/debug/registry', '363'),
    exact: true
  },
  {
    path: '/hotro/__docusaurus/debug/routes',
    component: ComponentCreator('/hotro/__docusaurus/debug/routes', 'bd4'),
    exact: true
  },
  {
    path: '/hotro/markdown-page',
    component: ComponentCreator('/hotro/markdown-page', 'e4d'),
    exact: true
  },
  {
    path: '/hotro/docs',
    component: ComponentCreator('/hotro/docs', '81e'),
    routes: [
      {
        path: '/hotro/docs/bao-cao-theo-qd560',
        component: ComponentCreator('/hotro/docs/bao-cao-theo-qd560', '148'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/bat-tam-giam-tam-giu',
        component: ComponentCreator('/hotro/docs/bat-tam-giam-tam-giu', '28d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/category/vụ-án',
        component: ComponentCreator('/hotro/docs/category/vụ-án', 'a99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/tinbao',
        component: ComponentCreator('/hotro/docs/tinbao', '54b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/chuyen-an',
        component: ComponentCreator('/hotro/docs/vu-an/chuyen-an', '340'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/dieu-tra-truy-to',
        component: ComponentCreator('/hotro/docs/vu-an/dieu-tra-truy-to', 'a57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/nhan-an',
        component: ComponentCreator('/hotro/docs/vu-an/nhan-an', '6b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/nhap-vu-an',
        component: ComponentCreator('/hotro/docs/vu-an/nhap-vu-an', '3be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/tach-vu-an',
        component: ComponentCreator('/hotro/docs/vu-an/tach-vu-an', 'f61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/thi-hanh-an',
        component: ComponentCreator('/hotro/docs/vu-an/thi-hanh-an', '3bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/xet-xu-gdt-tt',
        component: ComponentCreator('/hotro/docs/vu-an/xet-xu-gdt-tt', '418'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/xet-xu-phuc-tham',
        component: ComponentCreator('/hotro/docs/vu-an/xet-xu-phuc-tham', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hotro/docs/vu-an/xet-xu-so-tham',
        component: ComponentCreator('/hotro/docs/vu-an/xet-xu-so-tham', '8dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hotro/',
    component: ComponentCreator('/hotro/', '22f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
