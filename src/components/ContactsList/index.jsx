import { useRef } from "react";
import ContactsListitem from "./ConactsListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "../App/app.module.css";

const StrictWrapper = ({ children, ...props }) => {
  const ref = useRef(null);
  return (
    <CSSTransition
      nodeRef={ref}
      timeout={200}
      classNames={{ ...styles }}
      {...props}
    >
      <li ref={ref}>{children}</li>
    </CSSTransition>
  );
};

const ContactsList = ({ contactsList, filter, handleRemoveContact }) => {
  let list = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!list.length) list = contactsList;

  return (
    <TransitionGroup component="ul">
      {list.map(({ id, name, number }) => (
        <StrictWrapper key={id}>
          <ContactsListitem
            key={id}
            id={id}
            name={name}
            number={number}
            handleRemoveContact={handleRemoveContact}
          />
        </StrictWrapper>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;
