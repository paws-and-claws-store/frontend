// I don`t know what this component is used for

import { ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function DropDirectioExample() {
  return (
    <>
      <div className="mb-2">
        {['end'].map(direction => {
          return (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Drop ${direction} `}
            >
              <Dropdown.Item eventKey="1">
                <Link to={'/'}>Action</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownButton>
          );
        })}
      </div>
    </>
  );
}

export default DropDirectioExample;
