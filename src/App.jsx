import { useState } from 'react';
import Header from './components/header/index';
import Formulario from './components/form/formulario';
import TabelaIMC from './components/TabelaIMC/index';
import './Global.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    setImc(imcCalculado);
    definirClassificacao(imcCalculado);
  };

  const definirClassificacao = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div className="container">
      <Header />
      <Formulario
        altura={altura}
        setAltura={setAltura}
        peso={peso}
        setPeso={setPeso}
        calcularIMC={calcularIMC}
      />
      <TabelaIMC imc={imc} classificacao={classificacao} />
    </div>
  );
}

export default App;




// ######################### OUTRA OPÇÃO DE CODIGO PARA CALCULAR O IMC 
// import { useState } from 'react';
// import Header from './components/header';
// import Formulario from './components/form/formulario';
// import TabelaIMC from './components/TabelaIMC/index';
// import './Global.css';

// function App() {
//   const [altura, setAltura] = useState('');
//   const [peso, setPeso] = useState('');
//   const [imc, setImc] = useState(null);

//   const calcularIMC = () => {
//     const alturaMetros = altura / 100;
//     const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
//     setImc(imcCalculado);
//   };

//   return (
//     <div className="container">
//       <Header />
//       <Formulario
//         altura={altura}
//         setAltura={setAltura}
//         peso={peso}
//         setPeso={setPeso}
//         calcularIMC={calcularIMC}
//       />
//       <TabelaIMC imc={imc} />
//     </div>
//   );
// }

// export default App;
