import Encabezado from "./Encabezado";

function App(){
  
  return (
    <div>
    <Encabezado />
   <ContenedorTarjetas />
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
    <h1 className="text-lowercase">Profile Component</h1>
      <p>Lista de usuarios del sistema</p>
      <ul>
        {
        users.map(function(user, index){
          return <li key={index}>{user.name} es un {user.role}</li>
       })
       }
    </ul>
  </>
  )
}

function FeedComponent(){
  const materiales = [
  {id: 1, material:'Arena',role: 'concreto y morteros.'},
  {id: 1, material:'Cemento',role: 'concreto y mortero'},
  {id: 1, material:'Grava',role: 'concreto y morteros.'},  
  {id: 1, material:'ladrillos',role: 'muros y cerramientos.'},  
  ]
  return (
    <>
    <h1 className="text-lowercase">Feed Component</h1>
      <p>Lista de materiales para construccion</p>
      <ul>
        {
        materiales.map(function(elemento, index){
          return <li key={index}>{elemento.material} es para {elemento.role}</li>
       })
       }
    </ul>
  </>
  )
}


export default App
