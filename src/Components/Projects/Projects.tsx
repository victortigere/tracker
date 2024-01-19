import React, { FC, useEffect, useState } from 'react'
import { fetchProjects } from '../../Services/Project.tsx'
import '../../../src/assets/dash-code/css/sb-admin-2.min.css'
import '../../../src/assets/dash-code/vendor/fontawesome/css/all.min.css'

import './Projects.css'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
   const [projects, setProjects]  = useState<any>(null)

   useEffect(() => {
      getProjects()   
    },[]);

   const getProjects = async () => {
         try {
           const result = await fetchProjects();
           setProjects(result);
         } catch (error) {
         }
       };

   return (
      <div className="container-fluid header-padding-top">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Projects</h1>
        </div>

        {projects?.map((item: any) => (
          <div className="col-xl-3 col-md-6 mb-4" key={item._id}>
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                {item.projectName}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.projectName}</div>
                        </div>
                        <div className="col-auto">
                            <a href="#" className="btn btn-success btn-circle">
                              <i className="fa fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ))}

      </div> 
   )
}

export default Projects;

