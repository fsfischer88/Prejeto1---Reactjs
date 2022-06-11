import './App.css';
import { Aluno } from './components/Aluno';
import { Card } from './components/Card';
import { Contador } from './components/Contador';
import { PrimeiroComponenteClasse  } from './components/PrimeiroComponenteClasse';
import { PrimeiroComponenteFuncao }  from './components/PrimeiroComponenteFuncao';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos do React</h1>
     <Card titulo="Componente de Classe">
        <PrimeiroComponenteClasse/> 
      </Card>
      <Card titulo="Componente de Função">
        <PrimeiroComponenteFuncao/> 
      </Card>
      <Card titulo="Props e Renderização de Listas">
        <Aluno nome="Felipe" notas={[8,9,10]} />
        <Aluno nome="Marcos" notas={[8,7,10]} />
        <Aluno nome="Alini"  notas={[8,6,10]} />
       </Card>
       <Card titulo="State e Eventos">
          <Contador/>

       </Card>
 

    </div>
  );
}

export default App;
