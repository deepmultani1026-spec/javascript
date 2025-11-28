const goals = [
  {
    tittle: 'Learn React',
    description: 'in-Depth',
  },
  {
    tittle: 'Learn React Features',
    description: 'Hooks, etc...',
  },
  {
    tittle: 'React Environment Setup',
    description: 'Be able to setup Dev Environment',
  }
]


//Modify component to make it dynamic. Hint: use props
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.tittle}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Practice Time!</h1>
      <p>Course Goals</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        <CourseGoal tittle={goals[0].tittle} description={goals[0].description}></CourseGoal>
        <CourseGoal tittle={goals[1].tittle} description={goals[1].description}/>
        <CourseGoal tittle={goals[2].tittle} description={goals[2].description}/>
      </ul>
    </div>
  );
}

export default App;