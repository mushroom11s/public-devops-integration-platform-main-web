# public-devops-integration-platform-main-web

公共开发平台集成导航工具

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


####  docker build ./ --rm -t com.mushroom11s.www/public-devops-integration-platform-main-web:0.0.1-SNAPSHOT

#### docker run --name public-devops-integration-platform-main-web -d -p 8080:80  --restart unless-stopped com.mushroom11s.www/public-devops-integration-platform-main-web:0.0.1-SNAPSHOT

## 更新菜单
菜单数据: public/menu.json
菜单数据地址修改：src/api/menu-data.js

数据解析
group_title 菜单组名称
submenu 子菜单
index 路由地址 （目录节点无用）
title 菜单显示标题
items 菜单项列表

更新步骤
修改远程json数据
重新访问页面