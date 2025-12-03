'use client';
import Image from 'next/image';
import './cards.css';

function Card(props) {
    const handleClick = () => {
        if (props.onClick && props.data) {
            props.onClick(props.data);
        }
    };

    return(
            <div className = 'card' onClick={handleClick} style={{ cursor: props.onClick ? 'pointer' : 'default' }}>
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