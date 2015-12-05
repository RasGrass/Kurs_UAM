function getAircraftRowTemplate(aircraftObj) {
    return  "   <td><input type='checkbox' class='aircraft-select'></td>"+
	            "<td>" + aircraftObj.code + "</td>"
	            +"<td class='services'></td>"+
	           " <td> <a href='#'><i class='fa fa-times-circle remove remove-aircraft'> Remove</i></a>   </td>"+
	            "<td class ='add-service'> <a href='#' class = 'service-aircraft'><i class='fa fa-medkit remove'> Add service </i></a>   </td>"
}

function getServiceTemplate(service) {
	return "Service: " + service.name + "<br>" + "Time to execute: " + service.timeToExecute + "<a href='#' class='repair-aircraft'><i class='fa fa-wrench repair'> Repair</i> </a> <br>";
}

function getAddServiceTemplate(service) {
	return "<td><input type='text' placeholder='Service name' class ='service-name'><input type='number' placeholder='Time to execute' class ='service-time'><a class='service-aircraft' href='#'><i class='fa fa-medkit remove add-service-aircraft'> Add service </i></a></td>";
}