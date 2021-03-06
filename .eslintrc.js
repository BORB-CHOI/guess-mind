module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "import/no-cycle": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
  },
};

// 1. VSC extension에서 ellint 다운로드
// 2. yarn add eslint-config-airbnb-base eslint eslint-plugin-import || npm add eslint-config-airbnb-base eslint eslint-plugin-import
// 3. .eslintrc.js 파일 생성 후, 아래의 내용 그대로 붙여넣기.
// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true
//   },
//   extends: "airbnb-base",
//   globals: {
//     Atomics: "readonly",
//     SharedArrayBuffer: "readonly"
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: "module"
//   },
//   rules: {}
// };
// 4.  npm install eslint-config-prettier || yarn add eslint-config-prettier
// 5. .eslintrc.js파일내용 중, extends:의 값을 ["airbnb-base", "prettier"] 로 수정
// 6. 저장후 실행 하면 ESlint가 에러를 잡아줌.
// * 에러를 끄고싶을 땐 해당에러를 복사해서 파일의 rules에 객체로 선언하고 off처리. ex) rules: { "no-console": "off" }
