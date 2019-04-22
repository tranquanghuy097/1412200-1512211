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
    div.className = "caption left-align";
    var img = document.createElement('img');
    img.src = "img/1.jpg";
    var li = document.createElement('li');
    div.appendChild(img);
    li.appendChild(div);
    var slide = document.getElementById("slides");
    slide.appendChild(li);
}

addItem();