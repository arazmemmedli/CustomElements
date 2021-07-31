class ListComponent extends HTMLElement {
    constructor() {
        super()
        let listShadow = this.attachShadow({mode: "open"});
        let listCssLink = document.createElement('link');
        listCssLink.setAttribute('rel','stylesheet')
        listCssLink.setAttribute('href','css/list.css')
        let listBox = document.createElement('ul');
        listBox.className = 'list-box';
        for(let i=1;i<4;i++){
            let listItem = document.createElement('li')
            listItem.className =  'list-item'
            listItem.innerHTML = `List Group Item ${i}`
            listBox.appendChild(listItem)
        }
        let list = document.createElement('div');
        list.className = 'list';
        list.appendChild(listBox)
        listShadow.appendChild(list)
        listShadow.appendChild(listCssLink)
    }
}
window.customElements.define('my-list',ListComponent)