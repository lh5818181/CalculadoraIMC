import './Formulario.module.css';

const Formulario = ({ altura, setAltura, peso, setPeso, calcularIMC }) => {
    return (
        <form onSubmit={(e) => {
        e.preventDefault();
        calcularIMC(); // Calcula o IMC ao submeter o formulário
        }}>
        <ul>
            <li>
            <label>Adicione Sua Altura:</label>
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex: 165"
                required
            />
            <p>cm</p>
            </li>
            <li>
            <label>Adicione seu peso:</label>
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex: 62,5"
                required
            />
            <p>kg</p>
            </li>
        </ul>
        <button type="submit">Calcular</button>
        </form>
    );
};

export default Formulario;
