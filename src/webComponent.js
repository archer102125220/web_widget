const style = `<style>
  button {
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 10px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    display: block;
    cursor: pointer;
    background: rgb(251, 199, 128);
  }
  button:active {
    background: rgb(223, 161, 77);
  }
  button:hover {
    background: rgb(248, 205, 146);
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
    this.shadowRoot = shadowRoot;
  }
}
customElements.define("my-shadow-button", MyShadowButton);
