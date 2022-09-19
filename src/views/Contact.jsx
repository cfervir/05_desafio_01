export default function Contact() {
  return (
    <div className="container">
      <h1 className="pageTitle">Cuentanos, ¿en que te podemos ayudar?</h1>
      <form className="form container--flex">
        <label htmlFor="email">Correo:</label>
        <input className="form--input form--email" type="email" name="email" required placeholder="name@example.com"></input>
        <label htmlFor="information">Descripción:</label>
        <textarea className="form--input form--data" type="text" name="information" required></textarea>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
}