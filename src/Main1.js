





import React from "react";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

//import { motion } from "framer-motion";

import { initializeApp } from "firebase/app";

//import { getFirestore } from 'firebase/firestore';

import { getFirestore, collection, addDoc } from "firebase/firestore";

import { motion, AnimatePresence } from "framer-motion";

export default function Main1({user}) {


      
    const firebaseConfig = {
      apiKey: "AIzaSyAdfpQwd1kDHBw9tpxk7VCcGbWzGoB78i4",
      authDomain: "selnana.firebaseapp.com",
      projectId: "selnana",
      storageBucket: "selnana.appspot.com",
      messagingSenderId: "923401057273",
      appId: "1:923401057273:web:9304f487964b9f838f8328"
    };


    const app = initializeApp(firebaseConfig);

    const firestore = getFirestore(app);





  const[array, setarray] = React.useState([])

  const[text, settext] = React.useState("")


      React.useEffect(() => {

        console.log(array)


      }, [array])


        const render = array.map((pre, index) => (

                <motion.Container     key={index}  initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}   exit={{ opacity: 0, x: 50 }} >

                    <Row className="row2">
                  
                  <Col className="mt-3">
                  
                   <Container className="sunder" >

                     <p>{pre}</p>

                   </Container>
                  
                  </Col>

                    <Col xs={2} sm={2} lg={2} className="mt-3">


                    <Button onClick={() => Dabao(index)}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>



                    </Button>


                    </Col>

                  <Col>
                  
                  
                  <Button onClick={() => Ashish(index)} className="mt-3">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>




                  </Button>
                  
                  
                  </Col>







                    </Row>









                </motion.Container>








    



        ))


    function Change(e){
    
    settext(e.target.value)

    

    }


    function Click(){


          if( text != ""){

          
         setarray([...array, text])

         //settext("")


         addDoc(collection(firestore, "yourCollectionName"), {
          text: text,
          userID: user.uid,
          userName: user.displayName
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
  
        // Clear the input field
        settext("");


          }

    



    }


    function Dabao(index){

      const newarray = [...array]

      newarray.splice(index, 1)

      setarray(newarray)



    }




       function Ashish(index){

         const liz = [...array]

         const putto = prompt('write something')

          liz[index] = putto;

          setarray(liz)



       }



  return (
    <div>
      <Container className="rahul">
        <Row id="row" className="mb-3 mb-sm-4">
          <Col xs={9} sm={9} lg={8}>
            <FormControl onChange={Change} className="form2" type="text" placeholder="Enter text" value={text}
            
            
            style={{ width: "60vw", maxWidth: "250px" }}
            
            
            />
          </Col>
          <Col xs={3} sm={3} lg={4}>
            <Button onClick={Click}  className="rounded-circle"  style={{ backgroundColor: "black" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>



            </Button>
          </Col>
        </Row>


        <AnimatePresence>{render}</AnimatePresence>


      </Container>

    



    </div>
  );
}














