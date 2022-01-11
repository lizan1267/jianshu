import { createGlobalStyle } from 'styled-components'
import iconFont1 from './iconfont.woff2?t=1641786402419'
import iconFont2 from './iconfont.woff?t=1641786402419'
import iconFont3 from './iconfont.ttf?t=1641786402419'
// 写全局样式
//css reset
export const GlobalStyleIconFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url(${iconFont1}) format('woff2'),
        url(${iconFont2}) format('woff'),
        url(${iconFont3}) format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
