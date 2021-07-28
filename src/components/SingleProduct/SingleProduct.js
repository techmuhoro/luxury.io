import React, { useContext } from "react";
import "./SingleProduct.css";
import { DataContext } from "../../DataContext";
import { formatPrice } from "../../utils";

const SingleProduct = ({ id }) => {
    const { data } = useContext(DataContext);

    const product = data.filter(item => item.id == id)[0];
    const price = formatPrice(product.price);

    return (
        <section className='sp'>
            <div className='sp-wrapper'>
                <div className='sp-header'>
                    <div className='sp-header-img'>
                        <img src={product.image} alt='item' width='200px' />
                    </div>
                    <div className='sp-header-sidebar'>
                        <div className='sidebar-wrapper'>
                            <h2>{product.name}</h2>
                            <button>Add to Cart</button>
                            <button>Back shopping</button>
                        </div>
                    </div>
                </div>
                <div className='sp-description'>
                    <h2>Product description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos sequi et beatae distinctio saepe non
                        reiciendis ut quisquam iste voluptatum, nulla nobis,
                        ratione pariatur voluptatibus deleniti perferendis
                        recusandae magnam assumenda nam accusamus dignissimos
                        repellat nesciunt quae itaque! Iusto officia sint eos
                        reprehenderit, error voluptas facilis iure minus
                        corporis rem omnis? Quaerat distinctio doloribus
                        maiores! Commodi rerum, facere maiores quis esse iusto
                        nemo quidem animi aliquid, corrupti illo dolorem nostrum
                        suscipit id doloremque eveniet laboriosam voluptate
                        atque nihil voluptates. Maxime nihil esse ratione eum
                        eligendi voluptatibus consequuntur architecto soluta
                        provident fugiat sapiente, quae autem nam commodi fugit
                        ipsa similique iusto quod?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;

/**
 * Todo
 * convert id to int
 */
