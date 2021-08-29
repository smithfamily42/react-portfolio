import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/smithfamily42"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/bradley-smith-64586b21/"
    },
    {
      name: "fab fa-twitter",
      link: "https://twitter.com/smithfamily42"
    }
  ]

  return (
    <footer className="flex-row justify-content-between p-2">
      <p className="d-inline px-5">&copy; 2021 Brad Smith</p>
      {icons.map(icon =>
      (
        <a className="mx-5 fs-2" href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;