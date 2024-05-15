import './colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdFavoriteBorder,  MdFavorite } from "react-icons/md";


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar () {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }


    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <MdFavorite color='#ff0000' {...propsfavorito} /> 
                : <MdFavoriteBorder {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador