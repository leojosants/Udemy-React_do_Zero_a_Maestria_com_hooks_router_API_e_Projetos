// 
import styles from './CarDetails.module.css';

const CarDetailsComponent = ({nome, modelo, cor}) => {
  return (
    <div className={styles.div}>
        <h2 className={styles.h2}>Detalhes dos carros</h2>
        
        <ul className={styles.ul}>
            <li>Nome: {nome}</li>
            <li>Modelo: {modelo}</li>
            <li>Cor: {cor}</li>
      </ul>
    </div>
  );
};

export default CarDetailsComponent;