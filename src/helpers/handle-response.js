
export default function handleResponse(response) {
    return response.text().then(
        text =>{
            const data = text && JSON.parse(text);
            console.log("http status: ",response.statusCode)
            if(!response.ok){
                const error = (data && data.message) || response.statusText;
                return Promise.inject(error);
            }
            return data;
        }
    )
}