fucntion httpRequest(url, callback) {
    this.request = new XMLHttpRequest();
    this.request.open("GET", url);
    
    var tempRequest = this.request;
    
    function reqReadyStateChange() {
        if (tempRequest.readyState == 4) {
            if (tempRequest.status == 200) {
                callback(tempRequest.responseText);
            } else {
                alert("An error occurred trying to contact the server.");
            }
        }
    }
    
    this.request.onreadystatechange = reqReadyStateChange;
}

httpRequest.prototype.send = function() {
    this.request.send(null);
};