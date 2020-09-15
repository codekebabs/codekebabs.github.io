class HeaderComponent extends HTMLElement {
    logo = ` <div class="uk-align-center">
    <img class="uk-align-center uk-border-rounded" src="img/me_profile.jpg" width="200" height="200" alt="Border circle">
    
        <div class="uk-text-center">
        <a class="uk-logo" href="">
    
     
    <h2 class="logo"> Nitin Jha </h2>
        </a>
        <hr class="uk-divider-icon"/>
        <h3 class="tagline uk-light uk-tile uk-tile-default uk-border-rounded uk-padding-small">A total tech geek <span uk-icon="code"></span> Self taught <span uk-icon="pencil"></span> Self motivated <span uk-icon="happy"></span> Fast and Curious &trade; <span uk-icon="bolt"></span>.
    </div>
    
        </div>
        
      `
    connectedCallback() {
        this.innerHTML = `
    <div class="top-nav uk-position-relative" uk-navbar>
    <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                <li>
                <a href="#">Home</a>
               
            </li>
                    <li>
                        <a href="#">More</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-nav-header">Projects</li>
                                <li><a href="#">C#</a></li>
                                <li><a href="#">Angular</a></li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">Miscellaneous</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="uk-navbar-right">
            <ul class="uk-navbar-nav icon-bar">
                <li>
                    <a target="blank" href="https://www.linkedin.com/in/nitin-jha-77936250" uk-icon="linkedin"></a>
                </li>
                <!-- 
                <li>
                    <a href="#" uk-icon="instagram"></a>
                </li>
              
                <li>
                     <a href="#" uk-icon="google"></a>
                </li>
           
                <li>
                    <a href="#" uk-icon="twitter"></a>
                </li>
                -->
                <li>
                    <a target="blank" href="https://github.com/codekebabs?tab=repositories" uk-icon="github"></a>
                </li>
              
            </ul>
        </div>
        </nav>
</div>
    ${this.logo}
   
    </div>`;
    }
}
customElements.define('header-nav', HeaderComponent);