# Vue 3 + TypeScript + Vite + Naive UI

## 依赖安装

1、尤大推荐的神器unplugin-vue-components,解放双手!以后再也不用呆呆的手动引入(组件,ui(Element-ui)库,vue hooks等)
```
npm install unplugin-vue-components -D
```
2、unplugin-auto-import是一个按需自动导入Vue/Vue Router等官方Api的插件；作者是Vite生态圈大名鼎鼎的Anthony Fu
使用此插件后，不需要手动编写import {xxx} from vue这样的代码了，提升开发效率。
```
npm add unplugin-auto-import -D
```

3、安装xicons图标库，根据自己的需求来安装,以下是安装ionicons5图标库
```
npm i -D @vicons/ionicons5

import { GameControllerOutline } from '@vicons/ionicons5'

<n-icon size="40" color="green" depth="4" :component="GameControllerOutline" />
```

4、安装路由
```
npm install vue-router@4
```

5、安装scss
```
npm install sass sass-loader -d
```