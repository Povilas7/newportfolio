import React from 'react';

function Contacts() {
    return (
        <div className='contacts'>
            <div className='contactsChild'>
                <div>
                    <a href='https://www.facebook.com/povilas.misiunas/'><i className="fab fa-facebook-square"></i></a>
                </div>
                <div>
                    <a href='https://www.instagram.com/p0fk33_/'><i className="fab fa-instagram"></i></a>
                </div>
                <div className='d-flex'>
                    <i className="fas fa-mail-bulk"></i>
                    <p className='gameText'>Email povilas.misiunas@gmail.com</p>
                </div>


            </div>

        </div>
    );
}

export default Contacts;