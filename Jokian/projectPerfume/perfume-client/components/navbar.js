class PerfumeHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.constructComponent();
    }

    constructComponent() {
        this.shadowRoot.innerHTML = `
        <style>
         .navbar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            z-index: 2;
            background: rgba(255, 255, 255, 0.8);
        }

        .navbar ul li a {
            text-decoration: none;
            color: black;
            font-size: 18px;
            transition: color 0.3s;
        }

        .navbar ul li a:hover {
            color: #d44181;
        }

        .navbar ul {
            list-style: none;
            display: flex;
            padding: 0;
        }

        .navbar ul li {
            margin: 0 15px;
        }

        .navbar ul li a {
            text-decoration: none;
            color: black;
            font-size: 18px;
            transition: color 0.3s;
        }

        .navbar ul li a:hover {
            color: #d44181;
        }

        .navbar .brand {
            font-size: 24px;
            font-weight: bold;
            color: black;
            text-decoration: none;
        }

          .navbar ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  .navbar ul li {
    margin: 0 20px;
    position: relative;
  }
  
  .navbar ul li a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }
  
  .navbar ul li::after {
    content: '';
    height: 3px;
    width: 0;
    background: #fcafaf;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
  }
  
  .navbar ul li:hover::after {
    width: 100%;
  }

         @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                padding: 10px 20px;
            }

            .navbar ul {
                flex-direction: column;
                align-items: center;
            }

            .navbar ul li {
                margin: 10px 0;
            }

            .content {
                margin: 150px auto 0;
                padding: 20px 10px;
            }
        }
        </style>
             <div class="navbar">
                <a href="home.html" class="brand">Essence Aroma</a>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="history.html">History</a></li>
                    <li><a href="types.html">Types</a></li>
                    <li><a href="notes.html">Notes</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('perfume-header', PerfumeHeader);

