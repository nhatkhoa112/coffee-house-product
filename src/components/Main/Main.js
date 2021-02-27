import React from 'react'
import Products from '../Products/Products'
import Sidebar from '../Sidebar/Sidebar'

function Main() {
    return (
        <div>
            <main>
                <div id="collection">
                    {/* Slider */}
                    <section id="slide_collection">
                        <div className="owl-carousel" id="owl_slide">
                        <div className="item" style={{backgroundImage: 'url(//file.hstatic.net/1000075078/file/slider_home_1_d1b6c140bb55445ea05ce4be5ed38513_master.jpg)'}}>
                            <a href="/" title /></div>
                        </div>
                    </section>
                    {/* End slider */}
                    <div className="collection_menu_wrap">
                        <div className="container">
                            <div className="row">
                                <Sidebar />
                                <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 border_right_before">					
                                    
                                    <Products />
                                    
                                </div>			
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>   
    )
}

export default Main
