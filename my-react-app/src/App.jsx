function App(){
  
  return (
    <div>
    <h1>5A EVND</h1>
    <h2>Alumn@:</h2>
    <h3>Sheila Yuridia Cruz Badillo</h3>
    <h3>UTXJ</h3>
    <UserComponent/>
    <ProfileComponent/>
    <FeedComponent/>
    </div>
)
}

function UserComponent(){
  const nombre = 'Sheila';
  const apellidos = 'Cruz Badillo'
  const nombrecompleto = <h2>El nombre es: {nombre} y sus apellidos son: {apellidos}</h2>;
  return <h2>User component {nombrecompleto}</h2>;
}

function ProfileComponent(){
  const users = [
  {id: 1, name:'Sheila',role: 'Estudiante TI'},
  {id: 1, name:'Maria',role: 'Web Designer'},
  {id: 1, name:'Johana',role: 'Team Leader'},  
  ]
  return (
    <>
      <p>Lista de usuarios del sistema</p>
      <u1>
        {
        users.map(function(user){
          return (
            <li>{user.name} es un {user.role}</li>
          )
       })
       }
    </u1>
  </>
  )
}

function FeedComponent(){
  /*return <h1 className="text-lowercase">Feed Component</h1>*/
  const materiales = [
  {id: 1, material:'Arena',role: 'concreto y morteros.'},
  {id: 1, material:'Cemento',role: 'concreto y mortero'},
  {id: 1, material:'Grava',role: 'concreto y morteros.'},  
  {id: 1, material:'ladrillos',role: 'muros y cerramientos.'},  
  ]
  return (
    <>
      <p>Lista de materiales para construccion</p>
      <u1>
        {
        materiales.map(function(elemento){
          return (
            <li>{elemento.material} es para {elemento.role}</li>
          )
       })
       }
    </u1>
  </>
  )
}


export default App
