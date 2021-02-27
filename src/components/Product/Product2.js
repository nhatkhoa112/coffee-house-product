import React, {useState} from 'react'

function Product2() {
    const [products, setProduct] = useState(
        [
            {id:1, name:"BẠC SỈU", status: "", image_url: "//product.hstatic.net/1000075078/product/bac_siu_099c749a7d6044bc9f7f0eac7f57808f_large.jpg", link: "/products/bac-siu", price: 32000},
            {id:2, name: "CÀ PHÊ ĐEN", status: "", image_url: "//product.hstatic.net/1000075078/product/cf_da_copy_a33d6e77f8da405bba9da541744dcea9_large.jpg", link: "/products/ca-phe-den", price: 32000},
            {id:3, name: "CÀ PHÊ SỮA", status: "Bán chạy nhất", image_url: "//product.hstatic.net/1000075078/product/cfsd_615a3cb2b1e342d2b1986bfeb6572070_large.jpg", link:"/products/ca-phe-sua", price: 32000 }
        ]
    )
    return (
        <div>
            <div className="block_menu_item" id="ca-phe-viet-nam">
                <h3 className="block_menu_item_title">
                    <span className="line_after_heading section_heading">CÀ PHÊ VIỆT NAM</span>
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

export default Product2
