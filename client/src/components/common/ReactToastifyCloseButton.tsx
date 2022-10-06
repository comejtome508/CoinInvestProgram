interface ReactToastifyCloseButtonProps {
    closeToast?: (e: any) => void;
}

const ReactToastifyCloseButton = ({ closeToast }: ReactToastifyCloseButtonProps) => {
    return (
        <span style={{ fontWeight: 500 }} onClick={closeToast}>
      확인
    </span>
    );
};

export default ReactToastifyCloseButton;
