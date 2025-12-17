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
                                    <p>Burano is a vibrant island near Venice, famous for its brightly colored houses, lace-making tradition, canals, and charming atmosphere, attracting tourists worldwide for its picturesque beauty and cultural heritage.</p>
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
                                <p>Shanghai is China’s largest city, blending modern skyscrapers with colonial heritage, thriving finance, culture, and trade. Famous for the Bund, Huangpu River, and vibrant lifestyle, it symbolizes China’s global economic power.</p>
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
                                <p>San Francisco is a coastal U.S. city known for the Golden Gate Bridge, steep hills, cable cars, diverse culture, tech innovation, and landmarks like Alcatraz, Chinatown, and Fisherman’s Wharf.</p>
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
