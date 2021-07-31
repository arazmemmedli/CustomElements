
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
