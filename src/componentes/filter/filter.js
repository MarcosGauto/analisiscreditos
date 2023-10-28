import "./filter.css";
import retail from "../img/deposito.png";
import corpo from "../img/corpo.jpg";
import reseller from "../img/reseller.webp";
import lupa from "../img/lupa.jpg";


const Cards = () => {
  return (
    <div className="root">
      <div className="name-section">
          <p className="name-gn">Grupo Nucleo </p>
          <p className="name-analist">Analisis Crediticio </p>             
      </div>
      <div class="hero-section" >
        <div class="card-grid">
          <a class="card" href="#">
            <div class="card__background" style={{ backgroundImage: `url(${lupa}) ` }}></div>
            <div class="card__content">
              <p class="card__category">Categoria</p>
              <h3 class="card__heading">Consultas</h3>
            </div>
          </a>
          <a class="card" href="#">
            <div class="card__background" style={{ backgroundImage: `url(${corpo}) ` }}></div>
            <div class="card__content">
              <p class="card__category">Categoria</p>
              <h3 class="card__heading">Corporativo</h3>
            </div>
          </a>
          <a class="card" href="#">
            <div class="card__background" style={{ backgroundImage: `url(${reseller}) ` }}></div>
            <div class="card__content">
              <p class="card__category">Categoria</p>
              <h3 class="card__heading">Reseller</h3>
            </div>

          </a><a class="card" href="#">
            <div class="card__background" style={{ backgroundImage: `url(${retail}) ` }}></div>
            <div class="card__content">
              <p class="card__category">Categoria</p>
              <h3 class="card__heading">Retail</h3>
            </div>
          </a>
          <div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Cards;
