import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Home from './utilities/Home'
import "@fontsource/inter";
import Gallery from './utilities/Gallery';
import CardList from './utilities/CardList';
import IconList from './utilities/IconList'
import Footer from './utilities/Footer'
import {Divider} from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewAll from './utilities/ViewAll';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ChakraProvider theme={theme}>
            <Layout>
              <ConnectButton handleOpenModal={onOpen} />
              <AccountModal isOpen={isOpen} onClose={onClose} />
              <Home/>
              <Gallery/>
              <CardList/>
              <IconList/>
              <Divider style={{width:'90%', backgroundColor: '#000', border: '1px solid #000'}}/>
              
              <Footer/>
            </Layout>
          </ChakraProvider>
        </Route>
        <Route path="/view-all">
          <ViewAll />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
