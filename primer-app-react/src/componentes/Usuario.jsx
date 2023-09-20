

export default function Usuario(props) {
    //parte logica: si es js va entre llaves


    return (
        //parte visible
        <div>
            <div className="card m-auto mt-4" style={{ width: "18rem" }}>

            <img src={props.imagen} className="img-fluid rounded-start"/>
                <div className="card-body">
               
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.cargo}<small className="text-body-secondary"></small></p>
                    <a href="#" className="btn btn-color">{props.conoceme}</a>
                   

                </div>
            </div>
        </div >

    )
}
