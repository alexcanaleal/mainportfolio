'use strict';

const e = React.createElement;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="container-fluid header-lg text-white">
                <div className="row mt-5 py-5 text-center">
                    <div className="col-lg-12">
                        <h2>Machine Learning Developer</h2>
                        <p>Experienced in creating responsive applications built for mobile, desktop & web.</p>
                    </div>
                </div>

                <div className="row mb-5 py-5 text-center ">
                    <div className="col-lg-12">
                        <div className="item-row">
                            <a className="special-icons" rel="noopener" href="https://www.linkedin.com/in/alex-canales" target="_blank"><i
                                className="fa fa-linkedin fa-2x"> </i></a>
                            <a className="special-icons" rel="noopener" target="_blank" href="https://github.com/canaleal"> <i
                                className="fa fa-github fa-2x">
                            </i></a>
                            <a className="special-icons" rel="noopener" target="_blank" href="https://bitbucket.org/Canaleal/"
                                target="_blank"><i className="fa fa-bitbucket fa-2x"> </i></a>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <a href="#about" id="learn-more" rel="noopener" className="btn btn-outline-light btn-lg">Learn More</a>
                    </div>

                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#header');
ReactDOM.render(e(Header), domContainer);