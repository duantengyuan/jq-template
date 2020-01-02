# 营销页template 移动端

## 开发命令

- 本地开发 `npm run dev`

- 编译 `gulp build`

- 预览 `gulp`

## 去掉rem

- 删除main.js里的js代码

- yarn remove gulp-rem
- yarn remove gulp-autoprefixer

- 删掉gulpfile里的rem的东西

```
const rem = require('gulp-rem');
const autoprefixer = require ( 'gulp-autoprefixer' );

.pipe(autoprefixer({ cascade : true ,remove : true })).pipe(rem({ width: 375, unit: 'px' }))

```
