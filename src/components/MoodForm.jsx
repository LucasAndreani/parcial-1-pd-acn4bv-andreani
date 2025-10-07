import { useState } from "react";

function MoodForm({ onAddMood }) {
    const [estado, setEstado] = useState("");
    const [intensidad, setIntensidad] = useState(5);
    const [valencia, setValencia] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fecha = new Date().toISOString().split("T")[0];
        onAddMood({ fecha, estado, intensidad, valencia });
        setEstado("");
        setIntensidad(5);
        setValencia(0);
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm h-100">
            <h2 className="mb-4">Registrar estado de ánimo</h2>

            <div className="mb-3">
                <label className="form-label">
                    Intensidad (1-10): <strong>{intensidad}</strong>
                </label>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={intensidad}
                    onChange={(e) => setIntensidad(Number(e.target.value))}
                    className="form-range w-75"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Valencia (-5 a 5): <strong>{valencia}</strong>
                </label>
                <input
                    type="range"
                    min="-5"
                    max="5"
                    step="1"
                    value={valencia}
                    onChange={(e) => setValencia(Number(e.target.value))}
                    className="form-range w-75"
                />
            </div>

            <div className="mb-4">
                <textarea
                    rows="4"
                    placeholder="¿Cómo te sentís?"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Guardar
            </button>
        </form>
    );
}

export default MoodForm;
