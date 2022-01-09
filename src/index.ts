// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInterface } from './dom-manipulation/domManipulation';
import { getResponse } from './networking/weather';
import Swal from 'sweetalert2'; 
// Add an event listener to the button
buttonClick?.addEventListener('click', async () => {
    try {
        let city = getCity(); 
        let weather = await getResponse(city); 
        console.log(weather); 
        updateInterface(weather); 
        buttonClick.disabled = false; 
    } catch (error) {
        buttonClick.disabled = false; 
        Swal.fire({
            title: 'Incorrect location', 
            text: 'The input location has not been found.',
            icon: 'error'
        })
    }
}); 
// Create an async function to call the API method


