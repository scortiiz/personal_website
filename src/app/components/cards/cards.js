import Image from 'next/image';
import './cards.css';

function Card(props) {
    return(
            <div className = 'card'>
                <h1 className = "title">{props.title} </h1>
                <Image
                    src={props.imageURL ?? '../../media/fallback/png'}
                    alt={props.title}
                    width={300}
                    height={200}
                    className="pictr"
                />

            </div>
    )
}

export default Card;