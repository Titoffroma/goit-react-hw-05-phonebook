import { StyledContactsListitem } from "./ContactsListStyled";
import { FormButton } from "../Form/FormStyled";

export default function ContactsListItem({
  id,
  name,
  number,
  handleRemoveContact,
}) {
  return (
    <StyledContactsListitem as="p">
      <span>{[name, number].join(", ")}</span>
      <FormButton data-id={id} onClick={handleRemoveContact}>
        Delete
      </FormButton>
    </StyledContactsListitem>
  );
}
