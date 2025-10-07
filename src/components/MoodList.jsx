function MoodList ({ moods }) {
    let contenido;

    if (moods.length === 0) {
        contenido = <p>No hay registros aun</p>;
    } else {
        contenido = (
            <ul>
                {moods.map((mood, index) => (
                    <li key={index}>
                        <strong>{mood.fecha}</strong>: "{mood.estado}" - Intensidad: {mood.intensidad}, Valencia: {mood.valencia}
                    </li>
                ))}
            </ul>
        )
    }


    return (
        <div>
            <h2>Historial de Estados</h2>
            {contenido}
        </div>
    )
}

export default MoodList;