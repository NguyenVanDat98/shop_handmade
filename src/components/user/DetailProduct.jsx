import React from 'react';
import { ICONMINUS, ICONPLUS, ICONSTAR } from '../../Icon';

function DetailProduct(props) {
    return (
        <div>
            <div className='detail'>
                <div className='detail__photos'>
                    <img src="https://s.alicdn.com/@sc04/kf/H7127b8b74e404752a3926e05d84bc7bcB.jpg_960x960.jpg" alt="" className='' />
                    <div className='detail__photos--list'>
                        <img src="https://s.alicdn.com/@sc04/kf/H7127b8b74e404752a3926e05d84bc7bcB.jpg_960x960.jpg" alt="" />
                        <img src="https://s.alicdn.com/@sc04/kf/HTB1kpVHa0fvK1RjSszhq6AcGFXaC.jpg_280x280.jpg" alt="" />
                        <img src="https://s.alicdn.com/@sc04/kf/H6371a8b7bee746e684e9fbbe0c1893b0f.jpg_960x960.jpg" alt="" />
                        <img src="https://s.alicdn.com/@sc04/kf/H8c076c56ea7f4742a16209a79d8e8dbba.jpg_960x960.jpg" alt="" />
                        <img src="https://s.alicdn.com/@sc04/kf/H360a895459454ad2b6494640dd8f3595r.jpg_960x960.jpg" alt="" />
                    </div>
                </div>
                <div className='detail__info'>
                    <h2>Dog</h2>
                    <div className='d-flex justify-content-between'>
                        <h4>$30</h4>
                        <p><i className={ICONSTAR}></i> 4.5/5</p>
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
                            In stock
                        </p>
                        <p className='detail-discount'>
                            <span>Discount:</span>
                            8%
                        </p>
                    </div>
                    <div>
                        <button><i className={ICONMINUS}></i></button>
                        <span>1</span>
                        <button><i className={ICONPLUS}></i></button>
                    </div>
                    <div className='detail__btn'>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;