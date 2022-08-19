import { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa'
import Card, { Cardsprops } from "../components/Card";
import "../styles/Home.css";
import "../styles/Global.css";

type User = {
  name:string
  avatar: string
  repositorio?: string
  url: string
}
function App() {
  const [studentName, setStudentName] = useState<string>("");
  const [students, setStudents] = useState<Cardsprops[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/LucasAfonsoJS")
    .then(res => res.json()).then(data => {

      setUser({
        name: data.name,
        avatar: data.avatar_url,
        repositorio: data.public_repos,
        url: data.html_url
      })
      
    })
  }, []);

  return (
    <>
      <div className="container">

        <h1>Lista de presença</h1>

        <img src={user.avatar} alt="" />
        <a href={user.url} ><FaGithub className='icon_github'/></a>
        <legend>Feito por {user.name}</legend>
        <input
          type="text"
          placeholder="Digite o seu nome"
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
          Adicionar
        </button>

        {students.map((student) => (
          <Card
          key={student.time} 
          name={student.name} 
          time={student.time} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
