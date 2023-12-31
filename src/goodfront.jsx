import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Card, Flex} from 'antd';
import { useNavigate } from 'react-router-dom';

export function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobData, setJobData] = useState([]); // State to store fetched data
  const navigate = useNavigate();

  const handleNabigationToPage = () => {
    navigate("/peers")
  }
  const handleNabigationToPage2 = () => {
    navigate("/HelpfulInfo")
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_job_applications/')  // Replace with your Django server URL
        .then(response => {
            console.log(response.data.jobApplications)
            setJobData(response.data.job_applications)
            
        })
        .catch(error => console.error(error));
}, []);

  const filteredData = jobData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text ">Job Listings</h1>
        <div className="search-bar">
          <input
          className='search-bar-input'
            type="text"
            placeholder="Cauta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div> 
      <div className='container-box'>
        <button className="button-menu" onClick={handleNabigationToPage}>Peer</button>
        <button className="button-menu" onClick={handleNabigationToPage2}>Helpful Info</button>
      </div>
      <div className="listings-page">
        <div className="cards-container">
          {chunkedData.map((row, rowIndex) => (
            <Flex align='center' justify='center'>
              <Flex vertical gap={20}  align='center' justify='center'>
                {row.map((item, columnIndex) => (
                  <Card className="card text-white" title={(<h2 className='font-28 text-white font-arial'>{item.name}</h2>)} headStyle={{background: '#EE4135'}} bodyStyle={{background: '#F7941D'}} bordered={false} style={{width: '60%'}}>
                    <p className='text-orange font-21 align-left'>pozitia cautata: {item.open_position}</p>
                    <p className='text-orange font-21 align-left'>numarul de pozitii deschise:{item.num_open_positions}</p>
                    <p className='text-orange font-21 align-left'>numarul de ore de munca pe saptamana:{item.hours_per_week}</p>
                    <p className='text-orange font-21 align-left'>numarul de zile libere pe an:{item.days_off_per_year}</p>
                    <p className='text-orange font-21 align-left' style={{fontWeight:'bold'}}>Salariu: {item.salary_per_month} lei</p>
                    <p className='text-orange font-21 align-left'>{item.facilities}</p>
                  </Card>
                ))}
              </Flex>
            </Flex>
          ))}
        </div>
      </div>
    </div>
  );
}