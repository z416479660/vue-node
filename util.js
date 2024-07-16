// const timestampInMilliseconds = Date.now();
// // sleep(2000)
// console.log(timestampInMilliseconds);
// sleep(2000);
// console.log(timestampInMilliseconds);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function example() {
    console.log('Start');
    const timestampInMilliseconds = Date.now();
  
    // 睡眠 3 秒
    // await sleep(3000);
  
    console.log(timestampInMilliseconds);
// sleep(2000);

    // 睡眠 3 秒
    await sleep(3000);

    console.log('End');
    const timestampInMilliseconds1 = Date.now();
    console.log(timestampInMilliseconds1);
    console.log(timestampInMilliseconds1/1e12 , timestampInMilliseconds/1e12)
    console.log(timestampInMilliseconds1/1e12 > timestampInMilliseconds/1e12)
    console.log(timestampInMilliseconds/(365.25 * 24 * 60 * 60 * 1000))
}
  
// example();
  


const https = require('https');


// 异步请求示例
const request = https.get('https://www.baidu.com/', (response) => {
    // 处理响应
    console.log(10)
    sleep(5000)
    console.log(100)
    response.on('data', (data) => {
        // console.log(data.toString());
        console.log('ok')
    });
    console.log('Request sent, continuing111111111111111111111111111111111111111...');
});

// 继续执行其他代码
console.log('Request sent, continuing...');

// 请求完成后会触发回调函数处理响应数据
