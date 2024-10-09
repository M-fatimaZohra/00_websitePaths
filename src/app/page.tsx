import styles from "./css_modules/page.module.css"
export default function Home() {
  return (
  
        <html>
          <head>
            <title>WEBSITE PRACTICE</title>
          </head>
          <body>
              <ul>
                <li>
                  <a href="/about">ABOUT</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
                </li>
                <li>
                  <a href="/service">SERVICES</a>
                </li>
              </ul>
          <div className={styles.div1} >
            <h1 className={styles.h1}>THIS IS SUPPOSED TO BE HOME PAGE</h1>
            <div >
          <h1 className={styles.h1}>Welcome to My Personal Space!</h1>
          <p className={styles.p1}>
            Hi, I&apos;m Fatima! I love discovering new hobbies, from sketching to translating poems. Here&apos;s a little corner of the web where I can share all the things I enjoy.
          </p>
          <div >
            <h2 className={styles.h1}>Random Facts About Me:</h2>
            <dl className={styles.h1}>
              <dd>&quot;I love black—it&apos;s my favorite color!&quot;</dd>
              <dd>&quot;I&apos;m currently playing an otome game set in high school!&quot;</dd>
              <dd>&quot;I wish to meet a young intelligent librarian one day!&quot;</dd>
             <dd> &quot;Did you know I once translated a song into three different languages?&quot;</dd>
            </dl>
          </div>
        </div>
    
    
            </div>
          </body>
        </html>
      );
    }
    
  
