import styles from './TabelaIMC.module.css';

const TabelaIMC = ({ imc, classificacao }) => {
    return (
        <div className={styles.resultContainer}>
        {imc ? (
            <div>
            <h2>Resultado</h2>
            <p><strong>IMC:</strong> {imc}</p>
            <p><strong>Classificação:</strong> {classificacao}</p>
            </div>
        ) : (
            <p>Preencha os campos acima e clique em "Calcular" para ver o resultado.</p>
        )}
        </div>
    );
};

export default TabelaIMC;

// outra opção de codigo
// import styles from './TabelaIMC.module.css';

// const TabelaIMC = ({ imc }) => {
//     const dadosIMC = [
//         { classificacao: 'Abaixo do peso', imc: '< 18.5' },
//         { classificacao: 'Peso normal', imc: '18.5–24.9' },
//         { classificacao: 'Sobrepeso', imc: '25–29.9' },
//         { classificacao: 'Obesidade grau 1', imc: '30–34.9' },
//         { classificacao: 'Obesidade grau 2', imc: '35–39.9' },
//         { classificacao: 'Obesidade grau 3', imc: '≥ 40' },
//     ];

//     return (
//         imc && (
//         <table className={styles.table}>
//             <thead>
//             <tr>
//                 <th>Classificação</th>
//                 <th>IMC</th>
//             </tr>
//             </thead>
//             <tbody>
//             {dadosIMC.map((dado, index) => (
//                 <tr key={index}>
//                 <td>{dado.classificacao}</td>
//                 <td>{dado.imc}</td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//         )
//     );
// };

// export default TabelaIMC;
