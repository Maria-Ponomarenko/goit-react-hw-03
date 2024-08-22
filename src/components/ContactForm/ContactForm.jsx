import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import clsx from "clsx";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short! Must be at least 3 letters!")
    .max(50, "Too long! Must be no more than 50 letters!")
    .required("This field is required"),
  number: Yup.string().required("This field is required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.form)}>
        <div className={clsx(css.fieldWrap)}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={clsx(css.field)}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={clsx(css.error)}
          />
        </div>
        <div className={clsx(css.fieldWrap)}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={clsx(css.field)}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={clsx(css.error)}
          />
        </div>
        <button className={clsx(css.btn)} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
