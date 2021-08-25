'use strict';

const e = React.createElement;

class Projects_React extends React.Component {

    render() {
        const link = "../dist/images/project_react/"
        const data = [

            {
                "name": "Illium Stock Manager",
                "online": false,
                "desc": "ISM can track cryptocurrencies, stocks, funds, commodities, currencies, futures or bonds. It shows the current value of positions and performance over a period of 1 year. The App is currently in development.",
                "link": "",
                "img1": "stock-0.png",
                "img2": "stock-1.png"
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
                <div id="react" className="header-sm ">
                    <div className="container text-white py-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>React / React Native</h3>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
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


const domContainer = document.querySelector('#projects_react');
ReactDOM.render(e(Projects_React), domContainer);