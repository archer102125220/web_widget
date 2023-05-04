const style = `<style>
  button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    text-decoration: none;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    cursor: pointer;
  }
  button:hover {
    background-color: #1565c0;
  }
  button:active {
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.1);
  }
</style>`;

// 創建 Custom Element
class MyButton extends HTMLElement {
  constructor() {
    // 一定要先繼承
    super();
    // this 指向創建的 dom 節點
    const template = document.createElement("template");
    template.innerHTML = "<button>component按鈕</button>";
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // component 放入DOM時呼叫本方法
    const button = this.querySelector("button");
    button.addEventListener("click", this.handleClick);
  }
  static get observedAttributes() {
    // 和下面的的方法組合，用來指定監聽屬性的名稱
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 和上面的的方法組合，當監聽的屬性有變動時，呼叫本方法
  }

  adoptedCallback() {
    // 限定在使用document.adoptNode時呼叫本方法，平時不會使用
  }

  handleClick(e) {
    console.log("dom");
    console.log(e);
  }
}
customElements.define("my-button", MyButton);

class MyShadowButton extends HTMLElement {
  constructor() {
    super();
    // 創建 this 內部的 shadow root
    const shadowRoot = this.attachShadow({
      mode: "open",
    });
    // 將所有對 this 的動作轉為對 shadow root 進行
    const template = document.createElement("template");
    template.innerHTML = `
      ${style}
      <button>shadow按鈕</button>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
    this._shadowRoot = shadowRoot;
  }

  connectedCallback() {
    // component 放入DOM時呼叫本方法
    const button = this._shadowRoot.querySelector("button");
    button.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    // component 脫離DOM時呼叫本方法
  }

  static get observedAttributes() {
    // 和下面的的方法組合，用來指定監聽屬性的名稱
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 和上面的的方法組合，當監聽的屬性有變動時，呼叫本方法
  }

  adoptedCallback() {
    // 限定在使用document.adoptNode時呼叫本方法，平時不會使用
  }

  handleClick(e) {
    console.log("shadow dom");
    console.log(e);
  }
}
customElements.define("my-shadow-button", MyShadowButton);
