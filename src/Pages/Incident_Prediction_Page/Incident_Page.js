import React,{useEffect} from 'react'
import Header from '../../Components/Header'
import './IncidentPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import {data} from "../../data/data"

function Incident_Page() {
  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable();
  });
  })
  return (
    <div className='Container'>
      <Header />
      <h1 className='Heading mt-3 text-center'>Incident Resolution Prediction</h1>
      <div className='container mt-4'>
        <div className='input_box row align-items-center py-3 m-1 px-2'>
          <div className='col d-flex flex-column py-2'>
            <label className='px-2 py-1 text-secondary'>Short Description</label>
            <input placeholder='Enter Defect Description' type="text" className='input_input' />
          </div>
          <div className='col d-flex flex-column py-2'>
            <label className='px-2 py-1 text-secondary'>Number of Results</label>
            <input placeholder='Select Number' type="number" className='input_input' />
          </div>
          <div className='col d-flex justify-content-evenly mt-1 py-2'>
            <button className='input_button py-2 px-5 m-1'>Reset</button>
            <button className='input_button py-2 px-5 bg-danger m-1'>Search</button>
          </div>
        </div>
      </div>
      <div className='table-main-container'>
      <h4 className='table-heading'>Incident Description</h4>
      <div className="table-container">
          
          <table id="example" className="table-design ">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>SubCategory</th>
                    <th>Short Description</th>
                    <th>Close Notes</th>
                    <th>Resolve Code</th>
                </tr>
            </thead>
            <tbody className="table-body">
               {
                data.map((data) => {
                  return(
                    <tr>
                    <td>{data.Number}</td>
                    <td>{data.Subcategory}</td>
                    <td>{data.Short_Description}</td>
                    <td>{data.Close_Notes}</td>
                    <td>{data.Resolve_Code}</td>
                </tr>
                  )
                })
               } 
               
            </tbody>
            
        </table>
          
        </div>
      </div>
    </div>
  )
}

export default Incident_Page