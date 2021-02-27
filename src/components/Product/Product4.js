import React, { useState } from 'react'


function Product4() {
    const [products, setProducts] = useState(
        [
            {id:1, name: "COLD BREW TRUYỀN THỐNG", status: "", image_url: "//product.hstatic.net/1000075078/product/classic_cold_brew_67a26b702dbc4602b36c450893efdab0_large.jpg", link: "/products/cold-brew-truyen-thong", price: 45000},
            {id:2, name:"COLD BREW PHÚC BỒN TỬ", status: "" , image_url: "//product.hstatic.net/1000075078/product/cold_brew_pnt_copy_172c6bdd6923422c9a01111867ce8686_large.jpg" , link:"/products/cold-brew-phuc-bon-tu", price: 45000},
            {id:3, name: "COLD BREW SỮA TƯƠI", status: "" , image_url:"//product.hstatic.net/1000075078/product/cold_brew_sua_tuoi_ee783daa0b44466b858f990f42943d46_large.jpg" , link:"/products/cold-brew-sua-tuoi", price: 45000}
        ]
    )
    return (
        <div>
            <div className="block_menu_item" id="cold-brew">
                <h3 className="block_menu_item_title">
                    <span className="line_after_heading section_heading">COLD BREW</span>
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

export default Product4
