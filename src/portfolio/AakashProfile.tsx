import React from "react";
import AakashImage from "../assets/Aakash.jpeg";
const Profile = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-orange-50 via-white to-orange-100 text-gray-900">
      <section className="relative">
        <div
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=60")',
          }}
        ></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative -mt-32">
                     
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            <div className="relative">
                           
              <img
                src={AakashImage}
                alt="Aakash Kumawat"
                className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
              />
                           
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
                         
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-xl p-8 lg:mb-8">
                                       
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                               
                <div>
                                   
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                        Aakash Kumawat                  
                  </h1>
                                   
                  <p className="text-xl text-orange-600 font-semibold mb-4">
                                        Python Developer                  
                  </p>
                                   
                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                                       
                    <div className="flex items-center gap-2">
                                            📍
                      <span>Jaipur, Rajasthan, India</span>                   
                    </div>
                                       
                    <div className="flex items-center gap-2">
                                            📅 <span>Joined April 2025</span>   
                                     
                    </div>
                                     
                  </div>
                                 
                </div>
                <div className="flex flex-col gap-4">
                                   
                  <div className="flex gap-3">
                                       
                    <button className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md px-4 py-2 transition">
                                            ✉ Contact                    
                    </button>
                                     
                  </div>
                                   
                  <div className="flex gap-3 justify-center lg:justify-end text-gray-700">
                                       
                    <a
                      href="https://linkedin.com/in/akshmat243"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                            🌐 LinkedIn                    
                    </a>
                                       
                    <a
                      href="https://github.com/akshmat243"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                            💻 GitHub                    
                    </a>
                                       
                    <a
                      href="https://akshmat243.github.io"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                            🌍 Portfolio                    
                    </a>
                                     
                  </div>
                                 
                </div>
                             
              </div>
                         
            </div>
                     
          </div>
                 
        </div>
             
      </section>
      <section className="py-16">
               
        <div className="w-full px-4 sm:px-6 lg:px-8">
                             
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                               
            <div className="lg:col-span-2 space-y-12">
              <div className="rounded-lg bg-white shadow-md p-8">
                               
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                                    👨‍💻 About Me                
                </h2>
                               
                <p className="text-gray-700 text-lg leading-relaxed">
                                    Python Developer with a BCA degree and
                  strong skills in                   <strong> Django</strong>,
                  <strong>Python</strong>, and                  
                  <strong> JavaScript</strong>. Experienced in building        
                            responsive and scalable web applications, improving
                                    performance, and integrating third-party
                  APIs. Passionate                   about delivering
                  user-centric and efficient solutions.                
                </p>
                             
              </div>
              <div className="rounded-lg bg-white shadow-md p-8">
                               
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                                    🚀 Featured Projects                
                </h2>
                <div className="border border-orange-200 rounded-xl p-6 mb-8 hover:shadow-lg transition">
                                                     
                  <div className="flex flex-col md:flex-row gap-6">
                                       
                    <img
                      src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=400&fit=crop"
                      alt="ConnectSphere"
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                                       
                    <div>
                                           
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                ConnectSphere                  
                           
                      </h3>
                                           
                      <p className="text-gray-700 mb-4">
                                                A social media platform built
                        with Django, offering                         secure
                        login, posts, and profile customization.                
                             
                      </p>
                                           
                      <div className="flex flex-wrap gap-2">
                                               
                        {["Django", "Python", "JavaScript", "HTML", "CSS"].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="inline-block bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                            >
                                                            {skill}             
                                           
                            </span>
                          )
                        )}
                                           
                      </div>
                                       
                    </div>
                                   
                  </div>
                                 
                </div>
                <div className="border border-orange-200 rounded-xl p-6 mb-8 hover:shadow-lg transition">
                                   
                  <div className="flex flex-col md:flex-row gap-6">
                                       
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop"
                      alt="SmartTask Web Application"
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                                       
                    <div>
                                           
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                SmartTask Web Application      
                                       
                      </h3>
                                           
                      <p className="text-gray-700 mb-4">
                                                A task management web app
                        allowing users to create,                        
                        update, and track tasks using Django & Bootstrap.      
                                       
                      </p>
                                           
                      <div className="flex flex-wrap gap-2">
                                               
                        {["Django", "Bootstrap", "JavaScript"].map((skill) => (
                          <span
                            key={skill}
                            className="inline-block bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                          >
                                                        {skill}                 
                                   
                          </span>
                        ))}
                                             
                      </div>
                                         
                    </div>
                                     
                  </div>
                                 
                </div>
                             
              </div>
              <div className="rounded-lg bg-white shadow-md p-8">
                               
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                                    💼 Work Experience                
                </h2>
                <div className="border-l-4 border-orange-500 pl-4 mb-6">
                                   
                  <h3 className="text-xl font-semibold text-gray-900">
                                        Python Developer — SudoTechlabs        
                             
                  </h3>
                                   
                  <p className="text-sm text-gray-600 mb-2">
                                        Apr 2025 – Present • Jaipur, Rajasthan  
                                   
                  </p>
                                   
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                       
                    <li>Integrated third-party APIs for automation tools.</li> 
                                     
                    <li>Improved backend efficiency by 15%.</li>               
                       
                    <li>
                      Collaborated with frontend teams on scalable systems.
                    </li>
                                     
                  </ul>
                                 
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                                   
                  <h3 className="text-xl font-semibold text-gray-900">
                                        Python Developer — TechnoGlobe          
                           
                  </h3>
                                   
                  <p className="text-sm text-gray-600 mb-2">
                                        Jul 2024 – Mar 2025 • Jaipur, Rajasthan
                                     
                  </p>
                                   
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                       
                    <li>
                      Optimized SQL queries and reduced response time by 20%.
                    </li>
                                       <li>Built scalable Django REST APIs.</li>
                                       
                    <li>Improved data flow and server-side performance.</li>   
                                 
                  </ul>
                                 
                </div>
                             
              </div>
                         
            </div>
                                 
            <div className="space-y-8">
               
              <div className="bg-white shadow-md rounded-lg p-6">
                               
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                                    📞 Contact Information                
                </h3>
                               
                <p className="text-gray-700 mb-2">
                                    ✉️ <strong>Email:</strong>
                  akshmat243@gmail.com                
                </p>
                               
                <p className="text-gray-700 mb-2">
                                    📱 <strong>Phone:</strong> +91 820 917 5003
                                 
                </p>
                               
                <p className="text-gray-700">
                                    📍 <strong>Location:</strong> Jaipur,
                  Rajasthan, India                
                </p>
                             
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                               
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                                    ⚡ Technical Skills                
                </h3>
                               
                <div className="space-y-4">
                                   
                  <div>
                                       
                    <h4 className="font-semibold text-gray-900 mb-2">
                                            Frontend                    
                    </h4>
                                       
                    <div className="flex flex-wrap gap-2">
                                           
                      {["HTML", "CSS", "Bootstrap", "JavaScript"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                          >
                                                      {skill}                   
                               
                          </span>
                        )
                      )}
                                         
                    </div>
                                     
                  </div>
                                   
                  <div>
                                       
                    <h4 className="font-semibold text-gray-900 mb-2">
                                            Backend                    
                    </h4>
                                       
                    <div className="flex flex-wrap gap-2">
                                           
                      {["Python", "Django"].map((skill) => (
                        <span
                          key={skill}
                          className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                                                    {skill}                     
                           
                        </span>
                      ))}
                                         
                    </div>
                                     
                  </div>
                                   
                  <div>
                                       
                    <h4 className="font-semibold text-gray-900 mb-2">
                                            Tools                    
                    </h4>
                                       
                    <div className="flex flex-wrap gap-2">
                                           
                      {["Git", "GitHub", "VS Code", "Docker"].map((tool) => (
                        <span
                          key={tool}
                          className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                                                    {tool}                     
                           
                        </span>
                      ))}
                                         
                    </div>
                                     
                  </div>
                                 
                </div>
                             
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                               
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                                    🎓 Education                
                </h3>
                               
                <div className="space-y-3">
                                   
                  <div>
                                       
                    <h4 className="font-semibold text-gray-900">
                                            Python Developer Certification      
                                   
                    </h4>
                                       
                    <p className="text-sm text-gray-700">
                                            TechnoGlobe, Jaipur — Jul 2024 – Dec
                      2024                    
                    </p>
                                     
                  </div>
                                   
                  <div>
                                       
                    <h4 className="font-semibold text-gray-900">
                                            Bachelor of Computer Applications
                      (BCA)                    
                    </h4>
                                       
                    <p className="text-sm text-gray-700">
                                            Parishkar College, Jaipur —
                      2018–2021                    
                    </p>
                                       
                    <p className="text-sm text-gray-600">GPA: 75.33%</p>       
                             
                  </div>
                                 
                </div>
                             
              </div>
                         
            </div>
                     
          </div>
                 
        </div>
             
      </section>
         
    </div>
  );
};

export default Profile;
