import { Button, Modal } from 'antd';
import React, { useState } from 'react';

interface ITermsModalProps {
    children: React.ReactNode;
    handleCloseModal: () => void;
    title: string;
}

const TermsModal = ({ children, handleCloseModal, title }: ITermsModalProps) => {
    return (
        // <div className="terms-popup-wrap">
        //     <div className="layout-popup">
        //         <div className="container-popup">
        //             <div className="box-popup">
        //                 <a href="#" className="btn-close" onClick={handleCloseModal}></a>
        //                 {children}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <Modal title={title} visible={true} onCancel={handleCloseModal} onOk={handleCloseModal}>
                {children}
            </Modal>
        </>
    );
};

export default TermsModal;
