'use strict';

const e = React.createElement;

class Projects_Api extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = [
            { 
                "name": "Halo Statistics API", 
                "online":true, 
                "desc" : "Dolor adipisicing officia aliquip elit consectetur commodo sint fugiat. Adipisicing excepteur qui commodo eiusmod est sint. Exercitation eu ipsum ut dolor exercitation cillum adipisicing. Nisi occaecat pariatur nisi laboris est eu deserunt eiusmod aliqua Lorem exercitation adipisicing. Labore qui laborum quis reprehenderit nisi amet nulla magna in occaecat.", 
                "link" : "https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Company",
                "img1": "images/voxel/scorpion-punch-coating.png", 
                "img2": "images/voxel/Slayer.png" 
            },
            {
                "name": "Automobile Logo API", 
                "online":false, 
                "desc" : "Dolor adipisicing officia aliquip elit consectetur commodo sint fugiat. Adipisicing excepteur qui commodo eiusmod est sint. Exercitation eu ipsum ut dolor exercitation cillum adipisicing. Nisi occaecat pariatur nisi laboris est eu deserunt eiusmod aliqua Lorem exercitation adipisicing. Labore qui laborum quis reprehenderit nisi amet nulla magna in occaecat.", 
                "link" : "",
                "img1": "images/voxel/Node.png", 
                "img2": "images/voxel/CarsLogo.png" 
            }
        ]

        return (
                data.map((d, index) => (
                    <div key={index} className="row my-4 py-5">
                        <div className="col-lg-6">
                            <h3>{d.name}</h3>
                            
                            {d.online == false  ?
                                <p className="text-danger"><i className="fas fa-circle fa-xs"></i> API Offline</p>
                                :
                                <p className="text-success"><i className="fas fa-circle fa-xs"></i> API Online</p>
                            }

                            <p>{d.desc}</p>

                            {d.link   &&
                                 <a href={d.link} target="_blank" className="btn  btn-success">Code</a>
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
                    
                ))
    
        );
    }
}


const domContainer = document.querySelector('#projects_api');
ReactDOM.render(e(Projects_Api), domContainer);