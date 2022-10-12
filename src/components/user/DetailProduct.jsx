import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICONSTAR } from '../../Icon';
import Pageroot from '../../page/user/pageroot/Pageroot';
import { fetProducts } from './../../api/apiMethod';
import SearchUser from './SearchUser';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getCart, putCart } from '../../redux/thunk/actionThunk';
import { useNavigate } from 'react-router-dom';
import { listImage } from '../../common/common';
import { SaveCart } from '../../redux/userReducer/action-reduce';
function DetailProduct(props) {
    const [itemData, setItemData] = useState(Object);
    const { name, img, price, discount, status, sold, rating, id } = itemData;
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listCart = useSelector((state) => state.users.cart);
    console.log(listCart);
    const locale = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : {}
    const infoAccount = useMemo(() => {
        return locale.length ? locale : {}
    }, [locale])
    const param = useParams()
    useEffect(() => {
        fetProducts({ page: 1, limit: "", filter: `&id=${param.id}`, sort: "" }).then(res => {
            setItemData(res[0])
        })

    }, [param.id])

    const handleAddToCart = (item) => {
        if (locale.userName) {

            dispatch(putCart({ data: { product_id: id, quantity: 1 }, id: locale.cart_id }))
        } else {
            navigate("/login");
        }
    }
    return (
        <Pageroot search={<SearchUser />} >
            {itemData && <div className='detail viewFirst'>
                <div className='detail__photos'>
                    <img src={!index ? img : index} alt="" className='detail__photos--main' />
                    <div className='detail__photos--list'>
                        <img onClick={(e) => { setIndex(e.target.src) }} src={img} alt="" />
                        {listImage.map((item, id) => (
                            <img onClick={(e) => { setIndex(e.target.src) }} src={item} alt="" key={id} className="detail__photo--list--img" />
                        ))}
                    </div>
                </div>
                <div className='detail__info'>
                    <h2>{name}</h2>
                    <div className='d-flex justify-content-between'>
                        <h4>$ {price}</h4>
                        <p><i className={ICONSTAR}></i> {rating}/5</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sed voluptas autem molestiae nisi quia laudantium,
                        consequuntur ad vitae voluptatem officia alias.
                        Qui quas, odio nam ad nihil aspernatur natus reiciendis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sed voluptas autem molestiae nisi quia laudantium,
                        consequuntur ad vitae voluptatem officia alias.
                        Qui quas, odio nam ad nihil aspernatur natus reiciendis!
                    </p>
                    <div>
                        <p className='detail-stock'>
                            <span>Available:</span>
                            {status ? "In stock" : "Out of stock"}
                        </p>
                        <p className='detail-discount'>
                            <span>Discount:</span>
                            {discount}
                        </p>
                        <p className='detail-sold'>
                            <span>Amount Sold:</span>
                            {sold}
                        </p>
                    </div>
                    <div className='detail__btn'>
                        {status ? (<button className='button' onClick={() => handleAddToCart(itemData)}>Add To Cart</button>)
                            : (<button className='btn btn-danger'>Order</button>)}
                    </div>
                </div>
            </div>}
        </Pageroot >
    );
}

export default DetailProduct;