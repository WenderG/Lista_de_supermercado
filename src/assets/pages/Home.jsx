import '../css/Home.css'


function Home() {

    return (
        <section className="main">
            <div className='container'>
                <h1>Lista de Compras</h1>
                <div className='lista' id='lista'>
                   <p>Lista de compras vazia.</p>
                </div>
                
                <div className='formulario'>
                    <form id="form">
                        <label>Item:</label>
                        <div>
                            <input type="text" id="produto"/>
                        </div>
                        <label>Quantidade: </label>
                        <div>
                            <input type="number" id='quantidade'/>
                        </div>
                        <div className='botao'>
                            <input id="submit" type="submit" value="Confirmar" onClick={processamento}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Home