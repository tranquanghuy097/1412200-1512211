function Validate()
{
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(name == '' || password == '')
        alert('Bạn phải điền username và password');
}

function addItem()
{
    var div = document.createElement('div');
    div.className = "carousel-item red white-text";
    div.href = "#a";
    var h = document.createElement('h2');
    h2.value = "Fifth panel";
    div.appendChild(h2);
    var list = document.getElementById('items');
    list.appendChild(div);
}

addItem();