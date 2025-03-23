import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "/home/dev/portfolio-project/src/styles/style2.css";

function DataEntry({ saveData }) {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [projects, setProjects] = useState([{ title: '', description: '', image: null, github: '' }]);
  const [socialMedia, setSocialMedia] = useState([{ name: '', url: '' }]);
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "enabled");

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  const addProject = () => {
    if (projects.some(p => !p.title || !p.description)) {
      setError(true);
      return;
    }
    setProjects([...projects, { title: '', description: '', image: null, github: '' }]);
    setError(false);
  };

  const addSocialMedia = () => {
    if (socialMedia.some(s => !s.name || !s.url)) {
      setError(true);
      return;
    }
    setSocialMedia([...socialMedia, { name: '', url: '' }]);
    setError(false);
  };

  const handleProjectChange = (index, e) => {
    const newProjects = [...projects];
    newProjects[index][e.target.name] = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setProjects(newProjects);
  };

  const handleSocialMediaChange = (index, e) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value;
    setSocialMedia(newSocialMedia);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !bio || !skills || !interests) {
      setError(true);
      return;
    }

    const data = {
      studentName,
      bio,
      profilePic,
      skills: skills.split(",").map(skill => skill.trim()),
      interests,
      projects,
      socialMedia,
    };
    saveData(data);
    navigate('/home');
  };

  return (
    <div className="container">
      {/* Dark Mode Toggle */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="text-2xl font-bold mb-4">Portfolio Data Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} className={error && !studentName ? "shake form-control" : "form-control"} required />
        <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className={error && !bio ? "shake form-control" : "form-control"} required />

        {/* Profile Picture Upload */}
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="form-control" />

        <input type="text" placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} className={error && !skills ? "shake form-control" : "form-control"} required />
        <input type="text" placeholder="Interests" value={interests} onChange={(e) => setInterests(e.target.value)} className={error && !interests ? "shake form-control" : "form-control"} required />

        {/* Project Section */}
        <div>
          <h2 className="font-bold">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <input type="text" name="title" placeholder="Project Title" value={project.title} onChange={(e) => handleProjectChange(index, e)} className="form-control" required />
              <textarea name="description" placeholder="Project Description" value={project.description} onChange={(e) => handleProjectChange(index, e)} className="form-control" required />
              <input type="file" name="image" accept="image/*" onChange={(e) => handleProjectChange(index, e)} className="form-control" />
              <input type="text" name="github" placeholder="GitHub Link" value={project.github} onChange={(e) => handleProjectChange(index, e)} className="form-control" />
            </div>
          ))}
          <button type="button" onClick={addProject} className="btn">Add Another Project</button>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="font-bold">Social Media Links</h2>
          {socialMedia.map((link, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <input type="text" name="name" placeholder="Platform Name (e.g., LinkedIn, GitHub)" value={link.name} onChange={(e) => handleSocialMediaChange(index, e)} className="form-control" required />
              <input type="text" name="url" placeholder="Profile URL" value={link.url} onChange={(e) => handleSocialMediaChange(index, e)} className="form-control" required />
            </div>
          ))}
          <button type="button" onClick={addSocialMedia} className="btn">Add Another Social Media</button>
        </div>

        <button type="submit" className="btn">Generate Portfolio</button>
      </form>
    </div>
  );
}

export default DataEntry;
