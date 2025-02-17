import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setItems(res.data);

            } catch (err) {
                setError("Failed to load post. Please try again")
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const value = { items, error, loading }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}