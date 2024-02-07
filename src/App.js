
import Product from './components/product';
import './style/App.scss';
import Img1 from './images/img1.jpeg';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.jpeg';
import Img4 from './images/img4.jpeg';
function App() {

  const handlerRotate = (e) => {
    e.currentTarget.classList.toggle('i-active');
    e.target.parentElement.classList.toggle('change-color');
    e.target.parentElement.parentElement.children[1].classList.toggle('box-show');

  }


  return (
    <div className="App ">


      <div className='digital-products'>
        <div className="header ">
          <h5 className="title">Digital products</h5>
          <i className=" fa-solid fa-chevron-down" onClick={handlerRotate}></i>
        </div>
        <div className="box">
         <Product img={Img1} name={'Cheeseburger'} price={25} explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident nulla excepturi quo facere laudantium quos.'} />
         <Product img={Img2} name={'Shrimp'} price={70} explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident nulla excepturi quo facere laudantium quos.'} />
         <Product img={Img3} name={'Sausage'} price={35} explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident nulla excepturi quo facere laudantium quos.'} />
         <Product img={Img4} name={'Hamburger'} price={45} explain={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident nulla excepturi quo.'} />
        </div>
      </div>




    </div>
  );
}

export default App;
