import '../css/Home.css'
import { processamento } from '../components/Lista'

function Home() {

    return (
        <section className="main">
            <div className='container'>
                <h1>Lista de Compras</h1>
                <div className='lista' id='lista'>
                   <p>Lista de compras vazia.</p>
                </div>
                { processamento }
                <div className='formulario'>
                    <form id="form">
                        <label>Item: </label>
                        <div>
                            <input type="text" id="item"/>
                        </div>
                        <label>Quantidade: </label>
                        <div>
                            <input type="number" id='quantidade'/>
                        </div>
                        <div className='botao'>
                            <input id="submit" type="submit" value="Confirmar"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Home