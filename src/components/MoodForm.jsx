import { useState } from "react";

function MoodForm({ onAddMood }) {
    const [estado, setEstado] = useState("");
    const [intensidad, setIntensidad] = useState(5);
    const [valencia, setValencia] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const fecha = new Date().toISOString().split("T")[0];
        onAddMood({ fecha, estado, intensidad, valencia});
        setEstado("");
        setIntensidad(5);
        setValencia(0);
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar estado de animo</h2>

            <label>Intensidad (1-10): {intensidad}</label>
            <input
                type="range"
                min="1"
                max="10"
                value={intensidad}
                onChange={(e) => setIntensidad(Number(e.target.value))}
            />

            <label>Valencia (-5 a 5): {valencia}</label>
            <input
                type="range"
                min="-5"
                max="5"
                step="1"
                value={valencia}
                onChange={(e) => setValencia(Number(e.target.value))}
            />
            
            <input
                type="text"
                placeholder="Como te sentis..."
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            />
            
            <button type="submit">Guardar</button>
        </form>
    );
}

export default MoodForm;