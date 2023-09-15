import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Page from './page';

import './nav.css'
import './start.css'; 
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (

    // pages 等於總和頁數
    //offest 
    <div className="App">





      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">

        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="bg"></div>
        </ParallaxLayer>   
        {/* --------------------------------------------------------------- */}
        <ParallaxLayer offset={0} speed={0.55}>
          <div class="animation_layer parallax" id="cloud"></div>
        </ParallaxLayer>  

       {/* --------------------------------------------------------------- */}
       
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
       {/* --------------------------------------------------------------- */}
  
        <ParallaxLayer offset={0} speed={0.6}>
          <div class="animation_layer parallax" id="logo"></div>
        </ParallaxLayer>  

       {/* --------------------------------------------------------------- */}

        <ParallaxLayer offset={0} speed={0.65}>
          <div class="animation_layer parallax" id="rabbit"></div>
        </ParallaxLayer>  
       {/* --------------------------------------------------------------- */}

        
        <ParallaxLayer offset={0} speed={0.25}>
 
        </ParallaxLayer>   
        {/* <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="closeshot"></div>
        </ParallaxLayer>   */}

        {/* --------------------------------------------------------------- */}

        <ParallaxLayer offset={0} speed={-0.8}>
          <div class="animation_layer parallax" id="Torii"></div>
        </ParallaxLayer>  

        {/* --------------------------------------------------------------- */}

        <ParallaxLayer offset={0} speed={0}>
          <div class="animation_layer parallax" id="Cherryblossoms"></div>
        </ParallaxLayer>  
         {/* --------------------------------------------------------------- */}

          <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="Mountain"></div>
          <div className="vertical-text text-wrap fs-1 fw-bold h-100 ">
              <div>每</div>
              <div>一</div>
              <div>口</div>
              <div>，</div>
              <div>都</div>
              <div>是</div>
              <div>和</div>
              <div>菓</div>
              <div>子</div>
              <div>的</div>
              <div>味</div>
              <div>道</div>
            </div>

            <div className="vertical-text2 text-wrap fs-2 fw-bold ">
              <div>伝</div>
              <div>統</div>
              <div>說</div>
              <div>の</div>
              <div>、</div>
              <div>新</div>
              <div>し</div>
              <div>い</div>
              <div>出</div>
              <div>会</div>
              <div>い</div>
            </div>
        </ParallaxLayer>  

         {/* --------------------------------------------------------------- */}
        {/* 森林與門 */}
         <ParallaxLayer offset={0} speed={0.20}>
          <div class="animation_layer parallax" id="bottom"></div>

          <div className="ldoor ldoorleave">
            <img
              className="position-absolute bottom-0 end-0 h-100"
              src={require('./images/leftDoor.png')}
              alt=""
            />
          </div>
          <div className="rdoor ldoorleave">
            <img className="h-100 " src={require('./images/rightDoor.png')} alt="" />
          </div>
          </ParallaxLayer>

        

          <ParallaxLayer offset={1} speed={0.25} >
          <Page/>
          </ParallaxLayer>
         
          <ParallaxLayer offset={2}>
          {/* <Page2/> */}
          </ParallaxLayer>
        

      
      

      {/* <ParallaxLayer speed={-1}>  {/* 導覽列 *
      <div className='nav justify-content-center'>我是導覽列啦</div>
        </ParallaxLayer> */}
     
        </Parallax>
      

    </div>



  );

  
}

export default App;