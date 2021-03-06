//put the code here to grab array updates and set and get items and load them in

import {projects} from './todoProjects'

let proJSONHolder = '';

function storeProjects() {
    const projectJSON = JSON.stringify(projects)
    if (storageAvailable('localStorage')) {
        localStorage.setItem('storedProjects',projectJSON)
      }
      else {
        alert('Local storage is not avalible to save projects')
      }
      
}



function getProjects() {
    proJSONHolder = localStorage.getItem('storedProjects')
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
