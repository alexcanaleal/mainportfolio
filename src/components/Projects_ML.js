'use strict';

const e = React.createElement;

class Projects_ML extends React.Component {

    render() {
        const data = [
            {
                "name": "Osteoporosis Machine Learning",
                "online": true,
                "desc": "Fracture risk assessments are essential to evaluate and prevent osteoporotic fractures. While it is desirable to collect all relevant data about patients regarding their susceptibility to fractures to make an accurate assessment, in real-world environments osteoporosis patient data can be incorrect, inconsistent, or missing. A crucial component to calculating the fracture risk is the Bone Mineral Density (BMD) T-score (used in fracture risk calculators: e.g., FRAX,  CAROC).",
                "link": "",
                "img1": "src/images/voxel/TensorFlow.png",
                "img2": "src/images/voxel/ML.png"
            },
            {
                "name": "OpenCV Plate and Face Recognition",
                "online": true,
                "desc": "This program uses OpenCV to find peoples faces in images/videos and search vehicle plate numbers in Europe and Canada. Currently, this project is under development.",
                "link": "",
                "img1": "src/images/voxel/Face Detect.png",
                "img2": "src/images/voxel/CarCV.png"
            }
        ];

      

        return (

            <div className="container py-5">
                {data.map((d, index) => (
                    <div key={index} className="row my-4 py-5">

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
                            <div className="col-lg-3 col-sm-6">
                                <img loading="lazy" className="responsive" src={d.img1} alt="Second slide" />
                            </div>
                            :
                            <div className="col-lg-6 col-sm-12">
                                <img loading="lazy" className="responsive" src={d.img1} alt="Second slide" />
                            </div>
                        }


                        {d.img2 ?
                            <div className="col-lg-3 col-sm-6">
                                <img loading="lazy" className="responsive" src={d.img2} alt="Second slide" />
                            </div>
                            :
                            <p></p>
                        }
                        
                        
                        
                    </div>
                ))}
            </div>


        );
    }
}


const domContainer = document.querySelector('#projects_ml');
ReactDOM.render(e(Projects_ML), domContainer);