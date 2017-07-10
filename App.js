import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TextInput, Platform, Image, Alert, ScrollView, FlatList, ListView, SectionList, Picker, Switch, Slider} from 'react-native';
import { StackNavigator } from 'react-navigation';

class InputTextScreen extends Component {
  static navigationOptions = {
    title: 'Text Input'
  };
  render() {
    //here using the const {navigate} is the same as saying: const navigate = this.props.navigation.navigate (deconstructing element and assigning to variable), avoids repetition
    const { navigate } = this.props.navigation;
    const {state} = this.props.navigation;
    const {setParams} = this.props.navigation;
    return (
      <View style = {styles.container}>
        <View style = {styles.Input}>
          <TextInput style = {styles.addTextInput}
            value = {state.text}
            onChangeText = {text => setParams({text})}
            maxLength = {(Platform.OS === 'ios') ? 35 : 45}
            placeholder = 'Type your text here!'
            //when typing in text in iOS, the clear text button is visible only when editing  
            clearButtonMode = {(Platform.OS === 'ios') ? 'while-editing' : 'never'}/>
        </View>

        <View style = {[styles.Input, {flexDirection: 'row'}]}>
          <TextInput style = {[styles.addTextInput, {flex: 1}]}
            maxLength = {(Platform.OS === 'ios') ? 10 : 10}
            value = {state.text}
            onChangeText = {text => setParams({text})}
            placeholder = 'col 1' />
          <TextInput style = {[styles.addTextInput, {flex: 2}]}
            maxLength = {(Platform.OS === 'ios') ? 20 : 25}
            value = {state.text}
            onChangeText = {text => setParams({text})}
            placeholder = 'col 2' />
        </View>
        <View style = {styles.nextButton}>
          <Button
            onPress={() => navigate('Buttons')}
            title="Next" />
        </View>
      </View>

    );
  }
}

class ButtonScreen extends Component {
  static navigationOptions = {
    title: 'Buttons',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style = {styles.horizontalButtonContainer}>
          <Button 
            title = 'button 1'
            onPress = {() => {Alert.alert('You pressed button 1!')}} />
          <Button 
          //differently positioned buttons with different texts which trigger different alerts
            title = 'button 2'
            color = 'red'
            onPress = {() => {Alert.alert('You pressed button 2!')}} />
          <Button 
            title = 'button 3'
            color = 'purple'
            onPress = {() => {Alert.alert('You pressed button 3!')}} />
        </View>
        <View style = {styles.buttonNextToImage}>
          <View style = {styles.verticalButtonContainer}>
            <Button 
              title = 'button 4'
              onPress = {() => {Alert.alert('You pressed button 4!')}} />
            <Button 
              title = 'button 5'
              color = 'red'
              onPress = {() => {Alert.alert('You pressed button 5!')}} />
            <Button 
              title = 'button 6'
              color = 'purple'
              onPress = {() => {Alert.alert('You pressed button 6!')}} />
          </View>
          <Image
            style = {{width: 200, height: 200}}
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
        </View>
        <View style = {styles.nextButton}>
          <Button
            onPress={() => navigate('Scroll')}
            title="Next" />
        </View>
      </View>
    );
  }
}

class ScrollViewScreen extends Component {
  static navigationOptions = {
    title: 'Scrolling',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style = {styles.scrollContainer}>
          <Text style = {styles.scrollText} testID = 'button1' accessibilityLabel = 'button1'>Row 1</Text>
          <Text style = {styles.scrollText}>Row 2</Text>
          <Image
            style = {{width: 150, height: 150}} 
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
            <Text style = {styles.scrollText}>Row 3</Text>
            <Text style = {styles.scrollText}>Row 4</Text>
            <Text style = {styles.scrollText}>Row 5</Text>
            <Text style = {styles.scrollText}>Row 6</Text>
          <Image
            style = {{width: 250, height: 100, marginBottom: 30}} 
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
          <Image
            style = {{width: 300, height: 200}} 
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
          <Text style = {styles.scrollText}>Row 7</Text>
          <Text style = {styles.scrollText}>Row 8</Text>
        </View>
                

        <View style = {styles.horizontalButtonContainer}>
          <Image 
            style = {{width: 150, height: 100}} 
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
          <Image 
            style = {{width: 150, height: 100}} 
            source = {{uri: 'http://www.irishjobs.ie/careeradvice/wp-content/uploads/Pivotal.Blog-.jpg'}} />
        </View>

        <View style = {styles.scrollContainer}>
          <Text style = {styles.scrollText}>Row 9</Text>
          <Text style = {styles.scrollText}>Row 10</Text>
          <Text style = {styles.scrollText}>Row 11</Text>
          <Text style = {styles.scrollText}>Row 12</Text>
          <Text style = {styles.scrollText}>Row 13</Text>
          <Text style = {styles.scrollText}>Row 14</Text>
          <Text style = {styles.scrollText}>Row 15</Text>
        </View>
        <View style = {styles.nextButton}>
          <Button
            onPress={() => navigate('Flat')}
            title="Next" />
        </View>
      </ScrollView>
    );
  }
}


class FlatListScreen extends Component {
  static navigationOptions = {
    title: 'Flat List',
  };
  
  renderFooter() {
    return(
      <View style = {styles.nextButton}>
        <Button
          onPress={() => navigate('Section')}
          title="Next" />
      </View>
    );
  };

