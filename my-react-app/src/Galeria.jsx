import "./Galeria.css";

function Galeria() {
  return (
    <section className="galeria">

      <h2 className="titulo-seccion">Galería</h2>
      <p className="sub-seccion">
        Algunos momentos de nuestros cursos y talleres.
      </p>

      <div className="grid-galeria">

        <div className="card-img">
          <img src="https://picsum.photos/400/300?1" alt="" />
        </div>

        <div className="card-img">
          <img src="https://picsum.photos/400/300?2" alt="" />
        </div>

        <div className="card-img">
          <img src="https://picsum.photos/400/300?3" alt="" />
        </div>

        <div className="card-img">
          <img src="https://picsum.photos/400/300?4" alt="" />
        </div>

        <div className="card-img">
          <img src="https://picsum.photos/400/300?5" alt="" />
        </div>

        <div className="card-img">
          <img src="https://picsum.photos/400/300?6" alt="" />
        </div>

      </div>

    </section>
  );
}

export default Galeria;
