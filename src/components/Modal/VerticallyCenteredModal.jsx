// import Button from 'react-bootstrap/Button';
import { AttantionCicleLight } from 'components/Icons';
import Modal from 'react-bootstrap/Modal';
import { theme } from 'styles';
import { ModalText } from './VerticallyCenteredModal.styled';

export const VerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton> */}
      {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body
        className="1111111"
        style={{
          padding: '32px',
          backgroundColor: `${theme.colors.beige}`,
          border: `1px solid ${theme.colors.green}`,
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>
            <AttantionCicleLight />
          </span>
          <ModalText>
            Кількість товарів у вашому кошику відрізняється від доступної на
            складі. Будь ласка, внесіть необхідні зміни перед замовленням.
          </ModalText>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
