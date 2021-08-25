'use strict';

const e = React.createElement;

class Projects_ML extends React.Component {

    render() {
        const link = "../dist/images/project_ml/"
        const data = [
            {
                "name": "Osteoporosis Machine Learning",
                "online": true,
                "desc": "Fracture risk assessments are essential to evaluate and prevent osteoporotic fractures. While it is desirable to collect all relevant data about patients regarding their susceptibility to fractures to make an accurate assessment, in real-world environments osteoporosis patient data can be incorrect, inconsistent, or missing. A crucial component to calculating the fracture risk is the Bone Mineral Density (BMD) T-score (used in fracture risk calculators: e.g., FRAX,  CAROC).",
                "link": "",
                "img1": "ml-0.png",
                "img2": "ml-1.png"
            },
            {
                "name": "OpenCV Plate and Face Recognition",
                "online": true,
                "desc": "This program uses OpenCV to find peoples faces in images/videos and search vehicle plate numbers in Europe and Canada. Currently, this project is under development.",
                "link": "",
                "img1": "cv-0.png",
                "img2": "cv-1.png"
            }
        ];


        const data_length = data.length
        const renderHrLine = index => {
            return index != data_length ? <hr />: null;     
        };

        const renderImgSm = (img_src) => {
            return <div className="col-lg-3 col-sm-6">
                <img loading="lazy" className="responsive" src={link + img_src} alt="Second slide" />
            </div>
        };

        const renderImgLg = (img_src) => {
            return <div className="col-lg-6 col-sm-12">
                <img loading="lazy" className="responsive" src={link + img_src} alt="Second slide" />
            </div>
        };


        return (
            <div >

                <div id="ml" className="header-sm ">
                    <div className="container text-white py-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Machine Learning</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container py-5 ">
                    {data.map((d, index) => (
                        <span key={index}>
                            <div className="row my-4 py-5">

                                <div className="col-lg-6">
                                    <h3>{d.name}</h3>
                                    <p>{d.desc}</p>

                                    {d.link ?
                                        <a href={d.link} target="_blank" className="btn  btn-d-p">Code</a>
                                        :
                                        <p className="text-danger">Link to Code is Currently Down</p>
                                    }
                                </div>

                                {d.img2 ?
                                    renderImgSm(d.img1)
                                    :
                                    renderImgLg(d.img1)
                                }

                                {d.img2 ?
                                    renderImgSm(d.img2)
                                    :
                                    null
                                }

                            </div>
                            {renderHrLine(index + 1)}


                        </span>

                    ))}
                </div>

            </div>




        );
    }
}


const domContainer = document.querySelector('#projects_ml');
ReactDOM.render(e(Projects_ML), domContainer);