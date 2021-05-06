
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
    All is good
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


