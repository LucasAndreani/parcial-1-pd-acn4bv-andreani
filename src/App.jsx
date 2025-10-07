import { useState, useEffect } from "react";
import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import Mood from "./models/Mood";

function App() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("moods");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                const restored = parsed.map(
                    (m) => new Mood(m.fecha, m.estado, m.intensidad, m.valencia)
                );
                setMoods(restored);
            } catch (e) {
                console.error("Error parseando moods de localStorage:", e);
            }
        }
    }, []);

    useEffect(() => {
        const toSave = moods.map((m) => ({
            fecha: m.fecha,
            estado: m.estado,
            intensidad: m.intensidad,
            valencia: m.valencia,
        }));
        localStorage.setItem("moods", JSON.stringify(toSave));
    }, [moods]);

    const handleAddMood = ({ fecha, estado, intensidad, valencia }) => {
        if (!estado) {
            alert("Escribí cómo te sentís");
            return;
        }
        if (intensidad < 1 || intensidad > 10) {
            alert("Intensidad debe estar entre 1 y 10");
            return;
        }
        if (valencia < -5 || valencia > 5) {
            alert("Valencia debe estar entre -5 y 5");
            return;
        }

        const nuevoMood = new Mood(fecha, estado, intensidad, valencia);
        setMoods((prev) => [...prev, nuevoMood]);
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Mood Tracker</h1>

            <div className="row g-4">
                <div className="col-md-6">
                    <MoodForm onAddMood={handleAddMood} />
                </div>
                <div className="col-md-6">
                    <MoodList moods={moods} />
                </div>
            </div>
        </div>
    );
}

export default App;
