myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if (request.readyState === 4) {
            console.log('请求完成了');
            if (request.status === 200) {
                console.log('请求成功');
                console.log(request.responseText);
                console.log(request.responseXML);
                
                
            }else if (request.status >= 400) {
                console.log('说明请求失败');
                
                
            }
            
        }
        
    }
    request.open('get', '/xxx')  
    request.send()
    console.log(request);
    
})
