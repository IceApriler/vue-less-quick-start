# vue-less-quick-start

<!-- 构建帮助 start -->

该项目为`前端项目开发模板`，目录和通用工具已经构建好，可以快速启动前端开发。
本项目长期更新，使用`方式二`创建项目时记得先拉取最新代码。

## 开始创建新项目

### 一、创建仓库

在[`Gitlab`](http://211.90.39.175:8187/)创建一个新的项目，假设新项目名为`my-project`, 获取到项目的地址为`http://my-project.git`。

### 二、使用模板

#### 方式一
```bash
git clone http://211.90.39.175:8187/front_group/vue-less-quick-start.git my-project --depth=1 # 克隆至本地并重命名为my-project
cd my-project # 进入项目
git remote set-url origin http://my-project.git # 将my-project文件夹的远程地址修改为对应的新项目地址
git remote -v # 检查一下远程仓库是否正确
```

#### 方式二
```bash
git clone http://211.90.39.175:8187/front_group/vue-less-quick-start.git # 克隆vue-less-quick-start至本地
git clone http://my-project.git # 克隆新项目至本地
```
将`vue-less-quick-start`中的所有文件（**.git除外**），复制到新项目`my-project`中，然后将提交代码至远程仓库。

> 项目创建好后，照下面👇步骤进行配置。

### 三、配置项目

- [/src/config/index](/src/config/index.js) 项目配置文件，配置baseApiUrl、projectName。
- [/vue.config.js](/vue.config.js) vue-cli配置文件，配置outputDir。
- [/package.json](/package.json) 修改name。
- [/README.md](/README.md) README.md，将vue-less-quick-start修改为项目名称，并修改项目简介。
- 👏此时，项目已经配置完成了，删除你现在正在浏览的`开始创建新项目(构建帮助)`的内容后，就可以自由修改本readme了，正式开始新的项目开发🤨。

<!-- 构建帮助 end -->

## 使用须知

本文档包括以下几个部分：

- 安装并运行
- 开发指南
- 上线指南（切记每次更新版本日志）
- 测试指南（测试人员须知）
- 目录规范（前端开发人员须知）
- 项目技术栈

👉开发前请阅读[前端项目规范](./docs/前端项目规范.md)。

## 安装并运行

```bash
npm install # 安装环境依赖
npm run dev # 或 npm run serve 进入开发模式
```

## 开发指南

```bash
npm run lint # 代码格式化
npm run lint-fix # fix代码格式
npm run build-dev # 编译并压缩开发包
npm run build-qa # 编译并压缩测试包
```

## 上线指南

更新版本号：修改[/package.json](/package.json)中的`version`字段。
更新版本日志：修改[/changeLog.md](/changeLog.md)。
```bash
npm run build-pro # 编译并压缩生产包
```
> 将编译出的`dist-**`压缩后部署到服务端。

## 测试指南

- 安装并运行。
- 修改[/src/config](/src/config/index.js)中的baseApiUrl，可以切换环境。

## 目录规范

- [/src/api](/src/api/index.js) api集合，request封装。
- [/src/assets](/src/assets/) 静态资源目录，包括字体、css、images等。
- [/src/config](/src/config/index.js) 项目配置。
- [/src/libs](/src/libs/) 引入的第三方库，不过建议都通过npm引入。
- [/src/utils](/src/utils/) 自己封装的工具方法。
- [/src/components](/src/components/) vue独立组件，适合抽离具有复用价值的组件。
- [/src/router](/src/router/) vue-router路由配置。
- [/src/store](/src/store/) vuex全局状态管理。
- [/src/views](/src/views/) vue页面。

## 项目技术栈

- [vue: 官方文档](https://cn.vuejs.org/index.html) vue。
- [ant-design-vue: 官方文档](https://antdv.com/docs/vue/introduce-cn/) ant-design-vue UI组件库。
- [axios: Github](https://github.com/axios/axios) axios请求库。
- [moment: Github](https://github.com/moment/moment) 日期格式化库，`ant-design-vue`的日期组件需要。
- [nprogress: Github](https://github.com/rstacruz/nprogress) 页面进度条状态库。
- [prettier: Github](https://github.com/prettier/prettier) 代码美化工具。

## 注意事项

- [css中使用webpack别名(alias)](https://www.jianshu.com/p/ef565d7cce71)
  - webpack中设置了别名，css中想使用需要在路径前添加`~`。

## VSCode插件安装

### 一定安装

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 
  - Vue语法高亮、代码提示、Emmet、格式化等功能。
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 
  - 可以格式化JS、JSON、Vue、Less、SCSS等。
  - facebook、react、babel、webpack推荐。
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
  - webpack可以配置`@`别名，但是在代码中使用时没有代码提示，使用这个插件可以实现路径补全。
- [别名路径跳转](https://marketplace.visualstudio.com/items?itemName=lihuiwang.vue-alias-skip)
  - 虽然使用`Path Autocomplete`可以实现路径补全，但是无法使用`ctrl + 点击`或者`command + 点击`跳转到该文件，使用这个插件可以实现。

### 推荐安装

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)git管理插件
  - 每一行代码旁边都会显示代码提交人、提交时间和message信息，可以快捷回溯代码。
  - 点击侧边栏GitLens图标可以查看代码历史。
  - 可以操作查看代码push记录。
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
  - 支持注释高亮等。
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
  - 开始闭合标签匹配、开始闭合大括号匹配。

### 项目模板

- 基于`vue-less-quick-start`创建。
