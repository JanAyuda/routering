import { LitElement, css, html } from 'lit'

export class MySecondElement extends LitElement {
    render() {
        return html`
            <h1>The second element!</h1>
        `
    }
}

window.customElements.define('my-second-element', MySecondElement)