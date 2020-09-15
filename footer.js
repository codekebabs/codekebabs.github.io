class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="footer">
        <nav class="bg-color-dark-blue color-primary uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">
        
            <ul class="uk-navbar-nav">
                <li>
                <a href="https://github.com/codekebabs"><span>Follow me&nbsp;</span> <span uk-icon="github-alt"></span></a>
                </li>
            </ul>
        
        </div>
        </nav>
        </div>`;
    }
}

customElements.define('footer-nav', FooterComponent);