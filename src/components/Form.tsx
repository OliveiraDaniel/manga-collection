import React from 'react';
import '../styles/Form.css'

function Form() {
    return (
        <div id="form-push">
            <div className="container">
                <form>
                    <div className="form-line">
                        <label>Titulo:</label>
                        <input type="text" placeholder="Digite o titulo" />
                    </div>
                    <div className="form-line">
                        <label>Volume:</label>
                        <input type="number" placeholder="Digite o numero do volume" />
                    </div>
                    <div className="form-line">
                        <label>Editora:</label>
                        <input type="text" placeholder="Nome da editora" />
                    </div>
                    <div className="form-line">
                        <label>URL imagem:</label>
                        <input type="text" placeholder="Link da imagem"/>
                    </div>
                    <div className="form-line">
                        <input type="button" value="Cadastrar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;