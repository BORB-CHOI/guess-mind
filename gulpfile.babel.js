import gulp from "gulp"; // gulp를 사용하기 위한
import sass from "gulp-sass"; // sass에서 css로 변환
import autoprefixer from "gulp-autoprefixer"; // Webkit 같은 반복작업을 하지 않게
import minifyCSS from "gulp-csso"; // 한줄 코딩화로 소스코드를 mini하게

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles/",
    // assets/scss/ 에서 확장자가 .scss인 모든 파일
    watch: "assets/scss/**/*.scss",
  },
};

// css 설정

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

// ??.scss파일 변화를 체크하고 styles.scss 파일만 컴파일하자
// 왜냐면 어차피 styles.scss파일에서 전부 의존성(import)을 만들어 줄거니까

const watchFile = () => {
  gulp.watch(paths.styles.watch, styles);
};

const dev = gulp.series([styles, watchFile]);

export default dev;
