import MenuBar from "../components/menuBar";
import styles from "./galleryPage.module.css"
function GalleryPage(){
    return(<div className={styles.bodyimage}>
      <MenuBar></MenuBar>
      <p className={styles.heading}>Gallery</p>
    {/* <div className={styles.wrapper}>
    <img className={styles.imag} src="/botTest.jpg" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?summer" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?plants" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?snow" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?roses" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?sky" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?nature" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?blossom" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?ice" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?spring" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?blossom" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?ice" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?spring" alt=""></img>
  </div> */}
  <div className={styles.galleryimage}>
    <div className={styles.imgbox}>
      <img src="./Screenshot1.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot2.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot3.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot4.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot5.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot6.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot7.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot8.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot9.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot10.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./Screenshot11.png" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p1.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p2.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p3.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p4.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p5.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p6.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p7.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p8.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p9.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p10.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p11.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p12.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="./p13.jpg" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div>
  </div>
  </div>)
}

export default GalleryPage;