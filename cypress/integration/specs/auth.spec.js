it('/Register with body ',()=>{

  let body = {

    regno: 'AB004',
    age: 28,
    name: {
      fname: 'John',
      lname: 'Doe'
    }
 
  }

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/user/register',
    body: body,
    failOnStatusCode: false
  }).then((response)=>{
    expect(response.status).to.eq(200);
    expect(response.body.regno).to.eq('AB004');
    expect(response.body.age).to.eq(28);

  });

 
}); 

// it('/Register without body',()=>{
  
//     cy.request({
//       method: 'POST',
//       url: 'http://localhost:3000/api/user/register',
//       failOnStatusCode: false
//     }).then((response)=>{
//       expect(response.status).to.eq(400);
//     });
  
   
//   }); 