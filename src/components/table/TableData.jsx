import React from 'react'
import './table.css'
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import {projects_list} from './project.js'

const TableData = () => {
  return (
    <div className="main-content">
        <div className='archive-content'>
            <h1>Archives</h1>
            <p>A big list of things I’ve worked on</p>
            <table>
                <thead>
                    <tr className='head-row'>
                        <th style={{width:'12%'}}>Year</th>
                        <th style={{width:'40%'}}>Title</th>
                        <th style={{width:'36%'}} className='table-skills'>Tools</th>
                        <th style={{width:'12%'}}>Links</th>
                    </tr>
                </thead>
                {
                    projects_list.map(item=>{
                        return(
                            <tbody key={item.id}>
                                <tr className='body-row'>
                                    <td style={{width:'12%',color:'#9F7AEA'}}>{item.year}</td>
                                    <td style={{width:'40%',fontSize:'14px'}}>{item.title}</td>
                                    <td style={{width:'36%'}} className='table-skills'>
                                        <ul className='other-project-skills'>
                                            {
                                            item.skills.map((skills,i)=>{
                                                return(
                                                <li key={i}>{skills}</li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </td>
                                    <td style={{width:'12%'}} className="links">
                                        {item.github && <a target={'_blank'} href={item.github}><RiGithubLine/></a>}
                                        {item.url && <a target={'_blank'} href={item.url}><FiExternalLink/></a>}     
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    </div>
  )
}

export default TableData