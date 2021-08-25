'use strict';

const e = React.createElement;

class Company extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const link = '../dist/images/company/'
    const data = [
      "company-0.png",
      "company-1.png",
      "company-2.png",
      "company-3.png"
    ];

    return (
      <div className="container-fluid gray-bg">
        <div className="container py-5">
          <div className="row my-4">
            {data.map((d, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <img loading="lazy" className="responsive light-hover " src={link + d} alt="company" />
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