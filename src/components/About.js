'use strict';

const e = React.createElement;

class About extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const link =  "../dist/images/about/"
    const data = [
      'nature-0.png',
      'nature-1.png'
    ]

    return (
      <div className="container py-5">
        <div className="row py-5">

          <div className="col-lg-6">
            <h2>About</h2>
            <p>A Computer Science Student based in Oakville, Ontario who specializes in Front-End, Mobile, Machine Learning Development.</p>

              <a href="#project_type_list" className="btn btn-d-p btn-lg my-2">Project List</a>
          </div>

         {data.map((d, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <img loading="lazy" className="responsive" src={link + d} alt="Second slide" />
            </div>
         ))}
        
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#about');
ReactDOM.render(e(About), domContainer);