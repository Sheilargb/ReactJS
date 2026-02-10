import "./Productos.css";

function Productos() {
  return (
    <section className="productos">
      <header className="productos-hero">
        <div>
          <p className="productos-tag">Oferta educativa</p>
          <h2>Nuestros Cursos</h2>
          <p className="productos-lead">
            Programas de formacion claros, practicos y alineados al mercado.
            Aprende con proyectos reales y mentoria cercana.
          </p>
        </div>
        <div className="productos-cta">
          <button className="productos-btn primario">Ver programa</button>
          <button className="productos-btn secundario">Solicitar informacion</button>
        </div>
      </header>

      <div className="productos-tipos">
        <span className="productos-chip">Cursos individuales</span>
        <span className="productos-chip">Bootcamps intensivos</span>
        <span className="productos-chip">Cursos online</span>
        <span className="productos-chip">Formacion para empresas</span>
      </div>

      <div className="productos-grid">
        <article className="producto-card">
          <img
            className="producto-img"
            src="https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-hace-un-desarrollador-web.jpg"
            alt="Curso de Desarrollo Web"
          />
          <h3>Desarrollo Web</h3>
          <p>Fundamentos para crear sitios modernos.</p>
          <div className="producto-meta">
            <span>Nivel: Basico</span>
            <span>Online - 6 semanas</span>
          </div>
          <button className="productos-btn primario">Ver mas</button>
        </article>

        <article className="producto-card">
          <img
            className="producto-img"
            src="https://midu.dev/courses/ultimas-novedades-javascript.webp"
            alt="Curso de JavaScript Moderno"
          />
          <h3>JavaScript Moderno</h3>
          <p>Domina ES6+, APIs y buenas practicas.</p>
          <div className="producto-meta">
            <span>Nivel: Intermedio</span>
            <span>Mixto - 8 semanas</span>
          </div>
          <button className="productos-btn primario">Inscribirse</button>
        </article>

        <article className="producto-card">
          <img
            className="producto-img"
            src="https://s3.amazonaws.com/angularminds.com/blog/cover/Complete%20Guide%20on%20Front-End%20Web%20Development%20with%20React-20240830100833086.jpg"
            alt="Curso de React Frontend"
          />
          <h3>React Frontend</h3>
          <p>Componentes, hooks y rendimiento real.</p>
          <div className="producto-meta">
            <span>Nivel: Intermedio</span>
            <span>Online - 7 semanas</span>
          </div>
          <button className="productos-btn primario">Ver mas</button>
        </article>

        <article className="producto-card">
          <img
            className="producto-img"
            src="https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg"
            alt="Curso de Python"
          />
          <h3>Python</h3>
          <p>Automatiza y programa desde cero.</p>
          <div className="producto-meta">
            <span>Nivel: Basico</span>
            <span>Presencial - 6 semanas</span>
          </div>
          <button className="productos-btn primario">Inscribirse</button>
        </article>

        <article className="producto-card destacado">
          <img
            className="producto-img"
            src="https://www.campusdual.com/wp-content/uploads/2023/05/bootcamp_fullstack.png"
            alt="Bootcamp Full Stack"
          />
          <h3>Bootcamp Full Stack</h3>
          <p>Formacion intensiva con proyecto final.</p>
          <div className="producto-meta">
            <span>Nivel: Avanzado</span>
            <span>Mixto - 3 meses</span>
          </div>
          <button className="productos-btn primario">Solicitar cupo</button>
        </article>

        <article className="producto-card">
          <img
            className="producto-img"
            src="https://elurnet.net/wp-content/uploads/2020/12/Formacion.jpg"
            alt="Formacion para Empresas"
          />
          <h3>Formacion para Empresas</h3>
          <p>Capacitaciones a medida por area.</p>
          <div className="producto-meta">
            <span>Nivel: Intermedio</span>
            <span>In company - 4 a 12 semanas</span>
          </div>
          <button className="productos-btn primario">Solicitar informacion</button>
        </article>
      </div>
    </section>
  );
}

export default Productos;
