import React from 'react';

function About({ portfolioData }) {
  if (!portfolioData) {
    return (
      <section id="about" className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4">No bio available. Please enter your details in the Data Entry form.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>

        {/* Profile Picture */}
        {portfolioData.profilePic && (
          <img 
            src={URL.createObjectURL(portfolioData.profilePic)} 
            alt="Profile" 
            className="rounded-full mx-auto mt-4 w-40 h-40 object-cover shadow-lg"
          />
        )}

        {/* Bio */}
        <p className="mt-4 px-6 text-lg">{portfolioData.bio}</p>

        {/* Skills Section */}
        {portfolioData.skills && portfolioData.skills.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <ul className="mt-3 flex flex-wrap justify-center gap-3">
              {portfolioData.skills.map((skill, index) => (
                <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
