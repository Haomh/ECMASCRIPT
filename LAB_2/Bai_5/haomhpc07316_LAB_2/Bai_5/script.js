let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";

function generateteTableHeader(headerTitle){

    let html = ``;
    headerTitle.forEach(element => {
        html += `<th>${element}</th>`
    });
    return `<thead><tr>${html}</tr></thead>`;
}
let headrtTitles = [
    'STT',
    'Ảnh đại diện',
    'Họ và tên',
    'Ngày sinh',
];

function generateteTableRowStudents(data){

    return `
    <table>
    <tr>
                <td>${data.id}</td>
                <td><img height= "50" src="${data.avatar}" alt="" srcset=""></td>
                <td>${data.name}</td>
                <td>${data.createAt}</td>
            </tr>
            </table>
    `;

}

let object = {
    id: 1,
    name: "Phát",
    avatar: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-hai-nhat-qua-dat.jpg",
    createAt: "sống tại Cần Thơ",
}

console.log(document.write(generateteTableRowStudents(object)));

function generateteTable (header, data){
    let html = ``;

    let headerRow = generateteTableHeader(header);

    data.forEach(element => {
        html += generateteTableRowStudents(element);
    });

    return `<table>${headerRow}<tbody>${html}</tbody></table>`;
}


fetch(API_URL)
    .then(function (response){
        console.log(response);
        response.json().then(function (data){
            console.log(data);
            let dataFaker = [{
                id: 1,
                name: "bánh bao thịt ",
                avatar: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-hai-nhat-qua-dat.jpg",
                createAt: " bạc liêu",
            }]
            let headers = [
                "ID",
                "IMG",
                "NAME",
                "CREATE DAY",
            ]
            let app = document.getElementById('app' +
                '');
            app.innerHTML = generateteTable(headers, dataFaker);
        });
    })
    .catch(function (response){
        console.log("Error: \n"+ response);
    });