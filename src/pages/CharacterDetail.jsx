import { getCharacter } from "../services/swapiService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CharacterDetail() {
    const { id } = useParams();
    const [ character, setCharacter ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setLoading(true);
                const data = await getCharacter(id);
                setCharacter(data);
                setError(null);
            } catch (error) {
                setError("Error:", error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCharacter();
    }, [id]);

    if(loading){
        return <div className='loading'>Loading...</div>;
    }

    if(error || !character){
        return <div className='error-message'>Error: {error}</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',            
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit' 
        })
    }   

    return (  
        <div className='character-detail'>
            <h1>{character.name}</h1>
            <div className='detail-section'>
                <h2>Informacion personal</h2>
                <div className='detail-grid'>
                <div className='detail-item'>
                        <span>Altura:</span> {character.height !== 'unknown' ? character.height : 'Desconocido'}
                    </div>
                    <div className='detail-item'>
                        <span>Genero:</span> {character.gender !== 'n/a' ? character.gender : 'No aplicable'}
                    </div>                   
                    <div className='detail-item'>
                        <span>Peso:</span> {character.mass !== 'unknown' ? character.mass : 'Desconocido'}
                    </div>
                    <div className='detail-item'>
                        <span>Fecha de nacimiento:</span> {character.birth_year !== 'unknown' ? character.birth_year : 'Desconocido' }
                    </div>
                </div>  
            </div> 
            <div className='detail-section'>
                <h2>Informacion adicional</h2>
                <div className='detail-grid'>
                    <div className='detail-item'>
                        <span>Cantidad de peliculas:</span> {character.films.length}
                    </div>
                    <div className='detail-item'>
                        <span>Cantidad de naves:</span> {character.starships.length}
                    </div>                                       
                </div>  
            </div>
            <div className='back-btn'>
            <Link to='/'className='btn'>Volver lista personajes</Link>
            </div>
        </div>        
    );
}

export default CharacterDetail;