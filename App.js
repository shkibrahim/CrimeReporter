import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{ level: 'error' }]);
LogBox.ignoreAllLogs();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import Login from './screens/Login';
import Todo from './screens/Todo';
import Alogin from './screens/Alogin';
import FIR from './screens/FIR';
import Signup from './screens/Signup';
import Home from './screens/Home';
import UserPanel from './screens/UserPanel';
import Sets from './screens/Sets';
import PMC from './screens/PMC';
import Tabs from './screens/Tabs';
import Rcrime from './screens/Rcrime';
import VRC from './screens/VRC';
import Rcomplaint from './screens/Rcomplaint';
import Auserpanel from './screens/Auserpanel';
import CIT from './screens/CIT';
import VRF from './screens/VRF';
import VCD from './screens/VCD';
import PM from './screens/PM';
import ITP from './screens/ITP/ITP';
import Screen1 from './screens/Screen1';
import Test from './screens/Test';
import MyTheme from './screens/MyTheme';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import FIRS from './screens/FIRS';
import Firebaseee from './screens/Firebaseee';
import 'react-native-gesture-handler';
import Complaints from './screens/Complaints';
import Rcomplaints from './screens/Rcomplaints';
import { createDrawerNavigator } from '@react-navigation/drawer';
import First from './screens/First';
import Second from './screens/Second';
import RMV from './screens/RMV';
import Imageupload from './screens/Imageupload';
import Notification from './screens/Notification';
import ITPPanel from './screens/ITP/ITPPanel';
import VCS from './screens/ITP/VCS';
import AdminTC from './screens/AdminScreens/AdminTC';
import Track from './screens/Track';
import RMVB from './screens/RMVB';
import RMP from './screens/RMP';
import RMPB from './screens/RMPB';
import FMPB from './screens/FMPB';
import AdminVF from './screens/AdminScreens/AdminVF';
// import AdminVF from './screens/AdminScreens/AdminVF';
import UserNotification from './screens/UserNotification';
import AdminRMD from './screens/AdminScreens/AdminRMD';
import AdminVC from './screens/AdminScreens/AdminVC';
import Analytics from './screens/AdminScreens/Analytics';
import AdminVMH  from './screens/AdminScreens/AdminVMH';
import AdminUN  from './screens/AdminScreens/AdminUN';
import AdminIT from './screens/AdminScreens/AdminIT';
import AdminMP from './screens/AdminScreens/AdminMP';
import AdminCIT from './screens/AdminScreens/AdminCIT';
import AdminVAC from './screens/AdminScreens/AdminVAC';
import AdminVCT from './screens/AdminScreens/AdminVCT';
import AdminVMC from './screens/AdminScreens/AdminVMC';
import AdminVMD from './screens/AdminScreens/AdminVMD';
import AdminUpdate from './screens/AdminScreens/AdminUpdate';
import AdminPreview from './screens/AdminScreens/AdminPreview';
import AdminVRNotification from './screens/AdminScreens/AdminVRNotification';
import AdminRMC from './screens/AdminScreens/AdminRMC';
import AdminRMV from './screens/AdminScreens/AdminRMV';
import AdminVMV from './screens/AdminScreens/AdminVMV';
import ITSW from './screens/ITP/ITSW';
import ITPcall from './screens/ITP/ITPcall';
import PMA from './screens/PMA';
import FB from './screens/FB';
import ITPsuspect from './screens//ITP/ITPsuspect';
import MAPS from './screens/MAPS';
import ITPzoom from './screens//ITP/ITPzoom';
import ITPVAC from './screens/ITP/ITPVAC';
import ITPI from './screens/ITP/ITPI';
import ITPSimilarCases from './screens/ITP/ITPSimilarCases';
import ITPreview from './screens/ITP/ITPreview';
import AdminAssignedCasesTeam from './screens/AdminScreens/AdminAssignedCasesTeam';
import VRMH from './screens/VRMH';
import VRMP from './screens/VRMP';
import MV from './screens/MV';
import UserNVMV from './screens/UserNVMV';
import MADTask  from './screens/MADTask';
import MP from './screens/MP';
import FMP from './screens/FMP';
import CalenderView from './screens/AdminScreens/CalenderView';
import Piechart1 from './screens/Piechart1';
import UserNVMC from './screens/UserNVMC';
import UserNVMD from './screens/UserNVMD';
import FaceRecongnition from './screens/FaceRecongnition';
import FIRAnalytics from './screens/AdminScreens/FIRAnalytics';
import ACD from './screens/AdminScreens/ACD';
import AdminSCcnic from './screens/AdminScreens/AdminSCcnic';
import RNC from './screens/AdminScreens/RNC';
import VRCriminal from './screens/AdminScreens/VRCriminal';
import AcceptedCases from  './screens/AdminScreens/AcceptedCases';
import AdminSCimage from './screens/AdminScreens/AdminSCimage';
import AdminVFeedback from './screens/AdminScreens/AdminVFeedback';
import CaseDetails from './screens/CaseDetails';
import AdminSearchMP from './screens/AdminScreens/AdminSearchMP';
import AdminCases from './screens/AdminScreens/AdminCases';
import AdminSVF from './screens/AdminScreens/AdminSVF';
import UserAnalytics from './screens/UserAnalytics';
import AdminSolvedCases from './screens/AdminScreens/AdminSolvedCases';
import AdminUnsolvedCases from './screens/AdminScreens/AdminUnsolvedCases';
import Suspectstatus from './screens/ITP/Suspectstatus';
import AdminSearchMPcnic from './screens/AdminScreens/AdminSearchMPcnic';
import AdminSearchMPimage from './screens/AdminScreens/AdminSearchMPimage';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
function App() {
  
  return (
    
   
    <NavigationContainer>
     
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen name="Firebaseee" component={Firebaseee} />
        <Stack.Screen name="AdminSearchMPcnic" component={AdminSearchMPcnic} />
        <Stack.Screen name="AdminSearchMPimage" component={AdminSearchMPimage} />
        <Stack.Screen name="Suspectstatus" component={Suspectstatus} />
        <Stack.Screen name="Imageupload" component={Imageupload} />
        <Stack.Screen name="CalenderView" component={CalenderView} />
        <Stack.Screen name="VRCriminal" component={VRCriminal} />
        <Stack.Screen name="AdminSVF" component={AdminSVF} />
        <Stack.Screen name="Piechart1" component={Piechart1} />
        <Stack.Screen name="FIRAnalytics" component={FIRAnalytics} />
        {/* <Stack.Screen name="AdminVF" component={AdminVF} /> */}
        <Stack.Screen name="AdminVC" component={AdminVC} />
        <Stack.Screen name="AdminRMV" component={AdminRMV} />
        <Stack.Screen name="AdminCases" component={AdminCases} />
        <Stack.Screen name="AdminSolvedCases" component={AdminSolvedCases} />
        <Stack.Screen name="AdminUnsolvedCases" component={AdminUnsolvedCases} />
        <Stack.Screen name="AdminRMD" component={AdminRMD} />
        <Stack.Screen name="AdminMP" component={AdminMP} />
        <Stack.Screen name="AdminVAC" component={AdminVAC} />
        <Stack.Screen name="AdminSearchMP" component={AdminSearchMP} />
        <Stack.Screen name="ACD" component={ACD} />
        <Stack.Screen name="CaseDetails" component={CaseDetails} />
        <Stack.Screen name="RNC" component={RNC} />
        <Stack.Screen name="AdminVMC" component={AdminVMC} />
        <Stack.Screen name="AdminVFeedback" component={AdminVFeedback} />
        <Stack.Screen name="UserAnalytics" component={UserAnalytics} />
        <Stack.Screen name="AdminVMD" component={AdminVMD} />
        <Stack.Screen name="AdminVMV" component={AdminVMV} />
        <Stack.Screen name="AdminVCT" component={AdminVCT} />
        <Stack.Screen name="FaceRecongnition" component={FaceRecongnition} />
        <Stack.Screen name="AdminIT" component={AdminIT} />
        <Stack.Screen name="AdminCIT" component={AdminCIT} />
        <Stack.Screen name="AdminVRNotification" component={AdminVRNotification} />
        <Stack.Screen name="AdminUpdate" component={AdminUpdate} />
        <Stack.Screen name="AdminVMH" component={AdminVMH} />
        <Stack.Screen name="AdminRMC" component={AdminRMC} />
        <Stack.Screen name="AdminSCcnic" component={AdminSCcnic} />
        <Stack.Screen name="AdminSCimage" component={AdminSCimage} />
        <Stack.Screen name="AcceptedCases" component={AcceptedCases} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MADTask" component={MADTask} />
        {/* <Stack.Screen name="Todo" component={Todo} /> */}
        <Stack.Screen name="ITSW" component={ITSW} />
        <Stack.Screen name="ITPSimilarCases" component={ITPSimilarCases} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="AdminTC" component={AdminTC} />
        <Stack.Screen name="AdminPreview" component={AdminPreview} />
        <Stack.Screen name="AdminUN" component={AdminUN} />
        <Stack.Screen name="AdminVF" component={AdminVF} />
        <Stack.Screen name="FIR" component={FIR} />
        <Stack.Screen name="ITPI" component={ITPI} />
        <Stack.Screen name="FB" component={FB} />
        <Stack.Screen name="RMP" component={RMP} />
        <Stack.Screen name="FMP" component={FMP} />
        <Stack.Screen name="RMPB" component={RMPB} />
        <Stack.Screen name="FMPB" component={FMPB} />
        <Stack.Screen name="ITPcall" component={ITPcall} />
        <Stack.Screen name="PMA" component={PMA} />
        <Stack.Screen name="UserNotification" component={UserNotification} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Alogin" component={Alogin} />
        <Stack.Screen name="Auserpanel" component={Auserpanel} />
        <Stack.Screen name="UserPanel" component={UserPanel} />
        <Stack.Screen name="Rcrime" component={Rcrime} />
        <Stack.Screen name="Rcomplaint" component={Rcomplaint} />
        <Stack.Screen name="Setings" component={Sets} />
        <Stack.Screen name="ITP" component={ITP} />
        <Stack.Screen name="ITPsuspect" component={ITPsuspect} />
        <Stack.Screen name="ITPVAC" component={ITPVAC} />
        <Stack.Screen name="VCS" component={VCS} />
        <Stack.Screen name="PM" component={PM} />
        <Stack.Screen name="MV" component={MV} />
        <Stack.Screen name="MP" component={MP} />
        <Stack.Screen name="RMV" component={RMV} />
        <Stack.Screen name="UserNVMV" component={UserNVMV} />
        <Stack.Screen name="UserNVMD" component={UserNVMD} />
        <Stack.Screen name="RMVB" component={RMVB} />
        <Stack.Screen name="PMC" component={PMC} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="CIT" component={CIT} />
        <Stack.Screen name="VRF" component={VRF} />
        <Stack.Screen name="VRC" component={VRC} />
        <Stack.Screen name="UserNVMC" component={UserNVMC} />
        <Stack.Screen name="MAPS" component={MAPS} />
        <Stack.Screen name="ITPreview" component={ITPreview} />
        <Stack.Screen name="ITPzoom" component={ITPzoom} />
        {/* <Stack.Screen name="VRFu" component={VRFu} /> */}
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="ITPPanel" component={ITPPanel} />
        <Stack.Screen name="VRMH" component={VRMH} />
        <Stack.Screen name="VRMP" component={VRMP} />
        <Stack.Screen name="VCD" component={VCD} />
        <Stack.Screen name="FIRS" component={FIRS} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Complaints" component={Complaints} />
        <Stack.Screen name="AdminAssignedCasesTeam" component={AdminAssignedCasesTeam} />
        
        <Stack.Screen name="Rcomplaints" component={Rcomplaints} />
        {/* <Stack.Screen name="CustomDrawer" component={CustomDrawer} /> */}
      </Stack.Navigator>
     
      {/* <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="PM" component={PM}  />
      
      </Drawer.Navigator>
    </NavigationContainer> */}
    </NavigationContainer>
  );
}

export default App;

