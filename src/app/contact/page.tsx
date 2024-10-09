import styles from "../css_modules/contact.module.css"
import React from "react";
 function ContactPage() {
    return (
      <html>
        <head>
          <title>WEBSITE PRACTICE</title>
        </head>
        <body>
        <ul>
            <li>
              <a href="./">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/service">SERVICES</a>
            </li>
          </ul>
          <div className={styles.div1}>
          <h1 className={styles.h1}>THIS IS SUPPOSE TO BE CONTACT PAGE</h1>
          
          <p className={styles.p1}>  Follow me on:</p>
            <ol>
              <li className={styles.li1}>
             Linkedin: <a href="https://www.linkedin.com/in/fatima-zohra-4a1b712b4/" target="_blank" className={styles.a1}>Fatima Zohra&apos;s linkedin</a>   
              </li>
              <li className={styles.li1}>
                Github: <a href="https://github.com/M-fatimaZohra" target="_blank" className={styles.a1}>Fatima Zohra&apos;s Github</a>
              </li>
            </ol>
        
          </div>
        </body>
      </html>
    );
  }
  
  export default ContactPage