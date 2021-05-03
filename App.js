import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return ( 
    <View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center', justifyContent: 'center' }}><Image style={styles.tinyLogo} source={{uri:'https://cdn3.iconfinder.com/data/icons/brain-games/1042/Quiz-Games.png' }}/>
    <Text style={{fontWeight: 'bold', fontSize: 20}}>{"\n"}LEVEL-UP QUIZAPP</Text>
  
      <View> 
      <Text>{"\n"}USERNAME</Text>
      <TextInput style={{ height: 35, borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}}  placeholder="Username"/>
      <Text>PASSWORD</Text>
      <TextInput style={{ height: 35, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}}  placeholder="Password"/>
      
      </View>
      <TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Home')}   ><Text  style={styles.buttonText}> Log in </Text></TouchableOpacity>
    
      
      <TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('SignUp')}   ><Text  style={styles.buttonText}> Sign Up </Text></TouchableOpacity>
  </View>
  );
}
function SignUp({ navigation }) {
  return (
    
     <View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Sign Up</Text>
      <View>
      <Text style={{fontWeight: 'bold'}}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}First Name:</Text>
      <TextInput style={{ height: 30, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}} placeholder="First Name"/>
      <Text style={{fontWeight: 'bold'}}>Last Name:</Text>
      <TextInput style={{ height: 30, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}} placeholder="Last Name"/>
      <Text style={{fontWeight: 'bold'}}>Email:</Text>
      <TextInput style={{ height: 30, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}} placeholder="Email"/>
      <Text style={{fontWeight: 'bold'}}>Password:</Text>
      <TextInput style={{ height: 30, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}} placeholder="Password"/>
      <Text style={{fontWeight: 'bold'}}>Confirm Password:</Text>
      <TextInput style={{ height: 30, width: 200 , borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}} placeholder="Confirm Password"/>
      </View>
      <TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Login')}   ><Text  style={styles.buttonText}> Sign Up </Text></TouchableOpacity>
      
    </View>
  );
}
function Home({ navigation }) {
  return (
    
     <View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>
      <Image style={styles.tinyLogo} source={{uri:'https://cdn3.iconfinder.com/data/icons/brain-games/1042/Quiz-Games.png' }}/>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{"\n"}{"\n"}LEVEL-UP YOUR MIND AND SKILLS</Text>
      
      <Text  style={{fontSize: 14 , textAlign: 'center' }} >{"\n"}Enhance your child's knowledge by challenging what they have learned in schools. This LEVEL-UP Quizapp gives a variety of questions applicable for elementary students to sharpen their minds while the parents can evaluate it after taking the questionnaires. </Text>
      
      <Text style={{fontWeight: 'bold', fontSize: 20 , textAlign: 'center',marginVertical: 8}}> {"\n"}QUIZZES </Text>
      
      <Text style={{ fontSize: 14 , textAlign: 'center'}} >Let's start and take the quiz!!! </Text> 
    <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Subjects')}   ><Text  style={styles.buttonText1}> Take quiz </Text></TouchableOpacity>
      
      <Text style={{fontWeight: 'bold', fontSize: 20 , textAlign: 'center' }}>{"\n"}{"\n"}ABOUT THIS APP </Text>
      

      <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('AboutUs')}   ><Text  style={styles.buttonText1}> Learn More </Text></TouchableOpacity>

      
    </View>
  );
}
function AboutUs({ navigation }) {
  return (
<View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>

<Text style={{fontWeight: 'bold', fontSize: 20}}>About Us</Text>

<Text style={{ fontSize: 16}}>{"\n"}{"\n"}{"\n"}LEVEL-UP Quizapp is very beneficial for both grade school children and for their parents. This application provide questions that can test and challenge the skill of children and what they have learned in their school. An answer key is also provided in this app so the parents can evaluate the knowledge of their children and if necessary start improving it. {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Developers:{"\n"}CARIAGA, JUSTINE{"\n"}FOTOTANA, CHRISTIAN PAUL{"\n"} HALILI, VINCENT {"\n"}MARQUEZ, JOHN ANTHONY {"\n"}RILLON, MIGUEL LUIS{"\n"}VALDEZ, WILLIAM ALMIE</Text>

    </View>
  );
}
function Subjects({ navigation }) {
  return (
     <View style={styles.bgColor,{flex: 1, backgroundColor:"#99FF99", alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>CHOOSE A SPECIFIC SUBJECT TO TEST YOUR KNOWLEDGE!{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      <Image style={styles.tinyLogo} source={{uri:'https://icon-library.com/images/subject-icon/subject-icon-18.jpg' }}/>
     <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('English')}   ><Text  style={styles.buttonText}> ENGLISH </Text></TouchableOpacity>

<TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Mathematics')}   ><Text  style={styles.buttonText}> MATH </Text></TouchableOpacity>

<TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Science')}   ><Text  style={styles.buttonText}> SCIENCE </Text></TouchableOpacity>

<TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Filipino')}   ><Text  style={styles.buttonText}> FILIPINO </Text></TouchableOpacity>

<TouchableOpacity style={styles.button2} color="#f45e71" onPress={() => navigation.navigate('Arts')}   ><Text  style={styles.buttonText}> ARTS </Text></TouchableOpacity>

<TouchableOpacity style={styles.button3} color="#f45e71" onPress={() => navigation.navigate('Answers')}   ><Text  style={styles.buttonText3}> ANSWER KEY </Text></TouchableOpacity>
    </View>
  );
}
function English({ navigation }) {
  return (
<View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>

<Text style={{fontWeight: 'bold', fontSize: 20}}>ENGLISH</Text>
<Image style={styles.tinyLogo} source={{uri:'https://icon-library.com/images/subject-icon/subject-icon-5.jpg' }}/>

<Text style={{fontWeight: 'bold', fontSize: 16}}>{"\n"}Choose the best answer</Text>
<Text style={{textAlign: 'center'}}>{"\n"}01. I like ........ in my spare time{"\n"}</Text>
<Button title="A. Reading"/>
<Button title="B. Read"/>
<Button title="C. To Read"/>
<Button title="D. To reading"/>
<Text style={{textAlign: 'center'}}>{"\n"}02. Ann, how are you?{"\n"}</Text>
<Button title="A. I'm a nurse."/>
<Button title="B. I'm fine, thanks. And you?"/>
<Button title="C. I am working"/>
<Button title="D. Good."/>
<Text style={{textAlign: 'center'}}>{"\n"}03. What .............. next weekend? {"\n"}</Text>
<Button title="A. Do you do"/>
<Button title="B. Are you doing"/>
<Button title="C. Will you do"/>
<Button title="D. Did you do"/>
<Text style={{textAlign: 'center'}}>{"\n"}04. Look! The bus .................. {"\n"}</Text>
<Button title="A. Are coming"/>
<Button title="B. Is coming"/>
<Button title="C. Comes"/>
<Button title="D. Come"/>
<Text style={{textAlign: 'center'}}>{"\n"}05. I promise I ..............  study harder.{"\n"}</Text>
<Button title="A. Will"/>
<Button title="B. Am going to"/>
<Button title="C. May"/>
<Button title="D. Must"/>
<Text style={{textAlign: 'center'}}>{"\n"}06. I ..... tennis every Sunday morning.{"\n"}</Text>
<Button title="A. Playing"/>
<Button title="B. Play"/>
<Button title="C. Am playing"/>
<Button title="D. Am play"/>
<Text style={{textAlign: 'center'}}>{"\n"}07. Don't make so much noise. Noriko ...... to study for her ESL test! .{"\n"}</Text>
<Button title="A. Try"/>
<Button title="B. Tries"/>
<Button title="C. Tried"/>
<Button title="D. Is trying"/>
<Text style={{textAlign: 'center'}}>{"\n"}08. Jun-Sik ..... his teeth before breakfast every morning.{"\n"}</Text>
<Button title="A. Will cleaned"/>
<Button title="B. Is cleaning"/>
<Button title="C. Cleans"/>
<Button title="D. Clean"/>
<Text style={{textAlign: 'center'}}>{"\n"}09. Sorry, she can't come to the phone. She .......... a bath!{"\n"}</Text>
<Button title="A. Is having"/>
<Button title="B. Having"/>
<Button title="C. Have"/>
<Button title="D. Has"/>
<Text style={{textAlign: 'center'}}>{"\n"}10. ..... many times every winter in Frankfurt.{"\n"}</Text>
<Button title="A. It snows"/>
<Button title="B. It snowed"/>
<Button title="C. It is snowing"/>
<Button title="D. It is snow"/>
<Text style={{textAlign: 'center'}}>{"\n"}11. How many students in your class ..... from Korea?{"\n"}</Text>
<Button title="A. Comes"/>
<Button title="B. Come"/>
<Button title="C. Came"/>
<Button title="D. Are coming"/>
<Text style={{textAlign: 'center'}}>{"\n"}12. Weather report: "It's seven o'clock in Frankfurt and ......."{"\n"}</Text>
<Button title="A. There is snow"/>
<Button title="B. It is snowing"/>
<Button title="C. It snows"/>
<Button title="D. It snowed"/>
<Text style={{textAlign: 'center'}}>{"\n"}13. Babies ..... when they are hungry.{"\n"}</Text>
<Button title="A. Cry"/>
<Button title="B. Cries"/>
<Button title="C. Cried"/>
<Button title="D. Are crying"/>
<Text style={{textAlign: 'center'}}>{"\n"}14.Jane: "What ..... in the evenings?"{"\n" }Mary: "Usually I watch TV or read a book."{"\n"}</Text>
<Button title="A. You doing"/>
<Button title="B. You do"/>
<Button title="C. Do you do"/>
<Button title="D. Are you doing"/>
<Text style={{textAlign: 'center'}}>{"\n"}15.  Jane: "What .......... ?"{"\n"}Mary: "I'm trying to fix my calculator."{"\n"}</Text>
<Button title="A. You doing"/>
<Button title="B. You do"/>
<Button title="C. Do you do"/>
<Button title="D. Are you doing"/>
</View>
  );
}

function Mathematics({ navigation }) {
  return (
<View style={styles.bgColor,{flex: 1, backgroundColor:"#99FF99", alignItems: 'center'}}>
<Text style={{fontWeight: 'bold', fontSize: 20}}>MATH</Text>
<Image style={styles.tinyLogo1} source={{uri:'https://cdn2.iconfinder.com/data/icons/money-finance/512/abacus-512.png' }}/>
<Text style={{fontWeight: 'bold', fontSize: 16}}>Choose the best answer</Text>
<Text style={{textAlign: 'center'}}>{"\n"}01. Samantha has 342 baseball cards. Perry has 184 baseball cards. How many more baseballcards does Samantha have than Perry?{"\n"}</Text> 
<Button title="A. 158"/>
<Button title="B. 168"/>
<Button title="C. 258"/>
<Button title="D. 268"/>
<Text style={{textAlign: 'center'}}>{"\n"}02. All of Bella’s photos are in 8 photo books. Each photo book has 25 photos. Which expression shows how to find the total number of photos Bella has?{"\n"}</Text> 
<Button title="A. 25÷8"/>
<Button title="B. 25–8"/>
<Button title="C. 25+8"/>
<Button title="D. 25×8"/>
<Text style={{textAlign: 'center'}}>{"\n"}03. Shodi earned 389 points in the first level of her video game. She earned an additional116 points in the bonus round. How many points in total did Shodi earn in the first leveland bonus round of her video game?{"\n"}</Text> 
<Button title="A. 405"/>
<Button title="B. 495"/>
<Button title="C. 505"/>
<Button title="D. 4,915"/>
<Text style={{textAlign: 'center'}}>{"\n"}04. Ron’s garden has 42 plants. Each row has 7 plants. Which expression can be used to findthe number of rows in Ron’s garden?{"\n"}</Text> 
<Button title="A. 42÷7"/>
<Button title="B. 42-7"/>
<Button title="C. 42+7"/>
<Button title="D. 42*7"/>
<Text style={{textAlign: 'center'}}>{"\n"}05. Maria spends $9 on lunch each day she is at work. To find how much money she spends onlunch during a 5-day work week she multiplies5×9. How much money does Maria spendon lunch during a 5-day work week?{"\n"}</Text> 
<Button title="A. $40"/>
<Button title="B. $45"/>
<Button title="C. $50"/>
<Button title="D. $59"/>
<Text style={{textAlign: 'center'}}>{"\n"}06. If 20 articles cost ? 90, then the cost of 9 articles is?{"\n"}</Text>    
<Button title="A. 45"/>
<Button title="B. 4.50"/>
<Button title="C. 40.50"/>
<Button title="D. 42"/>
<Text style={{textAlign: 'center'}}>{"\n"}07. In a race , Ram covers 5 km in 20 min. How much distance will he cover in 100 min?{"\n"}</Text>
<Button title="A. 25"/>
<Button title="B. 26"/>
<Button title="C. 35"/>
<Button title="D. 40"/>
<Text style={{textAlign: 'center'}}>{"\n"}08. If the price of 23 toys is Rs. 276, then what will the price (Rs.) of 12 toys?{"\n"}</Text>
<Button title="A. 144"/>
<Button title="B. 159"/>
<Button title="C. 166"/>
<Button title="D. 158"/>
<Text style={{textAlign: 'center'}}>{"\n"}09. 21 goats eat as much as 15 cows. How many goats eat as much as 35 cows?{"\n"}</Text>
<Button title="A. 41"/>
<Button title="B. 37"/>
<Button title="C. 49"/>
<Button title="D. 38"/>
<Text style={{textAlign: 'center'}}>{"\n"}10. If cost of 15 eggs is ? 75, then find out the cost of 4 dozens eggs.{"\n"}</Text> 
<Button title="A. 185"/>
<Button title="B. 150"/>
<Button title="C. 300"/>
<Button title="D. 240"/>
<Text style={{textAlign: 'center'}}>{"\n"}11. Which of the following is the correct representation of permutation?{"\n"}</Text>
<Button title="A. rPn"/>
<Button title="B. P(n,r)"/>
<Button title="C. nCr"/>
<Button title="D. C(n,r)"/>
<Text style={{textAlign: 'center'}}>{"\n"}12. Solve 3x – 5 = 10{"\n"}</Text>
<Button title="A. x = 2"/>
<Button title="B. x = 5"/>
<Button title="C. x = 4"/>
<Button title="D. x = 6"/>
<Text style={{textAlign: 'center'}}>{"\n"}13. By solving the equation a = 2 - 9a, the value of a will be{"\n"}</Text>
<Button title="A. 2/5"/>
<Button title="B. 3/5"/>
<Button title="C. 1/5"/>
<Button title="D. 1/5"/>
<Text style={{textAlign: 'center'}}>{"\n"}14. What is the value of 2 of 3 × (5 + 2)?{"\n"}</Text>
<Button title="A. 30"/>
<Button title="B. 50"/>
<Button title="C. 42"/>
<Button title="D. 44"/>
<Text style={{textAlign: 'center'}}>{"\n"}15. The expression 52 - 4 of (17 - 12) + 4 × 7 is equal to{"\n"}</Text>
<Button title="A. 70"/>
<Button title="B. 60"/>
<Button title="C. 50"/>
<Button title="D. 48"/>
    </View>

  );
}

function Science({ navigation }) {
  return ( 
<View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>
<Text style={{fontWeight: 'bold', fontSize: 20}}>SCIENCE</Text>
<Image style={styles.tinyLogo1} source={{uri:'https://starautismsupport.com/sites/default/files/Science%20Icon.png' }}/>

<Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Choose the best answer</Text>
<Text style={{textAlign: 'center'}}>{"\n"}01. Which cycle is correct?{"\n"}</Text>
<Button title="A. Morning-sunrise-afternoon-sunset"/>
<Button title="B. Summer-fall-winter-spring"/>
<Button title="C. Seed-mature plant-fruit-seedling"/>
<Button title="D. Baby-teenager-child-adult"/>
<Text style={{textAlign: 'center'}}>{"\n"}02. Which statement explains why the Sun appears to rise and set each day?{"\n"}</Text>
<Button title="A. Earth rotates."/>
<Button title="B. The Sun rotates."/>
<Button title="C. The Sun revolves around Earth."/>
<Button title="D. Earth revolves around the Sun."/>
<Text style={{textAlign: 'center'}}>{"\n"}03. Which food is an example of a healthy snack?{"\n"}</Text>
<Button title="A. An apple."/>
<Button title="B. A candy bar"/>
<Button title="C. Cookies"/>
<Button title="D. Potato chip"/>
<Text style={{textAlign: 'center'}}>{"\n"}04. Which unit is used to measure how warm or cool the air is?{"\n"}</Text>
<Button title="A. Grams"/>
<Button title="B. Kilometers"/>
<Button title="C. Degrees Celsius"/>
<Button title="D. Cubic centimeters"/>
<Text style={{textAlign: 'center'}}>{"\n"}05. Water is boiled in a pan on a stove.  The state of matter of the water changes from {"\n"}</Text>
<Button title="A. Liquid to solid"/>
<Button title="B. Solid to liquid"/>
<Button title="C. Gas to liquid"/>
<Button title="D. Liquid to gas"/>
<Text style={{textAlign: 'center'}}>{"\n"}06. The gas usually filled in the electric bulb is ....{"\n"}</Text>
<Button title="A. Nitrogen"/>
<Button title="B. Hydrogen"/>
<Button title="C. Carbon dioxide"/>
<Button title="D. Oxyen"/>
<Text style={{textAlign: 'center'}}>{"\n"}07. Which of the following is a non-metal that remains liquid at room temperature?{"\n"}</Text>
<Button title="A. Phosphorous"/>
<Button title="B. Bromine"/>
<Button title="C. Chlorine"/>
<Button title="D. Helium"/>
<Text style={{textAlign: 'center'}}>{"\n"}08. Chlorophyll is a naturally occurring chelate compound in which central metal is{"\n"}</Text>
<Button title="A. Copper"/>
<Button title="B. Magnesium"/>
<Button title="C. Iron"/>
<Button title="D. Calcium"/>
<Text style={{textAlign: 'center'}}>{"\n"}09. Which of the following is used in pencils?{"\n"}</Text>
<Button title="A. Graphite"/>
<Button title="B. Silicon"/>
<Button title="C. Charcoal"/>
<Button title="D. Phosporous"/>
<Text style={{textAlign: 'center'}}>{"\n"}10. Which of the following metals forms an amalgam with other metals?{"\n"}</Text>
<Button title="A. Tin"/>
<Button title="B. Mercury"/>
<Button title="C. Lead"/>
<Button title="D. Zinc"/>
<Text style={{textAlign: 'center'}}>{"\n"}11. Which gas is needed for photosynthesis?{"\n"}</Text>
<Button title="A. Oxygen"/>
<Button title="B. Carbon dioxide"/>
<Button title="C. Hydrogen"/>
<Button title="D. Carbon monoxide"/>
<Text style={{textAlign: 'center'}}>{"\n"}12. What type of energy is needed for photosynthesis to happen?{"\n"}</Text>
<Button title="A. Light"/>
<Button title="B. Heat"/>
<Button title="C. Electrical"/>
<Button title="D. Sand"/>
<Text style={{textAlign: 'center'}}>{"\n"}13. The waste by-product of photosynthesis is?{"\n"}</Text>
<Button title="A. Oxygen"/>
<Button title="B. Carbon dioxide"/>
<Button title="C. Glucose"/>
<Button title="D. Hydrogen"/>
<Text style={{textAlign: 'center'}}>{"\n"}14. Why do plants need nitrate ions?{"\n"}</Text>
<Button title="A. To make proteins"/>
<Button title="B. To make fatty acids"/>
<Button title="C. To make starch for storage"/>
<Button title="D. None of these"/>
<Text style={{textAlign: 'center'}}>{"\n"}15. Tomatoes in a greenhouse grow faster if the carbon dioxide concentration is increased. This shows that:{"\n"}</Text>
<Button title="A.Temperature must have been a limiting factor"/>
<Button title="B. Carbon dioxide concentration must have been a limiting factor"/>
<Button title="C. Light intensity must have been a limiting factor"/>
<Button title="D. None of these"/>
    </View>
  );
}

function Filipino({ navigation }) {
  return (  
    <View style={styles.bgColor,{flex: 1, backgroundColor:"#99ff99", alignItems: 'center'}}>
<Text style={{fontWeight: 'bold', fontSize: 20}}>FILIPINO</Text>
<Image style={styles.tinyLogo2} source={{uri:'https://i.pinimg.com/736x/57/b0/67/57b06712fb150c715feb7d136490a029.jpg' }}/>

<Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Piliin ang tamang sagot</Text>
<Text style={{textAlign: 'center'}}>01. Mahina na ang ulan ngunit malakas pa rin ang tagas ng tubig sa bubong. Ano ang magkasalungat na salita sa pahayag?{"\n"}</Text>
<Button title="A. Ulan - Malakas"/>
<Button title="B. Mahina - Malakas"/>
<Button title="C. Tagas - Malakas"/>
<Button title="D. Ako - Malakas"/>
<Text style={{textAlign: 'center'}}>02. Masakit ang braso niya sa kalalampaso ng tubig sa sahig. Aling salita ang may kambal- katinig na ginamit sa pahayag?{"\n"}</Text>
<Button title="A. Braso"/>
<Button title="B. Tubig"/>
<Button title="C. Masakit"/>
<Button title="D. Kalalampaso"/>
<Text style={{textAlign: 'center'}}>03. Ano ang tamang pagpapantig sa salitang traysikel?{"\n"}</Text>
<Button title="A. Tray-si-kel"/>
<Button title="B. Tra-y-si-kel"/>
<Button title="C. Tray-sik-el"/>
<Button title="D. Tr-ays-ikel"/>
<Text style={{textAlign: 'center'}}>04. Naku! Ang dilim- dilim dito. Bakit parang may matang mapupula sa may dulo ng lagusan? Anong damdamin ang ipinahahayag sa pangungusap?{"\n"}</Text>
<Button title="A. Nagalit"/>
<Button title="B. Nagulat"/>
<Button title="C. Natakot"/>
<Button title="D. Natuwa"/>
<Text style={{textAlign: 'center'}}>05. Ang bawat "suliranin" ay may solusyon. Ano ang ibig sabihin ng salitang may salungguhit?{"\n"}</Text>
<Button title="A. Premyo"/>
<Button title="B. Problema"/>
<Button title="C. Nagtampo"/>
<Button title="D. Kasiyahan"/>
<Text style={{textAlign: 'center'}}>06. Sino ang nag pangalan sa Pilipinas{"\n"}</Text>
<Button title="A. Ruy Lopez de Villlalobos"/>
<Button title="B. King Philip ll"/>
<Button title="C. Magellan"/>
<Button title="D. Lapu-Lapu"/>
<Text style={{textAlign: 'center'}}>07. Sino ang uang presidente ng Pilipinas?{"\n"}</Text>
<Button title="A. Apolinario Mabini"/>
<Button title="B. Emilio Aguinldo"/>
<Button title="C. Emilio Jacinto"/>
<Button title="D. Andres Bonifacio"/>
<Text style={{textAlign: 'center'}}>08. Ano ang tinuring unang paraan ng pagsusulat sa Pilipinas{"\n"}</Text>
<Button title="A. Indus script"/>
<Button title="B. Baybayin"/>
<Button title="C. Cuneiform"/>
<Button title="D. Abakada"/>
<Text style={{textAlign: 'center'}}>09. Sino ang namuno sa pinakamahabang pag-aalsa sa Pilipinas noong panahon ng Espanya?{"\n"}</Text>
<Button title="A. Francisco Dagohoy"/>
<Button title="B. Jose Rizal"/>
<Button title="C. Andres Bonifacio"/>
<Button title="D. Juan Luna"/>
<Text style={{textAlign: 'center'}}>10. Pangalan ng pinakalumang lungsod ng Pilipinas{"\n"}</Text>
<Button title="A. Ilo-Ilo"/>
<Button title="B. Manila"/>
<Button title="C. Cebu"/>
<Button title="D. Davao"/>
<Text style={{textAlign: 'center'}}>11. Sino ang unang editor ng La Solidaridad{"\n"}</Text>
<Button title="A. Emilio Aguinaldo"/>
<Button title="B. Graciano Lopez Jaena"/>
<Button title="C. Marcelo H. Del Pilar"/>
<Button title="D. Jose Rizal"/>
<Text style={{textAlign: 'center'}}>12. Aling lungsod ang matagal nang tahanan ng pinakamalaking populasyon ng mga nagsasalita ng Espanyol-creole sa Pilipinas?{"\n"}</Text>
<Button title="A. Zambales"/>
<Button title="B. Zaragoza"/>
<Button title="C. Zamboanga"/>
<Button title="D. Manila"/>
<Text style={{textAlign: 'center'}}>13. Anong popular animal nagsisimula sa letrang "W" tinuturing "Butanding" sa Pilipinas?{"\n"}</Text>
<Button title="A. Whale Shark"/>
<Button title="B. Wild Boar"/>
<Button title="C. Warbler"/>
<Button title="D. Weasel"/>
<Text style={{textAlign: 'center'}}>14. "R" is for Jose Rizal. Filipinos commemorate his life and achievements every year on Rizal Day.{"\n"}</Text>
<Button title="A. Totoo"/>
<Button title="B. Di totoo"/>
<Button title="C. Hindi tama"/>
<Button title="D. Wala sa mga pilian"/>
<Text style={{textAlign: 'center'}}>15. Saan nagmula ang pangalan ng Pilipinas?{"\n"}</Text>
<Button title="A. Queen Ellizabeth"/>
<Button title="B. King Philip II of Spain"/>
<Button title="C. King Philip I of Spain"/>
<Button title="D. King James"/>
    </View>
    
  );
}

function Arts({ navigation }) {
  return (
     <View style={styles.bgColor,{flex: 1, backgroundColor:"#99FF99", alignItems: 'center'}}>
<Text style={{fontWeight: 'bold', fontSize: 20}}>ARTS</Text>

<Image style={styles.tinyLogo1} source={{uri:'https://i.pinimg.com/originals/89/65/5f/89655ff25f7478c8015a809c767bf295.jpg' }}/>

<Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Choose the correct answer</Text>
<Text style={{textAlign: 'center'}}>01. Brown, gray and black are called{"\n"}</Text>
<Button title="A. Pastel colors"/>
<Button title="B. Primary colors"/>
<Button title="C. Neutral colors"/>
<Button title="D. Complementary colors"/>
<Text style={{textAlign: 'center'}}>02. The area in a work of art that attracts the viewer's eye and holds interest is called.{"\n"}</Text>
<Button title="A. Emphasis"/>
<Button title="B. Texture"/>
<Button title="C. Form"/>
<Button title="D. Balance"/>
<Text style={{textAlign: 'center'}}>03. If you wanted to create the feeling of summer in a picture you might want to use{"\n"}</Text>
<Button title="A. Cool colors"/>
<Button title="B. Dark colors"/>
<Button title="C. Warm colors"/>
<Button title="D. No colors"/>
<Text style={{textAlign: 'center'}}>04. Who is the artist that painted the "Starry Night"?{"\n"}</Text>
<Button title="A. Pablo Picasso"/>
<Button title="B. Leonardo DaVinci"/>
<Button title="C. Vincent Van Gogh"/>
<Button title="D. Henri Matiss"/>
<Text style={{textAlign: 'center'}}>05. A mark that has length and direction.{"\n"}</Text>
<Button title="A. Unity"/>
<Button title="B. Line"/>
<Button title="C. Value"/>
<Button title="D. Shape"/>
<Text style={{textAlign: 'center'}}>06. Who painted the Mona Lisa?{"\n"} </Text>
<Button title="A. Pastel colors"/>
<Button title="B. Leonardo Da Vinci"/>
<Button title="C. Ms.Jeffries"/>
<Button title="D. Complementary colors"/>
<Text style={{textAlign: 'center'}}>07. What is the appropriate art term for color?{"\n"}</Text>
<Button title="A. Color"/>
<Button title="B. Paint"/>
<Button title="C. Saturation"/>
<Button title="D. Hue"/>
<Text style={{textAlign: 'center'}}>08. What do you call a point with no ending?{"\n"}</Text>
<Button title="A. Square"/>
<Button title="B. Infinity"/>
<Button title="C. Line"/>
<Button title="D. Triangle"/>
<Text style={{textAlign: 'center'}}>09. Which is a primary color?{"\n"}</Text>
<Button title="A. Black"/>
<Button title="B. White"/>
<Button title="C. Grey"/>
<Button title="D. None of these"/>
<Text style={{textAlign: 'center'}}>10. What shape do we call a basketball ball?{"\n"}</Text>
<Button title="A. Square"/>
<Button title="B. Quadrilateral"/>
<Button title="C. Sphere"/>
<Button title="D. Circle"/>
<Text style={{textAlign: 'center'}}>11. What is used to sew clothes together?{"\n"}</Text>
<Button title="A. Cotton thread"/>
<Button title="B. Steel wire"/>
<Button title="C. Copper wire"/>
<Button title="D. String"/>
<Text style={{textAlign: 'center'}}>12. Textiles can be man-made. But many textiles are made from cotton cloth. What is another word for the cloth?{"\n"}</Text>
<Button title="A. Plastic"/>
<Button title="B. Fabric"/>
<Button title="C. Rubber"/>
<Button title="D. Base"/>
<Text style={{textAlign: 'center'}}>13. Jack has made a hat. What can he use to decorate the hat?{"\n"}</Text>
<Button title="A. Ribbon"/>
<Button title="B. Chocolate"/>
<Button title="C. Wood"/>
<Button title="D. Polythene"/>
<Text style={{textAlign: 'center'}}>14. Sarah has just made a cushion cover. She decides to decorate it by sewing patterns into it with colorful thread. This is called __________.{"\n"}</Text>
<Button title="A. Knitting"/>
<Button title="B. Threading"/>
<Button title="C. Painting"/>
<Button title="D. Embroidery"/>
<Text style={{textAlign: 'center'}}>15. Most clothes are made from pieces of cloth. The pieces of cloth are ____ together.{"\n"}</Text>
<Button title="A. Welded"/>
<Button title="B. Stuck"/>
<Button title="C. Glued"/>
<Button title="D. Sewn"/>
     </View>
  );
}

function Answers({ navigation }) {
  return (
     <View style={styles.bgColor,{flex: 1, backgroundColor:"#99FF99", alignItems: 'center'}}>
<Text style={{fontWeight: 'bold', fontSize: 20}}>ANSWER KEY</Text>


<Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>This is the Answers for the questions in the quiz tabs.</Text>
<Text style={{textAlign: 'center'}}>{"\n"}{"\n"}ENGLISH{"\n"}01.A{"\n"}02.B{"\n"}03.C{"\n"}04.B{"\n"}05.A{"\n"}06.B{"\n"}07.D{"\n"}08.C{"\n"}09.A{"\n"}10.A{"\n"}11.B{"\n"}12.B{"\n"}13.A{"\n"}14.C{"\n"}15.D</Text>
<Text style={{textAlign: 'center'}}>{"\n"}{"\n"}MATH{"\n"}01.A{"\n"}02.D{"\n"}03.C{"\n"}04.A{"\n"}05.B{"\n"}06.C{"\n"}07.A{"\n"}08.A{"\n"}09.C{"\n"}10.D{"\n"}11.B{"\n"}12.B{"\n"}13.C{"\n"}14.C{"\n"}15.B</Text>
<Text style={{textAlign: 'center'}}>{"\n"}{"\n"}SCIENCE{"\n"}01.B{"\n"}02.A{"\n"}03.A{"\n"}04.C{"\n"}05.D{"\n"}06.A{"\n"}07.B{"\n"}08.B{"\n"}09.A{"\n"}10.B{"\n"}11.B{"\n"}12.A{"\n"}13.A{"\n"}14.A{"\n"}15.B</Text>
<Text style={{textAlign: 'center'}}>{"\n"}{"\n"}FILIPINO{"\n"}01.B{"\n"}02.B{"\n"}03.A{"\n"}04.C{"\n"}05.B{"\n"}06.A{"\n"}07.B{"\n"}08.B{"\n"}09.A{"\n"}10.C{"\n"}11.B{"\n"}12.C{"\n"}13.A{"\n"}14.A{"\n"}15.B</Text>
<Text style={{textAlign: 'center'}}>{"\n"}{"\n"}ARTS{"\n"}01.C{"\n"}02.A{"\n"}03.C{"\n"}04.C{"\n"}05.B{"\n"}06.A{"\n"}07.C{"\n"}08.C{"\n"}09.E{"\n"}10.C{"\n"}11.A{"\n"}12.B{"\n"}13.A{"\n"}14.D{"\n"}15.D</Text>
</View>
  );
}


  


const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo1: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogo2: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgColor:{
    backgroundColor:"#81c8eb",
  },
  button:{
    fontSize: 12,
    height: 40,
    width: 120,
    marginTop:10,
    paddingTop: 3,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#ffff99',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },
  
  buttonText:{
    fontSize: 20,
    color: '#000000',
    textAlign:'center',
  },
  buttonText1:{
    fontSize: 17,
    color: '#000000',
    textAlign:'center',
  },
  button1:{
    fontSize: 12,
    height: 40,
    width: 120,
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#ffff99',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },
  button2:{
    fontSize: 15,
    height: 40,
    width: 120,
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#ffff99',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },
  buttonText3:{
    fontSize: 17,
    color: '#000000',
    textAlign:'center',
  },
  button3:{
    fontSize: 15,
    height: 40,
    width: 125,
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#ffff99',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },

});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="English" component={English} />
        <Stack.Screen name="Mathematics" component={Mathematics} />
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Filipino" component={Filipino} />
        <Stack.Screen name="Arts" component={Arts} />
        <Stack.Screen name="Answers" component={Answers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;