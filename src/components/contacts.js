import React from 'react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

function Contacts() {
    return (
        <div className='contacts'>
            <div className='contactsChild'>
                <div>
                    <a className='a' href='https://www.facebook.com/povilas.misiunas/'><FaFacebook/></a>
                </div>
                <div>
                    <a className='a' href='https://www.instagram.com/p0fk33_/'><FaInstagram/></a>
                </div>
                <div className='d-flex'>
                    <p className='gameText'>Email: povilas.misiunas@gmail.com</p>
                </div>


            </div>

        </div>
    );
}

export default Contacts;