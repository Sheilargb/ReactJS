import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto-wrapper">

        <h2 className="contacto-titulo">Contáctanos</h2>
        <p className="contacto-sub">
          Déjanos tus datos y pronto nos comunicaremos contigo.
        </p>

        <form className="contacto-form">

          <div className="grid-2">
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Correo electrónico" />
          </div>

          <div className="grid-2">
            <input type="tel" placeholder="Teléfono" />

            <select>
              <option>Tipo de interés</option>
              <option>Curso individual</option>
              <option>Taller para empresa</option>
              <option>Formación online</option>
            </select>
          </div>

          <select>
            <option>Tecnología de interés</option>
            <option>HTML</option>
            <option>React</option>
            <option>Python</option>
            <option>Todas</option>
          </select>

          <textarea placeholder="Escribe tu mensaje..." rows="5"></textarea>

          <button type="button" className="btn-enviar">
            Enviar mensaje
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contacto;
