

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// import dos componentes 
import Button from './src/components/Button';
import Display from './src/components/Display';

//Estado inicial sera utilizado como estado padrão 
const initialState = {
    displayValue: '0',
    clearDysplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

export default class App extends Component {

  // operador spread clona o objeto initialState dentro do State
  state = { ...initialState }

  // método responsável por adcionar os digitos inseridos na calculadora
  addDigit = n => {
    
    const clearDysplay = this.state.displayValue === '0' || this.state.clearDysplay;

     // testa se o digito . esta sendo utilizado apenas 1 vez
     if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return ;
    }

    // Testa se o visor deve ser apagado ou adcionado o valor e marcado para apagar no proximo comando 
    const currentValue = clearDysplay ? '' : this.state.displayValue; 
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDysplay: false});

    //Adciona o digito digitado ao estado values
    if (n !== '.'){
        const newValue = parseFloat(displayValue);
        const values = [... this.state.values];
        values[this.state.current] = newValue;
        this.setState({values});
    }

  };

  // método responsável por tornar o estado de volta ao estado padrão
  clearMemory = () => {
    this.setState({ ...initialState });
  }

  //método responsável por adcionar as operações 
  setOperation = operation => {

    // código responsável por montar a logica do calculo da calculadora
    if(this.state.current === 0){
        this.setState({operation, current: 1, clearDysplay: true});
    }else{
      const equals = operation === '=';
      const values = [...this.state.values];

      try{
          values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch(e) {
          values[0] =  this.state.values[0];
      }

      values[1] = 0;
      this.setState({displayValue: `${values[0]}`, operation: equals ? null :operation, current: equals ? 0 : 1,
           clearDysplay :! equals, values});

    }


  }



  render(){
    return (
        <View style={styles.container}>
          <Display value={this.state.displayValue}/>
          <View style={styles.buttons}>
              <Button label='AC' triple onClick={this.clearMemory} />
              <Button label='/' operation onClick={ this.setOperation}/>
              <Button label='7' onClick={ this.addDigit}/>
              <Button label='8' onClick={ this.addDigit}/>
              <Button label='9' onClick={ this.addDigit}/>
              <Button label='*' operation onClick={ this.setOperation}/>
              <Button label='4' onClick={ this.addDigit}/>
              <Button label='5' onClick={ this.addDigit}/>
              <Button label='6' onClick={ this.addDigit}/>
              <Button label='-' operation onClick={ this.setOperation}/>
              <Button label='1' onClick={ this.addDigit}/>
              <Button label='2' onClick={ this.addDigit}/>
              <Button label='3' onClick={ this.addDigit}/>
              <Button label='+' operation onClick={ this.setOperation}/>
              <Button label='0' double onClick={ this.addDigit}/>
              <Button label='.' onClick={ this.addDigit}/>
              <Button label='=' operation onClick={ this.setOperation}/>
          </View>
        </View>
    );

  }

  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',

    }


});


