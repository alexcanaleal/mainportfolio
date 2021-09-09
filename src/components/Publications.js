'use strict';

const e = React.createElement;

class Publications extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const publication_list = [
            {
                id: 0,
                name: "Towards Better Insights: Preliminary Results Of A Machine Learning Model For Fracture Risk Assessment",
                team: 'Ed Sykes, Ravi Jain, Alex Canales, Wei Bin Wang, Mohit Deol, Jennifer Weldon, Rohit Shanker, ​Volodymyr Voytenko, Jansen Sullivan, Doug Sauer​',
                desc: 'Create a Machine Learning (ML) model that predicts the BMD T-score and assesses the fracture risk based on relevant patient data features.',
                note: 'Requires Permission for Access'
            },

            {
                id: 1,
                name:"Using Mobile Devices as Dashcams and applying the Open-Source Computer Vision Library for live vehicle monitoring and improved image analysis.",
                team: 'Alex Canales',
                desc: 'Only 1/10 Canadians use a dashcam. The other 9 don’t, either because they aren’t tech-savvy, don’t see the benefits of dashcams, or believe that mid-range and higher-end models are too expensive. Our goal is to target this crowd by providing them an easy-to-use Mobile Application that has the same features found in higher-end dashcams',
                note: 'Requires Permission for Access'
            }
        ]

        return (
            <div className="container py-5 my-5">
                <div className="row ">

                    <div className="col-lg-6">
                        <h2>Publications</h2>
                        <p>My work has been published by the Fragility Fracture Network and Sheridan College.</p>

                    </div>
                </div>
                <div className="row ">

                    {publication_list.map((publication) => (
                        <div key={publication.id} className="col-lg-6 py-2">
                            <h5>{publication.name}</h5>
                            
                            <p>{publication.team}</p>
                            <p>{publication.desc}</p>
                        </div>
                    ))
                    }
                   

                </div>
            </div>
            
        );
    }
}

const domContainer = document.querySelector('#publications');
ReactDOM.render(e(Publications), domContainer);