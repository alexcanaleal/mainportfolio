'use strict';

const e = React.createElement;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      
            <div className="item-col dark-bg text-white py-5">
                <div className="item-row">
                    <a className="special-icons" rel="noopener" href="https://www.linkedin.com/in/alex-canales" target="_blank"><i
                        className="fa fa-linkedin fa-2x"> </i></a>
                    <a className="special-icons" rel="noopener" href="https://github.com/canaleal"><i className="fa fa-github fa-2x"></i>
                    </a>
                    <a className="special-icons" rel="noopener" href="https://bitbucket.org/Canaleal/" target="_blank"><i
                        className="fa fa-bitbucket fa-2x"> </i> 
                    </a>
                    
                </div>
                <p>alexcanales766@gmail.com</p>
            </div>
      
      );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);