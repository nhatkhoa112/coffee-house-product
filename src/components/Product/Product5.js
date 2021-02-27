import React, { useState } from 'react'

function Product5() {
    const [products, setProducts] = useState(
        [
            {id:1, name: "Trà Sữa Khoai Môn", status: "Bán chạy nhất", image_url:"//product.hstatic.net/1000075078/product/ts-khoai-mon_1x1_e0d98e67a7ef424e9e220161aba227bc_large.jpg", link:"/products/tra-sua-khoai-mon", price:42000},
            {id:2, name: "TRÀ LÀI MACCHIATO", status:"", image_url: "//product.hstatic.net/1000075078/product/tra_lai_macchiato_593fa25b60c746a0bbaab931ce646d42_large.jpg", link:"/products/tra-lai-macchiato", price: 42000},
            {id:3,name: "TRÀ ĐEN MACCHIATO", status: "Bán chạy nhất", image_url:"//product.hstatic.net/1000075078/product/tra_den_macchiato_789c1d7590a24dce8dd0a412ae03a7fd_large.jpg", link: "/products/tra-den-macchiato", price: 42000}
        ]
    )
    return (
        <div>
            <div className="block_menu_item" id="tra-sua-macchiato">
                <h3 className="block_menu_item_title">
                    <span className="line_after_heading section_heading">TRÀ SỮA MACCHIATO</span>
                </h3>
                <div className="flex_wrap display_flex menu_lists">							
                    {products.map(product => (
                        <div className="menu_item" key={products.id}>
                            <div className="menu_item_image">
                                <a href={product.link} title={product.name}>
                                    <img src={product.image_url} alt={product.name} />
                                </a>
                            <div className="best_seller">
                                <img className="svg-best-seller" src="//file.hstatic.net/1000075078/file/orion_diploma.svg" alt="" />
                                    <span>{product.status}</span>
                                </div>
                            </div>
                            <div className="menu_item_info bg_white">
                            <h3><a href={product.link} title={product.name}>{product.name}</a></h3>
                            <div className="price_product_item">{product.price} đ</div><a className="menu_item_action animate_btn" href="//order.thecoffeehouse.com/order" target="_blank" title="Mua Ngay">Mua ngay</a></div>
                        </div>			
                    ))}
                </div>

            </div>			
        </div>
    )
}

export default Product5
