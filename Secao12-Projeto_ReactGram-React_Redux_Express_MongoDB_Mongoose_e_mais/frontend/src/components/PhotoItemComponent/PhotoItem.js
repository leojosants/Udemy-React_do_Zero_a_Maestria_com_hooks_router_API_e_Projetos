
// CSS
import './PhotoItem.css';

// Config
import { uploads } from '../../utils/config';

// Router
import { Link } from 'react-router-dom';

// 
const PhotoItem = ({ photo }) => {

    // 
    return (

        <div className='photo_item'>

            {
                photo.image && (
                    <img
                        src={`${uploads}/photos/${photo.image}`}
                        alt={photo.title}
                    />
                )

            }

            <h2>{photo.title}</h2>

            <p className='photo_author'>
                
                Publicada por:

                <Link to={`/users/${photo.userId}`}>
                    {photo.userName}
                </Link>
            </p>

        </div>

    );

};

export default PhotoItem;