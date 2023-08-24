import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialMediaLinks}>
        {socialMediaLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
