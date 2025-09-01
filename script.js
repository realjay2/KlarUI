const { useState, useEffect } = React;

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
            preloader.style.display = "none";
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div>
            {loading ? null : <h1>Klar Hub | FF2 Script</h1>}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
