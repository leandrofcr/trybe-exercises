import React, { Component } from 'react';
import { connect } from 'react-redux';
import saveData from '../actions';

class UserForm extends Component {
  constructor(){
    super()
    this.state={
      showData: false,
    }
  }
  
  // showData = () => {
        
  // }

  render() {
    const {name, email, cpf, estado, cidade, updateData} = this.props;
    const {showData} = this.state;
    return (
      <>
      <fieldset>
        <form>
          <label htmlFor="userName">
            Nome:
            <input
            type="text"
            required
            name="name"
            id="userName"
            maxLength="50"
            onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <label htmlFor="userEmail">
            Email:
            <input type="email" required name="email" id="userEmail" maxLength="50" onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <label htmlFor="userCPF">
            CPF:
            <input type="number" required name="cpf" id="userCPF" maxLength="50" onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <label htmlFor="city">
            Cidade:
            <input type="text" required name="cidade" id="city" maxLength="28" onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <label htmlFor="state">
            Estado:
            <input type="text" required name="estado" id="state" onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <label htmlFor="apType">
            Tipo:
            <input type="text" required name="tipo" id="apType" maxLength="28" onChange={({target:{name, value}})=>updateData(name, value)}/>
          </label>

          <button type="button" onClick={()=> this.setState({showData: true})} >Enviar</button>

        </form>  
      </fieldset>

      <div>
       {showData &&
        <div>
          Nome: {name}
          Email: {email}
          CPF: {cpf}
          Cidade: {cidade}
          Estado: {estado}
        </div>
      }
      </div>
    </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.updateDateUser.name,
  email: state.updateDateUser.email,
  cpf: state.updateDateUser.cpf,
  cidade: state.updateDateUser.cidade,
  estado: state.updateDateUser.estado,
  tipo: state.updateDateUser.tipo,
})

const mapDispatchToProps = (dispatch) => ({
  updateData: (element, state) => dispatch(saveData(element, state))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm) ;