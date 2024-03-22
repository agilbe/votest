import React from 'react';
import { useModalModel, Modal, PrimaryButton } from '@workday/canvas-kit-react';
import { SelectField } from './Select';

export const ModalField = () => {

    // modal
    const [inModal, setInModal] = React.useState(false);
    const modalModel = useModalModel();
    
    
    React.useEffect(() => {
        if (inModal) {
            modalModel.events.show();
        }
    }, [inModal, modalModel])

    const toggleModalHandler = (e) => {
        setInModal(!inModal);
    }

    // role
    const comboBoxRole = 'combobox'
    const buttonRole = 'button'
    const [role, setRole] = React.useState(comboBoxRole);

    const getUnselectedRole = () => {
        return role === comboBoxRole ? buttonRole : comboBoxRole; 
      }

    const toggleRoleHandler = (event) => {
        setRole(getUnselectedRole());
        inputRef.current?.focus();
    }

    // other
    const inputRef = React.useRef();
  
    return inModal 
    ? (
      <Modal model={modalModel}>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.Body>
            <ToggleModalButton handleClick={toggleModalHandler}/>
            <ToggleRoleButton handleClick={toggleRoleHandler} unselectedRole={getUnselectedRole()}/>
            <br />
            <SelectField role={role} inputRef={inputRef}/>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
    )
    : (
    <>
        <br />
        <ToggleModalButton handleClick={toggleModalHandler} />
        <ToggleRoleButton handleClick={toggleRoleHandler} unselectedRole={getUnselectedRole()}/>
        <br />
        <SelectField role={role} inputRef={inputRef}/>
    </>
    );
  };

  const ToggleModalButton = ({handleClick}) => {
    return (
        <PrimaryButton onClick={handleClick}>
            Toggle page-level modal
        </PrimaryButton>
    );
  };

  const ToggleRoleButton = ({handleClick, unselectedRole}) => {
    return (
        <PrimaryButton onClick={handleClick}>Toggle role to {unselectedRole}</PrimaryButton>
    );
  }