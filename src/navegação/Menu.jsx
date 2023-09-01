import React from 'react'
import UseEffect from '../hooks/UseEffect'
import { Link } from 'react-router-dom'
import useState from '../hooks/Usestate'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="../hooks/Usestate">useState()</Link>
                </li>
                <li>
                    <Link to="/useEffect">useEffect()</Link>
                </li>
                <li>
                    <Link to="/useRef">useRef()</Link>
                </li>
                <li>
                    <Link to="/useMemo">useMemo()</Link>
                </li>
                <li>
                    <Link to="/useCallback">useCallback()</Link>
                </li>
                <li>
                    <Link to="/useContext">useContext()</Link>
                </li>
                <li>
                    <Link to="/useReducer">useReducer()</Link>
                </li>
                <li>
                    <Link to="/useCustom">useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu

