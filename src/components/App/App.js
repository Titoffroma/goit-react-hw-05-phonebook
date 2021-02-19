import { Component, createRef } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import PhonebookCard from "../PhonebookCard/PhonebookCardStyled";
import Section from "../Section";
import Form from "../Form";
import ContactsList from "../ContactsList";
import Button from "../Button/ButtonStyled";
import Title from "../Title";
import ErrorNote from "../ErrorNote";
import { v4 as uuidv4 } from "uuid";
import { load, save } from "../../utils/localStorage";
import styles from "./app.module.css";
import "./app.css";

export default class App extends Component {
  state = {
    contacts: load("Contacts") || [],
    filter: "",
    isIn: false,
    error: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const duplicate = this.state.contacts.find(
      (contact) => contact.name === e.target.elements[0].value
    );

    if (duplicate) {
      setTimeout(() => {
        this.setState({
          error: "",
        });
      }, 3000);
      return this.setState({
        error: `${duplicate.name} is already in contacts`,
      });
    }

    const name = e.target.elements[0].value;
    const number = e.target.elements[1].value;
    const id = uuidv4();

    this.setState((prevState) => {
      const contacts = [...prevState.contacts, { name, number, id }];
      save("Contacts", contacts);
      return { contacts };
    });
  };

  handleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleRemoveContact = (e) => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(
        (contact) => contact.id !== e.target.dataset.id
      );
      save("Contacts", newContacts);
      return {
        contacts: newContacts,
      };
    });
  };

  componentDidMount() {
    this.setState({
      isIn: true,
    });
  }

  render() {
    const { isIn, contacts, filter, error } = this.state;
    const search = contacts.length > 1;
    const ref = createRef(null);
    const errorRef = createRef(null);
    const isError = error.length > 0;

    return (
      <>
        <CSSTransition
          in={isError}
          nodeRef={errorRef}
          timeout={500}
          classNames="error"
          unmountOnExit
        >
          <div ref={errorRef} className="error-wrapper">
            <ErrorNote>{error}</ErrorNote>
          </div>
        </CSSTransition>
        <Transition in={isIn} nodeRef={ref} timeout={200}>
          {(state) => (
            <Title
              title="My Phonebook App"
              fontSize={30}
              padding={20}
              tagName="h1"
              className={styles[state]}
            />
          )}
        </Transition>
        <PhonebookCard>
          <Section title="Phonebook">
            <Form handleSubmit={this.handleSubmit} />
          </Section>
          <Section title="Contacts">
            <CSSTransition
              in={search}
              nodeRef={ref}
              timeout={750}
              classNames="slide"
              unmountOnExit
            >
              <div ref={ref}>
                <Title
                  as="h3"
                  title="Find contacts by name"
                  fontSize="16"
                  textAlign="left"
                />
                <Button
                  as="input"
                  type="text"
                  id="filter"
                  onChange={this.handleChangeFilter}
                  value={filter}
                />
              </div>
            </CSSTransition>
            <ContactsList
              contactsList={contacts}
              filter={filter}
              handleRemoveContact={this.handleRemoveContact}
            />
          </Section>
        </PhonebookCard>
      </>
    );
  }
}
