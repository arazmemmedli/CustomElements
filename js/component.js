class CustomPanel extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' });
        let link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', ' css/panel.css')
        let heading = document.createElement('div')
        let head = document.createElement('h4');
        let body = document.createElement('div')
        let desc = document.createElement('p');
        head.innerHTML = "Heading"
        heading.className = "head"
        body.className = "body"
        desc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        body.appendChild(desc);
        heading.appendChild(head);
        shadow.appendChild(heading);
        shadow.appendChild(body);
        shadow.appendChild(link);

    }
}

window.customElements.define('custom-panel', CustomPanel)