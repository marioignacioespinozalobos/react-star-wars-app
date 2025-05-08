import { Link } from "react-router-dom";

function CharacterCard({ character }) {    
    const characterId = character.url.split('/').filter(Boolean).pop();
    
    return (  
        <div className='card'>
            <div className='card-content'>
                <h3>{character.name}</h3>
                    <div className='card-info'>
                        <span>Genero:</span> {character.gender !== 'n/a' ? character.gender : 'No aplicable'}
                    </div>
                    <div className='card-info'>
                        <span>Altura:</span> {character.height !== 'unknown' ? character.height : 'Desconocido'}
                    </div>
                    <div className='card-info'>
                        <span>Peso:</span> {character.mass !== 'unknown' ? character.mass : 'Desconocido'}
                    </div>
                    <div className='card-actions'>
                        <Link className="btn" to={`/character/${characterId}`}>Ver detalles</Link>
                    </div>
            </div>
        </div>
    );
}

export default CharacterCard;