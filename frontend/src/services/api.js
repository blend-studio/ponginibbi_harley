const API_URL = "http://localhost:5034/api"; // CAMBIA LA PORTA CON QUELLA DEL TUO BACKEND

export const getBikes = async () => {
    try {
        const response = await fetch(`${API_URL}/bikes`);
        if (!response.ok) throw new Error('Errore nel fetch delle moto');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getBikeDetail = async (vid) => {
    try {
        const response = await fetch(`${API_URL}/bikes/${vid}`);
        if (!response.ok) throw new Error('Moto non trovata');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};