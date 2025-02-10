import { Contact } from "../Contact";
import classes from "./ContactRow.module.css"

type ContactRowProps = {
  contact: Contact;
}

export function ContactRow({ contact }: ContactRowProps) {
  return (
    <div className={`${classes.listItem}`} >
      {contact.name}
    </div>
  );
}