
## Objective
Resource: [React Hook Doc](https://reactjs.org/docs/hooks-reference.html)  
The objective of this project is to better get familiarized with using various React hook features including

### Basic Hooks
1. **useState**:  
    Returns a stateful value and a function to update it 
    ``` 
    const [state, setState] = useState(initalState)
    ```
    <span style="color:#add8e6">setState</span> function identity is stable and won't change on re-renders (you can omit from *useEffect* and *useCallback* dependency list)  

    You can update state by passing a function to setState. The function will recieve the previous value and return an updated value. 
    ```
    <button onClick={()=>setCount(prevCount => prevCount + 1)}>+</button>
    ```  
    <span style="color:#add8e6">setState</span> doesn't automatically merge updated objects.  

    You can replicate this behavior by combining the function updater with an object spread syntax or through the use of <span style="color:#add8e6">useReducer</span>
    ```
    const [state, setState] = useState([])
    setState(prevState => {
      //alternatively you can use Object.assign
      return {...prevState, ...updatedValues}
    })
    ```  
    _**Lazy Initial State**_   
    State used during inital render can be assigned by passing in an **initialState**  
    If initial state is a result of an expensive calculation, you can provide a function which will only be executed during inital render
    ```
    const [state, setState] = useState(() => {
      const initalState = someExpensiveComputation(props)
      return initalState
    })
    ```  
    _**Bailing out of State Update**_   
    If State hook is updated with the same value, React will bail without rendering the children or firing effects. 

2. **useEffect**:  
    Accepts a function that contains imperative, possibly effectful code.  

    Don't have mutations, subscriptions, timers, logging, and other side effects inside main body of function components.  
    Instead use **useEffect** You can choose to fire effects only when certain values have changed.  

    _**Cleaning up an effect**_
    When effects create resources that need to be cleaned up  before component leaves the screen (like subscription or timer id), you can return a clean-up function within useEffect.  

    Cleanup function runs before the component is removed from the UI/re-renders to prevent memory leaks. A new subscription is created on every update.
    ```
    useEffect(() => {
      const subscription = props.source.subscribe()
      return () => {
        //Clean up subscription
        subscription.unsubscribe()
      }
    })
    ```
    _**Timing of Effects**_
    Function passed to **useEffect** fires AFTER layout and paint during a deffered event. 

    **useLayoutEffect** can be used when a DOM mutation that is visible to the user must be fired synchronously BEFORE the next paint so user doesn't perceive a visual inconsistency.   

    Though **useEffect** is deffered until after browser has been painted, it is guaranteed to file before any new render. React will flush a previous render's effect before starting a new update.  

    _**Conditionally firing an Effect**_
    Default behavior for effects is to fire the effect after every completed render. That way an effect is always recreate if one of its dependencies changes.   
    Although it may be an overkill, as we may not need a new subscription on every update (only if source prop has changed)  
    To implement this, you can pass in a second argument to **useEffect** that is the array of values that the effect is dependent on.  

    Every value referenced inside the effect function should also appear in the dependencies array. 
    ```
    useEffect(() => {
      const subscription = props.source.subscribe()
      return () => {
        //Clean up subscription
        subscription.unsubscribe()
      },
      [props.source]
    })
    ```  
    If you pass in an empty array([]) as a second argument, this tells React that your effect does not depend on _any_ values from props or states, so it never needs to re-return. This will function similar to that as componentDidMount/componentWillUnmount.

3. **useContext**:  

### Additional Hooks
4. **useReducer**  
5. **useCallback**  
6. **useMemo**  
7. **useRef**  
8. **useImperativeHandle**  
9. **useLayoutEffect**  
10. **useDebugValue**   


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\


