var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        var blob = this.response;
                        window.navigator.msSaveOrOpenBlob(blob, file_name_str);
                } else {
                        var url = URL.createObjectURL(this.response);
                        var downloadlink = $('<a />', {
                                'href': url,
                                'download': file_name_str,
                                'text': "click"
                        }).hide().appendTo("body")[0].click();
                }
        }
}
xhr.open('GET', url);
xhr.responseType = 'blob';
xhr.send();
