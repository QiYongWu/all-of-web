// 求绝对地址 https://www.baidu.com/
const newUrl = new URL('https://www.baidu.com/');

const baidu = document.createElement('a');
console.log(baidu)
baidu.href = newUrl.toString();
baidu.textContent = "访问百度";

baidu.href = 'https://www.apple.com.cn/';
const baiduDiv = document.getElementById('baidu-div');
baiduDiv.appendChild(baidu);

let a = `<a href = 'https://www.baidu.com/'>你好</a>`
baiduDiv.innerHTML = a;
