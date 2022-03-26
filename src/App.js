import logo from './logo.svg';
import './App.css';
import JishoAPI from 'unofficial-jisho-api';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';

const jisho = new JishoAPI();
let eng = "NULL";

jisho.searchForPhrase('kin曜日').then(result => {
  // console.log('Jisho Uri: ' + result.uri);
  console.log(result);

  console.log(result.data[0].japanese[0].reading)
  for (let i = 0; i < result.data[0].senses.length; ++i) {
    let entry = result.data[0].senses[i];
    console.log(entry.english_definitions[0])
    eng = entry.english_definitions[0];
  }
});


const word = (
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {eng}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
  </CardContent>
)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>  and save to reload.こんにちは！
          私はアマレです！初めまして。 
        </p>
        <Card variant="outlined"> {word}</Card>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
