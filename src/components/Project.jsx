import { AiOutlineFolderOpen } from 'react-icons/ai';
import fashion from '../../public/fashion.png'
import toy from '../../public/toy.png'

const Project = () => {
    return (
        <div className="md:px-24 md:pt-20 md:pb-32 lg:px-24 lg:pt-20 lg:pb-32">
        <h2 className="text-center text-3xl mb-10 font-bold">
            <AiOutlineFolderOpen className="inline-block mr-2 text-red-400" />
            Projects
        </h2>
           <div id="projects"  className="grid grid-cols-2  gap-7">
           <div className="card w-96 bg-gray-500 mx-auto shadow-xl">
               
                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src={fashion}
                                alt=""
                                className="w-full object-cover object-top rounded-lg p-3 opacity-75"
                            />
                        </div>
                    </div>
                <div className="card-body">
                    <h2 className="card-title">
                        Fashion school
                    </h2>
                    <p>The project integrates JWT for user authentication and authorization, Axios for seamless API communication, MongoDB for efficient data storage, and React form components and hooks for building interactive forms</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><a href="https://fashion-school-b45e4.web.app/">Live Link</a></div>
                        <div className="badge badge-outline"><a href="https://github.com/alhaj-cmd/fashion-school-server">server Link</a></div>
                        <div className="badge badge-outline"><a href="https://github.com/alhaj-cmd/fashion-school-client">Client Link</a></div>
                        
                    </div>
                </div>
            </div>
            {/* two */}
            <div className="card w-96 bg-gray-500 mx-auto shadow-xl">
              
                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src={toy}
                                alt=""
                                className="w-full object-cover object-top rounded-lg p-3 opacity-75"
                            />
                        </div>
                    </div>
                <div className="card-body">
                    <h2 className="card-title">
                       Science kits
                    </h2>
                    <p>React components are the building blocks of the user interface. They can be functional components (simple functions) or class components (ES6 classes). Components define the structure, behavior, and appearance of different parts of the UI.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline"><a href="https://poetic-zabaione-6b8d5f.netlify.app/">Live Link</a></div>
                        <div className="badge badge-outline"><a href="https://github.com/alhaj-cmd/toy-marketplace-server">server Link</a></div>
                        <div className="badge badge-outline"><a href="https://github.com/alhaj-cmd/toy-marketplace-client">Client Link</a></div>
                    </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default Project;