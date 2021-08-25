'use strict';

const e = React.createElement;

class Projects_Web extends React.Component {

    render() {
        const link = "../dist/images/project_web/"
        const data = [

            {
                "name": "Automobile VIN Manager",
                "online": true,
                "desc": "VIN Vault is a fully usable data visualization and service report able to locate and find the details of any vehicle in the NHTSA database. With it’s easy to use/ seamless setup, users are be able to view VINs by either scanning or typing in the VIN.",
                "link": "https://bitbucket.org/Canaleal/vinvault/src/master/",
                "img1": "vin-0.png",
                "img2": ""
            },
            {
                "name": "eCommerce Image Repository",
                "online": true,
                "desc": "Blue Koi Art-Linker is a visualization, eCommerce tool that allows users to view, save, and download art, photos, models, and drafts from all over the internet. Users can sign up, manage their account, search images, and manage their saved images.",
                "link": "https://github.com/canaleal/BlueKoi",
                "img1": "koi-0.png",
                "img2": ""
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
            <div>
                <div id="web" className="header-sm ">
                    <div className="container text-white py-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Web Applications</h3>

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


const domContainer = document.querySelector('#projects_web');
ReactDOM.render(e(Projects_Web), domContainer);