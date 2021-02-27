import React, { useState } from 'react'
function Product() {
    const [products, setProducts] = useState(
        [{"id":1,"name":"HỘP QUÀ TẾT 2021","status":"MỚI","image_url":"//product.hstatic.net/1000075078/product/gift-set-app_08c73112c20e434ca35f555f07973d0a_large.jpg","link":"/products/hop-qua-tet-2021","price":690000},{"id":2,"name":"Sô cô la Gừng","status":"MỚI","image_url":"//product.hstatic.net/1000075078/product/socola-gung_18d0b029c4e7448a93f4b3b4cd7d1664_large.jpg","link":"/products/so-co-la-gungsapo-so-co-la-gung-moi-la-de-doi-vi-nam-moi-cho-cuoc-hen-ho-them-xom-body-so-co-la-cung-vi-gung-thom-dac-trung-ngot-ngao-va-dang-diu-mon-an-vat-moi-la-cho-cuoc-hen-ho-them-thu-vi-tuoi-moi-can-1-mi","price":49000},{"id":3,"name":"Yogurt Dưa lưới phát tài","status":"MỚI","image_url":"//product.hstatic.net/1000075078/product/yogurt-dua-luoi_30e104322e764a8aa4794e09c1ff74ab_large.jpg","link":"/products/yogurt-dua-luoi-phat-tai","price":65000},{"id":4,"name":"Trà Dưa lưới phú quý","status":"MỚI","image_url":"//product.hstatic.net/1000075078/product/tra-dua-luoi_782fb083d885490ba64a7446d9a35eaf_large.jpg","link":"/products/tra-dua-luoi-phu-quy","price":59000}]
    )
    return (
        <div>
            <div className="block_menu_item" id="noi-bat">
                <h3 className="block_menu_item_title">
                    <span className="line_after_heading section_heading">NỔI BẬT</span>
                </h3>




                
                <div className="flex_wrap display_flex menu_lists">							
                    {products.map(product => (
                    <div className="menu_item" key={product.id}>
                        <div className="menu_item_image">
                            <a href={product.link} title={product.name}>
                                <img src={product.image_url} alt={product.name} />
                            </a>
                            <div className="new">
                                <img className="svg-new" src="//file.hstatic.net/1000075078/file/orion_sheriff-star.svg" alt="" />
                                <span>{product.status}</span>
                            </div>
                        </div>
                        <div className="menu_item_info bg_white">
                            <h3>
                                <a href={product.link} title={product.name}>{product.name}</a>
                            </h3>
                            <div className="price_product_item">{product.price} vnd</div>
                            <a className="menu_item_action animate_btn" href="//order.thecoffeehouse.com/order" target="_blank" title="Mua Ngay">Mua ngay</a>
                        </div>
                    </div>		
                ))}
                </div>		
            </div>
        </div>
    )
}

export default Product
