import './page.css';
import main1 from './images/專題2/品牌故事圖.png'; 

//
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function page() {

    return (
<div >
        <br/> <br/>               
        <section>
  <div class="container text">
  <div class="row ">
      
    <div className="col-6 ">

    <img  className='img-fluid handmade' src={main1} alt="" />
    </div>
    <div class="col-6">

<h1 >關於我們的故事</h1>

<h2 className='border border-dark m-2 '>「拾月菓」</h2>
<br></br>
  <h4 className='border border-dark m-3 '>日式菓子專賣店創辦於2023年資策會前端班，
    「十月」是我們學習了半年要結訓發表的月份，
    我們的團隊熱愛日本文化，於是決定創建日式點心為主題的網站，
    傳達品牌承襲日本文化、嚴選天然頂級原料的理念秉持著文化精髓中「不懈不怠、嚴謹專注」的職人精神。
  </h4>
   
      
    </div>
    
  </div>
</div>  

        </section>

</div>
        
    );
}



export default page;