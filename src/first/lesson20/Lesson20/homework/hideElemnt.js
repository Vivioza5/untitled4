let body = document.body;
let ul =document.querySelector("ul");
let li = document.querySelector('li');
{
    // function info(node) {
    //     console.log("------------");
    //     console.log("NodeType = " + node.nodeType);
    //     console.log("NodeName = " + node.nodeName);
    //     console.log("NodeValue = " + node.nodeValue);
    //     console.log("childNodes = " + node.childNodes.length);
    //     if (node.childNodes) {
    //         console.log("childNodes: " + node.childNodes.length);
    //     }
    //     if (node.children) {
    //         console.log("children: " + node.children.length);
    //     }
    //
    // }
    //
    // info(li);


    // for (let i = 0; i < body.childNodes.length; i++) {
    //     info(ul.childNodes[i]);
    //     // if (body.childNodes[i].nodeName === "IMG") {
    //     //     let img = body.childNodes[i];
    //     //     img.src = "24411464.jpg";
    //     // }
        let ob1 = document.querySelector('li');
        // let li=ob1.childNodes;
        console.log(body.firstElementChild);
        ob1.addEventListener('click',hideElement) ;

        // let ob2 = document.querySelector('ul');

        // ob2.onclick = hideElement;

        function hideElement() {
            // let li=this.parentNode.nodeName;
            // if (!body.firstElementChild) {
                if (ob1.style.display == 'none') {
                    ob1.style.display = 'block';
                } else {
                    ob1.style.display = 'none';
                }

            // }
        }


}

        // function f() {
        //
        //     if (!body.firstElementChild){
        //         if (this.style.display == 'block') {
        //             this.style.display = 'none';
        //         } else {
        //             this.style.display = 'block';
        //         }
        //     }

        // if (!body.firstElementChild) {
        //     body.appendChild(tr);//в конец
        // } else {
        //     body.insertBefore(tr, tbody.firstChild);//в начало
        // }

