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

customElements.define('pro-alert',AlertComponent)