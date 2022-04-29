import styles from "./Conteudo.module.css"

function Conteudo(){
    return(
        <div className="conteudo">
          <div className="textos_conteudo">
            <h3>Título da chamada dos textos</h3>
            <p className={styles.fundo_verde}>LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            </p>
          </div>
          <div className="textos_conteudo">
            <h3>Título da chamada dos textos</h3>
            <p className={styles.fundo_azul}>LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            </p>
          </div>
          <div className="textos_conteudo">
            <h3>Título da chamada dos textos</h3>
            <p>LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            </p>
          </div>
          <div className="textos_conteudo">
            <h3>Título da chamada dos textos</h3>
            <p>LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
            </p>
          </div>
        </div>
    );
}

export default Conteudo;