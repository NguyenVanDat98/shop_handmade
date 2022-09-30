import React from 'react';
import{ ItemVoucher} from './../../components/index';

const ListVoucher = props => {
    return (
        <div className='list-voucher'>
            {[...new Array(20)].map((i)=><ItemVoucher key={i}/>)}
        </div>
    );
};
export default ListVoucher;