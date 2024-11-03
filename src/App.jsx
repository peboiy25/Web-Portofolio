import icon from "./assets/react.svg"
import "./index.css"
import fotoku from "./assets/aaaa.png"
import email from "./assets/email.png"
import linkedin from "./assets/business.png"
import github from "./assets/github.png"
import gudang from "./assets/stock.png"
import data from "./assets/database.png"
import lofi from "./assets/wireframe.png"
import ig from "./assets/instagram.png"

function App() {
  return (
    <>

         <header>          
                <div className="nav">
                    <div className="logo">
                        <a>My Profile </a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">Project</a></li>
                            <li><a href="#skills">Skills</a></li>
                            {/* <li><a href="#contact">Contact</a></li> */}
                        </ul>
                    </nav>
                </div>

                <div className="main-container">
                <section id="home">
                    <div className="home-left">
                        <h3 className="pre-title">Halo semuanya, aku</h3>
                        <h1 className="home-name">Aulia Febriani Adianzah</h1>                        
                        <p className="home-short">Mahasiswa Semester 5 program studi Sistem Informasi di STMIK Widya Pratama Pekalongan yang sedang menekuni bidang UI/UX Design dan Web Developer.</p>
                        <br/>
                        <a href="https://drive.google.com/file/d/19MDbBZPsBMmk2ScJbEMvxwWUwCthtARN/view?usp=drive_link" target="_blank">
                            <button className="btn">My Resume</button>
                        </a>
                    </div>
                    <div className="home-right">
                        <img src={fotoku} alt="fotoku"/>
                    </div>
                </section>
            </div>
         </header>




         <section id="about">
            <div className="main-container">
                <h1 className="section-title-about">My Project</h1>
                {/* <p className="text-about">Berikut merupakan beberapa project yang telah dikerjakan selama masa perkuliahanku hingga saat ini.</p> */}
                {/* <p style="color: #27374D; text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptatem minima modi iure dolorem, cumque laboriosam vero dolore inventore expedita eum voluptas, nobis ad? Modi voluptate quas enim at harum?
                </p> */}
                <br/>

                <div className="grid-3">

                <a href="https://www.figma.com/design/jF4E07fPBh0q3yDy6APrUk/Untitled?node-id=0-1&m=dev&t=ulUui6SUe3KePQYG-1" target="_blank">
                    <div className="about">
                        <div className="about-icon">
                            <img src={lofi} alt="project3" width="30px" height="30px" viewbox="0 0 24 24"/>
                        </div>
                        <br />
                        <br />
                        <h4>Lo-Fi Design Website</h4>
                        <br />
                        <p>Desain Lo-Fi/wireframe website "Nero Silva" yang merupakan sebuah project untuk memenuhi tugas massive studi independent di Infinite Learning
                        </p>
                    </div>
                    </a>
                    

                    <a href="https://github.com/peboiy25/prototype-information-system-desktop" target="_blank">
                    <div className="about">
                        <div className="about-icon">
                        <img src={data} alt="project2" width="30px" height="30px" viewbox="0 0 24 24"/>
                        </div>
                        <br />
                        <br />
                        <h4>Prototype Sistem Informasi Berkah Tekstil</h4>
                        <br />
                        <p>Perancangan sistem informasi toko berkah tekstil dengan menggunakan bahasa pemograman java dan mysql.
                        </p>
                        <br />
                        <br />
                    </div>
                    </a>
                    

                    <a href="https://www.figma.com/proto/6YmNPrtkJwfSOvXX3PBDC0/IMK?node-id=103-1399&t=fL61kRvE2ofj4s5g-1&starting-point-node-id=103%3A1399" target="_blank">
                    <div className="about">
                        <div className="about-icon">
                            <img src={gudang} alt="project1" width="30px" height="30px" viewbox="0 0 24 24"/>
                        </div>
                        <br />
                        <br />
                        <h4>UI Sistem Informasi Gudang</h4>
                        <br />
                        <p>Pembuatan sistem informasi gudang untuk membantu pengelolaan inventaris.
                        </p>
                        <br />
                        <br />
                        <br />
                    </div>
                    </a>

                </div>
                <br />
                <br />
                <p className="text-about">
                  Untuk project lainnya bisa dilihat <a href="https://github.com/peboiy25" target="_blank" class="projectku">di sini</a>
                </p>
            </div>
         </section>




         <section id="skills">
            <div className="skills main-container">
                <h1 className="section-title-skills">
                    Experience & Skills
                </h1>

                <div className="skills-grid">
                 <div className="skills-left">
                  <div>
                    <h4 class="skills-about">My Experience</h4>
                  </div>


    <br />
    <br />

                    <div className="experience">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="experience-info">
                            <h4 className="experience-title">Studi Independen Web Development & UI/UX Batch 7</h4>
                            <p>Infinite Learning</p>
                            <h4 className="experience-date">Sep 2024-Des 2024</h4>
                        </div>
                    </div>

                    <div className="experience">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="experience-info">
                            <h4 className="experience-title">Pertukaran Mahasiswa Merdeka Batch 4</h4>
                            <p>Inbound Universitas Internasional Batam</p>
                            <h4 className="experience-date">Jan 2024-Jun 2024</h4>
                        </div>
                    </div>

                    <div className="experience">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="experience-info">
                            <h4 className="experience-title">Women in Tech: Python for Business</h4>
                            <p>Thematic Academy Digital Talent Scholarship 2024</p>
                            <h4 className="experience-date">April 2024</h4>
                        </div>
                    </div>

                 </div>
                

                 <div className="skills-right">
                    {/* <p className="skills-about">Beberapa skill yang telah diperoleh selama masa perkuliahanku.</p> */}
                    <h4 className="skills-about">My Skills</h4>
                    <div className="skills-list">
                        <ul>
                            {/* <li><img src={lofi} alt="project3" width="15px" height="15px" viewbox="0 0 15 15"/> MySql</li> */}
                            <li>SQL</li>
                            <li>CSS</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Javascript</li>
                        </ul>

                        <ul>
                            <li>Python</li>
                            <li>Figma</li>
                            <li>Rational Rose</li>
                            <li>Canva</li>
                            <li>Ms. Office</li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
          </section>




          {/* <section id="contact">
            <div className="contact main-container">
                <div style="text-align: center;">
                <h1 className="title-contact">Contact</h1>
                <p className="about-contact">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam rem dolore quam exercitationem iure corporis temporibus velit quis, perferendis assumenda illo? Dicta excepturi, delectus quia quos cum unde asperiores laudantium.</p>
                <br/>
                </div>


            <form className="contact-form">
                <div>
                    <input type="text" name="name" placeholder="Name" />
                </div>

                <div>
                    <input type="email" name="email" placeholder="Email" />
                </div>

                <div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>

                <div>
                    <button className="btn-submit">Send Message</button>
                </div>
            </div>
            </form>
           </section> */}




            <footer>
                <div class="footer-icons">
                    <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=febbyfebby254@gmail.com" target="_blank"> 
                        <img src={email} alt="emailku" width="40px" height="40px" viewbox="0 0 24" />
                        {/* <!-- cari logo --> */}
                    </a>

                    <a href="https://github.com/peboiy25" target="_blank"> 
                        <img src={github} alt="githubku" width="40px" height="40px" viewbox="0 0 24" />
                        {/* <!-- cari logo --> */}
                    </a>

                    <a href="https://www.linkedin.com/in/aulia-febriani-adianzah-b0bb4730a/" target="_blank"> 
                        <img src={linkedin} alt="linkedinku" width="40px" height="40px" viewbox="0 0 24" />
                        {/* <!-- cari logo --> */}
                    </a>

                    <a href="https://www.instagram.com/febyauliaa_/" target="_blank"> 
                        <img src={ig} alt="instagramku" width="40px" height="40px" viewbox="0 0 24" />
                        {/* <!-- cari logo --> */}
                    </a>
                </div>

                <p class="cr">&#169; 2024 - Aulia Febriani Adianzah</p>
            </footer>

    </>
  );
}

export default App;
