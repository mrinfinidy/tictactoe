class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="container"> 
                    <h1>
                        Tic Tac Toe with Flags
                    </h1>

                    <div class="topnav">
                        <a class="" href="index.html">Home</a>
                        <a class="" href="countries.html">Countries</a>
                        <a class="" href="about.html">About</a>

                    </div>

                    <div class="mobile-nav">
                        <a class="" href="index.html">Home</a>
                        <a class="" href="countries.html">Countries</a>
                        <a class="" href="about.html">About</a>
                    </div>
                    
                    <button class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>        
        `
    }
}

customElements.define('my-header', Header)
