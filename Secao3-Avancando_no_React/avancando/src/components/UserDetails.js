// 

const  UserDetails = ({ nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes da pessoa</h2>

        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
        </ul>

        { idade >= 18 ? (<p>Maior de 18 anos, PODE TIRAR CARTEIRA</p>) : <p>Menor de 18 anos, NÃO PODE TIRAR CARTEIRA</p> }

    </div>
  );
};

export default UserDetails;