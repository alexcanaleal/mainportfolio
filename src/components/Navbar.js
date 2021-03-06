'use strict';

const e = React.createElement;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <div className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="../index.html">
                   
                    <span>Alex Canales</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="../index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../pages/projects.html">Projects </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../pages/api.html">API </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="../pages/windows.html">Windows 7</a>
                    </li>

                    </ul>
                </div>
            </div>
        </div>
      );
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(e(Navbar), domContainer);