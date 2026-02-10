import "./AcercaDe.css";

function AcercaDe() {
  return (
    <section className="acerca">
      <div className="acerca-hero">
        <div className="acerca-hero-texto">
          <p className="acerca-tag">Formacion tecnologica</p>
          <h2>Acerca de Nosotros</h2>
          <p className="acerca-lead">
            Formamos profesionales del futuro con tecnologia actual. Ofrecemos
            cursos, capacitaciones y bootcamps que combinan teoria, practica y
            proyectos reales para que el aprendizaje sea aplicable desde el dia uno.
          </p>
          <div className="acerca-cta">
            <button className="acerca-btn primario">Ver cursos</button>
            <button className="acerca-btn secundario">Solicitar capacitacion</button>
          </div>
        </div>
        <div className="acerca-hero-card">
          <div className="acerca-metrica">
            <span className="acerca-num">10+</span>
            <span className="acerca-label">Anos formando talento</span>
          </div>
          <div className="acerca-metrica">
            <span className="acerca-num">3</span>
            <span className="acerca-label">Modalidades flexibles</span>
          </div>
          <div className="acerca-metrica">
            <span className="acerca-num">95%</span>
            <span className="acerca-label">Satisfaccion estudiantil</span>
          </div>
        </div>
      </div>

      <div className="acerca-grid">
        <div className="acerca-card">
          <h3>Que hacemos</h3>
          <p>
            Cursos de programacion, talleres para empresas y formacion online.
            Especialidades en HTML, React y Python.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Metodologia</h3>
          <p>
            Clases en vivo, laboratorios guiados y proyectos integradores. Acompanamos
            cada avance con mentoria y feedback continuo.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Resultados</h3>
          <p>
            Portafolios reales, bases solidas y habilidades listas para el mundo laboral
            y proyectos academicos.
          </p>
        </div>
      </div>

      <div className="acerca-valores">
        <h3>Enfoque de formacion</h3>
        <div className="acerca-valores-grid">
          <div className="acerca-valor">
            <span className="acerca-valor-dot" />
            <div>
              <h4>Aprendizaje aplicado</h4>
              <p>Clases orientadas a proyectos y retos reales.</p>
            </div>
          </div>
          <div className="acerca-valor">
            <span className="acerca-valor-dot" />
            <div>
              <h4>Mentorias cercanas</h4>
              <p>Acompanamiento personalizado y comunidades activas.</p>
            </div>
          </div>
          <div className="acerca-valor">
            <span className="acerca-valor-dot" />
            <div>
              <h4>Actualizacion constante</h4>
              <p>Programas alineados a tecnologia actual.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="acerca-timeline">
        <h3>Lo que ofrecemos</h3>
        <div className="acerca-timeline-grid">
          <div className="acerca-hito">
            <span className="acerca-hito-ano">Cursos</span>
            <p>Programacion web, frontend y bases de datos.</p>
          </div>
          <div className="acerca-hito">
            <span className="acerca-hito-ano">Bootcamps</span>
            <p>Formacion intensiva con proyectos y portafolio final.</p>
          </div>
          <div className="acerca-hito">
            <span className="acerca-hito-ano">Empresas</span>
            <p>Capacitacion tecnica a medida para equipos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcercaDe;
