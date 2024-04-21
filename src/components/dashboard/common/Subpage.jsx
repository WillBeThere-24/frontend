import React from 'react'
import { NavLink } from 'react-router-dom'

const Subpage = ({ title, icon, link, showText }) => {

    // let { path, url } = useRouteMatch()
    return (
        <li className='flex gap-3 text-wybt-primary'>
            <NavLink to={link} className='font-[500] flex gap-3'>
                <img src={icon} alt="" />{showText &&
                    <p className='hiden md:bloc'>{title}
                    </p>
                }
            </NavLink>
        </li>
    )
}

export default Subpage