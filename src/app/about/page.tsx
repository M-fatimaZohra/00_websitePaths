import React from "react";
import styles from "../css_modules/about.module.css";
function AboutPage() {
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
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/service">SERVICES</a>
          </li>
        </ul>
        <div className={styles.div1} >
          <h1 className={styles.h1}>THIS IS SUPPOSE TO BE ABOUT PAGE</h1>
          <p className={styles.p1} >
            <strong>NAME:</strong>FATIMA ZOHRA
          </p>
          <p className={styles.p1}>
            <strong>LOCATION:</strong>PAKISTAN
          </p>
          <p className={styles.p1} >
            <strong>EDUCATON:</strong>CLASS 10
          </p>
          <p className={styles.p1}>
            <strong>SKILLS:</strong><br></br>
            HTML <br></br>CSS <br></br>JavaScript (JS) <br></br>TypeScript (TS)
            <br></br>Node.js <br></br>Next.js <br></br>GitHub
          </p>
        </div>
      </body>
    </html>
  );
}

export default AboutPage;
