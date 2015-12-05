function readAircraftForm() {
    var aircraftCodeInput = document.querySelector('#aircraftCode');
    var aircraftServiceInput = document.querySelector('#aircraftService');
  
    
    return {
        code: aircraftCodeInput.value,
        services: []
    };
}

/*function readCheckBirthdayMonth() {
    var monthCheckSelect = document.querySelector('#monthsForCheck');
    return monthCheckSelect.value;
}*/