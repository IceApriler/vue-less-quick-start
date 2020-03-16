# vue-less-quick-start

前端项目开发模板，将本项目克隆至本地，后快速启动前端开发。


## 创建新项目指南

### 一、创建仓库

在[`Gitlab`](http://211.90.39.175:8187/)创建一个新的项目，假设新项目名为`my-project`, 获取到项目的地址为`http://my-project.git`。

### 二、使用模板

#### 方式一
```bash
git clone http://211.90.39.175:8187/front_group/vue-less-quick-start.git my-project # 克隆至本地并重命名为my-project
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

### 三、安装依赖并使用脚本

```bash
npm install # 安装环境依赖
npm run dev # 或 npm run serve 进入开发模式
npm run build-pro # 编译并压缩生产包
npm run lint # 代码格式化
npm run lint-fix # fix代码格式
```
> 安装依赖后，照下面👇步骤进行配置。

### 四、配置项目

- [/README.md](/README.md) README.md，将vue-less-quick-start修改为项目名称。
- [/src/config/index](/src/config/index.js) 项目配置文件，配置baseApiUrl、projectName。
- [/vue.config.js](/vue.config.js) vue-cli配置文件，配置outputDir。

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

## 项目集成

- [vue: 官方文档](https://cn.vuejs.org/index.html) vue。
- [ant-design-vue: 官方文档](https://antdv.com/docs/vue/introduce-cn/) ant-design-vue UI组件库。
- [axios: Github](https://github.com/axios/axios) axios请求库。
- [moment: Github](https://github.com/moment/moment) 日期格式化库，`ant-design-vue`的日期组件需要。
- [nprogress: Github](https://github.com/rstacruz/nprogress) 页面进度条状态库。
- [prettier: Github](https://github.com/prettier/prettier) 代码美化工具。
