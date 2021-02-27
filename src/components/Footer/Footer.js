import React from 'react'

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footer_col">
                            <svg className="logo_footer">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo-footer" />
                            </svg>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footer_col">
                            <h3 className="footer_title">ABOUT</h3>				
                            <ul className="footer_linklists">
                                <li><a href="/pages/cau-chuyen-thuong-hieu" title="Về Chúng Tôi">Về Chúng Tôi</a></li>
                                <li><a href="/pages/hat-ca-phe-the-coffee-house" title="Hạt Cà Phê The Coffee House">Hạt Cà Phê The Coffee House</a></li>
                                <li><a href="/blogs/news" title="Blog">Blog</a></li>
                                <li><a href="http://tuyendung.thecoffeehouse.com/" title="Cơ Hội Nghề Nghiệp">Cơ Hội Nghề Nghiệp</a></li>
                                <li><a href="/pages/our-stores" title="Cửa Hàng">Cửa Hàng</a></li>
                            </ul>				<div className="gov">
                            <a target="_blank" rel="nofollow" href="http://online.gov.vn/Home/WebDetails/48042">
                                <img width={200} src="//theme.hstatic.net/1000075078/1000610097/14/gov.png?v=656" alt="gov" />
                            </a>
                        </div>		
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footer_col">
                        <div className="hotline_footer">
                            <h3 className="footer_title">Always-on Support</h3>
                            <p>Delivery 1800 6936  (07:00-21:00)</p>
                            <p>Support 028.71.087.088 (07:00-21:00) </p>				
                        </div>
                        <div className="address_footer">
                            <h3 className="footer_title">Address</h3>
                            <p>86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh, Vietnam. 
                            <br />
                            Head Office 2: 62 Tran Quang Khai, Tan Dinh Ward, District 1 Ho Chi Minh, Vietnam.</p>
                            <p>+842871 078 079</p>
                            <p>hi@thecoffeehouse.vn</p>				
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footer_col">
                        <h3 className="footer_title">Delivery</h3>				
                        <ul className="footer_linklists">
                            <li><a href="/" title="Shipping methods">Shipping methods</a></li>
                            <li><a href="/" title="Payment">Payment</a></li>
                            <li><a href="/" title="Cash voucher">Cash voucher</a></li>
                            <li><a href="/" title="Return">Return</a></li>
                            <li><a href="/" title="Exchange">Exchange</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="copyright_footer display_flex justify-content-spbetween">
                            <div className="copyright_text copyright_col">Copyright © 2020 The Coffee House. All rights reserved.</div>					<div className="copyright_menu copyright_col">
                            <ul>
                                <li><a href="https://order.thecoffeehouse.com/policy">Privacy Policy</a></li>
                                <li><a href="https://order.thecoffeehouse.com/term">Terms of Use</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer
