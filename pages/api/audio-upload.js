import axios from 'axios';

export default async (req, res) => {
  try {
    
    const response = await axios.get('http://localhost:3005/usergame/get');

    
    const userData = response.data;

    const userId = userData.id; 
    
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


  