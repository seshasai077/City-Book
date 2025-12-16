import React , {Fragment, useState} from "react" ;
import img2 from '../Assets/cities/card2.jpg'
import img3 from '../Assets/cities/card3.jpg'
import img4 from '../Assets/cities/card4.jpg'


    // let ItalyLink = () => {
    //  window.open ("https://en.wikipedia.org/wiki/Burano")
    // }

let FamousCities = () => {
    return(
        
        <Fragment>
{/* ------------------------------------------- First Card ------------------------------------------------------------------------------ */}
            <div className="container m-6 mt-5">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <div className="card ">
                                <div className="card-header bg-dark ">
                                    <img src={img4} alt="" className="card-img-top imge"/>
                                </div>
                                <div className="card-body">
                                    <p className="fw-bold"><span className="text-danger">Italy</span><span >- Burano</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum dicta aperiam! Dolorem rem amet nam necessitatibus vel! Veritatis, pariatur assumenda eius aliquam incidunt minima labore eum quo a libero.</p>
                                    {/* <button onClick={ItalyLink} className="btn btn-dark text-white">READ MORE</button> */}
  {/* // anchor tag is used as the btn    */}  <a href="https://en.wikipedia.org/wiki/Burano" className="btn btn-dark" >READ MORE</a> 
                                </div>
                            </div>
                        </div>
{/* ------------------------------------------- second Card ------------------------------------------------------------------------*/}
                    <div className="col-md-4 mt-4">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <img src={img2} alt=""  className="card-img-top imge " />
                            </div>
                            <div className="card-body">
                                <p className="fw-bold "><span className="text-danger">China</span><span >- Shanghai</span></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum dicta aperiam! Dolorem rem amet nam necessitatibus vel! Veritatis, pariatur assumenda eius aliquam incidunt minima labore eum quo a libero.</p>
                                <a href="https://en.wikipedia.org/wiki/Shanghai" className="btn btn-dark" >READ MORE</a>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4 mt-4 mb-1">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <img src={img3} alt=""  className="card-img-top " />
                            </div>
                            <div className="card-body">
                                <p className="fw-bold "><span className="text-danger">USA</span><span >- San Francisco</span></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum dicta aperiam! Dolorem rem amet nam necessitatibus vel! Veritatis, pariatur assumenda eius aliquam incidunt minima labore eum quo a libero.</p>
                                <a href="https://en.wikipedia.org/wiki/San_Francisco" className="btn btn-dark" >READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}
export default FamousCities