import styles from "./PrimeiroComponenteFuncao.module.css";


export function PrimeiroComponenteFuncao(){
    const nome = "Felipe";

    return (
        <> {/* <React.Fragment>*/}
            <h2 className={styles.title} id="titulo" hidden={false}>Primeiro Componente de Função</h2> 
            <p>Esse é um paragrafo</p>
            <p>A soma de 10 + 10 = {(10 + 10).toFixed(2)}</p>
            <p style={{color: "blue"}}>O meu nome é: {nome}</p>
           
        </> // /* <React.Fragment>
    
    )
  
    
}

   