import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 stikySidebar">
                <aside className="sidebar_menu">
                    <ul>
                        <li><a className="menu_scroll_link active" href="#noi-bat">NỔI BẬT</a></li>
                        <li><a className="menu_scroll_link " href="#ca-phe-viet-nam">CÀ PHÊ VIỆT NAM</a></li>
                        <li><a className="menu_scroll_link " href="#ca-phe-may">CÀ PHÊ MÁY</a></li>
                        <li><a className="menu_scroll_link " href="#cold-brew">COLD BREW</a></li>
                        <li><a className="menu_scroll_link " href="#tra-trai-cay">TRÀ TRÁI CÂY</a></li>
                        <li><a className="menu_scroll_link " href="#tra-sua-macchiato">TRÀ SỮA MACCHIATO</a></li>
                        <li><a className="menu_scroll_link " href="#ca-phe-da-xay">CÀ PHÊ ĐÁ XAY</a></li>
                        <li><a className="menu_scroll_link " href="#thuc-uong-trai-cay">THỨC UỐNG TRÁI CÂY</a></li>
                        <li><a className="menu_scroll_link " href="#matcha-socola">MATCHA - SÔCÔLA</a></li>
                        <li><a className="menu_scroll_link " href="#banh-snack">BÁNH &amp; SNACK</a></li>
                        <li><a className="menu_scroll_link " href="#ca-phe-goi">CÀ PHÊ GÓI</a></li>
                        <li><a className="menu_scroll_link " href="#merchandise">MERCHANDISE</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar
