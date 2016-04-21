import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
}from 'react-native';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSource: 'Brandon',
      userEntry: '',
      errorStatus: null
    }
  }

  onButtonPress(){
    this.props.navigator.pop({
    });
  }

  handleChange(e){
    this.setState({
      userEntry: e.nativeEvent.text
    })
  }

  handleSubmit(){
    var userEntry = this.state.userEntry;
    if(userEntry === this.state.userSource){
      console.log("Hello")
      this.props.navigator.push({
        id: 'LoggedIn',
        passProps: {
          loginState: true
        }
      });
    }else{
      console.log("Nope!")
      this.setState({
        errorStatus: true
      });
    }
  }

  errorMessage(){
    if(this.state.errorStatus){
      return <Text style={styles.error}>Wrong Credentials, try again</Text>
    }
  }



  render(){
    return(
      <View style={styles.container}>
      {this.errorMessage()}
      <TextInput
          style={styles.searchInput}
          value={this.state.userEntry}
          onChange={this.handleChange.bind(this)}
          placeholder="Username" />

      <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',

  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10,
    backgroundColor: '#79EEFD'
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#dddfd4',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

module.exports = Form;
