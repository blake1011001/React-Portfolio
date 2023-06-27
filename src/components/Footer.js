import React from 'react';

const Footer = () => {
    return (
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#343a40', color: '#fff', padding: '1rem 0' }}>
         <a href="https://github.com/blake1011001?tab=repositories" className="logo-img" target="_blank" rel="noreferrer"><img src={github} alt="Github Link"></img></a>
         <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="logo-img"><img src={linkedin} alt="Linkedin Link"></img></a>
      </footer>
    );
  };
  
  export default Footer;