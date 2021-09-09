'use strict';

const e = React.createElement;

class Projects_Api extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const link = "../dist/images/project_api/"
        const data = [
            {
                "name": "Halo Statistics API",
                "online": true,
                "desc": "The API officially used by Halo Waypoint, this service allows developers to return details about different players and their service records. This includes Win/Loss ratio, hours played, spartan armour used, and favorite game modes.",
                "link": "https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Company",
                "img1": "halo-0.png",
                "img2": "halo-1.png"
            },
            {
                "name": "Automobile Logo API",
                "online": false,
                "desc": "This Vehicle API provides access to a library of vehicle Logos. Instead of using an ID, Logos are retrieved using the Manufacturer Name.",
                "link": "",
                "img1": "logo-0.png",
                "img2": "logo-1.png"
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
                <div id="api" className="header-sm ">
                    <div className="container text-white py-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>API Projects</h3>

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


const domContainer = document.querySelector('#projects_api');
ReactDOM.render(e(Projects_Api), domContainer);