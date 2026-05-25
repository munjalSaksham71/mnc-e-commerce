import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button'
import img from '../../assets/prince.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

const Contact = () => {
     return(
         <div>
           <div className="container">
     <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardBody>
        <MDBCardTitle>
          <font size="7"><i><b>&nbsp;&nbsp;Saksham Munjal</b></i></font>
          
          </MDBCardTitle>
        <MDBCardText>
        
                            Having knowledge about Full Stack Web Develepment Project (E-commerce App), Been working as SDE from 3 years at Wizcommerce.
                            Where I have worked on various projects like E-commerce App, Inventory Management System, Customer Relationship Management System, etc.
                            <br />
                            <br />
                            <br />
                            <b> Contact: </b> <br />
                            Email:-sakshammunjal8@gmail.com<br />
                            Contact:- +91 6283827523

        </MDBCardText>
        <Button variant="primary" href='https://github.com/munjalsaksham71'>Go To My Github Account</Button>
      </MDBCardBody>
    </MDBCard>
    </div>
         </div>
     );
}

export default Contact;