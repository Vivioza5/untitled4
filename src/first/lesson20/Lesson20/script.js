let body = document.body;

function info(node) {
    console.log("------------");
    console.log("NodeType = " + node.nodeType);
    console.log("NodeName = " + node.nodeName);
    console.log("NodeValue = " + node.nodeValue);
    console.log("childNodes = " + node.childNodes.length);
    if (node.childNodes) {
        console.log("childNodes: " + node.childNodes.length);
    }
    if (node.children) {
        console.log("children: " + node.children.length);
    }
}
info(body);
for (let i = 0; i < body.childNodes.length; i++) {
    info(body.childNodes[i]);
    if (body.childNodes[i].nodeName === "IMG") {
        let img = body.childNodes[i];
        img.src = "24411464.jpg";
    }
}

let tbody = document.querySelector("tbody");
let btnAdd = document.querySelector(".plus");
let count = 0;
btnAdd.addEventListener("click", function (event) {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td0");
    td0.appendChild(document.createTextNode(++count));
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode("td1"));
    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode("td2"));
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    let div = document.createElement("div");
    div.addEventListener("click", function (event) {
        let tr = this.parentNode.parentNode;
        tbody.removeChild(tr);
    });
    div.classList.add("minus");
    td3.appendChild(div);
    tr.appendChild(td3);
    //tbody.appendChild(tr);

    if (!tbody.firstElementChild) {
        tbody.appendChild(tr);//в конец
    } else {
        tbody.insertBefore(tr, tbody.firstChild);//в начало
    }

});
