import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    // console.log(modalData);
    const { gun, countIncrease } = props
    // console.log(gun)
    const { bullet, name, category, img, price } = gun


    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='w-96 h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{category}</p>
                <div className="card-actions justify-between">
                    <div>
                        <div className="badge badge-outline mx-1">{bullet}</div>
                        <div className="badge badge-outline mx-1">{price}</div>
                    </div>
                    <div>
                        <button onClick={() => countIncrease()} className="btn btn-xs mx-1 btn-error">Add To Cart</button>
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn btn-xs mx-1 modal-button">Details</label>
                    </div>
                </div>
            </div>
            {modalData && (
                <Modal data={modalData} setModalData={setModalData}></Modal>
            )};
        </div>
    );
};

export default SingleGun;