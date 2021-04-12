function Detail() {

    const [state, setState] = useState([])

    useEffect(() => {
        const { id } = useParams();
        fetch("/api/data/" + id).then(res => setState(res.data), [])
    }, []);

    return (
        <>
            {state.map( d => <div>{d}</div>)}      
        </>
    )
}