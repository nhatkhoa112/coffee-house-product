import React from 'react'

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="logo_wrap">
                        <a href="/" className="logo" title="the coffee house">
                        <svg className="svg-logo">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" />
                        </svg>
                        </a>
                        <h2 className="hidden"><a className="logo-name" href="/" title="The Coffee House">The Coffee House</a></h2>
                    </div>
                    <a className="visible-xs visible-sm" href="javascript:void(0)" id="showmenu-mobile"><span /><span /><span /></a>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 header_menu">
                    <ul className="clearfix">
                        <li className="has_child">
                        <a href="/pages/cau-chuyen-thuong-hieu" title="Câu chuyện thương hiệu">Câu chuyện thương hiệu</a>
                        <ul className="menu_child" id="menu_child_1_1">
                            <li><a href="/pages/cau-chuyen-thuong-hieu" title="Câu chuyện thương hiệu">VỀ THE COFFEE HOUSE</a></li>
                            <li><a href="/blogs/trach-nhiem-cong-dong" title="Câu chuyện thương hiệu">TRÁCH NHIỆM CỘNG ĐỒNG</a></li>
                            <li><a href="/blogs/thong-cao-bao-chi" title="Câu chuyện thương hiệu">THÔNG CÁO BÁO CHÍ</a></li>
                        </ul>
                        </li>
                        <li className="has_child">
                        <a href="/pages/hanh-trinh-tu-nong-trai-den-ly-ca-phe" title="Chuyện cà phê">Chuyện cà phê</a>
                        <ul className="menu_child" id="menu_child_2_2">
                            <li><a href="/pages/hanh-trinh-tu-nong-trai-den-ly-ca-phe" title="Chuyện cà phê">Hành trình từ nông trại đến ly cà phê</a></li>
                            <li><a href="/pages/hat-ca-phe-the-coffee-house" title="Chuyện cà phê">Hạt cà phê the coffee house</a></li>
                            <li><a href="/pages/nghe-thuat-pha-che" title="Chuyện cà phê">Nghệ thuật pha chế</a></li>
                            <li><a href="/blogs/workshop-ca-phe" title="Chuyện cà phê">Workshop cà phê</a></li>
                            <li><a href="/pages/truy-xuat-nguon-goc" title="Chuyện cà phê">Truy xuất nguồn gốc</a></li>
                        </ul>
                        </li>
                        <li className="active">
                        <a href="/collections/menu" title="Sản phẩm">Sản phẩm</a>
                        </li>
                        <li>
                        <a href="/pages/rewards" title="Ưu đãi thành viên">Ưu đãi thành viên</a>
                        </li>
                        <li>
                        <a href="/blogs/news" title="Tin tức">Tin tức</a>
                        </li>
                        <li>
                        <a href="http://tuyendung.thecoffeehouse.com/" title="Tuyển dụng" target="blank">Tuyển dụng</a>
                        </li>
                        <li>
                        <a href="/pages/our-stores" title="Cửa hàng">Cửa hàng</a>
                        </li>
                        <li className="search hidden-xs hidden-sm">
                        <a href="javascript:void(0)"><i className="fas fa-search" /></a>
                        <div className="search_input_wrap">
                            <form className="search_form" action="/search">
                            <div className="search-radio">
                                <input type="radio" name="type" defaultValue="product" defaultChecked="checked" />	
                                <span>Thức uống</span>
                                <input type="radio" name="type" defaultValue="article" />
                                <span>Tin tức</span>
                            </div>
                            <div className="search-inner">
                                <input required name="q" maxLength={40} autoComplete="off" className="search-input" type="text" size={20} placeholder="Tìm kiếm sản phẩm..." />
                                <button type="submit" className="btn-search btn" id="search-header-btn"><i className="fas fa-search" /></button>
                            </div>
                            </form>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Header
