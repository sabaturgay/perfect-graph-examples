import { Button } from "@material-ui/core";
import { useMeasure, View } from 'colay-ui';
import * as R from 'colay/ramda';
import React from 'react';
import GraphEditor, {
  ACTIONS
} from "./components/CaseLawExplorer";
import { TermsOfService } from './components/CaseLawExplorer/TermsOfService';
// import { TermsOfService } from './components/TermsOfService';

const App = () => {
  const [containerRef, { width, height, initialized }] = useMeasure()
  return (
    <View 
      ref={containerRef}
      style={{
        width: '100%', height: '100%'
      }}
    >
      {
        initialized && (
          <GraphEditor
            dispatch={()=>{}}
            {...{width, height}}
          />
        )
      }
    </View>
  )
}

const AppWithAuth = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  // const [authState, setAuthState] = React.useState(AuthState.SignedIn);
  // const [user, setUser] = React.useState({});
  return  <App />
}

export default AppWithAuth


function detectBrowser() { 
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
      return 'Opera';
  } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
      return 'Chrome';
  } else if(navigator.userAgent.indexOf("Safari") != -1) {
      return 'Safari';
  } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
      return 'Firefox';
  } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
      return 'IE';//crap
  } else {
      return 'Unknown';
  }
} 
const MySignin = () => {
  return (
    <Button>Hee</Button>
  )
}
