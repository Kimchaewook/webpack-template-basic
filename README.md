# Webpack
- 모듈 번들러라고 불리는데 웹 서비스를 구성하는 파일들을 해석한 다음 하나의 파일로 합쳐주는 역활을 해줍니다.

## webpack 설치 방법
```js 
 npm i -D webpack webpack-cli webpack-dev-server 
```

## Loader

- wabpack는 모든 파일을 모듈로 본다. webpack는 javascript밖에 읽지 못해서 HTML CSS Images를 웹팩에서 읽을 수 있게 변환해줘야 하는데 이 역활이 Loader다.

- test는 모듈을 인식하는 패턴
- use는 loader, option를 설정해서 모듈을 처리할 때 어떻게 처리할지 구체적으로 정할 수 있다.

### css bundler
- css 번들링 하기 위해서는 css-lorder, style-lorder를 함께 사용해준다. 
1.  css-loader는 css를 자바스크립트 코드로 변경해주는거고
1.  style-loader는 javascript로 변경된 css를 돔에 추가하기 위해서 필요하다.
1. sass-loader sass

## Postcss
- CSS 후처리기이며 CSS 작성을 편하게 만들어주는 javascript 도구입니다.

- postcss 설치하는 방법
```js 
npm i -D postcss postcss-loader
```

## Babel
- ES6버전을 구 버전 ES5로 변화시켜줍니다.

- babel 설치하는 방법

```js
npm i -D @babel/core
npm i -D @babel/plugin-transform-runtime
npm i -D @babel/preset-env
```




```js
 module: {
    rules: [
      {
        test: /\.s?css$/, // /\.s?css$/ 정규표현식 css파일과 scss파일을 모두 매칭을 할수 있다.
        use: [ 
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
```

