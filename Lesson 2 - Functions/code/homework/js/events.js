window.addEventListener('DOMContentLoaded', function () {
    
    var selectedAircrafts = [];


    
    var addAircraftBtn = document.querySelector('#addAircraft');
    var aircraftTable = document.querySelector('#aircraftTable');
    var tbody = aircraftTable.getElementsByTagName('tbody');
    
    addAircraftBtn.addEventListener('click', function() {

        var newAircraft = readAircraftForm();
        var template = getAircraftRowTemplate(newAircraft);
        newAircraft = global.UAM.addAircraft(newAircraft.code);
    	var servicesChangedEvent = new CustomEvent("servicesChanged", 
    	{
			detail: {
				message: "Hello World!",
				time: new Date(),
			},
			bubbles: true,
			cancelable: true
		});

        var newTableRow = tbody[0].insertRow(0);
        newTableRow.innerHTML = template;
        
        var removeBtn = newTableRow.querySelector('.remove-aircraft');
        removeBtn.addEventListener('click', function() {
            var index = newTableRow.rowIndex;
            if (index >= 0) {
                global.UAM.removeAircraft(newAircraft);
            }
            
            aircraftTable.deleteRow(index);
        });

        var repairBtn = newTableRow.querySelector('.remove-aircraft');
        repairBtn.addEventListener('click', function() {
            var index = newTableRow.rowIndex;
            if (index >= 0) {
                global.UAM.removeAircraft(newAircraft);
            }
            
            aircraftTable.deleteRow(index);
        });

        var selectAircraftBtn = newTableRow.querySelector('.aircraft-select');
        selectAircraftBtn.addEventListener('click', function() {
            selectedAircrafts.push(newAircraft);
        });
        var servicesCell = newTableRow.querySelector('.services');
        servicesCell.addEventListener('servicesChanged', function(ev) {
            var templ = "";
            newAircraft.services.forEach(function(service) {
            	templ += getServiceTemplate(service);
            });
            servicesCell.innerHTML = templ;
            handleAddservice1(addAircraftServiceBtn);
        });
        var i = 1;
        function handleAddservice(element) {
        	var template = getAddServiceTemplate();
            var oldTemplate = element.parentNode.innerHTML;
            var parent = element.parentNode;
            parent.innerHTML = template;
            var newServiceBtn= parent.querySelector('.add-service-aircraft');
            newServiceBtn.addEventListener('click',function(){
            	var serviceName = parent.querySelector('.service-name').value;
            	var timeToExecute = parent.querySelector('.service-time').value;
            	global.UAM.addWorkToAircraft(newAircraft, serviceName, timeToExecute);
            	parent.innerHTML = oldTemplate;
            	servicesCell.dispatchEvent(servicesChangedEvent);
            };


        var addAircraftServiceBtn = newTableRow.querySelector('.service-aircraft');
        addAircraftServiceBtn.addEventListener('click', function() {
            handleAddservice(addAircraftServiceBtn);
        
    	});
	});
});
