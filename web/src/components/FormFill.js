import GetAvatar from "./getAvatar";
import InputLabel from "./InputLabel";
const FormFill = (props) => {
  return (
    <>
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-fullname"
        name="name"
        id="name"
        placeholder="Ej.: Nick Carter"
        label="Nombre Completo"
        htmlFor="name"
        handleInput={props.handleInput}
        value={props.data.name}
      />

      <InputLabel
        type="text"
        className="fill__input fill__input-js js-job"
        name="job"
        id="job"
        placeholder="Ej.: Backstreet boy"
        label="Puesto"
        htmlFor="job"
        handleInput={props.handleInput}
        value={props.data.job}
      />
      <GetAvatar updateAvatar={props.updateAvatar} avatar={props.avatar} />

      <InputLabel
        type="email"
        className="fill__input fill__input-js js-email"
        name="email"
        id="email"
        placeholder="Ej.: nick-carter@bravo.com"
        label="Email"
        htmlFor="email"
        handleInput={props.handleInput}
        value={props.data.email}
      />

      <InputLabel
        type="tel"
        className="fill__input fill__input-js js-phone"
        name="phone"
        id="phone"
        placeholder="Ej.: 555-555-555"
        label="Teléfono"
        htmlFor="phone"
        handleInput={props.handleInput}
        value={props.data.tel}
      />
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-linkedin"
        name="linkedin"
        id="linkedin"
        placeholder="Ej.: nick-carter"
        label="Linkedin"
        htmlFor="linkedin"
        handleInput={props.handleInput}
        value={props.data.linkedin}
      />
      <InputLabel
        type="text"
        className="fill__input fill__input-js js-github"
        name="github"
        id="github"
        placeholder="Ej.: @nick-carter"
        label="Github"
        htmlFor="github"
        handleInput={props.handleInput}
        value={props.data.github}
      />
    </>
  );
};

export default FormFill;
