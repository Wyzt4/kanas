// app/page.js
export default function Home() {
    if (typeof window !== 'undefined') {
      // 重定向到你放在 public/ 下的静态页面
      window.location.replace('/index.html');
    }
    return null;
  }
  