  render() {
    return(
      <View>
        <FlatList
          data={[
            {key: 'Item 1'},
            {key: 'Item 2'},
            {key: 'Item 3'},
            {key: 'Item 4'},
            {key: 'Item 5'},
            {key: 'Item 6'},
            {key: 'Item 7'},
            {key: 'Item 8'},
            {key: 'Item 9'},
            {key: 'Item 10'},
            {key: 'Item 11'},
            {key: 'Item 12'},
            {key: 'Item 13'},
            {key: 'Item 14'},
            {key: 'Item 15'},
          ]}
          renderItem={({item}) => <Text style = {styles.flatText}>{item.key}</Text>} 
          ListFooterComponent={
            <View style = {styles.nextButton}>
              <Button
                onPress={() => this.props.navigation.navigate('Section')}
                title="Next" />
            </View>
          } /> 
          <Text>/*need to use ListFooterComponent to make the button appear, or else if you just use button by itself it won't be rendered*/</Text>
      </View>
    );
  }
}


class SectionListScreen extends Component {
  static navigationOptions = {
    title: 'Section List',
  };

  render() {
    return (
      <View>
        <SectionList
          sections={[
            {title: 'D', 
              data: ['Data 1', 'Data 2', 'Data 3', 'Data 4']},
            {title: 'I', 
              data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']},
            {title: 'T', 
              data: ['Task 1', 'Task 2', 'Task 3']},
          ]}
          renderItem={({item}) => <Text style = {styles.sectionText}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          ListFooterComponent={
            <View style = {styles.nextButton}>
              <Button
                onPress={() => this.props.navigation.navigate('Picker')}
                title="Next" />
            </View>
          } /> 
      </View>
    );
  }
}

class PickerScreen extends Component {
  constructor(props) {
    super(props);
    data=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.state = {
      day: 'Monday',
    }
  }

  static navigationOptions = {
    title: 'Picker',
  };

  renderItems() {
    items=[];
    for (var day of data) {
      items.push(<Picker.Item key={day} label={day} value={day}/>)
    }
    return items;
  }

  render() {
    return(
      <View>
        <Text style={[styles.sectionHeader, {backgroundColor: 'transparent'}]}>Days of the Week</Text>
        <Picker
          selectedValue={this.state.day}
          onValueChange={(day) => this.setState({day: day})}>
          {this.renderItems()}
        </Picker>
        <Text style={{fontSize: 20}}>You picked: {this.state.day}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Switch')}
          title="Next" />
      </View>
    );
  }
}

class SwitchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    }
  }

  static navigationOptions = {
    title: 'Switch',
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Switch
              onValueChange={(value) => {this.setState({falseSwitchIsOn: value})}}
              style={{margin: 10}}
              value={this.state.falseSwitchIsOn} />
            <Text>{this.state.falseSwitchIsOn ? 'ON' : 'OFF'}</Text>
          </View>
          <View>
            <Switch
              onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
              style={{margin: 10}}
              value={this.state.trueSwitchIsOn} />
            <Text>{this.state.trueSwitchIsOn ? 'ON' : 'OFF'}</Text>
          </View>
        </View>
        <Button
            onPress={() => this.props.navigation.navigate('Slider')}
            title="Next" />
      </View>
    );
  }
}

class SliderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
  } 

  static navigationOptions = {
    title: 'Slider',
  };

  render() {
    return(
      <View style={styles.sliderContainer}>
        <Slider
          style={{width: 300}}
          step={1}
          minimumValue={-100}
          maximumValue={100}
          value={this.state.value}
          onValueChange={val => this.setState({value: val})}
          onSlidingComplete={val => this.setState({value: val})} />
        <Text style={{fontSize: 20}}>Number: {this.state.value}</Text>
      </View>
    );
  }
}



const SimpleApp = StackNavigator({
  InputText: {screen: InputTextScreen},
  Buttons: {screen: ButtonScreen},
  Scroll: {screen: ScrollViewScreen},
  Flat: {screen: FlatListScreen},
  Section: {screen: SectionListScreen},
  Picker: {screen: PickerScreen},
  Switch: {screen: SwitchScreen},
  Slider: {screen: SliderScreen},
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style = {styles.container}>
        <SimpleApp />
      </View>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButton: {
    margin: 10,
    justifyContent: 'flex-end',
  },
  Input: {
    borderColor: 'springgreen',
    borderWidth: 1,
  },
  addTextInput: {
    height: 45,
    backgroundColor: '#edf0f4', //light grey
    padding: 10,
    margin: 10,
  },
  TextInputRow: {
    flexDirection: 'row',
    flex: 1,
    height: 45,
  },
  horizontalButtonContainer: {
    padding: 5,
    flexDirection: 'row',
    borderColor: 'orange',
    justifyContent: 'space-around',
    borderWidth: 2,
  },
  verticalButtonContainer: {
    padding: 5,
    flexDirection: 'column',
    borderColor: 'green',
    justifyContent: 'space-between',
    borderWidth: 2,
    maxWidth: 100,
  },
  buttonNextToImage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'red',
    borderWidth: 2,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  scrollText: {
    fontSize: 40,
    padding: 40,
  },
  flatText: {
    fontSize: 30,
    margin: 5,
  },
  sectionText: {
    fontSize: 20,
    margin: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'lightsalmon',
    paddingLeft: 5,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

