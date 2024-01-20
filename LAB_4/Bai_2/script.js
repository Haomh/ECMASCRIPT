
const axios = require('axios');

async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

async function fetchUrlsParallel(urls) {
    const results = await Promise.all(urls.map
        (function(url) {
            return axios.get(url);
        }));
}
return results;


// Điểm Giống:
// Thư viện Sử dụng:
// Cả hai đoạn mã đều sử dụng thư viện Axios để thực hiện các yêu cầu HTTP.
// Xử lý Bất đồng bộ:
// Cả hai hàm đều được thiết kế để xử lý các thao tác bất đồng bộ bằng cú pháp async/await.

// Điểm Khác Nhau:
// Cách Triển Khai:
// Trong fetchUrls, sử dụng vòng lặp for...of để lặp qua từng URL và lấy chúng một cách tuần tự.
// Trong fetchUrlsParallel, sử dụng hàm map kết hợp với Promise.all để lấy tất cả các URL đồng thời và song song.

// Xử Lý Lỗi:
// Trong fetchUrls, lỗi được xử lý cho mỗi yêu cầu một cách riêng lẻ. Nếu có lỗi khi lấy một URL, nó sẽ từ chối promise tương ứng và hàm tổng thể sẽ xử lý lỗi từng cái.
// Trong fetchUrlsParallel, hàm không có xử lý lỗi cụ thể. Nếu bất kỳ promise nào trong mảng bị từ chối, promise tổng thể được trả về bởi Promise.all cũng sẽ bị từ chối. Cần thêm xử lý lỗi tùy thuộc vào yêu cầu cụ thể.

// Giá trị Trả về:
// fetchUrls trả về một mảng các phản hồi (hoặc lỗi) tương ứng với mỗi URL theo thứ tự chúng được cung cấp.
// fetchUrlsParallel cũng trả về một mảng các phản hồi (hoặc lỗi), nhưng thứ tự có thể không tương ứng với thứ tự các URL đầu vào do thực hiện đồng thời.

// Cú Pháp:
// fetchUrls sử dụng vòng lặp for...of một cách rõ ràng để lặp qua các URL, mang lại phong cách truyền thống hơn.
// fetchUrlsParallel sử dụng hàm map kết hợp với Promise.all để có cú pháp ngắn gọn và phong cách lập trình hàm (functional programming).