function MoodList({ moods, onDeleteMood }) {
    let contenido;

    if (moods.length === 0) {
        contenido = <p className="text-muted">No hay registros aún.</p>;
    } else {
        contenido = (
            <ul className="list-group list-group-flush">
                {moods.map((mood, index) => (
                    <li key={index} className={`list-group-item ${
                        mood.valencia > 0
                        ? "text-success"
                        : mood.valencia < 0
                        ? "text-danger"
                        : "text-secondary"
                    }`}>
                        <strong>{mood.fecha}</strong>: "{mood.estado}" —{" "}
                        <span className="text-secondary">
                            Intensidad: {mood.intensidad}, Valencia: {mood.valencia}
                        </span>
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => {
                                if (window.confirm("¿Borrar este estado?")) {
                                    onDeleteMood(index);
                                }
                            }}
                        >
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="card p-4 shadow-sm h-100">
            <h2 className="mb-4">Historial de Estados</h2>
            {contenido}
        </div>
    );
}

export default MoodList;
