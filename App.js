import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, StyleProvider } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: App,
    },
  });

  export default createAppContainer(AppNavigator);