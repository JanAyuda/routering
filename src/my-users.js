import { LitElement, html } from 'lit';
import {router} from "./router";

export class MyUser extends LitElement {
    connectedCallback() {
        super.connectedCallback()
        this.userId = router.location.getUrl().split('/').pop(); // Deze regel haalt het laatste deel van de huidige URL op en slaat het op als this.userId.
    }

    render() {
        return html`<h1>Hello User ${this.userId}</h1>` // om het vervolgens hier te kunnen gebruiken.
    }
}

window.customElements.define('my-user', MyUser)