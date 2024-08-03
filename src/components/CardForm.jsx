import { useState } from 'react';

function CardForm({ addCity }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: "",
        isVisited: false,
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault impedisce il comportamento predefinito del form, ovvero il refresh della pagina
        e.preventDefault();

        const city = {
            id: Math.random(),
            isVisited: formData.isVisited,
            title: formData.title,
            imgUrl: formData.imgUrl,
            description: formData.description,
        }
        addCity(city)

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            <div className="flex flex-col">
                <label>Nome Città</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input
                    type="text"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleInputChange} />
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input
                    type="checkbox"
                    name="isVisited"
                    checked={formData.isVisited}
                    onChange={handleInputChange} />
            </div>
            <button className="text-orange-500 bg-zinc-950" type="submit"> Aggiungi Card </button>

        </form>
    );
}

export default CardForm;