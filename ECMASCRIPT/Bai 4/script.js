const API_URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then(function(Response){
    // console.log(Response.json());
    Response.json().then(function(data){
        let app = document.getElementById('PC07316');
        let list = data.data;
        let STT = 1;
    

        let html =`<table class="table">
        <tr>
        <th>STT</th>
        <th>Nation</th>
        <th>Year</th>
        <th>Population</th>
        </tr>`
        list.forEach(element => {
            console.log(element);
            html += `<tr>
            <td>${STT}</td>
            <td>${element.Nation}</td>
            <td>${element.Year}</td>
            <td>${element.Population}</td>
            </tr>`;
            STT++;
        });
        html += `</table>`
        app.innerHTML = html;
        console.log(data.data);
    });

  })
  .catch(function(error){

  })



fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
  .then(function(Response){
    // console.log(Response.json());
    Response.json().then(function(data){
        let app = document.getElementById('PC07314');
        let list = data;
        let STT = 1;
    

        let html =`<table class="table">
        <tr>
        <th>STT</th>
        <th>Hình</th>
        <th>Họ & tên</th>
        <th>Ngày tạo</th>
        </tr>`
        list.forEach(element => {
            console.log(element);
            html += `<tr>
            <td>${STT}</td>
            <td><img src="${element.avatar}" alt=""></td>
            <td>${element.name}</td>
            <td>${element.createdAt}</td>
            </tr>`;
            STT++;
        });
        html += `</table>`
        app.innerHTML = html;
        console.log(data.data);
    });

  })
  .catch(function(error){

  })