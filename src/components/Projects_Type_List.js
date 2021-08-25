'use strict';

const e = React.createElement;

class Project_Type_List extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const project_list = [
      { id: "Machine Learning", link: 'pages/projects.html' },
      { id: "Web Applications", link: 'pages/projects.html' },
      { id: "React / React Native", link: 'pages/projects.html' },
      { id: "APIs", link: 'pages/api.html' }
    ]

    return (
      <div className="container py-5 my-5">
        <div className="row ">

          <div className="col-lg-6">
            <h2>Project List Type</h2>
            <p>With 2 years experience in Front-End and Machine Learning Development, I have merged my design and development skills to created advanced applications that are accessible, scalable, and efficient.</p>
          </div>
        </div>
        <div className="row ">

          {project_list.map((project) => (
            <div key={project.id} className="col-lg-3 py-2">
              <a href={project.link} className="btn btn-d-p btn-d-p-lg">{project.id}</a>
            </div>
          ))
          }

        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#project_type_list');
ReactDOM.render(e(Project_Type_List), domContainer);