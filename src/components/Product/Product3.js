import React, { useState } from 'react'

function Product3() {
    const [products, setProducts] = useState(
        [
            {id:1,name: "AMERICANO", status: "", image_url: "//product.hstatic.net/1000075078/product/americano_copy_92414ac8e0634fb48ea72b21bc496b43_large.jpg", link:"/products/americano-1", price: 39000 },
            {id:2,name: "CAPPUCCINO", status: "", image_url:"//product.hstatic.net/1000075078/product/cappuccino_af58b143de7e4faeb9a3ce59b313c946_large.jpg", link:"/products/cappuccino-1", price: 45000},
            {id: 3, name: "CARAMEL MACCHIATO", status: "", image_url:"//product.hstatic.net/1000075078/product/caramel_macchiato_24ff98b746e84b7aba702c01a60b1a52_large.jpg", link: "/products/caramel-macchiato", price: 55000}
        ]
    )
    return (
        <div>
            <div className="block_menu_item" id="ca-phe-may">
                <h3 className="block_menu_item_title">
                    <span className="line_after_heading section_heading">CÀ PHÊ MÁY</span>
                </h3>
                <div className="flex_wrap display_flex menu_lists">							
                {products.map(product => (
                        <div className="menu_item" key={products.id}>
                            <div className="menu_item_image">
                                <a href={product.link} title={product.name}>
                                    <img src={product.image_url} alt={product.name} />
                                </a>
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

export default Product3
