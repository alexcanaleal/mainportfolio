'use strict';

const e = React.createElement;

class About extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <div className="row py-5">

            <div className="col-lg-6">
            <h2>About</h2>
            <p>I'm a Computer Science Student based in Oakville, Ontario who specializes in Mobile and Web Development.
                My skills include Web Analytics, Data Analytics and Machine Learning Development.</p>
            </div>
            
            <div className="col-lg-3 col-sm-6">
                <img loading="lazy" className="responsive" src="src/images/voxel/nature.jpeg" alt="Second slide"/>
            </div>
            <div className="col-lg-3 col-sm-6">
                <img loading="lazy" className="responsive" src="src/images/voxel/nature2.jpeg" alt="Second slide"/>
            </div>
        </div>
      );
  }
}

const domContainer = document.querySelector('#about');
ReactDOM.render(e(About), domContainer);