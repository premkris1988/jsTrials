var hmacModule = (function hmacModule(CryptoJS) {
    
    // Private variable to store current counter value.
    var current = 0;
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        },
        updateSecondaryEmail:function(updateData){
            var data = {user_id:9046,email:'premk@qburst.com'};
            var APPID = 'df9d7335-a724-4dce-94a2-1201c9a9c4ac';
            var APPKey ='GWvxfbMbM3MpMoGkVSDxW3hnkSMmU/3y2KqhcvYK0NI='; 
            var requestHttpMethod='POST';
            var nonce = uuidv4().replace(/-/g,'');
            var ms = new Date().getTime();
            var timeStamp = Math.floor(ms/1000);
            var params = JSON.stringify(data);
            var requestContentHash = CryptoJS.MD5(params);
            var requestContentBase64String = CryptoJS.enc.Base64.stringify(requestContentHash);            
            var url = encodeURIComponent('https://api.bananiapp.com/api/TenantSite/UpdateSecondaryEmail');
            var signatureRawData = APPID+requestHttpMethod+url.toLowerCase()+timeStamp+nonce+requestContentBase64String;
            var secret_key = CryptoJS.enc.Base64.parse(APPKey);
            var hmac = CryptoJS.HmacSHA256(signatureRawData, secret_key);
            var requestSignatureBase64String = CryptoJS.enc.Base64.stringify(hmac); 
            var hmac_header = APPID+':'+requestSignatureBase64String+':'+nonce+':'+timeStamp;
            var http = new XMLHttpRequest();
            var post_url = 'https://api.bananiapp.com/api/TenantSite/UpdateSecondaryEmail';
            http.open('POST', post_url, true);
            http.setRequestHeader('Content-type', 'application/json');
            http.setRequestHeader('hmacauth',hmac_header);
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                        alert(http.responseText);
                        }else{ alert(http.responseText);}
                    }
                http.send(params);
            },
            getTenureDetails:function(tenure_identifier){
                var APPID = 'df9d7335-a724-4dce-94a2-1201c9a9c4ac';
                var APPKey ='GWvxfbMbM3MpMoGkVSDxW3hnkSMmU/3y2KqhcvYK0NI='; 
                var data='';
                var requestHttpMethod='GET';
                var nonce = uuidv4().replace(/-/g,'');
                var ms = new Date().getTime();
                var timeStamp = Math.floor(ms/1000);
                var requestContentHash = CryptoJS.MD5(data);
                var requestContentBase64String = CryptoJS.enc.Base64.stringify(requestContentHash);            
                var url = encodeURIComponent('https://api.bananiapp.com/api/TenantSite/GetTenureDetails?tenure_identifier=eIhY5fM2');
                var signatureRawData = APPID+requestHttpMethod+url.toLowerCase()+timeStamp+nonce+requestContentBase64String;
                var secret_key = CryptoJS.enc.Base64.parse(APPKey);
                var hmac = CryptoJS.HmacSHA256(signatureRawData, secret_key);
                var requestSignatureBase64String = CryptoJS.enc.Base64.stringify(hmac); 
                var hmac_header = APPID+':'+requestSignatureBase64String+':'+nonce+':'+timeStamp;
                var http = new XMLHttpRequest();
                var get_url = 'https://api.bananiapp.com/api/TenantSite/GetTenureDetails?tenure_identifier=eIhY5fM2';
                http.open('GET', get_url, true);
                http.setRequestHeader('Content-type', 'application/json');
                http.setRequestHeader('hmacauth',hmac_header);
                http.onreadystatechange = function() {//Call a function when the state changes.
                    if(http.readyState == 4 && http.status == 200) {
                            console.log(http.responseText);
                            }else{ console.log(http.responseText);}
                        }
                    http.send();
                }
    };    
}(CryptoJS));