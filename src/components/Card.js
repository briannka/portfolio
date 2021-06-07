import '../App.css'

export default function Card (props) {
    return (
        <div className="card-wrapper">
            <img src={props.img} alt={props.img} />
            <p>{props.title}</p>
        </div>
    )
}