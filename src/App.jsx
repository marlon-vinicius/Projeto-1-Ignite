import { Header } from "./components/Header"
import{Post} from "./components/Post"
import styles from "./App.module.css"
import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      name: 'Marlon',
      role :'Web Developer',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},                
    ],
    publishedAt: new Date('2022-08-14 15:00')
  },

  {
    id: 2,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      name: 'Gabriela',
      role :'Front-End Engineer',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},                
    ],
    publishedAt: new Date('2022-08-15 11:00')
  }

]

export function App() {

  return (
    <div>
      <Header/>
      <div className ={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
