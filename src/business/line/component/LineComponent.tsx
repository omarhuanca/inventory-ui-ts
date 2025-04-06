import { useEffect, useState } from "react"
import { getLines } from "../api/lineFetch";
import { LineAPI } from "../dto/LineAPI";

export const LineComponent = () => {

    const [lines, setPosts] = useState<LineAPI[]>([])

    useEffect(() => {

        getLines().then(data => setPosts(data));

    }, [])

    return (
        <>
            <h1> Lista de lineas </h1>

            <div>
            {
                lines.map(line => (
                    <div key={line.id}>
                        <p><span>{line.name}</span></p>
                    </div>
                ))
            }
            </div>
        </>
    )
}
