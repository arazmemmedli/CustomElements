class MyBtn extends HTMLElement{
    constructor(){
      super()
      this.innerHTML = 'Custom Btn'
      this.style.border = '2px solid red'
      this.style.background = 'blue'        
    }
  }
  window.customElements.define('my-custom-btn', MyBtn)