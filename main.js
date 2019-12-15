var endpoint = "https://www.jsonstore.io/0875281ff5b646ffee1d2a69378c88ec16d33ad93b0b7459468d70d4b0e65c62";

function geturl(){  //2
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;

        }
}

function getrandom() {  //4
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){ //3
    if (window.location.hash == ""){
        window.location.hash = getrandom();  //4
        document.getElementById("Field3").value = 'https://secure.ebookmd.com/'+window.location.hash;
    }
}
  
function send_request(url) {  //5
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){ //1
    var longurl = geturl();
    genhash();
    send_request(longurl);
}


var hashh = window.location.hash.substr(1)




if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];

        if (data != null) {
            //This takes the shortURL from Json,parses data and takes us to the original long url.
           window.location.href = data;
           
        }

    });
}

