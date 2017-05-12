# Функция для минификации картинок

Функция читает аргумент командной строки `--images-src` который должен быть [glob pattern](https://github.com/isaacs/node-glob)

## Пример подключения

```ecmascript 6

//gulpfile.js
const gulp = require('gulp');

const {minifyImagesCli} = require('gulp-minify-images');

gulp.task('minify-images', minifyImagesCli);

```
```json
//package.json
"scripts": {
  "minify-images": "gulp minify-images"
}
```

после этого можно вызывать команду

`npm run minify-images -- --images-src="glob"`

## Примеры:

`npm run minify-images -- --images-src="./**/*.{jpg,svg}"`

собирает все картинки с расширением `.jpg` и `.svg`, минифает и перезаписывает их

`npm run minify-images -- --images-src="./test/static/foo.jpg"`

берет картинку по данному пути, минифаит её и перезаписывает

## История изменений

###1.0.1

* Установили жесткие зависимости на gulp-imagemin и imagemin

###1.0.0

* первичный релиз
