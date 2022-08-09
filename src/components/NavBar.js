import React from "react";

function NavBar() {
  
  const links = ["home", "about", "projects"];
 
  const renderLinks  = (links) => {
    return links.map((link)=>{
      return <a key={link} 
      href={"#"+link}>{link}
      </a>
    })
  }
  
    return <nav>{renderLinks(links)}</nav>;
    // return <nav>{links}</nav>;
}

export default NavBar;
