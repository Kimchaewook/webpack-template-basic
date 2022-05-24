// import
const path = require('path'); // node.js에서 기본적은 제공하는 전역 모듈
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물 (번들)을 반환하는 설정
  output: {
    // __dirname : 해당하는 파일에 실제 경로를 나타내는 node.js 전역 변수
    // path: path.resolve(__dirname, 'dist'), // 실제 경로에 폴더('dist': 폴더 이름)를 생성
    // filename: 'main.js', // 폴더 안에 파일 생성
    clean: true // 새롭게 build 명령을 돌렸을 때 기존에 필요하지 않은 내용들은 제거해주고 결과물이 만들어준다.

  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css 확장자를 가지고있는 모든 css파일을 매칭을해준다.
        use: [
          // javascript로 변경된 css를 돔에 추가하기 위해서 
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({ // 생성자 함수 플러그인 첫번쨰 아이템으로 사용이 된다.
      template: './index.html' // 상대 경로
    }),
    new CopyPlugin({ // static 안에 들어 있는 내용이 복사가 되서 (dist)폴더 안에 들어간다
      patterns: [
        {from: 'static'} // static 만들어 놓은 폴더
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}