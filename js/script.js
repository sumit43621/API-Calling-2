
function getUserInfo(object, cbfn){
    
    let xhr = new XMLHttpRequest();
    xhr.open(object.method, object.url);
    xhr.send();
    
    xhr.onload = function(){
        // console.log(xhr.responseText);
        cbfn(xhr.responseText);
        
    }


}

getUserInfo({url: 'https://jsonplaceholder.typicode.com/users', method:"GET"}, function(response){
    console.log(response);
    response = JSON.parse(response);
    var tr = '';
    response.forEach((currentElement, index, arr) => {
        console.log(currentElement);
        tr = tr + `<tr>
                        <th scope="row">`+ currentElement.id +`</th>
                        <td>`+ currentElement.name +`</td>
                        <td>`+ currentElement.username +`</td>
                        <td>`+ currentElement.email +`</td>
                        <th scope="row">`+ currentElement.address +`</th>
                        <td>`+ currentElement.phone +`</td>
                        <td>`+ currentElement.website +`</td>
                        <td>`+ currentElement.company +`</td>
                    </tr>`
    })

    console.log(tr);

    document.querySelector('table > tbody').innerHTML = tr;
});