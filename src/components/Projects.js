'use strict';

const e = React.createElement;

class Projects extends React.Component {

    render() {
        const data = [
            {
                "name": "Machine Learning Development",
                "online": true,
                "desc": "Dolor adipisicing officia aliquip elit consectetur commodo sint fugiat. Adipisicing excepteur qui commodo eiusmod est sint. Exercitation eu ipsum ut dolor exercitation cillum adipisicing. Nisi occaecat pariatur nisi laboris est eu deserunt eiusmod aliqua Lorem exercitation adipisicing. Labore qui laborum quis reprehenderit nisi amet nulla magna in occaecat.",
                "link": "",
                "img1": "src/images/voxel/TensorFlow.png",
                "img2": "src/images/voxel/ML.png"
            },
            {
                "name": "OpenCV Plate and Face Recognition",
                "online": true,
                "desc": "Dolor adipisicing officia aliquip elit consectetur commodo sint fugiat. Adipisicing excepteur qui commodo eiusmod est sint. Exercitation eu ipsum ut dolor exercitation cillum adipisicing. Nisi occaecat pariatur nisi laboris est eu deserunt eiusmod aliqua Lorem exercitation adipisicing. Labore qui laborum quis reprehenderit nisi amet nulla magna in occaecat.",
                "link": "",
                "img1": "src/images/voxel/Face Detect.png",
                "img2": "src/images/voxel/CarCV.png"
            },
            {
                "name": "Automobile VIN Manager",
                "online": true,
                "desc": "VIN Vault is a fully usable data visualization and service report able to locate and find the details of any vehicle in the NHTSA database. With it’s easy to use/ seamless setup, users are be able to view VINs by either scanning or typing in the VIN.",
                "link": "https://bitbucket.org/Canaleal/vinvault/src/master/",
                "img1": "src/images/vinVault/Car.png",
                "img2": ""
            },
            {
                "name": "eCommerce Image Repository",
                "online": true,
                "desc": "Blue Koi Art-Linker is a visualization, eCommerce tool that allows users to view, save, and download art, photos, models, and drafts from all over the internet. Users can sign up, manage their account, search images using an input box and selector, and manage their saved images.",
                "link": "https://github.com/canaleal/BlueKoi",
                "img1": "src/images/bluekoi/Koiui3.png",
                "img2": ""
            },
            {
                "name": "Toronto Housing Market Analysis",
                "online": true,
                "desc": "Used various online datasets generated and cleaned and analyzed them using NumPy/Pandas. I used Pandas to analyze things like confidence intervals and probability, and then afterwards visualized the data findings using Matplotlib.",
                "link": "",
                "img1": "src/images/voxel/Map-NoBg.png",
                "img2": ""
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
                                <a href={d.link} target="_blank" className="btn  btn-success">Code</a>
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


const domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);