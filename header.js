class HeaderComponent extends HTMLElement {
    logo = ` <div class="top-nav uk-margin-remove">
    <img class="uk-align-center uk-border-rounded" src="img/me_profile.jpg" width="200" height="200" alt="Border circle">
    
        <div class="uk-text-center">
        <a class="uk-logo" href="">
    
     
    <h2 class="logo"> Nitin Jha </h2>
        </a>

        <hr class="uk-divider-icon">
        </div>
        <div class="uk-text-center">
        <h3 class="tagline uk-grid uk-child-width-expand@s uk-child-width-expand@m uk-child-width-expand@xs uk-padding-small uk-margin-remove uk-align-center uk-light uk-tile uk-tile-default uk-border-rounded uk-padding-small">
        <span>
        A total tech geek <span uk-icon="code" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="code"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"></polyline><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"></polyline></svg></span> 
        </span>
        <span>
        Self taught <span uk-icon="pencil" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="pencil"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg></span>
        </span>
        <span>
        Self motivated <span uk-icon="happy" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="happy"><circle cx="13" cy="7" r="1"></circle><circle cx="7" cy="7" r="1"></circle><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"></circle><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"></path></svg></span>
        </span>
        <span>
        Fast and Curious ™ <span uk-icon="bolt" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="bolt"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path></svg></span>.
        </span>
    </h3></div>
    
        </div>
      `
    connectedCallback() {
        this.innerHTML = `
        <nav class="top-nav uk-navbar-container uk-navbar-transparent" uk-navbar>
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
        <li>
            <a target="blank" href="https://github.com/codekebabs?tab=repositories" uk-icon="github"></a>
        </li>
      
    </ul>
</div>

    </nav>
    ${this.logo}`;
    }
}
customElements.define('header-nav', HeaderComponent);


/*
<div class="top-nav uk-position-relative" uk-navbar>
    <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
         
         
        </nav>
</div>
 
   
    </div>

*/