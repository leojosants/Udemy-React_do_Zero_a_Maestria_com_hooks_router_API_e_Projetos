// CSS
import styles from './Search.module.css'

// Router-dom
import { Link } from 'react-router-dom';

// Hook custom
import { useFetchDocuments } from '../../hooks/useFetchDocuments/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery/useQuery';

// Componet
import { PostDetail } from '../../components/PostDetail/PostDetail';


// rafce + tab
const Search = () => {

    const query = useQuery();
    const search = query.get('q');

    const { documents: posts } = useFetchDocuments('posts', search);

    return (
        <div
            className={styles.search_container}
        >
            <h1>Resultados encontrados para: {search}</h1>

            <div
                className='post_list'
            >
                {
                    posts && posts.length === 0 && (

                        // <div
                        //     className={styles.noposts}
                        // >
                        <>
                            <p>Não foram encontrados posts a partir da sua busca...</p>

                            <Link
                                to='/'
                                className='btn btn_dark'
                            >
                                Voltar
                            </Link>
                            </>
                        // </div>

                    )}

                {
                    posts && posts.map((post) =>

                        <PostDetail
                            key={post.id}
                            post={post}
                        />

                    )
                }

            </div>

        </div>

    );

};

export default Search;