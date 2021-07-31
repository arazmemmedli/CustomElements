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
