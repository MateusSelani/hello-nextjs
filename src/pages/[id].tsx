import DinamicPages from "@/components/DinamicPages"
import Datas from "@/datas"
import { useRouter } from "next/router"

export default function Titulo() {

    const router = useRouter()
    const param = router.query.id

    // Filtro para trazer dados da pagina atual
    const content = Datas().content
    const currentPage = content.filter(item => item.id.toString() == param)

    return (
        <div>
            {
            currentPage.map((item) => 
                <DinamicPages 
                    key={item.id}
                    id={item.id}
                    titulo={item.titulo}
                    txt={item.txt}
                />
            )}
        </div>
    )
}