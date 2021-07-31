
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

class Card extends HTMLElement{
    constructor(){
        super()
        let cardShadow=this.attachShadow({mode:'open'})
        let cardCssLink=document.createElement('link')
        cardCssLink.setAttribute('rel','stylesheet')
        cardCssLink.setAttribute('href','css/card.css')
        let cardHeading=document.createElement('h1')
        cardHeading.innerHTML=this.getAttribute('heading')
        let cardBody=document.createElement('p');
        cardBody.innerHTML=this.getAttribute('body')
        let card=document.createElement('div')

        
        card.className='card'

        card.appendChild(cardHeading)
        card.appendChild(cardBody)
        cardShadow.appendChild(card)
        cardShadow.appendChild(cardCssLink)
    }
}
customElements.define('my-card',Card)


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


class MyBtn extends HTMLElement{
    constructor(){
      super()
      this.innerHTML = 'Custom Btn'
      this.style.border = '2px solid red'
      this.style.background = 'blue'        
    }
  }
  window.customElements.define('my-custom-btn', MyBtn)
class AlertComponent extends HTMLElement{
    constructor(){
        super()
        let alertShadow=this.attachShadow({mode:'open'})
        let alertCssLink=document.createElement('link')
        alertCssLink.setAttribute('rel','stylesheet')
        alertCssLink.setAttribute('href','css/alert.css')
        let alertHeading=document.createElement('h1')
        alertHeading.innerHTML=this.getAttribute('heading')
        let alertBody=document.createElement('p');
        alertBody.innerHTML=this.getAttribute('body')
        let alert=document.createElement('div')
        alert.className='alert'

        alert.appendChild(alertHeading)
        alert.appendChild(alertBody)
        alertShadow.appendChild(alert)
        alertShadow.appendChild(alertCssLink)

    }
}


window.customElements.define('custom-panel', CustomPanel)

customElements.define('pro-alert',AlertComponent)

