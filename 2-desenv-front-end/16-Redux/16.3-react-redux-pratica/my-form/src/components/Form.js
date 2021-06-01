import React, { Component } from 'react';
import { connect } from 'react-redux';
import saveData from '../actions';

class UserForm extends Component {

  render() {
    const {userName, email, cpf, estado, cidade} = this.props;
    return (
      <>
      <fieldset>
        <form>
          <label htmlFor="userName">
            Nome:
            <input type="text" required name="userName" id="userName" maxlength="50"/>
          </label>

          <label htmlFor="userEmail">
            Email:
            <input type="email" required name="userEmail" id="userEmail" maxlength="50"/>
          </label>

          <label htmlFor="userCPF">
            CPF:
            <input type="number" required name="userCPF" id="userCPF" maxlength="50"/>
          </label>

          <label htmlFor="city">
            Cidade:
            <input type="text" required name="city" id="city" maxlength="28"/>
          </label>

          <label htmlFor="state">
            Estado:
            <input type="text" required name="state" id="state"/>
          </label>

          <label htmlFor="apType">
            Tipo:
            <input type="text" required name="apType" id="apType" maxlength="28"/>
          </label>

          <button type="submit" onClick="funcao" >Enviar</button>

        </form>  
      </fieldset>

      <div>
        

      </div>
    </>
    );
  }
}

const mapStateToProps= (state) => ({
  name: state.name,
  email: state.email,
  cpf: state.cpf,
  cidade: state.cidade,
  estado: state.estado,
  tipo: state.tipo,
})

const mapDispatchToProps = (dispatch) => ({
  updateData: (state) => dispatch(saveData(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm) ;