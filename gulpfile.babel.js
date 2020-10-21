import gulp from "gulp"; // gulp를 사용하기 위한
import sass from "gulp-sass"; // sass에서 css로 변환
import autoprefixer from "gulp-autoprefixer"; // Webkit 같은 반복작업을 하지 않게
import browserify from "gulp-browserify"; // 브라우저에는 require 메소드가 정의되어 있지 않지만 Node.js는 정의되어 있습니다.
// Browserify를 사용하면 Node.js 에서 사용 하는 것과 동일한 방식으로 require 를 사용 하는 코드를 작성할 수 있습니다 .
import babel from "babelify"; // browserify를 변환하여 require뿐만 아니라 import, export도 사용할 수 있게 해주는 것
import minifyCSS from "gulp-csso"; // 한줄 코딩화로 소스코드를 mini하게
import del from "del"; // static 내부 파일을 삭제하기 위한 라이브러리

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles/",
    // assets/scss/ 에서 확장자가 .scss인 모든 파일
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js/",
    watch: "assets/js/**/*.js",
  },
};

// css 설정
// arrow로 함수를 만들면 return을 반드시 하게 되어 return을 따로 적지 않아도 되는듯.

const clean = () => del(["src/static"]);

const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));
};

// JS 설정

const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
      browserify({
        transform: [
          babel.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(gulp.dest(paths.js.dest));

// **.scss or **.js 파일 변화를 체크하고 styles.scss or main.js 파일만 컴파일하자
// 왜냐면 어차피 styles.scss파일에서 전부 의존성(import)을 만들어 줄거니까

const watchFile = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};

const dev = gulp.series(clean, styles, js, watchFile);

export const build = gulp.series(clean, styles, js);

export default dev;
