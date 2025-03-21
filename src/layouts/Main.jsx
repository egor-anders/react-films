import Movies from "../components/Movies"

function Main({movies}) {
  return (
    <main>
      <div className="container">
        <Movies movies={movies}/>
      </div>
    </main>
  )
}

export default Main
