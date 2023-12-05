//import 'bootstrap/dist/css/bootstrap.css';
export default function Termek(props) {

    return (
        <div class="card">
            <div class="card-header">{props.cim}</div>
            <div class="card-body">
                <img class="card-img-top" src={props.src} alt="Auto" />
                <h1 class="card-title">{props.leiras}</h1>
                <p class="card-text">{props.ar}</p>
                <a href="#" class="btn btn-primary">Kosárba</a>
            </div>
        </div>
    )
}