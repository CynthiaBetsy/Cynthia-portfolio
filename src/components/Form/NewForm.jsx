import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./NewForm.css";
import { useState } from "react";

function CPForm() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput && emailInput && textArea) {
      setSubmissionMessage("Submitted Successfully! Thank You!");
      setNameInput("");
      setEmailInput("");
      setTextArea("");
      setIsSubmitted(true);
    } else {
      setSubmissionMessage("Ensure you filled the form correctly");
    }
  };

  return (
    <div>
      <ContactInput
        nameInput={nameInput}
        emailInput={emailInput}
        textArea={textArea}
        onNameInputChange={setNameInput}
        onEmailInputChange={setEmailInput}
        onTextAreaChange={setTextArea}
        onSubmit={handleSubmit}
      />

      {isSubmitted &&
        submissionMessage && ( // Conditional rendering of success message
          <div className="success-message">{submissionMessage}</div>
        )}
    </div>
  );
}

function ContactInput({
  nameInput,
  emailInput,
  textArea,
  onNameInputChange,
  onEmailInputChange,
  onTextAreaChange,
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="label">Full Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          required
          value={nameInput}
          onChange={(e) => onNameInputChange(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={emailInput}
          onChange={(e) => onEmailInputChange(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label className="label">Write your message here:</Form.Label>
        <textarea
          className="form-textarea"
          name="message"
          rows="8"
          placeholder="Start typing..."
          value={textArea}
          onChange={(e) => onTextAreaChange(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CPForm;
