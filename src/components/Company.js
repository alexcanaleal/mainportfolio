'use strict';

const e = React.createElement;

class Company extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const links = ["src/images/Company/inovex.png", "src/images/Company/Follower.png", "src/images/Company/Fiverr.png", "src/images/Company/UniversityES.png"]

    return (
      <div className="container-fluid gray-bg">
        <div className="container py-5">
          <div className="row my-4">
            {links.map((d) => (
              <div key={d} className="col-lg-3 col-sm-6">
                <img loading="lazy" className="responsive light-hover " src={d} alt="inovex" />
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#company');
ReactDOM.render(e(Company), domContainer);